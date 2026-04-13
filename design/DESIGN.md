# DESIGN.md

## Overview
This site follows a Stitch-led **Teenage Engineering utility-hardware** direction implemented natively in React. The goal is a resume microsite that feels like a coherent designed object: dark by default, sharply ordered, orange-and-teal accented, and visually alive without drifting into fake telemetry or decorative dashboard language.

## Stitch Source
- Active Stitch project: `projects/5026288408684489434`
- Creative north star from Stitch: **Industrial Tactility / Physical Logic**
- Shipping implementation uses the new Stitch design system as the visual contract for the orange + ion teal reset
- Stitch generation updated the project design theme successfully, but saved screen enumeration did not return artifact URLs in this session; the shipped light and dark themes therefore follow the locked Stitch palette and behavior rules rather than a downloaded wrapper export

## Tone
- Dark mode is the default experience
- Matte charcoal chassis with warm paper text
- Signal orange for primary controls and numeric emphasis
- Ion teal for support rails, separators, and secondary emphasis
- White utility light mode with crisp gray wells and hard segmentation rather than a cream editorial wash
- Formal and premium, but more restrained than earlier playful-product passes

## Typography
- Display, section labels, rail labels, and navigation: `Space Grotesk`
- Body copy and long-form supporting text: `Inter`
- Strong uppercase label language
- Large compressed hero headline
- Tabular metric treatment for project numbers and interface modules

## Layout
- Single-page resume microsite
- Section order: hero, professional summary, experience, expertise/toolkit, selected projects, education/contact
- First viewport is one composition: oversized name, factual role framing, verified CTAs, and one single right-hand console built from real focus areas and real project outcomes
- Strong nested plates, recessed wells, segmented modules, and rail-based navigation
- No soft card stacks, no hero cards, no stock imagery, and no invented social proof
- Decorative telemetry, fake analytics labels, and free-floating graphic widgets do not ship

## Motion
- Dark mode and light mode share the same structure and interaction language
- Motion is restrained:
  - one subtle scan sweep across the hero console
  - tactile press states on buttons and navigation
  - active section rail status
- Reduced-motion mode removes continuous loops and preserves only essential state change

## Color System
- Dark baseline:
  - matte charcoal and graphite plates
  - warm paper text
  - signal orange controls
  - ion teal support surfaces, rails, and glow accents
  - occasional utility yellow/red accents in small modules
- Light companion:
  - white utility chassis
  - graphite text
  - gray control wells and neutral technical surfaces
  - orange primary controls and ion teal secondary surfaces
  - stronger contrast than the prior cream-toned light theme

## Content Rules
- Use only verified resume-backed content from `src/content/profile.ts`
- Preserve all summary items, experience bullets, expertise items, project metrics, education entries, and public contact details
- Do not invent certifications, leadership scope, locations, placeholder metrics, or decorative filler copy
- Decorative graphics must remain abstract and secondary to the resume content
- Real content should carry the page before ornament does
