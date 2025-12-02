/*
 * Container.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import clsx from "clsx"
import {
  ContainerProps,
  directionClasses,
  gapClasses,
  alignClasses,
  justifyClasses,
  paddingClasses,
} from "./Container.types"

/**
 * Container - Max-width content wrapper with responsive centering
 *
 * ARCHITECTURE: Section → Container → Content → Components
 * Constrains content width (1280px max) and centers it horizontally.
 *
 * @param {boolean} isFluid - Use full width (default: false)
 * @param {Padding} padding - Inner padding: none/sm/md/lg/xl/2xl (default: "none")
 * @param {FlexDirection} direction - Flex direction: row/column (default: "row")
 * @param {FlexGap} gap - Space between Content boxes: none/sm/md/lg/xl/2xl (default: "none")
 * @param {FlexAlign} align - Vertical alignment: start/center/end/stretch (default: "start")
 * @param {FlexJustify} justify - Horizontal distribution: start/center/end/between/around/evenly (default: "start")
 * @param {boolean} wrap - Allow flex wrapping (default: false)
 * @param {string} className - Additional CSS classes
 *
 * @example
 * // Basic centered container
 * <Container padding="lg">
 *   <Content>Main content</Content>
 * </Container>
 *
 * @example
 * // Two-column layout
 * <Container direction="row" gap="lg">
 *   <Content className="w-1/2">Left</Content>
 *   <Content className="w-1/2">Right</Content>
 * </Container>
 *
 * @example
 * // Responsive: column on mobile, row on desktop
 * <Container direction="column" gap="md" className="md:flex-row">
 *   <Content>Item 1</Content>
 *   <Content>Item 2</Content>
 * </Container>
 */
export function Container({
  children,
  className,
  isFluid = false,
  padding = "none",
  direction = "row",
  gap = "none",
  align = "start",
  justify = "start",
  wrap = false,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "flex mx-auto",
        isFluid ? "w-full" : "container",
        paddingClasses[padding],
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
