/*
 * Section.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ReactNode, RefObject } from "react"

export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse"
export type FlexAlign = "start" | "center" | "end" | "stretch"
export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
export type FlexGap = "none" | "sm" | "md" | "lg" | "xl" | "2xl"
export type Spacing = "none" | "sm" | "md" | "lg" | "xl" | "2xl"

export interface SectionProps {
  id?: string
  ref?: RefObject<HTMLDivElement | null>
  children: ReactNode
  className?: string
  bgColor?: string
  padding?: Spacing
  margin?: Spacing
  direction?: FlexDirection
  gap?: FlexGap
  align?: FlexAlign
  justify?: FlexJustify
  wrap?: boolean
}

export const directionClasses: Record<FlexDirection, string> = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
}

export const gapClasses: Record<FlexGap, string> = {
  none: "gap-0",
  sm: "gap-2", // 8px
  md: "gap-4", // 16px
  lg: "gap-6", // 24px
  xl: "gap-8", // 32px
  "2xl": "gap-12", // 48px
}

export const alignClasses: Record<FlexAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
}

export const justifyClasses: Record<FlexJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

export const paddingClasses: Record<Spacing, string> = {
  none: "p-0",
  sm: "p-2", // 8px
  md: "p-4", // 16px
  lg: "p-6", // 24px
  xl: "p-8", // 32px
  "2xl": "p-12", // 48px
}

export const marginClasses: Record<Spacing, string> = {
  none: "my-0",
  sm: "my-2", // 8px
  md: "my-4", // 16px
  lg: "my-6", // 24px
  xl: "my-8", // 32px
  "2xl": "my-12", // 48px
}
