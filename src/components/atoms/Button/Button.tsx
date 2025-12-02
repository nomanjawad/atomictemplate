/*
 * Button.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import React from "react"
import clsx from "clsx"

import { ButtonProps, buttonVariants, buttonSizes } from "./Button.types"

/**
 * Button - Configurable button component with multiple variants and sizes
 *
 * @param {ButtonVariant} variant - Visual style (primary, secondary, outline, ghost). Default: "primary"
 * @param {ButtonSize} size - Button size (sm, md, lg). Default: "md"
 * @param {ButtonType} type - HTML button type (button, submit, reset). Default: "button"
 * @param {boolean} disabled - Disable button interaction
 * @param {string} className - Additional CSS classes
 * @param {Function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 *
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 *
 * @example
 * <Button variant="outline" size="lg" onClick={handleClick}>Submit</Button>
 */
export default function Button({
  children,
  onClick,
  className,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
