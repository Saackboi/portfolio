# Project Context

## Goal
Migrate the exact UI from `index-template.html` into Angular 18+ using standalone features.
The design must remain identical to the template; only the implementation is translated.

## Current Status
- Issue 3 (Top Navigation) implemented and aligned to the template.
- Dark/light toggle follows the template behavior (toggling `dark` on `<html>`).

## Structure Principles
- Use standalone components with feature-based routing.
- Keep layout in `src/app/core/layout` for global shells (nav, footer).
- Place reusable UI, pipes, and utilities in `src/app/shared`.
- Avoid monolithic components; each section lives in its own context folder.

## Styling Rules
- Tailwind stays in CSS files (use `@apply` in component styles).
- Keep global tokens and shared utilities in `src/styles.css`.
- Match the template classes and layout 1:1.
- Do not invent visual changes or refactor the design.

## Conventions
- Use `@if`, `@for`, etc. (no `*ngIf` / `*ngFor`).
- Document key lines and decisions in each file.
- Commits are atomic and semantic; do not mix features.

## Changelog
See `docs/CHANGELOG.md` for incremental updates.
