"use client";
import { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Link from "next/link";

const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dnuo3aocw";
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default"; // Ajusta esto según tu preset
const WORDPRESS_URL =
  "https://backend.funkymonkeylodge.com/funkymonkeylodge.com";

function AddOfferForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const editId = searchParams?.get("edit");
  const isEditMode = !!editId;

  // Datos de la oferta
  const [offer, setOffer] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
    voucher: "",
    buttonText: "",
    buttonLink: "",
  });

  // Estados del formulario
  const [loading, setLoading] = useState(false);
  const [loadingOffer, setLoadingOffer] = useState(isEditMode);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [password, setPassword] = useState("");
  const fileInputRef = useRef(null);

  const REQUIRED_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "";

  // Agregar meta tags noindex para evitar indexación
  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "noindex, nofollow");

    let metaGooglebot = document.querySelector('meta[name="googlebot"]');
    if (!metaGooglebot) {
      metaGooglebot = document.createElement("meta");
      metaGooglebot.setAttribute("name", "googlebot");
      document.head.appendChild(metaGooglebot);
    }
    metaGooglebot.setAttribute("content", "noindex, nofollow");
  }, []);

  // Cargar oferta para editar
  useEffect(() => {
    if (isEditMode && editId) {
      loadOfferForEdit(editId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode, editId]);

  // Cargar oferta para editar
  const loadOfferForEdit = async (id) => {
    setLoadingOffer(true);
    setError(null);
    try {
      // Usar timestamp para evitar caché y obtener datos frescos
      const timestamp = Date.now();
      const response = await fetch(
        `${WORDPRESS_URL}/wp-json/offers/v1/list?t=${timestamp}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const offers = Array.isArray(data) ? data : [];
      const offerToEdit = offers.find((o) => o.id === id);

      if (offerToEdit) {
        setOffer(offerToEdit);
        if (offerToEdit.image) {
          setPreviewImage(offerToEdit.image);
        }
      } else {
        setError(
          `Oferta no encontrada. ID buscado: ${id}. Total ofertas: ${offers.length}`
        );
      }
    } catch (err) {
      setError("Error al cargar la oferta: " + err.message);
    } finally {
      setLoadingOffer(false);
    }
  };

  // Función para agregar/actualizar una oferta
  const handleSubmitOffer = async (e) => {
    e.preventDefault();

    // Validar contraseña
    if (password !== REQUIRED_PASSWORD) {
      setError("Contraseña incorrecta. Acceso denegado.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${WORDPRESS_URL}/wp-json/offers/v1/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          offer: {
            ...offer,
            id: isEditMode ? offer.id : offer.id || `offer_${Date.now()}`,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            `Error ${response.status}: Error al ${
              isEditMode ? "actualizar" : "agregar"
            } oferta`
        );
      }

      // Redirigir a /offers después de éxito
      router.push("/offers");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setOffer((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Función para subir imagen a Cloudinary
  const uploadToCloudinary = useCallback(async (file) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      formData.append("cloud_name", CLOUDINARY_CLOUD_NAME);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error al subir la imagen");
      }

      const data = await response.json();
      setOffer((prev) => ({
        ...prev,
        image: data.secure_url,
      }));
      setPreviewImage(data.secure_url);
    } catch (error) {
      setError("Error al subir la imagen: " + error.message);
    } finally {
      setUploading(false);
    }
  }, []);

  // Handlers para drag and drop
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        const file = files[0];
        if (file.type.startsWith("image/")) {
          uploadToCloudinary(file);
        } else {
          setError("Por favor, sube solo archivos de imagen");
        }
      }
    },
    [uploadToCloudinary]
  );

  const handleFileSelect = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (file && file.type.startsWith("image/")) {
        uploadToCloudinary(file);
      } else if (file) {
        setError("Por favor, sube solo archivos de imagen");
      }
    },
    [uploadToCloudinary]
  );

  // Actualizar preview cuando cambia la imagen (si es URL)
  useEffect(() => {
    if (offer.image && offer.image.startsWith("http")) {
      setPreviewImage(offer.image);
    }
  }, [offer.image]);

  if (loadingOffer) {
    return (
      <Layout title={isEditMode ? "Editar Oferta" : "Agregar Oferta"}>
        <div className="py-8 md:py-12 mt-[102px] mx-4 sm:mx-8 lg:mx-[70px]">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="spin-loader"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={isEditMode ? "Editar Oferta" : "Agregar Oferta"}>
      <div className="py-8 md:py-12 mt-[102px] mx-4 sm:mx-8 lg:mx-[70px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="myH2">
            {isEditMode ? "Editar Oferta" : "Agregar Oferta"}
          </h1>
          <Link href="/manage-offers">
            <Button variant="primary" height="54px" classNames="w-[200px]">
              Ver Todas las Ofertas
            </Button>
          </Link>
        </div>

        {/* Formulario de oferta */}
        <form onSubmit={handleSubmitOffer} className="space-y-6">
          <h2 className="subH2 mb-4">Datos de la Oferta</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Columna izquierda */}
            <div className="space-y-6">
              <div>
                <label className="block text-base font-bold mb-2">
                  Imagen de fondo *
                </label>
                {/* Área de drag and drop */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200 ${
                    isDragging
                      ? "border-green bg-green/10"
                      : "border-gray-300 bg-[#F6F8F6] hover:border-green hover:bg-green/5"
                  } ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={uploading}
                  />
                  {uploading ? (
                    <div className="flex flex-col items-center">
                      <div className="spin-loader mb-2"></div>
                      <p classNeame="body3 text-darkGrey">Subiendo imagen...</p>
                    </div>
                  ) : previewImage ? (
                    <div className="space-y-2">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="max-h-40 mx-auto rounded-lg object-cover"
                      />
                      <p className="body3 text-darkGrey">
                        Click o arrastra otra imagen para cambiar
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="body1 text-darkGrey">
                        Arrastra y suelta una imagen aquí
                      </p>
                      <p className="body3 text-darkGrey">
                        o haz clic para seleccionar
                      </p>
                    </div>
                  )}
                </div>
                {/* Campo de URL manual */}
                <input
                  type="text"
                  value={offer.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="O ingresa una URL directamente"
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F8F6] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green transition-all duration-200 mt-2"
                />
              </div>

              <div>
                <label className="block text-base font-bold mb-2">
                  Título *
                </label>
                <input
                  type="text"
                  value={offer.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F8F6] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-base font-bold mb-2">
                  Descripción *
                </label>
                <textarea
                  value={offer.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F8F6] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green transition-all duration-200 resize-none"
                />
              </div>
            </div>

            {/* Columna derecha */}
            <div className="space-y-6">
              <div>
                <label className="block text-base font-bold mb-2">
                  Voucher (opcional)
                </label>
                <input
                  type="text"
                  value={offer.voucher}
                  onChange={(e) => handleInputChange("voucher", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F8F6] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-base font-bold mb-2">
                  Texto del Botón *
                </label>
                <input
                  type="text"
                  value={offer.buttonText}
                  onChange={(e) =>
                    handleInputChange("buttonText", e.target.value)
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F8F6] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-base font-bold mb-2">
                  Link del Botón *
                </label>
                <input
                  type="text"
                  value={offer.buttonLink}
                  onChange={(e) =>
                    handleInputChange("buttonLink", e.target.value)
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F8F6] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Campo de contraseña */}
          <div>
            <label className="block text-base font-bold mb-2">
              Contraseña de publicación *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa la contraseña"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#F6F8F6] text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green transition-all duration-200"
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={loading || uploading}
              variant="primary"
              classNames="flex-1 lg:max-w-md"
              height="54px"
            >
              {loading
                ? "Enviando..."
                : isEditMode
                ? "Actualizar Oferta"
                : "Agregar Oferta"}
            </Button>
            {isEditMode && (
              <Link href="/manage-offers" className="flex-1 lg:max-w-md">
                <Button variant="secondary" classNames="w-full" height="54px">
                  Cancelar
                </Button>
              </Link>
            )}
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-8 p-6 rounded-lg bg-red-50 border border-red-200">
            <h3 className="subH2 text-red-600 mb-2">Error</h3>
            <p className="body3 text-red-700">{error}</p>
          </div>
        )}

        {/* Información del endpoint */}
      </div>
    </Layout>
  );
}

export default function AddOfferPage() {
  return (
    <Suspense
      fallback={
        <Layout title="Agregar Oferta">
          <div className="py-8 md:py-12 mt-[102px] mx-4 sm:mx-8 lg:mx-[70px]">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="spin-loader"></div>
            </div>
          </div>
        </Layout>
      }
    >
      <AddOfferForm />
    </Suspense>
  );
}
