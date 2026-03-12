# MoKus Qualitative Comparison Image Size Design

**Date:** 2026-03-12

## Goal

Make the images in the `Qualitative Comparison` carousel smaller while keeping them centered.

## Context

- The `Qualitative Comparison` section currently uses the shared `results-carousel` structure.
- The user refined the target size to about `60%` of the available width.
- The change should affect only the comparison carousel, not other image sections.

## Selected Approach

Use a section-scoped selector tied to `#qualitative-comparison-carousel` and the existing image class so the width rule clearly wins inside the carousel layout.

The new styling should:

- set the image width to about `60%`
- center the image horizontally
- keep the image responsive
- avoid affecting `Qualitative Results`, `Gallery`, or other carousels

## Why This Approach

This is the smallest clean change. It keeps the adjustment local to the comparison section and avoids changing shared carousel styles that other sections already depend on.

## Validation Criteria

1. The two comparison images use a dedicated size class.
2. A selector scoped to `#qualitative-comparison-carousel` is defined in `MoKus/static/css/index.css`.
3. The scoped rule sets the images to roughly `60%` width and centers them.
