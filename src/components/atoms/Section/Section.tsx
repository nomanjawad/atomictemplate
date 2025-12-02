/*
 * Section.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import clsx from "clsx"
import {
  SectionProps,
  directionClasses,
  gapClasses,
  alignClasses,
  justifyClasses,
  paddingClasses,
  marginClasses,
} from "./Section.types"

/**
 * Section - Full-width semantic section wrapper with background styling
 *
 * ARCHITECTURE: Section → Container → Content → Components (outermost layer)
 * Provides full viewport width with backgrounds, semantic HTML, and anchor links.
 *
 * @param {string} id - HTML id for anchor links (#hero, #features)
 * @param {RefObject} ref - React ref for scrolling/observers
 * @param {string} bgColor - Background: "bg-white", "bg-linear-to-br from-primary to-accent"
 * @param {Spacing} padding - Inner padding: none/sm/md/lg/xl/2xl (default: "none")
 * @param {Spacing} margin - Vertical margin: none/sm/md/lg/xl/2xl (default: "none")
 * @param {FlexDirection} direction - Flex direction (default: "row")
 * @param {FlexGap} gap - Gap between Containers (default: "none")
 * @param {FlexAlign} align - Vertical alignment: start/center/end (default: "start")
 * @param {FlexJustify} justify - Horizontal distribution (default: "start")
 * @param {boolean} wrap - Allow wrapping (default: false)
 * @param {string} className - Additional classes (responsive padding, min-height)
 *
 * @example
 * // Basic section
 * <Section bgColor="bg-gray-50" padding="xl">
 *   <Container>
 *     <Content>Content here</Content>
 *   </Container>
 * </Section>
 *
 * @example
 * // Hero section with gradient
 * <Section
 *   id="hero"
 *   bgColor="bg-linear-to-br from-primary to-accent"
 *   className="min-h-screen py-20"
 *   align="center"
 * >
 *   <Container>
 *     <Content direction="column" align="center">
 *       <h1 className="text-white">Welcome</h1>
 *     </Content>
 *   </Container>
 * </Section>
 *
 * @example
 * // Section with background image
 * <Section
 *   bgColor="bg-[url('/hero.jpg')] bg-cover bg-center"
 *   className="py-20 relative before:absolute before:inset-0 before:bg-black/60"
 * >
 *   <Container className="relative z-10">
 *     <Content className="text-white">
 *       <h2>Overlayed Text</h2>
 *     </Content>
 *   </Container>
 * </Section>
 */
export function Section({
  id,
  ref,
  children,
  className,
  bgColor,
  padding = "none",
  margin = "none",
  direction = "row",
  gap = "none",
  align = "start",
  justify = "start",
  wrap = false,
}: SectionProps) {
  return (
    <section
      id={id}
      ref={ref}
      className={clsx(
        "flex w-full relative mx-auto",
        bgColor,
        paddingClasses[padding],
        marginClasses[margin],
        directionClasses[direction],
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </section>
  )
}
