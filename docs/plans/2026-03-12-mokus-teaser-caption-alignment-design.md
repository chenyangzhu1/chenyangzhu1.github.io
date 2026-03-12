# MoKus Teaser Caption Alignment Design

**Date:** 2026-03-12

## Goal

Left-align the explanatory caption under the `Teaser` figure on the `MoKus` page.

## Context

- The `Teaser` caption in `MoKus/index.html` currently uses `has-text-centered`.
- The `Method` caption has already been changed to `has-text-left`.
- The user wants only the `Teaser` caption updated in the same way.

## Selected Approach

Update the `Teaser` caption element from `class="subtitle has-text-centered"` to `class="subtitle has-text-left"`.

## Why This Approach

This keeps the change limited to one existing element, uses Bulma's built-in alignment class, and avoids affecting other section captions.

## Validation Criteria

1. The `Teaser` caption uses `has-text-left`.
2. The caption text remains unchanged.
3. The `Method` caption remains `has-text-left`.
