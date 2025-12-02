/*
 * Gallery.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import React, { Children } from "react"
import { GalleryProps } from "./gallery.type"
import clsx from "clsx"

/**
 * Gallery - Flexible grid component supporting uniform and masonry layouts
 *
 * @param {"uniform" | "masonry"} variant - Layout type (default: "uniform")
 *   - uniform: Equal aspect ratio tiles in CSS grid
 *   - masonry: Natural height images in CSS columns
 * @param {number} columns - Number of columns (default: 4, responsive on mobile)
 * @param {number} gap - Gap between items in pixels (default: 16)
 * @param {string | number} aspectRatio - Aspect ratio for uniform variant (default: "1 / 1")
 * @param {number} minItemWidth - Minimum width per item in uniform grid (default: 220)
 * @param {boolean} rounded - Apply rounded corners (default: true)
 *
 * @example
 * // Uniform 1:1 grid
 * <Gallery variant="uniform" columns={3} gap={20}>
 *   <BaseImage src={img1} alt="" />
 *   <BaseImage src={img2} alt="" />
 * </Gallery>
 *
 * @example
 * // Masonry with natural heights
 * <Gallery variant="masonry" columns={4}>
 *   <BaseImage src={portrait} alt="" />
 *   <BaseImage src={landscape} alt="" />
 * </Gallery>
 */
export default function Gallery({
  children,
  variant = "uniform",
  gap = 16,
  minItemWidth = 220,
  aspectRatio = "1 / 1",
  columns = 4,
  rounded = true,
  className = "",
}: GalleryProps) {
  const isUniform = variant === "uniform"
  const aspectRatioValue =
    typeof aspectRatio === "number" ? `${aspectRatio} / 1` : aspectRatio

  const wrapperClass = clsx(
    isUniform ? "grid" : "columns-1 sm:columns-2 md:columns-3",
    className
  )

  const preparedChildren = Children.map(children, (child, i) => (
    <div
      key={i}
      className={clsx(
        "w-full overflow-hidden",
        isUniform && "relative",
        !isUniform && "break-inside-avoid",
        rounded && "rounded-sm"
      )}
      style={{
        aspectRatio: isUniform ? aspectRatioValue : "auto",
        marginBottom: !isUniform ? `${gap}px` : undefined,
      }}
    >
      <div
        className={clsx(
          "w-full h-full",
          isUniform && "absolute inset-0",
          !isUniform && "relative"
        )}
      >
        {child}
      </div>
    </div>
  ))

  return (
    <div
      className={wrapperClass}
      style={{
        gap: isUniform ? `${gap}px` : undefined,
        gridTemplateColumns: isUniform
          ? `repeat(auto-fill, minmax(${minItemWidth}px, 1fr))`
          : undefined,
        columnGap: !isUniform ? `${gap}px` : undefined,
        columnCount: !isUniform ? columns : undefined,
      }}
    >
      {preparedChildren}
    </div>
  )
}
