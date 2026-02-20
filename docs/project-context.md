# Project Context

## Goal
Migrate the exact UI from `index-template.html` into Angular 18+ using standalone features.
The design must remain identical to the template; only the implementation is translated.

## Current Status
- Issue 3 (Top Navigation) implemented and aligned to the template.
- Dark/light toggle follows the template behavior (toggling `dark` on `<html>`).
- Issue 4 (Hero Section) implemented with a landing page route and skill chart component.
- Issue 5 (About + Tech Stack) implements the notepad profile and stack grid with reactive data.
- About section uses shared motion keyframes and hover dynamics aligned with the Hero.
- Issue 9 (Projects) implements the polaroid gallery with tape accents and hover scale.
- Issue 10 (Contact) adds the contact form, social board, and post-it notes.
- Issue 17 (CSS Budgets) raises component style budgets to keep builds green.
- Issue 30 (Responsive) adds mobile/tablet layout adjustments and a dropdown nav.
- Issue 32 (Assets) updates the navbar logo and hero background images.
- Issue 35 (Skill Stats) fixes mobile overflow and centers the stats card.
- Issue 37 (Content) expands About and Contact copy for more context.
- Issue 33 (Favicon) replaces the browser tab icon with the brand asset.
- Issue 41 (CMS) connects Projects and Tech Stack to Google Sheets JSON via a runtime config loader.

## Structure Principles
- Use standalone components with feature-based routing.
- Keep layout in `src/app/core/layout` for global shells (nav, footer).
- Place reusable UI, pipes, and utilities in `src/app/shared`.
- Avoid monolithic components; each section lives in its own context folder.

## Styling Rules
- Tailwind stays in CSS files (use `@apply` in component styles).
- Keep global tokens and shared utilities in `src/styles.css`.
- Match the template classes and layout 1:1 unless an issue explicitly allows deviations.
- Keep component templates free of utility classes; use component CSS instead.

## Conventions
- Use `@if`, `@for`, etc. (no `*ngIf` / `*ngFor`).
- Document key lines and decisions in each file.
- Commits are atomic and semantic; do not mix features.

## Changelog
See `docs/CHANGELOG.md` for incremental updates.
