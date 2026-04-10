# Documentation.md

## Current status
- milestone: light-mode redesign, QA, and deployment configuration completed
- branch: main
- local preview status: verified locally with Vite preview and headless Edge captures
- build status: `npm run build` passed

## Decisions made
- Native Stitch tool transport still returns `Auth required`, so the redesign pass used the verified direct Stitch MCP fallback against `https://stitch.googleapis.com/mcp`.
- A new Stitch project was created for the redesign: `projects/800567313739347498` (`Dhruv Mehta Portfolio Light`).
- The selected visual direction is a light editorial system with warm ivory surfaces, muted sage and bronze accents, and serif-led hierarchy.
- The exported Stitch artifacts were saved under `stitch-export/800567313739347498/`.
- The implementation keeps the content resume-true even where Stitch-generated sample copy drifted into invented details.
- The public site now surfaces email, LinkedIn, and phone, with the downloadable CV still available from `public/cv/dhruv-mehta-cv.pdf`.

## Source notes
- original resume: `X:/Downloads/Dhruv_Mehta_Resume.pdf`
- redesigned CV download source: `X:/Downloads/dhruv_mehta_cv_redesign.pdf`
- confirmed email: `dhruv.mehta2205@gmail.com`
- confirmed LinkedIn: `linkedin.com/in/dhruv-mehta2205`
- confirmed phone: `+971 50 7031775`

## QA notes
- desktop: verified live local preview at `http://127.0.0.1:4269/Resume/` using headless Edge at 1440px width
- tablet: responsive behavior is layout-driven and covered by the fluid grid and clamp-based typography
- mobile: verified live local preview at `http://127.0.0.1:4269/Resume/` using headless Edge at 390px width; CTA overflow issue was fixed by stacking actions on small screens

## Known follow-ups
- Re-run the GitHub Pages deployment after pushing the redesign.
- GitHub Pages may still require a repo admin to enable publishing if Actions cannot create the Pages site automatically.
