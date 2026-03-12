/**
 * Generates responsive WebP images for the Home Grid (400w, 800w, 1200w).
 * Run before build so mobile/tablet get appropriately sized images (~1.5MB savings on mobile).
 * Usage: node scripts/generate-home-grid-images.js
 */

const fs = require("fs");
const path = require("path");

const SOURCE_DIR = path.join(__dirname, "..", "src", "assets", "home");
const OUT_DIR = path.join(__dirname, "..", "public", "assets", "home");
const WIDTHS = [400, 800, 1200];

const GRID_IMAGES = [
  "rooms.webp",
  "activities.webp",
  "location.webp",
  "offer-2.webp",
  "retreats.webp",
  "the-hotel.webp",
];

async function main() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.error(
      "❌ sharp is required. Run: npm install --save-dev sharp"
    );
    process.exit(1);
  }

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error("❌ Source dir not found:", SOURCE_DIR);
    process.exit(1);
  }

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  for (const file of GRID_IMAGES) {
    const srcPath = path.join(SOURCE_DIR, file);
    if (!fs.existsSync(srcPath)) {
      console.warn("⚠️ Skip (not found):", file);
      continue;
    }

    const base = path.basename(file, ".webp");
    for (const w of WIDTHS) {
      const outName = `${base}-${w}w.webp`;
      const outPath = path.join(OUT_DIR, outName);
      try {
        await sharp(srcPath)
          .resize(w, null, { withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(outPath);
        console.log("  ✓", outName);
      } catch (err) {
        console.error("  ✗", outName, err.message);
      }
    }
  }

  console.log("✅ Home grid responsive images written to public/assets/home/");
}

main();
