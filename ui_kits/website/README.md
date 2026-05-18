# UI kit · TARIDE website (Direction A applied)

A single-page concrete application of **Direction A** (Foundation Document) to the landing-page brief from §8 of the visual identity brief. All eight sections are present:

1. Hero — proposition + sub-line + CTA + verified-credential pill
2. The problem — three numeric data points, each with a citation
3. The principle — "Pseudonymity by default. Identification by choice." as the conceptual anchor
4. How it works — the five protocol layers as a 4-column table with status
5. Why a foundation — two-column principled statement
6. Where we stand — roadmap table from Q2·26 through Q2·27
7. What we ask — six audience-specific brief cards
8. Footer — foundation details, CC BY 4.0, GitHub link, contact

## Why this isn't a `.jsx` UI kit

The TARIDE site is a long-form position paper, not a SaaS dashboard. There's no app shell to recreate, no logged-in state, no navigation graph to mock. Components are page-section-shaped — `Hero`, `StatTrio`, `Principle`, `LayerTable`, `RoadmapTable`, `AskCard`. They're inline in `index.html` because at this fidelity it would be premature to extract them: the brief is round 1, and any extraction should follow the framework decision (the brief mentions Astro / 11ty / Next.js static as candidates).

Once you've picked the visual direction and the framework, I'll factor this into JSX or Astro components — name them consistently with the tokens — and document state variants per the brief (default / hover / focus / disabled).

## How to read this

This file uses `../../colors_and_type.css` directly — every color, spacing, type-size value comes from a CSS variable defined there. If you swap the tokens to Direction B or C, the page changes accordingly with no source-code edits to this file.

## Open spots

- **Diagrams.** The "How it works" table is a stand-in for the protocol diagram referenced in §7 of the brief (`taride_credential_chain.svg`, `taride_terminology.svg`). Once those are shared, I'll match diagram primitives to the system and slot them in.
- **Photography.** None used. Decision pending — see Open Questions §3 in the root `README.md`.
- **Mobile/tablet.** Not implemented yet — desktop only for round 1.
