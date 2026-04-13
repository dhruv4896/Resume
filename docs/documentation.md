# Documentation.md

## Current status
- milestone: Stitch-led visual reset implemented as a native React rebuild
- branch: main
- local preview status: pending final browser verification after the new industrial redesign
- build status: pending rerun after the native redesign pass

## Decisions made
- The shipping implementation uses native React sections, not an iframe wrapper.
- The visual system is derived from Stitch project `1341489297343221881` and implemented against the exported light desktop, mobile, and dark desktop artifacts.
- Resume data remains centralized in `src/content/profile.ts`.
- Public links are corrected to the verified Dhruv Mehta email, LinkedIn, phone, and CV PDF.

## Source notes
- confirmed email: `dhruv.mehta2205@gmail.com`
- confirmed LinkedIn: `linkedin.com/in/dhruv-mehta2205`
- confirmed phone: `+971 50 7031775`

## Artifact paths
- design contract: `design/DESIGN.md`
- normalized content packet: `src/content/profile.ts`
- Stitch export bundle: `stitch-export/1341489297343221881/`
- exported light desktop HTML: `stitch-export/1341489297343221881/desktop-light.html`
- exported mobile HTML: `stitch-export/1341489297343221881/mobile-light.html`
- exported dark desktop HTML: `stitch-export/1341489297343221881/desktop-dark.html`

## QA notes
- Stitch now provides the source screenshots and design system for the new industrial editorial direction.
- The native React rebuild preserves the full content packet and is replacing the previous muted theme.
- A fresh security scan is still required before push, including recent tracked history and exported files selected for commit.

## Known follow-ups
- Run typecheck, lint, and build on the redesigned implementation.
- Verify desktop, mobile, dark mode, and all public links in a real browser.
- Re-run the sensitive-data audit before any push.
