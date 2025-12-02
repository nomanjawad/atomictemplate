/*
 * Flex.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ReactNode } from "react"

import clsx from "clsx"

import styles from "./flex.module.css"

export interface FlexProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse"
  justify?: "start" | "center" | "end" | "between"
  gap?: "small" | "medium" | "large" | "x-large" | "xx-large" | "none"
  align?: "start" | "center" | "end"
  childCount?: "six" | "five" | "four" | "three" | "two" | "auto"
  isFullHeight?: boolean
  children: ReactNode
  className?: string
  isWrap?: boolean
}

// Map gap sizes to standard Tailwind spacing
const gapMap = {
  none: "",
  small: "gap-2", // 8px
  medium: "gap-4", // 16px
  large: "gap-6", // 24px
  "x-large": "gap-8", // 32px
  "xx-large": "gap-12", // 48px
}

// Map direction to Tailwind classes
const directionMap = {
  row: "flex-row",
  column: "flex-col",
  "row-reverse": "flex-row-reverse",
  "column-reverse": "flex-col-reverse",
}

// Map justify to Tailwind classes
const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
}

// Map align to Tailwind classes
const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
}

/**
 * Flex - General-purpose flexbox container (LEGACY)
 *
 * ⚠️ DEPRECATION: Use Content component for new development.
 *
 * @param {FlexDirection} direction - row/column/row-reverse/column-reverse (default: "row")
 * @param {FlexJustify} justify - start/center/end/between (default: "start")
 * @param {FlexAlign} align - start/center/end (default: "start")
 * @param {FlexGap} gap - none/small/medium/large/x-large/xx-large (default: "small")
 * @param {boolean} isWrap - Allow wrapping (default: false)
 * @param {boolean} isFullHeight - Use h-full (default: false)
 * @param {ChildCount} childCount - Auto width distribution: auto/two/three/four/five/six
 * @param {string} className - Additional classes
 *
 * @example
 * // Center content
 * <Flex direction="column" align="center" justify="center">
 *   <h1>Centered</h1>
 * </Flex>
 *
 * MIGRATION: Use Content instead
 * <Flex gap="medium"> → <Content gap="md">
 */
export function Flex({
  direction = "row",
  justify = "start",
  align = "start",
  isWrap = false,
  gap = "small",
  childCount = "auto",
  className,
  children,
  isFullHeight,
}: FlexProps) {
  return (
    <div
      className={clsx(
        "flex w-full relative",
        directionMap[direction],
        justifyMap[justify],
        alignMap[align],
        gapMap[gap],
        isWrap && "flex-wrap",
        isFullHeight && "h-full",
        childCount !== "auto" && styles[`child-count-${childCount}`],
        className
      )}
    >
      {children}
    </div>
  )
}
