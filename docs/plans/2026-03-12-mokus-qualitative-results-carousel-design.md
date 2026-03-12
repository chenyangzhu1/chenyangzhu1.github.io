# MoKus Qualitative Results Carousel Design

**Date:** 2026-03-12

## Goal

Turn the `Qualitative Results` section on the `MoKus` page into an autoplaying image carousel.

## Context

- The page already loads `bulma-carousel` and initializes every `.carousel` element with autoplay enabled.
- The current `Qualitative Results` section shows only one static image.
- The user wants this section to rotate through three specific images:
  - `Qualitative_ours.jpg`
  - `Qualitative_Comparison_shu.jpg`
  - `Qualitative_Comparison_rec_shu.jpg`

## Selected Approach

Replace the single `<img>` in the `Qualitative Results` section with a dedicated carousel container that reuses the existing `results-carousel` class and current JavaScript initialization.

The updated block should:

- keep the `Qualitative Results` heading unchanged
- use a unique carousel id for this section
- include one slide per requested image
- rely on the existing global autoplay configuration instead of adding new JavaScript
- keep one shared caption below the carousel

## Why This Approach

This is the lowest-risk implementation because the page already has a working carousel stack. Reusing the existing `.carousel` behavior avoids duplicated JS and keeps the new feature consistent with the rest of the site.

## Validation Criteria

1. The `Qualitative Results` section contains a `.carousel` container.
2. The carousel references all three requested image files.
3. The markup remains compatible with the existing autoplay initialization in `static/js/index.js`.
