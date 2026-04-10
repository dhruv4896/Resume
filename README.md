# Dhruv Mehta Resume Microsite

A light-mode, editorial resume microsite for Dhruv Mehta. The current implementation uses a native Google Stitch export as the visual scaffold and corrects the exported HTML against the original resume and redesigned CV before rendering it in React.

## Stack
- Vite
- React 19
- TypeScript
- Tailwind CSS v4

## Local Development
1. Install dependencies with `npm install`
2. Start the dev server with `npm run dev`
3. Run typecheck with `npm run typecheck`
4. Run lint with `npm run lint`
5. Create a production build with `npm run build`

## Stitch Provenance
- Native Stitch project: `projects/17091861260108282947`
- Desktop source screen: `151e8a2e6a6149fd9c7b6158baf59614`
- Mobile source screen: `e6087f3fb91447f4a860a4526afb04fa`
- Export folder: `stitch-export/17091861260108282947/`
- Wrapper mode: exact-wrapper with runtime content correction

## Content Provenance
- Original resume: `X:/Downloads/Dhruv_Mehta_Resume.pdf`
- Redesigned CV: `X:/Downloads/dhruv_mehta_cv_redesign.pdf`
- Public downloadable CV: `public/cv/dhruv-mehta-cv.pdf`

## Deploy
This repository is configured for GitHub Pages project-site deployment.

- Vite base path: `/Resume/`
- Build output: `dist/`
- Workflow: `.github/workflows/deploy.yml`

Pushes to `main` trigger the Pages workflow. If the repository has not been configured to publish from GitHub Actions yet, a repo admin may need to enable GitHub Pages with GitHub Actions as the source.
