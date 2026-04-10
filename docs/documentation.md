# Documentation.md

## Current status
- milestone: implementation, QA, and deployment configuration completed
- branch: main
- local preview status: verified locally with Vite preview and headless Chrome captures
- build status: `npm run build` passed

## Decisions made
- Native Stitch tool transport still returns `Auth required`, so the design pass used the verified direct MCP fallback and saved the exported artifacts under `stitch-export/4874795684782609962/`.
- The selected direction is the factual `Resilience Field` concept refined into desktop and mobile screens.
- The public site keeps a two-typeface implementation using `Newsreader` and `Manrope`.
- Public contact on the page is limited to email and LinkedIn. The phone number remains in the downloadable CV.
- Tools and capabilities exclude redesign-only extras that were not validated against the source brief.

## Source notes
- original resume: `X:/Downloads/Dhruv_Mehta_Resume.pdf`
- redesigned CV download source: `X:/Downloads/dhruv_mehta_cv_redesign.pdf`
- confirmed email: `dhruv.mehta2205@gmail.com`
- confirmed LinkedIn: `linkedin.com/in/dhruv-mehta2205`

## QA notes
- desktop: hero composition, nav, CTA states, and desktop typography verified with a live local preview capture at 1440x1400 using headless Chrome
- tablet: responsive behavior is layout-driven and covered by the fluid grid system; no separate tablet-only artifact was captured
- mobile: hero readability and CTA wrapping verified with a live local preview capture at 430x900 using headless Chrome with device scale factor 1

## Known follow-ups
- Confirm whether GitHub Pages must be enabled by a repo admin if the first Actions deploy is blocked by repository settings.
