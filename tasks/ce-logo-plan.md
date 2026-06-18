# Cloud Evolvers — new logo + favicon + training spacing fix

Repo: `spot-techno/cloud-evolvers` (cloudevolvers.com, Vite/React on Workers Static Assets)
Worktree: `~/worktrees/cloud-evolvers/feat-ce-logo-training-spacing-2026-06-18`
Branch: `feat/ce-logo-training-spacing-2026-06-18` ← master

## Goal (from Falk)
1. New logo for Cloud Evolvers, same recipe as the xevolve / spot-suite marks
   made today (in `spot-suite-design/product-logos/`).
2. Ship the new logo + favicon.
3. Fix alignment + excess whitespace on training detail pages
   (`/training/<slug>`, e.g. `/training/azure-fundamentals/`) and improve where
   possible — the detail template is shared so one fix covers all trainings.
4. PR → squash-merge.

## The recipe (from `spot-suite-design/scripts/generate-text-emblems.py`)
Lowercase monogram + trailing dot, flat, one accent + ink, text-only SVG:
- `<slug>-emblem.svg`  — transparent 512×512 text-mark (in-page use)
- `<slug>-favicon.svg` — 32×32 dark rounded tile + same monogram (browser tab)
- `<slug>-logo.svg` / `<slug>-wordmark.svg` — horizontal wordmark

xevolve  → `x`(cyan) `e`(ink) `.`(cyan), Outfit, dark Noir bg.
spot-suite → `s`(ink) `.`(cyan) (hub single-letter mark).

## Cloud Evolvers adaptation (brand-native, legibility-first)
Cloud Evolvers is a **light editorial** theme (NOT dark Cinematic Noir), so the
white second-letter from the xevolve recipe would be invisible on the light bg.
Adapt while keeping the exact mark recipe:

- Monogram: **`ce`** (Cloud Evolvers).
- Accent: **Cloud Evolvers green `#22c55e`** (the site's existing
  `<meta theme-color>` and the dominant brand signal in chrome/social).
- Ink: **navy `#1A2E3C`** (the brand logo navy = `--ed-ink` hsl(207 40% 17%)).
- Font: **`'Space Grotesk'`** (brand's loaded UI sans; closest analog to Outfit
  and legible at favicon size). Fallback chain: Inter → system.
- `ce`-emblem (transparent, for light header bg): green `c` + navy `e` + green `.`.
- `ce`-favicon (navy `#1A2E3C` tile): green `c` + white `e` + green `.`
  (mirrors the xevolve favicon: accent first letter, light second letter, dark
  tile so the mark stays legible on any browser-tab background).
- wordmark `logo.svg` (structured-data `logo`): `Cloud`(navy) `Evolvers`(green)
  `.`(green) — matches the on-page header wordmark ("Cloud Evolvers" in
  Instrument Serif) in spirit, accent on "Evolvers".

Files written (in `public/`):
- `favicon.svg`            (REPLACE old cloud/mountain mark)
- `cloudevolvers-mark.svg` (NEW emblem — used by `CloudEvolversMark`)
- `logo.svg`               (REPLACE old circular mark — JSON-LD `logo`)

## Wiring
- `src/components/editorial/CloudEvolversMark.tsx`: point `<img>` at
  `/cloudevolvers-mark.svg` (was `/cloudevolvers-logo-mountain.png`).
- `index.html`: favicon links already point to `/favicon.svg` ✓; JSON-LD `logo`
  already points to `/logo.svg` ✓. theme-color already `#22c55e` ✓.
  (Leave OG/social-card PNGs untouched — out of scope.)

## Training detail spacing/alignment fix (`TrainingDetailPage.tsx`)
Problems observed (shared by every `/training/<slug>`):
1. **Ragged widths / misalignment**: hero left column (~1.4fr, wide), stats `dl`
   capped at `max-w-xl` (576), body capped at `max-w-3xl` (768), lede at 680 →
   four different right-edges, nothing lines up with the body column.
2. **Excess vertical whitespace**: `Lede mt-7`, stats `mt-10 pt-8`, body
   `space-y-16 sm:space-y-20` (64–80px rhythm).

Fixes (surgical):
- Hero LEFT column: wrap content in `max-w-3xl` so heading + lede + stats
  right-align with the body content column.
- Stats `dl`: drop `max-w-xl` so the top rule spans the body width.
- `Lede mt-7` → `mt-5`; stats `mt-10 … pt-8` → `mt-8 … pt-6`.
- Body content rhythm `space-y-16 sm:space-y-20` → `space-y-12 sm:space-y-16`
  (in `TrainingDetailContent.tsx`).

## Verify
- `bun install` then `tsc -b --noCheck` (typecheck) + `vite build` (build).
- Eyeball the new favicon/mark SVGs render.
- Commit → push → PR → `gh pr merge --squash`.

## Out of scope (intentional)
- OG / social-card PNG refresh, `apple-touch-icon.png`, `logo-192.png`
  raster regen (favicon.svg is the canonical icon; raster favicons are legacy).
- Adding cloud-evolvers to `spot-suite-design/product-logos/` (Cloud Evolvers is
  not a Spot Suite product / Noir surface; recipe is replicated locally instead).
