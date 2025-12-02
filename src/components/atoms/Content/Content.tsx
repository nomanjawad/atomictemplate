/*
 * Content.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import clsx from "clsx"
import {
  ContentProps,
  directionClasses,
  gapClasses,
  alignClasses,
  justifyClasses,
} from "./Content.types"

/**
 * Content - Flexbox layout container for actual content components
 *
 * ARCHITECTURE: Section → Container → Content → Components (you are here)
 * Handles layout only. Apply visual styles (padding, shadow, border) via className.
 *
 * @param {FlexDirection} direction - Flex direction: row/column (default: "row")
 * @param {FlexGap} gap - Space between children: none/sm/md/lg/xl/2xl (default: "none")
 * @param {FlexAlign} align - Cross-axis alignment: start/center/end/stretch (default: "start")
 * @param {FlexJustify} justify - Main-axis distribution: start/center/end/between/around/evenly (default: "start")
 * @param {boolean} wrap - Allow wrapping (default: false)
 * @param {string} className - Visual styling: padding, background, border, shadow
 *
 * @example
 * // Card with vertical layout
 * <Content direction="column" gap="md" className="p-6 bg-white rounded-lg shadow-md">
 *   <BaseText>Title</BaseText>
 *   <Button>Action</Button>
 * </Content>
 *
 * @example
 * // Header with space-between
 * <Content direction="row" justify="between" align="center" className="p-4">
 *   <BrandLogo />
 *   <Menu items={items} />
 * </Content>
 *
 * @example
 * // Form field group
 * <Content direction="column" gap="sm" className="w-full">
 *   <label>Email</label>
 *   <InputField type="email" />
 * </Content>
 */
export function Content({
  children,
  className,
  direction = "row",
  gap = "none",
  align = "start",
  justify = "start",
  wrap = false,
}: ContentProps) {
  return (
    <div
      className={clsx(
        "flex w-auto",
        directionClasses[direction],
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </div>
  )
}
