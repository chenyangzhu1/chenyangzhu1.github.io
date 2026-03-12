# MoKus Qualitative Sections Restructure Design

**Date:** 2026-03-12

## Goal

Split the current `Qualitative Results` content into two sections and left-align all explanatory captions on the `MoKus` page.

## Context

- The current `Qualitative Results` section uses one autoplaying carousel for three images.
- The user wants `Qualitative_ours.jpg` to remain alone in `Qualitative Results`.
- The two comparison images should move into a new section named `Qualitative Comparison`.
- The new comparison section should autoplay and each slide should have its own caption.
- Remaining explanatory `subtitle` text on the page should be left-aligned.

## Selected Approach

Keep `Qualitative Results` as a standard single-image section, then insert a new `Qualitative Comparison` section directly below it with a dedicated two-slide carousel.

The updated structure should:

- keep `Qualitative_ours.jpg` in `Qualitative Results`
- create a new `qualitative-comparison-carousel` for the two comparison images
- place one caption inside each carousel item in the new section
- switch all remaining `subtitle` explanation blocks from `has-text-centered` to `has-text-left`

## Why This Approach

This keeps the content hierarchy clear: results first, comparisons second. Reusing the existing carousel stack for the new comparison section avoids extra JavaScript, while converting remaining captions to left alignment satisfies the global formatting request with minimal markup changes.

## Validation Criteria

1. `Qualitative Results` contains only `Qualitative_ours.jpg`.
2. A new `Qualitative Comparison` section appears below it.
3. The new comparison section contains an autoplay-compatible `.carousel` with the two requested images.
4. Each comparison slide has its own caption.
5. No explanatory `subtitle` remains `has-text-centered`.
