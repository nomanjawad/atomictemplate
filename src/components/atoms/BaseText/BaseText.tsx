/*
 * BaseText.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import React from "react"
import clsx from "clsx"

import {
  BaseTextProps,
  BaseTextTag,
  variantClasses,
  weightClasses,
  sizeClasses,
} from "./BaseText.types"

/**
 * BaseText - Flexible text component with semantic variants, sizes, and weights
 *
 * @param {BaseTextTag} tag - HTML tag to render (p, span, label, h1-h5). Default: "p"
 * @param {string} className - Additional CSS classes
 * @param {keyof variantClasses} variant - Color variant (primary, secondary, tertiary, accent, banner, banner-secondary, disabled)
 * @param {keyof sizeClasses} size - Font size (small: 14px, regular: 16px, large: 18px)
 * @param {keyof weightClasses} weight - Font weight (bold: 600, semibold: 400, regular: 300)
 * @param {React.ReactNode} children - Text content
 *
 * @example
 * <BaseText tag="h1" variant="accent" size="large" weight="bold">
 *   Hello World
 * </BaseText>
 *
 * @example
 * <BaseText variant="secondary" size="small">
 *   Muted description text
 * </BaseText>
 */
export default function BaseText({
  tag = "p",
  className,
  variant,
  size,
  weight,
  children,
}: BaseTextProps) {
  const Tag: BaseTextTag = tag

  return (
    <Tag
      className={clsx(
        variant && variantClasses[variant],
        weight && weightClasses[weight],
        size && sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  )
}
