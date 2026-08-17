/**
 * Writes a distinct branded SVG card for every blog post.
 * Colors come from the Cloud Evolvers palette; geometry is hashed from the id
 * so two posts never share a thumbnail.
 */
import { mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";
import { blogPosts } from "../src/data/blog/index";

const OUT_DIR = join(import.meta.dir, "..", "public", "images", "blog");

const PALETTES = [
  { bg: "#293141", ink: "#f7f6f2", accent: "#74d6b4", mark: "#22c55e" },
  { bg: "#0f8a69", ink: "#f7f6f2", accent: "#d7f4ea", mark: "#ffffff" },
  { bg: "#f7f6f2", ink: "#293141", accent: "#0f8a69", mark: "#22c55e" },
  { bg: "#e8f6f0", ink: "#1A2E3C", accent: "#293141", mark: "#0f8a69" },
  { bg: "#74d6b4", ink: "#1A2E3C", accent: "#293141", mark: "#ffffff" },
  { bg: "#1A2E3C", ink: "#f7f6f2", accent: "#74d6b4", mark: "#22c55e" },
  { bg: "#f3eee4", ink: "#293141", accent: "#22c55e", mark: "#0f8a69" },
  { bg: "#12261f", ink: "#f7f6f2", accent: "#74d6b4", mark: "#22c55e" },
];

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function cardSvg(id: string): string {
  const h = hash(id);
  const palette = PALETTES[h % PALETTES.length];
  const layout = h % 4;
  const initial = (id.replace(/[^a-z]/gi, " ").trim().split(" ").pop() || id).slice(0, 1).toUpperCase();
  const label = id.replace(/-/g, " ").slice(0, 42);
  const deco =
    layout === 0
      ? `<circle cx="1280" cy="220" r="260" fill="${palette.accent}" fill-opacity="0.22"/><rect x="980" y="620" width="520" height="220" fill="${palette.mark}" fill-opacity="0.18"/>`
      : layout === 1
        ? `<polygon points="980,80 1600,80 1600,620" fill="${palette.accent}" fill-opacity="0.24"/><circle cx="240" cy="780" r="160" fill="${palette.mark}" fill-opacity="0.16"/>`
        : layout === 2
          ? `<rect x="1080" y="0" width="160" height="1000" fill="${palette.accent}" fill-opacity="0.22"/><rect x="1280" y="0" width="80" height="1000" fill="${palette.mark}" fill-opacity="0.18"/>`
          : `<circle cx="1400" cy="820" r="320" fill="${palette.accent}" fill-opacity="0.2"/><circle cx="1180" cy="180" r="90" fill="${palette.mark}" fill-opacity="0.28"/>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" role="img" aria-label="${escapeXml(id)}">
  <rect width="1600" height="1000" fill="${palette.bg}"/>
  ${deco}
  <text x="1180" y="620" font-family="'Instrument Serif', Georgia, serif" font-size="280" fill="${palette.ink}" fill-opacity="0.08">${escapeXml(initial)}</text>
  <text x="80" y="140" font-family="'Space Grotesk', system-ui, sans-serif" font-size="92" font-weight="800">
    <tspan fill="${palette.mark}">c</tspan><tspan fill="${palette.ink}">e</tspan><tspan fill="${palette.mark}">.</tspan>
  </text>
  <text x="80" y="860" font-family="'Space Grotesk', system-ui, sans-serif" font-size="28" font-weight="600" fill="${palette.ink}" fill-opacity="0.72" letter-spacing="0.08em">CLOUD EVOLVERS</text>
  <text x="80" y="920" font-family="'Instrument Serif', Georgia, serif" font-size="36" fill="${palette.ink}">${escapeXml(label)}</text>
</svg>
`;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const ids = blogPosts.map((post) => post.id);
const unique = new Set(ids);
if (unique.size !== ids.length) {
  throw new Error("Duplicate blog post ids; thumbnails would collide.");
}

for (const id of ids) {
  writeFileSync(join(OUT_DIR, `${id}.svg`), cardSvg(id), "utf8");
}

console.log(`Wrote ${ids.length} blog cards to public/images/blog/`);
