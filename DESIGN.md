# Design

System name: **The Casebook**. A senior designer's annotated case file: pure white paper, warm-black ink, honey-amber marker annotations on a rigorous margin-rail grid. The human hand (drawn SVG marks) carries the warmth; the surface stays paper-white. Reference lane: technical-manual modernism (Aicher-era documentation), explicitly not minimal-cream portfolio, not editorial-serif, not terminal-mono.

## Color

OKLCH throughout, defined in `styles.css` `:root`. Strategy: **Committed** (amber carries identity), with one **Drenched** honey band per conversion moment.

- `--bg` oklch(1 0 0). Pure white, never tinted.
- `--ink` oklch(0.24 0.012 70). Warm black, body and headings (~16:1).
- `--ink-2` oklch(0.42 0.014 70). Secondary text (~8.5:1).
- `--ink-3` oklch(0.51 0.012 70). Captions and labels (~5.6:1, smallest text 12px).
- `--amber` oklch(0.66 0.13 70). Marks, ticks, drawn annotations, decorative strokes only (~3.1:1, never body text).
- `--amber-deep` oklch(0.49 0.115 70). Links, Fig. numbers, evidence numerals, hover accents (~6.2:1).
- `--honey` oklch(0.8 0.135 78). The contact band drench; ink text on it (~8.8:1).
- `--blueprint` oklch(0.42 0.09 262). Focus rings and ::selection only.
- `--surface` / `--line`: figure wells and hairline rules.

Rule of use: amber is a marker pen, not a paint bucket. One drawn annotation per page moment, not per section.

## Typography

Two families, loaded from Google Fonts as variable fonts:

- **Archivo** (wdth 80–125, wght 400–750): display, headings, UI, labels, numerals. Width axis is the voice: display at `font-stretch: 118%`, wordmark 122%, numerals 112–114%, labels 95%.
- **Source Serif 4** (opsz auto, 400/600 + italic): all long-form prose, ledes (italic on case pages), pull quotes, margin notes.

Scale tokens in `:root` (`--t-caption` 13px → `--t-display` clamp to 5.25rem). Body 17px/1.7 serif, max 62ch. Caps labels always get +0.07em tracking. Display letter-spacing never tighter than -0.02em.

## Layout

The **dossier grid** (`.sheet`): a centered core of rail (11.875rem) + gutter (3.5rem) + main column (41.25rem) at ≥68.75em, single column below. Children default to `main`; `.rail` holds section headings, figure captions, margin notes; `.span-core` and `.fig--wide` plates stretch across the whole core; the honey band is full-bleed.

- `.sub` (subgrid) is for children of a `.sheet`, never combined with `.sheet` on the same element (subgrid is invalid on a non-grid-item).
- Section grammar: small caps heading in the rail with a rotated amber tick (`.label`), sticky on desktop. No eyebrows above headings, no numbered markers except the one case-file contents sequence on the home page (deliberate, echoed by "Case 01 · 04" pagination).
- Figures: `.fig` with `Fig. N` captions; `.fig--railcap` puts the caption in the margin beside the figure on desktop. Mockups embed as scaled iframes of the `*Mockup.dc.html` files (fixed canvas sizes, scaled by `site.js` ResizeObserver via `--s`, `aspect-ratio` from `--ar`).
- Evidence stats (`.ev`): amber tick, amber-deep numeral, small label. Real numbers only.

## Components

- `.btn`: 2px-radius rectangle, Archivo 640. Hover lifts with a hard 4px amber offset shadow (print-registration feel); on honey the shadow is white. `.btn--ink` for primary.
- `.row`: home contents rows. Hover: surface bg, amber-deep title, drawn arrow appears.
- `.pull`: serif italic pull quote with amber quote glyphs and dash-prefixed attribution.
- `.q`: hanging amber quotation mark for inline community quotes. No side-stripe borders anywhere.
- Hand-drawn SVG marks: hero circle (draws on load), row/next arrows, asterisk doodle, margin-note arrow. Stroke amber, round caps, slightly irregular paths. Scarce by design.

## Motion

- Home hero: pure-CSS line-mask rise (0.75s, ease-out-expo, 90ms stagger) + circle draw-on (stroke-dashoffset, delayed 0.85s). No JS gating; static end-state is the default.
- Scroll: only figures, evidence items, and pull quotes reveal (`[data-reveal]`, IntersectionObserver, hidden state applied only under `html.js` + motion-ok). Never whole-section fades.
- Easing: `--ease` (quint) / `--ease-expo`. Micro-interactions 150–200ms. Full `prefers-reduced-motion` fallback: everything instant and visible.

## Pages

Flat static site, no build step: `index.html`, `about.html`, four case pages, `styles.css`, `site.js`. Old `.dc.html` page URLs are redirect stubs; `*Mockup.dc.html` + `support.js` are the interactive figure runtime and must keep their filenames.
