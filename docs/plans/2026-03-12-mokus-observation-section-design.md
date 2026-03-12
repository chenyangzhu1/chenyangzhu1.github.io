# MoKus Observation Section Design

**Date:** 2026-03-12

## Goal

Add a dedicated `Observation` content block directly below the `Abstract` section on the `MoKus` project page, using a left-text right-image layout.

## Context

- The `MoKus` page is a standalone static HTML page at `MoKus/index.html`.
- The page already uses repeated section blocks with Bulma-based layout and consistent title styling.
- The user first requested a new titled block under `Abstract` and then refined it to a two-column layout with text on the left and an image on the right.

## Selected Approach

Keep the `Observation` section immediately after the existing `Abstract` section and before `Method`, but restructure its content into a header followed by a two-column row.

The new block should:

- reuse the current section/container structure
- keep the section heading centered on its own row
- place the explanatory text in a wider left column (`7` units)
- place `MoKus/static/images/intro_case.jpg` in a narrower right column (`5` units)
- stay responsive by relying on Bulma columns instead of custom layout CSS

## Why This Approach

This is the lowest-risk change because it preserves the page's current visual language while making the `Observation` block more informative and scannable. Keeping the title on its own row matches the surrounding sections, and using Bulma's built-in columns avoids introducing new custom styling.

## Validation Criteria

The change is successful when:

1. `Observation` appears below `Abstract` and above `Method`.
2. The new section keeps the title on its own row, consistent with surrounding sections.
3. The left column uses a wider `is-7` column for the observation text and the right column uses `is-5` for `static/images/intro_case.jpg`.
4. The layout remains responsive without requiring new CSS rules.
