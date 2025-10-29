const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
const path = require("path");

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

const IMAGE_PREFIX = "carrete-hotel-";

async function fetchCloudinaryImages() {
  try {
    console.log(`🔍 Buscando imágenes que empiecen con: ${IMAGE_PREFIX}...`);

    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: IMAGE_PREFIX,
      max_results: 500,
      resource_type: "image",
    });

    if (!result.resources || result.resources.length === 0) {
      console.log("❌ No se encontraron imágenes en esta carpeta");
      return;
    }

    console.log(`✅ Se encontraron ${result.resources.length} imágenes`);

    // Transformar las imágenes al formato que necesita el carousel
    const images = result.resources.map((resource, index) => {
      // Determinar el tamaño basado en la proporción de la imagen
      const aspectRatio = resource.width / resource.height;

      let size;
      if (aspectRatio > 1.3) {
        // Más ancha que alta (horizontal) → large
        size = "large";
      } else if (aspectRatio < 0.7) {
        // Más alta que ancha (vertical) → small
        size = "small";
      } else {
        // Proporciones equilibradas → medium
        size = "medium";
      }

      // Construir URL optimizada con transformaciones de Cloudinary
      // Mejor calidad: q_90, anchos más grandes, sin crop limit
      const optimizedUrl = cloudinary.url(resource.public_id, {
        fetch_format: "auto",
        quality: 90, // Calidad alta (antes era "auto" que bajaba mucho)
        width: size === "large" ? 2048 : size === "medium" ? 1400 : 800, // Anchos más grandes
      });

      return {
        src: optimizedUrl,
        publicId: resource.public_id,
        alt: resource.public_id.split("/").pop().replace(/[-_]/g, " "),
        size: size,
        aspectRatio: aspectRatio.toFixed(2), // Guardar el aspect ratio para debug
        width: resource.width,
        height: resource.height,
        format: resource.format,
      };
    });

    // Guardar en public/cloudinary-images.json
    const outputPath = path.join(
      __dirname,
      "..",
      "public",
      "cloudinary-images.json"
    );
    fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));

    console.log(`✅ Archivo generado exitosamente: ${outputPath}`);
    console.log(`📊 Total de imágenes: ${images.length}`);
    console.log("\n📋 Imágenes encontradas:");
    images.forEach((img, i) => {
      console.log(
        `   ${i + 1}. ${img.publicId} (${img.size}) - aspect ratio: ${
          img.aspectRatio
        }`
      );
    });
  } catch (error) {
    console.error("❌ Error al obtener imágenes de Cloudinary:", error.message);
    if (error.error && error.error.message) {
      console.error("   Detalles:", error.error.message);
    }
  }
}

fetchCloudinaryImages();
