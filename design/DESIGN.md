# DESIGN.md

## Overview
This site follows a Stitch-led **Teenage Engineering utility-hardware** direction implemented natively in React. The goal is a resume microsite that feels like a coherent designed object: dark by default, sharply ordered, orange-and-teal accented, and visually alive without drifting into fake telemetry, fabricated labels, or decorative dashboard language.

## Stitch Source
- Active Stitch project: `projects/14583319524775424607`
- Creative north star from Stitch: **The Analog Instrumentation**
- Design philosophy from Stitch: **Disciplined Utility**
- Shipping implementation uses the updated Stitch design system as the visual contract for the TE utility-hardware revamp
- Stitch generation updated the project design theme successfully, but saved screen enumeration did not return export URLs in this session; the shipped light and dark themes therefore follow the locked Stitch palette, layout, and behavior rules rather than a downloaded wrapper export

## Tone
- Dark mode is the default experience
- Matte charcoal chassis with warm paper text and graphite plates
- Signal orange for primary controls and numeric emphasis
- Teal support rails, separators, and secondary emphasis
- White utility light mode with crisp gray wells and hard segmentation rather than a cream editorial wash
- Formal, premium, and engineered rather than playful for its own sake

## Typography
- Display, section labels, rail labels, and navigation: `Space Grotesk`
- Body copy and long-form supporting text: `Inter`
- Strong uppercase label language
- Large compressed hero headline
- Tabular metric treatment for project numbers and interface modules

## Layout
- Single-page resume microsite
- Section order: overview hero, professional summary, experience, expertise/toolkit, selected projects, education/contact
- First viewport is one composition: oversized name, factual role framing, verified CTAs, one integrated right-hand console built from real focus areas and real project outcomes, and an engineering grid that belongs to the chassis rather than floating behind it
- Strong nested plates, recessed wells, segmented modules, rail-based navigation, and a true vertical experience timeline
- `01 // Overview` is a first-class tracked section and should remain active until summary wins the scroll observer
- No soft card stacks, no hero cards, no stock imagery, and no invented social proof
- Decorative telemetry, fake analytics labels, and free-floating graphic widgets do not ship

## Motion
- Dark mode and light mode share the same structure and interaction language
- Motion is disciplined but now clearly visible in the chassis:
  - a drifting page grid with moving rail bands behind the content
  - a hero-local scan sweep and animated rails
  - one slow ticker band in the hero using real resume vocabulary only
  - one secondary ticker elsewhere on the page using real labels only
  - tactile press states on buttons, navigation, and the theme toggle
  - active section rail status transitions
- Reduced-motion mode removes continuous loops and preserves only essential state change

## Color System
- Dark baseline:
  - matte charcoal and graphite plates
  - warm paper text
  - signal orange controls
  - teal support surfaces, rails, and small glow accents
  - occasional utility yellow/red accents in small modules only
- Light companion:
  - white utility chassis
  - graphite text
  - gray control wells and neutral technical surfaces
  - orange primary controls and teal secondary surfaces
  - stronger contrast and flatter segmentation than the prior cream-toned light theme
- Accents are used as controls, rails, labels, and utilities rather than large blended atmospheres
- Orange-teal gradients are not the primary visual language

## Content Rules
- Use only verified resume-backed content from `src/content/profile.ts`
- Preserve all summary items, experience bullets, expertise items, project metrics, education entries, and public contact details
- Do not invent certifications, leadership scope, locations, placeholder metrics, or decorative filler copy
- Decorative graphics must remain abstract, unlabeled, and secondary to the resume content
- Real content should carry the page before ornament does

## Visual Contract
- Use a visible engineering grid in both themes, with stronger local grid overlays inside hero and high-signal modules
- Keep the background kinetic: layered grid drift, moving utility rails, and small hardware pulses should be visible without competing with content
- Prefer flatter machined surfaces, seams, utility rails, and module wells over glow-heavy atmospherics
- Scrolling or moving text may ship only when built from real resume language such as employers, focus areas, tools, education, and verified project outcomes
- Avoid charts, dashboards, and pseudo-analytics motifs unless they are literally representing real resume facts
- Summary, core focus, and expertise/toolkit should read as stacked rows or stacked panels rather than point grids
- Experience should remain a vertical spine with dated nodes and one-below-the-other bullets
