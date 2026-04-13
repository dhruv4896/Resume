# Documentation.md

## Current status
- milestone: calmer orange + ion teal utility-hardware reset implemented as a native React rebuild
- branch: main
- local preview status: verified locally in dark, light, and mobile
- build status: passing locally after the orange + teal token pass

## Decisions made
- The shipping implementation uses native React sections, not an iframe wrapper.
- The current visual system is derived from Stitch project `5026288408684489434`.
- The new design system direction is `Industrial Tactility / Physical Logic`, with orange primary controls and ion teal secondary rails/separators.
- Light mode is now a white utility chassis rather than the prior bone/cream variant.
- Decorative telemetry labels and fake panel naming are removed from the hero and project areas.
- The hero now uses one factual console built from real focus areas and project outcomes instead of ambient widget graphics.
- Resume data remains centralized in `src/content/profile.ts`.
- Public links are corrected to the verified Dhruv Mehta email, LinkedIn, phone, and CV PDF.
- Dark mode is the first-load default unless a stored user preference exists.

## Source notes
- confirmed email: `dhruv.mehta2205@gmail.com`
- confirmed LinkedIn: `linkedin.com/in/dhruv-mehta2205`
- confirmed phone: `+971 50 7031775`

## Artifact paths
- design contract: `design/DESIGN.md`
- normalized content packet: `src/content/profile.ts`
- Stitch project reference: `projects/5026288408684489434`

## QA notes
- The native React build preserves the full content packet while replacing the old green/cream theme with orange + teal.
- This pass removes fake labels such as `Model Adapter Grid`, `Forecast Signal`, `Signal Flow`, and `Activity`.
- The project cards no longer ship decorative chart widgets; the right-side emphasis is now a factual measured-outcome module.
- Verified locally:
  - dark mode is the first-load default
  - light mode persists from local storage
  - `#projects` anchor is present in the verified light DOM
  - CV asset resolves under `/Resume/cv/dhruv-mehta-cv.pdf`
  - LinkedIn, email, and phone hrefs are correct
  - desktop and mobile screenshots reflect the calmer orange + teal/white utility system

## Known follow-ups
- Keep future changes aligned to the orange + teal utility-hardware direction instead of drifting back toward green, cream, or decorative dashboard motifs.
