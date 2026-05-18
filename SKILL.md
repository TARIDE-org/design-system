---
name: taride-design
description: Use this skill to generate well-branded interfaces and assets for TARIDE — the Trust and Authentication Registry for Integrity in Digital Europe foundation — either for production or throwaway prototypes / mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in the TARIDE visual identity.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `directions/`, `ui_kits/`).

`README.md` is the primary reference — it carries the brand context, content fundamentals (voice, casing, register), visual foundations (color, type, spacing, motion, the bracket motif), and iconography guidelines. `colors_and_type.css` is the token sheet — pull it into any artifact and the rest of the system follows.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of `assets/` and write static HTML files for the user to view. Use `IBM Plex Serif / Sans / Mono` — the self-hosted woff2 files live in `fonts/` and are wired into `@font-face` rules at the top of `colors_and_type.css`. **Do not load fonts from Google Fonts or any third-party CDN** — the brief explicitly forbids it (no-phone-home).

**Critical brand rules** — do not violate these:

- **Voice is plain-spoken English (UK).** No marketing speak, no exclamation marks, no "next-generation". State the thing and stop. Honest about gaps ("open questions", not "future roadmap"). Use UK spelling: *organisation, centralised, recognise, behaviour, colour, defence.*
- **No emoji.** Anywhere.
- **Yellow is reserved** for the verified-credential state. Do not use it decoratively, do not use it for warnings, do not use it as a secondary brand accent. Blue (`--accent`) carries everything else.
- **No gradients, no glassmorphism, no decorative imagery.** Solid paper, near-black ink, single blue accent. The brief explicitly anti-references web3 / crypto / SaaS aesthetics.
- **Square corners.** `--radius-xs` (2px) is the default. Pill radius is reserved for the verified-credential dot indicator.
- **No emoji icons. No rich icon set.** Typographic punctuation (`§ · ↗ ↳ → [ ]`) does most of the work; a tiny set of Lucide line icons (1.5px stroke) carries the rest.
- **The bracket motif** from the logo extends as section markers, eyebrow prefixes, and the frame around the verified-credential component. Never treat the brackets as decoration alone.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
