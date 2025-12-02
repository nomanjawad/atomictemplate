/*
 * button.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import React from "react"

export type ButtonType = "button" | "submit" | "reset"

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
export type ButtonSize = "sm" | "md" | "lg"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  type?: ButtonType
  variant?: ButtonVariant
  size?: ButtonSize
}

export const buttonVariants = {
  primary:
    "bg-primary text-white hover:bg-primary/90 active:bg-primary/80 disabled:bg-gray-light disabled:text-muted",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80 disabled:bg-gray-light disabled:text-muted",
  outline:
    "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary/90 disabled:border-gray disabled:text-muted",
  ghost:
    "bg-transparent text-primary hover:bg-primary/10 active:bg-primary/20 disabled:text-muted",
}

export const buttonSizes = {
  sm: "px-sm py-2xs text-sm h-8",
  md: "px-md py-xs text-base h-10",
  lg: "px-lg py-sm text-lg h-12",
}
