# Design System Documentation: The Quiet Sentinel

## 1. Overview & Creative North Star
**Creative North Star: The Strategic Topographer**
This design system rejects the frantic, neon-soaked tropes of "Cybersecurity" in favor of a calm, editorial authority. It is designed to feel like a high-end intelligence briefing: analytical, resilient, and deeply credible. We achieve this by moving away from rigid, boxed grids and instead embracing **Intentional Asymmetry** and **Generous Negative Space**.

The "template" look is broken through the use of overlapping elements, such as a serif headline bleeding into a topographic background, and a hierarchy that prioritizes breathing room over information density. The goal is to convey that the professional is never overwhelmed, but always in control.

## 2. Colors
The palette is rooted in the depth of `surface` (`#0e1322`), providing a foundation of stability. Energy is introduced not through glows, but through precise, strategic accents of `primary` (cyan) and `secondary` (teal).

- **The "No-Line" Rule:** To maintain an editorial feel, 1px solid borders are prohibited for sectioning. Never use a line to separate the header from the hero or about from work. Instead, define boundaries through background color shifts. For example, transition from `surface` to `surface_container_low` to denote a new thematic area.
- **Surface Hierarchy & Nesting:** Treat the UI as physical layers of data.
  Base: `surface`
  Lowered (contextual): `surface_container_lowest` for background utility areas
  Raised (interactive): `surface_container` or `surface_container_high` for cards and floating elements
- **The "Glass & Gradient" Rule:** Use glass-like overlays sparingly. Apply a semi-transparent `surface_bright` with `backdrop-blur` in the `20px` to `40px` range to create a frosted-lens effect.
- **Signature Textures:** Use subtle linear gradients transitioning from `primary` to `primary_container` for CTAs. This prevents the flat, sterile feel of generic UI kits.

## 3. Typography
The typography is a dialogue between the human/editorial serif and the clean technical sans.

- **Display & Headlines:** Use `Newsreader` with generous leading and occasional italic emphasis for high-level thinking and authority.
- **Body & Titles:** Use `Manrope` for narrative clarity and high legibility.
- **Implementation note:** The shipped site keeps the brief's two-typeface rule, so metadata styling is handled with `Manrope` rather than introducing a third label font.

## 4. Elevation & Depth
Depth is a function of tonal layering, not heavy shadows.

- **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` background to create a recessed feel. Place a `surface_container_highest` element on a `surface` background to create a lifted feel.
- **Ambient Shadows:** If an element must float, use a blur radius of at least `64px` and an opacity near `6%`. The shadow color should be `surface_container_lowest`, not pure black.
- **The "Ghost Border" Fallback:** If a container requires more definition for accessibility, use the `outline_variant` token at roughly `15%` opacity. It should be felt, not seen.
- **Visual Fluidity:** Incorporate contour-map topology behind transparent surface layers to create the sense of navigating through a complex landscape of risk, systems, and continuity planning.

## 5. Components
### Buttons
- **Primary:** Filled with `primary` (`#00daf3`) and text in `on_primary` (`#00363d`).
- **Secondary:** Quiet, transparent, and surface-aware. On hover, shift toward `surface_container_high`.
- **Shape:** Use a sharp professional edge with restrained rounding. Avoid pill-heavy treatment.

### Cards & Lists
- **Cards:** Use only when structure benefits. No borders. Prefer `surface_container_low` and subtle tonal hover shifts.
- **List Separation:** Avoid divider lines. Separate items with spacing, stagger, or background contrast.

### Inputs
- **Style:** Minimalist bottom-emphasis only if ever introduced. The shipped site avoids a contact form.

### Signature Component: The Signal Node
- Use a small teal dot linked to a faint cyan signal line that threads through timelines or grouped content. This visual language should imply connected systems rather than decorative sci-fi.

## 6. Do's and Don'ts
### Do
- Embrace asymmetry and let a headline sit opposite a narrower supporting column.
- Add more room after the layout feels finished.
- Let signal lines or topology shapes peek through transparent or low-contrast surfaces.

### Don't
- No neon cyber cliches, glitch effects, or data-rain visuals.
- No 1px border scaffolding that boxes every section.
- No standard three-column template grids as the dominant composition.
- No pure black. Always keep the deep-ink base so the cyan and teal accents feel integrated.
