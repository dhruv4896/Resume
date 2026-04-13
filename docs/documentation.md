# Documentation.md

## Current status
- milestone: TE utility-hardware revamp implemented as a native React rebuild
- branch: main
- local preview status: verified locally in dark, light, and mobile
- build status: passing locally after the engineering-grid and ticker pass

## Decisions made
- The shipping implementation uses native React sections, not an iframe wrapper.
- The current visual system is derived from Stitch project `14583319524775424607`.
- The active Stitch direction is `The Analog Instrumentation`, with the design philosophy `Disciplined Utility`.
- The site keeps dark mode as the first-load default unless a stored user preference exists.
- Light mode is now a white utility chassis rather than the prior bone/cream variant.
- `SectionId` now includes `top`, and the selector bug is fixed so the page starts on `01 // Overview` while the hero is in view.
- Decorative telemetry labels and fake panel naming are removed from the hero and project areas.
- The hero now uses one factual console built from real focus areas and project outcomes, supported by an engineering grid, utility rails, and a ticker built from real resume vocabulary.
- A simpler single-button theme toggle replaces the previous heavier control.
- Resume data remains centralized in `src/content/profile.ts`.
- Public links are corrected to the verified Dhruv Mehta email, LinkedIn, phone, and CV PDF.

## Source notes
- confirmed email: `dhruv.mehta2205@gmail.com`
- confirmed LinkedIn: `linkedin.com/in/dhruv-mehta2205`
- confirmed phone: `+971 50 7031775`

## Artifact paths
- design contract: `design/DESIGN.md`
- normalized content packet: `src/content/profile.ts`
- Stitch project reference: `projects/14583319524775424607`

## QA notes
- The native React build preserves the full content packet while replacing the prior glow-heavy pass with a flatter TE utility-hardware chassis.
- This pass removes fake labels such as `Model Adapter Grid`, `Forecast Signal`, `Signal Flow`, and `Activity`.
- The project cards do not ship decorative chart widgets; the right-side emphasis stays tied to real measured outcomes.
- The page now ships a full-page engineering grid, local module grid overlays, a hero ticker, and a secondary ticker band using real resume terms only.
- Verified locally:
  - dark mode is the first-load default
  - light mode persists from local storage
  - `#top` is active on first paint and `#projects` remains present in the verified light DOM
  - CV asset resolves under `/Resume/cv/dhruv-mehta-cv.pdf`
  - LinkedIn, email, and phone hrefs are correct
  - desktop and mobile screenshots reflect the TE utility-hardware system in both themes

## Known follow-ups
- Keep future changes aligned to the orange + teal utility-hardware direction instead of drifting back toward green, cream, glow-heavy gradients, or decorative dashboard motifs.
