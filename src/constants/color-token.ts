/*
 * color-token.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

/**
 * Read-only map of color names to their corresponding CSS variable references.
 * Enables consistent access to theme values defined in CSS.
 *
 * Example:
 * ```ts
 * import { ColorToken } from "@/constants"
 * import { colorToken } from "@/constants"
 * const backgroundColor: ColorToken = colorToken.background // "var(--color-background)"
 * ```
 *
 * Note: Define these CSS variables in `src/styles/tokens.color.css`.
 *
 * @constant colorToken - Map of color names to CSS variable strings.
 */
export const colorToken = {
  /* Base colors - Raw color values */
  // COLOR_WHITE: "var(--color-white)",
  // COLOR_BLACK: "var(--color-black)",
  // COLOR_ACCENT_LIGHT: "var(--color-accent-light)",
  // COLOR_SECONDARY: "var(--color-secondary)",
  // COLOR_PRIMARY: "var(--color-primary)",
  // COLOR_ACCENT_DARK: "var(--color-accent-dark)",
  // COLOR_TEXT: "var(--color-text)",
  // COLOR_ERROR: "var(--color-error)",
  // COLOR_MUTED: "var(--color-muted)",

  /* Semantic color variables - Meaningful mappings */
  COLOR_BACKGROUND: "var(--color-background)",
  COLOR_FOREGROUND: "var(--color-foreground)",
  COLOR_SURFACE: "var(--color-surface)",
  COLOR_SURFACE_DARK: "var(--color-surface-dark)",

  /* Interactive elements */
  COLOR_INTERACTIVE_PRIMARY: "var(--color-interactive-primary)",
  COLOR_INTERACTIVE_SECONDARY: "var(--color-interactive-secondary)",

  /* Text hierarchy */
  COLOR_TEXT_PRIMARY: "var(--color-text-primary)",
  COLOR_TEXT_SECONDARY: "var(--color-text-secondary)",
  COLOR_TEXT_INVERSE: "var(--color-text-inverse)",
  COLOR_TEXT_MUTED: "var(--color-text-muted)",

  /* UI states */
  COLOR_BORDER: "var(--color-border)",
  COLOR_BORDER_STRONG: "var(--color-border-strong)",
  COLOR_FOCUS: "var(--color-focus)",
  COLOR_HOVER: "var(--color-hover)",

  /* Legacy mappings (for backward compatibility) */
  COLOR_CARD: "var(--color-card)",

  /* Shadows */
  BOX_SHADOW: "var(--box-shadow)",

  /* Gradient */
  GRADIENT_PRIMARY: "var(--color-gradient-primary)",
  GRADIENT_SECONDARY: "var(--color-gradient-secondary)",
  GRADIENT_TERTIARY: "var(--color-gradient-tertiary)",
} as const

export type ColorToken = (typeof colorToken)[keyof typeof colorToken]
