# Documentation.md

## Current status
- milestone: Teenage Engineering playful-product revamp implemented as a native React rebuild
- branch: main
- local preview status: verified locally in dark, light, and mobile
- build status: passing locally after the playful-product revamp

## Decisions made
- The shipping implementation uses native React sections, not an iframe wrapper.
- The current visual system is derived from Stitch project `6307336002623577779`.
- The approved dark desktop Stitch artifact and the same Stitch design system define the live React implementation.
- Light mode is implemented from the same locked Stitch palette and structural rules because a second saved light screen did not enumerate successfully from Stitch in this session.
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
- Stitch export bundle: `stitch-export/6307336002623577779/`
- exported dark desktop HTML: `stitch-export/6307336002623577779/dark-desktop.html`
- exported dark desktop screenshot: `stitch-export/6307336002623577779/dark-desktop.png`

## QA notes
- The native React build preserves the full content packet and replaces the flatter prior hardware pass.
- Verified locally:
  - dark mode is the first-load default
  - light toggle persists in local storage
  - `#projects` anchor updates correctly
  - CV asset resolves under `/Resume/cv/dhruv-mehta-cv.pdf`
  - LinkedIn, email, and phone hrefs are correct
- A current-tree and recent-history sensitive-data scan should be completed before push.

## Known follow-ups
- Re-run the sensitive-data audit before push.
- Keep future changes aligned to the same playful-product hardware direction instead of drifting back toward soft editorial minimalism.
