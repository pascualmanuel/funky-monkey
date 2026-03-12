/**
 * Makes main stylesheet non-render-blocking by loading it async.
 * Run after `next build` (static export). Saves ~330ms on LCP (mobile).
 * Modifies HTML in out/ to add media="print" + onload so CSS doesn't block first paint.
 */

const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "out");

function processFile(filePath) {
  let html = fs.readFileSync(filePath, "utf8");
  let changed = false;

  // Match Next.js stylesheet link: <link rel="stylesheet" href="/_next/static/css/...">
  const linkRegex =
    /<link\s+rel="stylesheet"[^>]+href="(\/_next\/static\/css\/[^"]+)"([^>]*)>/g;

  html = html.replace(linkRegex, (match, href, rest) => {
    if (rest.includes("media=") || rest.includes("onload=")) return match;
    changed = true;
    return `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"${rest}><noscript><link rel="stylesheet" href="${href}"></noscript>`;
  });

  if (changed) {
    fs.writeFileSync(filePath, html, "utf8");
    return true;
  }
  return false;
}

function walkDir(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      count += walkDir(full);
    } else if (e.name.endsWith(".html")) {
      if (processFile(full)) count++;
    }
  }
  return count;
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("❌ out/ not found. Run `npm run build` first.");
  process.exit(1);
}

const n = walkDir(OUT_DIR);
console.log("✅ Deferred CSS in", n, "HTML file(s).");
if (n === 0) {
  console.log("   (No matching stylesheet links found; build output may have changed.)");
}
