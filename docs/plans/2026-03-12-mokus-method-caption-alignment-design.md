# MoKus Method Caption Alignment Design

**Date:** 2026-03-12

## Goal

Left-align the explanatory caption under the `Method` figure on the `MoKus` page.

## Context

- The `Method` caption in `MoKus/index.html` currently uses `has-text-centered`.
- The user wants only this specific paragraph-style caption to align left.
- Other section subtitles should remain unchanged.

## Selected Approach

Update the `Method` caption element from `class="subtitle has-text-centered"` to `class="subtitle has-text-left"`.

## Why This Approach

This is the smallest possible change. It uses the existing Bulma utility class, avoids new CSS, and limits the effect to the single caption the user identified.

## Validation Criteria

1. The `Method` caption uses `has-text-left`.
2. The caption text remains otherwise unchanged.
3. Other `subtitle` elements stay untouched.
