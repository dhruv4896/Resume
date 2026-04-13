# Dhruv Mehta Resume Microsite

A Stitch-led React resume microsite for Dhruv Mehta that preserves the full resume-backed content while implementing a bold technical-editorial visual system in native React.

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

## Content Provenance
- Resume content is derived from the provided Dhruv Mehta source resumes and normalized in `src/content/profile.ts`.
- Public downloadable CV: `public/cv/dhruv-mehta-cv.pdf`
- The visual direction is sourced from Google Stitch export artifacts in `stitch-export/1341489297343221881/`.
- The live page is rendered through native React components rather than an iframe or stitched HTML shell.

## Deploy
This repository is configured for GitHub Pages project-site deployment.

- Vite base path: `/Resume/`
- Build output: `dist/`
- Workflow: `.github/workflows/deploy.yml`

Pushes to `main` trigger the Pages workflow. If the repository has not been configured to publish from GitHub Actions yet, a repo admin may need to enable GitHub Pages with GitHub Actions as the source.
