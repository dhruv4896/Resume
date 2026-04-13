# DESIGN.md

## Overview
This site follows a Stitch-led **Teenage Engineering playful-product** direction implemented natively in React. The goal is a resume microsite that feels like a designed hardware object: dark by default, tactile, animated, and sharply segmented, while still presenting Dhruv Mehta's experience with full professional clarity.

## Stitch Source
- Active Stitch project: `projects/6307336002623577779`
- Creative north star from Stitch: **Tactical Precision & Hardware Whimsy**
- Shipping implementation uses the approved dark desktop artifact plus the same Stitch design system for the final token and layout translation
- A matching light companion generation was requested repeatedly, but Stitch export enumeration did not return a second saved screen in this session; the shipped light mode therefore stays faithful to the locked Stitch palette choices: **Bone + Orange + Moss**

## Tone
- Dark mode is the default experience
- Matte charcoal chassis with warm paper text
- Signal orange for primary controls and high-value emphasis
- Moss and sage for support modules, status lights, and tonal separation
- Bone and off-white light mode with stronger tonal jumps than a simple inversion
- Formal and premium, but with a playful hardware-UI energy rather than a corporate brochure feel

## Typography
- Display, section labels, rail labels, and navigation: `Space Grotesk`
- Body copy and long-form supporting text: `Inter`
- Strong uppercase label language
- Large compressed hero headline
- Tabular metric treatment for project numbers and interface modules

## Layout
- Single-page resume microsite
- Section order: hero, professional summary, experience, expertise/toolkit, selected projects, education/contact
- First viewport is one composition: oversized name, factual role framing, verified CTAs, and an animated signal deck
- Strong nested plates, recessed wells, segmented modules, and rail-based navigation
- No soft card stacks, no hero cards, no stock imagery, and no invented social proof

## Motion
- Dark mode and light mode share the same structure and interaction language
- Motion is persistent but disciplined:
  - scan sweep in the hero system
  - pulsing matrix cells
  - animated signal bars and meter columns
  - tactile press states on buttons and navigation
  - active section rail status
- Reduced-motion mode removes continuous loops and preserves only essential state change

## Color System
- Dark baseline:
  - matte charcoal and graphite plates
  - warm paper text
  - signal orange controls
  - moss/sage support surfaces
  - occasional utility yellow/red accents in small modules
- Light companion:
  - bone/off-white chassis
  - graphite text
  - orange control surfaces
  - moss/sage plates and structural wells
  - clearer color variance across modules than the prior light theme

## Content Rules
- Use only verified resume-backed content from `src/content/profile.ts`
- Preserve all summary items, experience bullets, expertise items, project metrics, education entries, and public contact details
- Do not invent certifications, leadership scope, locations, placeholder metrics, or decorative filler copy
- Decorative labels inside graphics must remain abstract and secondary to the resume content
