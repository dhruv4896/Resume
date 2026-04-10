# Documentation.md

## Current status
- milestone: resume microsite rebuild implemented in exact-wrapper mode
- branch: main
- local preview status: pending fresh verification after dependency install
- build status: pending fresh verification after dependency install

## Decisions made
- Native Stitch plugin is the active design source for this recovery pass.
- The shipping project is `projects/17091861260108282947` (`Dhruv Mehta Resume Microsite`).
- The retained source screens are desktop `151e8a2e6a6149fd9c7b6158baf59614` and mobile `e6087f3fb91447f4a860a4526afb04fa`.
- Stitch provided the layout direction and design tokens, but its generated copy was not sufficiently resume-true, so the exported HTML is corrected at runtime against the normalized resume content model before rendering.
- The site now targets a light, text-first resume microsite rather than a visual portfolio treatment.

## Source notes
- original resume: `X:/Downloads/Dhruv_Mehta_Resume.pdf`
- redesigned CV download source: `X:/Downloads/dhruv_mehta_cv_redesign.pdf`
- confirmed email: `dhruv.mehta2205@gmail.com`
- confirmed LinkedIn: `linkedin.com/in/dhruv-mehta2205`
- confirmed phone: `+971 50 7031775`

## Artifact paths
- Stitch export folder: `stitch-export/17091861260108282947/`
- design contract: `design/DESIGN.md`
- runtime wrapper: `src/components/stitch/StitchResumeFrame.tsx`
- HTML correction builder: `src/components/stitch/buildStitchResumeHtml.ts`
- normalized content packet: `src/content/profile.ts`

## QA notes
- The rebuilt site must be re-verified on desktop and mobile after installing dependencies and running the fresh build.
- The accepted visual target is a light editorial microsite with no stock imagery, no dark sections, and no invented resume claims.

## Known follow-ups
- Re-run lint, typecheck, production build, and responsive browser verification.
- Push the rebuild to `main` and re-run the GitHub Pages deployment.
- GitHub Pages may still require a repo admin to enable publishing if Actions cannot create the Pages site automatically.
