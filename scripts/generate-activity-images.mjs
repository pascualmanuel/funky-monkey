import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Local, responsive derivatives only; no image service is needed at runtime.
const sources = [
  "activities/activity-8.webp", "activities/activity-1.webp",
  "activities/activity-2.webp", "activities/activity-9.webp",
  "retreats/retreats.webp", "retreats/retreats-2.webp", "retreats/retreats-3.webp",
];
const output = new URL("../public/assets/activities/landing/", import.meta.url);
const heroes = new Set(["activity-8", "activity-1", "activity-9", "retreats"]);
await mkdir(output, { recursive: true });
for (const source of sources) {
  const input = fileURLToPath(new URL(`../src/assets/${source}`, import.meta.url));
  const { width } = await sharp(input).metadata();
  const widths = [...new Set([480, 800, 1280, 1600].filter((value) => value < width).concat(Math.min(width, 1600)))];
  const name = source.split("/").pop().replace(".webp", "");
  for (const size of widths) {
    await sharp(input).resize(size).webp({ quality: 82 }).toFile(fileURLToPath(new URL(`${name}-${size}w.webp`, output)));
  }
  // Portrait crops keep mobile heroes sharp without downloading a large
  // landscape file only to discard most of it with object-fit: cover.
  if (heroes.has(name)) {
    for (const size of [480, 800]) {
      await sharp(input).resize(size, Math.round(size * 1.65), { fit: "cover" }).webp({ quality: 82 })
        .toFile(fileURLToPath(new URL(`${name}-hero-${size}w.webp`, output)));
    }
  }
}
console.log("Activity images generated from local assets.");
