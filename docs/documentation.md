# Documentation.md

## Current status
- milestone: Stitch-led resume microsite implemented and under verification
- branch: main
- local preview status: verified against the stitched runtime in local preview
- build status: typecheck, lint, and build passing

## Decisions made
- The shipping implementation now uses a Stitch-derived HTML shell rendered through an iframe wrapper.
- The visual structure is sourced from the new light editorial Stitch screen, while factual content is injected from `src/content/profile.ts`.
- Resume data remains centralized in `src/content/profile.ts`.
- Public links are corrected to the verified Dhruv Mehta email, LinkedIn, phone, and CV PDF.

## Source notes
- confirmed email: `dhruv.mehta2205@gmail.com`
- confirmed LinkedIn: `linkedin.com/in/dhruv-mehta2205`
- confirmed phone: `+971 50 7031775`

## Artifact paths
- design contract: `design/DESIGN.md`
- normalized content packet: `src/content/profile.ts`
- stitched wrapper: `src/components/stitch/StitchResumeFrame.tsx`
- stitched content binder: `src/components/stitch/buildStitchResumeHtml.ts`
- local stitched source artifact: `src/stitch/desktop-source.html`

## QA notes
- Verified the local preview renders the corrected CV, LinkedIn, email, and phone links in the stitched DOM.
- Confirmed the live stitched DOM no longer contains the old Gatech email, placeholder contact links, or invented project titles from the earlier export.
- Current-tree security scan found no API keys; stale local-path and Stitch-artifact exposure is being removed from the tracked tree.

## Known follow-ups
- Run a final narrow sensitive-data scan excluding `node_modules`.
- Push the Stitch-led revamp to `main` and re-run the GitHub Pages deployment.
