# TARIDE Design System

[github.com/TARIDE-org/design-system](https://github.com/TARIDE-org/design-system)

**Status:** Direction A locked. Round 3 in progress — component-state matrix shipped, WCAG audit shipped, responsive landing-page shipped. Working through fonts + page surfaces next.

**Locked decisions (18 May 2026):**
- Visual direction: **A · Foundation Document** (warm paper, IBM Plex, blue wins)
- Locale: **UK English only** — not a consumer surface
- Photography: **none** — typographic and diagrammatic only
- Modes: **light primary + dark first-class equal** — verified zero-fail WCAG 2.2 AA in both
- **Yellow scope: Option A** — yellow is reserved for the verified-credential pill and the framed credential card. Nothing else in the system uses yellow.
- **Diagrams retuned in place** — the 11 SVGs in `assets/diagrams/` have been recoloured from the original cool teal-navy and category palettes to Direction A. Original sources remain at <https://github.com/TARIDE-org/docs/tree/main/images>.
- **Responsive breakpoints: 640 / 900 / 1200** — see `preview/spacing-breakpoints.html` and `ui_kits/website/index.html` (`@media` queries at end of `<style>`).

---

## What TARIDE is

**TARIDE** — Trust and Authentication Registry for Integrity in Digital Europe — is a Dutch non-profit foundation establishing an open European protocol for verified digital communications. The principle is one line: **pseudonymity by default, identification by choice.**

The protocol lets anyone verify that a phone call, email, or message comes from a registered source, without requiring or revealing the source's identity. It is positioned as European trust infrastructure — aligned with eIDAS 2.0 and EBSI, governed by a multi-stakeholder foundation rather than a commercial entity.

**Phase.** The foundation was registered in May 2026. The protocol is pre-specification: the public foundation document is at **v0.51** and describes the vision; the technical spec is the next phase. The foundation is currently seeking critical feedback from telecom providers, security researchers, privacy advocates, the DID/SSI community, and EU policy stakeholders.

**Audience for the website**, in rough priority order: telecom operators & industry bodies (KPN, Odido, Vodafone, COIN, GSMA), then security researchers and the DID/SSI community, then EU policy stakeholders, then journalists and informed public, then app developers as potential integrators. **Not** consumer end-users — that audience is served by integrating applications like Calmido.

## Sources used to build this system

- `uploads/Taride_logo_400x200_blue.svg` — wordmark in `#10100B`, brackets in `#0077DA`
- `uploads/Taride_logo_400x200_yellow.svg` — wordmark in `#10100B`, brackets in `#F4CC5B`
- Brief: "TARIDE — Visual Identity & Design System Brief, May 2026" (pasted in chat)
- Public references named in the brief: <https://taride.org> (placeholder GitHub Page) and <https://github.com/TARIDE-org/docs>
- **Foundation document diagrams**: 11 SVGs imported from <https://github.com/TARIDE-org/docs/tree/main/images> into `assets/diagrams/` — these define the existing diagram visual style (cool teal-navy palette, Arial sans, drop shadows, 3-4px radii, dashed-line for optional, solid for mandatory). They predate Direction A's palette.

---

## Index

```
README.md                          you are here
SKILL.md                           agent-skill manifest (Claude Code compatible)
colors_and_type.css                tokens — palette, type scale, spacing, radii
assets/
  taride-logo-*.svg                six logo lockups (blue, yellow, onDark, mono-black, mono-white)
  bracket-*.svg                    motif primitives (top-right, bottom-left, frame)
  diagrams/                        11 SVG diagrams imported from TARIDE-org/docs
    taride_terminology.svg         conceptual anchor — holder/DID/instance/credential
    taride_credential_chain.svg    mandatory vs optional credential layers
    taride_architecture.svg        protocol architecture
    taride_credential_types.svg    credential type matrix
    taride_application_registration.svg
    taride_number_lifecycle.svg
    taride_organisation_affiliation.svg
    taride_roadmap.svg
    taride_simswap.svg             threat-model · SIM swap
    taride_stakeholders.svg
    taride_usecase_flow.svg
directions/
  directions.html                  round-1 deliverable: 3 visual directions on canvas
  direction-a.jsx                  A · Foundation Document (the winner)
  direction-b.jsx                  B · Field Manual (archived for reference)
  direction-c.jsx                  C · Open Spec (archived for reference)
  primitives.jsx                   shared TarideLogo, Bracket*, Swatch, Sheet
  app.jsx                          DesignCanvas composition
discussions/
  yellow-scope.html                three options for where yellow lives (Option A locked)
accessibility/
  wcag-audit.html                  auto-computed WCAG 2.2 audit, zero fails both modes
fonts/                             self-hosted IBM Plex (OFL · no Google Fonts)
  IBMPlexSans-VF.woff2             variable Roman, 100–700
  IBMPlexSans-Italic-VF.woff2      variable Italic, 100–700
  IBMPlexSerif-VF.woff2            variable Roman, 100–700
  IBMPlexSerif-Italic-VF.woff2     variable Italic, 100–700
  IBMPlexMono-Regular.woff2        400 roman
  IBMPlexMono-Medium.woff2         500 roman
  IBMPlexMono-Italic.woff2         400 italic
  LICENSE.txt                      SIL OFL 1.1
preview/                           cards rendered into the Design System tab
  components-matrix.html           every component × every state, light/dark toggle
  spacing-breakpoints.html         responsive breakpoint wireframes
  ...                              token specimens, brand cards, diagrams, etc.
ui_kits/website/
  index.html                       responsive landing page · Direction A applied
  README.md                        section-by-section notes
design-canvas.jsx                  starter component (vendored)
```

---

## Content fundamentals

The voice is already in place from the foundation document and public announcement; the design system has to look the way that voice sounds.

**Casing.** Sentence case for headings and UI ("Why a foundation", not "Why A Foundation"). Title Case is reserved for proper nouns: TARIDE, eIDAS 2.0, EBSI, Pseudonymous Caller-ID. Acronyms stay uppercase.

**Locale: UK English only.** *Organisation* not organization. *Centralised* not centralized. *Recognise* not recognize. *Behaviour* not behavior. *Colour* not color (in body copy; CSS values stay `color`). *Defence* not defense. *Whilst* is acceptable but *while* is fine too. Dates as `18 May 2026`, not `5/18/26`. Numbers use `,` as thousands separator (`€1,800,000`), `.` as decimal (`3.4×`). Quotation marks are double curly (`"…"`) for prose, straight (`"…"`) for code. The Dutch market is in scope but is reached through UK English, not Dutch — this is infrastructure for institutions, not consumers.

**Person.** Mostly third-person and impersonal ("the protocol", "the foundation", "anyone can verify"). First-person plural ("we") appears sparingly when the foundation speaks about its own choices ("we have chosen pseudonymity-first"). Avoid second-person ("you") — this is infrastructure for institutions to integrate, not a product to sign up for.

**No marketing speak.** No "revolutionizing", no "next-generation", no "seamless". No exclamation marks. State the thing and stop.

**Inverted-default register.** TARIDE's voice flips the conventional framing calmly: *"Verification is the default. Identification is optional."* The visual treatment of this kind of line should mirror its rhythm — short, declarative, two beats.

**Honest about gaps.** The site says "open questions", not "future roadmap". It cites figures with sources rather than asserting impressions. "Sub-500ms protocol lookups" is good copy; "lightning-fast" is not.

**Numbers and citations over claims.** Where TARIDE makes a quantitative statement, it gets a citation footnote (`¹`) in `--font-mono` linking to the source. Stats without sources don't appear.

**No emoji.** None. Not in copy, not in UI, not as icons. The only graphic primitives are typographic punctuation (`§`, `↗`, `↳`, `·`, `[`, `]`) and the bracket motif.

**Unicode used calmly.** `→` for forward, `↗` for external links, `↳` for outputs/replies, `·` for inline separators, `§` for section references, `¶` only in long-form, `—` (em dash) for asides. No decorative unicode.

**Acknowledges precedents.** Signal, Mozilla, Let's Encrypt, Ecosia and EBSI may be named directly in body copy. Anti-references (Truecaller, Hiya) may also be named, calmly, where contrasting positioning matters.

### Voice samples

- ✓ "An open European protocol for verified digital communications."
- ✓ "Pseudonymity by default. Identification by choice."
- ✓ "Sub-500ms protocol lookups¹."
- ✓ "The foundation was registered in May 2026."
- ✗ "Revolutionizing how Europe communicates 🚀"
- ✗ "The future of trust is here!"
- ✗ "Join thousands of users already verified"

---

## Visual foundations

The visuals follow from the voice: plain, sober, document-like; warm enough to read as civic rather than institutional; restrained enough that any single element carries weight.

### Color

A near-black ink (`#10100B`) on warm off-white paper (`#F7F4ED`) does the heavy lifting. A single trusted blue (`#0A55C7`) carries links and primary actions. Yellow (`#E8B43A`) is *reserved* for the verified-credential state and never used decoratively — the asymmetry mirrors the protocol (verification is everywhere, identification is rare).

Both light and dark mode are first-class. Light is the default; dark swaps semantic tokens (`--fg`, `--bg`, `--accent`) and leaves everything else identical.

### Type

**IBM Plex Serif** (display) + **IBM Plex Sans** (body) + **IBM Plex Mono** (code, eyebrows, captions, technical labels). One family, three voices: serif gravity for headlines, sans clarity for prose, mono honesty for protocol detail. **Self-hosted** under `fonts/` — variable-axis files for Sans and Serif (one woff2 per axis covers 100–700), two static files for Mono. Total weight ~875 KB across 7 files. SIL Open Font License — see `fonts/LICENSE.txt`. **No Google Fonts, no third-party font CDN** per the brief's no-phone-home constraint.

Display sizes (84/48/32px) lean large and light-weight. Body is 17/26. Mono captions are always uppercase, `0.12em` tracked, the color of the active accent — they look like footnote markers in a research document.

### Spacing & rhythm

4-based scale (`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`). Generous vertical rhythm; tight typographic kerning. Section gaps default to `--sp-9` (96px), content blocks to `--sp-7` (48px). The page should breathe like a printed document, not buzz like a SaaS marketing site.

### Background

Solid warm paper. No images behind text. No gradients. No textures, repeating patterns, or grain. The only "background treatment" is paper-vs-paper-alt (`#F7F4ED` vs `#EFEBE0`) used to separate raised content blocks like code samples from the body canvas. Full-bleed imagery is reserved for the hero (when supplied) and stays photographic, not illustrative.

### Borders, dividers, rules

A 1px rule in `--rule` (`#D8D2C3`) is the primary divider. Used between sections, beneath navigation, around tables. Heavier than the typical SaaS-grey because the page is paper, not glass.

### Shadows & elevation

**Elevation is rule-first, shadow-rare.** `--elev-1` is a single 1px bottom rule; `--elev-2` adds the faintest 1-2px shadow for sticky chrome; `--elev-3` (modal/popover) is the only shadow with any blur, and it stays at 8% opacity. Civic documents don't float.

### Corner radii

Almost square. `--radius-xs: 2px` is the default (buttons, badges); `--radius-md: 6px` is the most-rounded any surface gets (large cards, modal). `--radius-pill` exists for the verified-credential dot indicator and nothing else. No fully-rounded buttons; no rounded code blocks.

### Animation & motion

**Restrained.** Two durations: `--motion-fast` (120ms) for state changes and `--motion-default` (180ms) for layout shifts and page transitions. One easing curve: `cubic-bezier(0.4, 0.0, 0.2, 1)` — Material's "standard" curve, calm and authoritative. No bounces, no springs, no parallax, no scroll-jacked reveals. Hover transitions are opacity/color only, never scale.

### Interaction states

- **Hover.** Color shift only — links and buttons darken (`--signal-blue` → `--signal-blue-deep`). Cards may add `--elev-2`. No transforms.
- **Press/active.** Same as hover; no `scale()` — buttons are square slabs.
- **Focus.** Always visible. `--focus-ring` is a 3px tinted halo + 1.5px solid outline in the accent color. Browser default is overridden everywhere; the brief calls this out.
- **Disabled.** 50% opacity, `cursor: not-allowed`. No alternate fill.

### Transparency & blur

Not used for surfaces. The only translucent values are the focus-ring tint (`--accent-tint`, ~10% alpha) and the verified-credential indicator's halo. No glassmorphism, no `backdrop-filter`.

### Cards

A card is paper-alt (`--bg-raised`) on paper (`--bg`), with a 1px rule on `--border`, `--radius-md` corners, and no shadow at rest. Hover adds `--elev-2`. Cards never carry a colored left border.

### The bracket motif

The two brackets from the logo extend into the system as **section markers**:

- A small bottom-left bracket (the same shape as in the logo, in `--font-mono` size or smaller) prefixes every monospace eyebrow label.
- A top-rule on `--accent` extends across the top of major section openers and pairs with a mono caption underneath ("§3 · how it works").
- In Direction B these become four-corner registration marks around content blocks; in Direction C they become CLI prompt characters. The motif scales.

The brackets are also the canonical visual for the "verified credential" component: an asymmetric frame around the issuer + scope + chain, in `--verified` color, mirroring the logo's framing of the wordmark.

### Layout rules

A 12-column grid at desktop, 8-column at tablet, 4-column at mobile, all on a 1200px max-width container. Prose stays in a 680px reading column (`--container-reading`). Code samples and diagrams may break out to the full 1200. The hero may go full-bleed. The footer is always full-bleed on `--bg-raised`.

### Image vibe

Cool / neutral / mid-contrast / no grain. Reference photography would be European urban infrastructure (telecom poles, fibre, data centres) shot in flat daylight, not warm sunset. Avoid: stock conference handshakes, "diverse team in a meeting", abstract gradient blobs, hand-drawn illustrations of any kind.

---

## Iconography

**TARIDE does not use an icon font or a decorative icon set.** The brief is explicit that the brand should not read as a SaaS product, and rich iconography is the strongest tell of one.

What we use instead:

1. **Typographic punctuation.** `§ · ↗ ↳ → ¶ — [ ]` carry the weight that icons normally would. Section markers (§), external-link arrows (↗), output indicators (↳), and the bracket motif itself.
2. **The bracket motif** as the brand's one decorative primitive — `assets/bracket-topright.svg`, `assets/bracket-bottomleft.svg`, `assets/bracket-frame.svg`. Stroked in `currentColor` so they pick up `--fg`, `--accent`, or `--verified` from context.
3. **A tiny utility set from [Lucide](https://lucide.dev)** loaded via CDN (`https://unpkg.com/lucide@latest`) for the unavoidable nav glyphs only: `arrow-up-right`, `chevron-right`, `external-link`, `check`, `x`, `menu`, `copy`, `download`, `github`. Stroke: 1.5px. Size: 16px (inline) or 20px (standalone). Color: `currentColor`.
4. **The verified-credential dot.** A 8px circle in `--verified` with a 3px halo of `--verified-bg`. This is the only "icon" with semantic weight and it has its own component.

**No emoji.** Anywhere.

**Substitution flag.** Lucide was chosen because it matches the 1.5px line-weight, square-corner aesthetic of the wordmark and is open-source / self-hostable. If you'd prefer Tabler, Phosphor (line, 1.5wt), or Heroicons (outline 24), the swap is one CSS-variable change.

---

## Open questions to TARIDE

These are the things I want your decision on before expanding the system (§12 of your brief):

1. ~~Which direction?~~ **A · Foundation Document.** Locked.
2. ~~**Yellow scope.**~~ **Option A locked** — yellow lives only on the verified-credential pill and framed credential card.
3. ~~**Diagram palette alignment.**~~ **Retuned** — all 11 diagrams in `assets/diagrams/` now use the Direction A palette (paper / ink / signal-blue / stone). Yellow does not appear in any diagram, including the original "Rule:" annotations, which are now blue.
4. ~~Photography.~~ **None.** Locked.
5. ~~English / Dutch.~~ **UK English only.** Locked.

No open decisions remain. Round 3 deliverables in flight: full component-state matrix, mobile/tablet on the landing page, self-hosted `.woff2` files, WCAG audit.

---

## Reading order

If you only read one thing: `directions/directions.html` — the canvas with the three visual directions, palette, type, logo lockups, hero block and a 150-word rationale for each.
