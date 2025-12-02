/*
 * Text.type.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import React from "react"

export type BaseTextTag =
  | "p"
  | "span"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"

export interface BaseTextProps {
  tag?: BaseTextTag
  className?: string
  children?: React.ReactNode
  weight?: keyof typeof weightClasses
  size?: keyof typeof sizeClasses
  variant?: keyof typeof variantClasses
}

export const variantClasses = {
  primary: "text-text",
  secondary: "text-muted",
  tertiary: "text-gray",
  accent: "text-primary",
  banner: "text-white",
  "banner-secondary": "text-primary-100",
  disabled: "text-white/50",
}

export const weightClasses = {
  bold: "font-semibold",
  semibold: "font-normal",
  regular: "font-light",
}

export const sizeClasses = {
  small: "text-sm",
  regular: "text-base",
  large: "text-lg",
}
