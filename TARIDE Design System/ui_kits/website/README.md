# UI kit · TARIDE website

A single-page concrete application of the design system to the landing-page brief (§8 of the visual identity brief). All eight sections are present and responsive:

1. **Hero** — proposition + sub-line + CTA + verified-credential pill
2. **The problem** — three numeric data points, each with a citation
3. **The principle** — *"Pseudonymity by default. Identification by choice."*
4. **How it works** — the five protocol layers, with the `taride_architecture.svg` diagram embedded inline
5. **Why a foundation** — two-column principled statement
6. **Where we stand** — roadmap table from Q2·26 through Q2·27
7. **What we ask** — six audience-specific brief cards
8. **Footer** — foundation details, CC BY 4.0, GitHub link, contact

## Architecture

Every colour, spacing, type-size and motion value is pulled from `../../colors_and_type.css` — there are no hard-coded values in the file. Swapping tokens cascades through the page with no source-code edits.

Responsive at **640 / 900 / 1200**:
- ≤640: nav drops, hero buttons stack full-width, table tightens.
- 641–900: nav stays, multi-column blocks collapse to single column, layers go 4-col → 2-col.
- ≥901: full layout, 1200px max container.

Display type scales fluidly between breakpoints via `clamp()`.

## Not factored into components — yet

The sections are inline in `index.html` rather than extracted into JSX/Astro components. That's intentional until the framework is chosen (the brief mentions Astro, 11ty, or Next.js static as candidates) — extraction without a framework decision adds churn.

When you commit to a framework, the natural component breakdown is: `Header`, `Hero`, `StatTrio`, `Principle`, `LayerTable`, `RoadmapTable`, `AskCard`, `Footer`. Each section in the current file maps 1:1.
