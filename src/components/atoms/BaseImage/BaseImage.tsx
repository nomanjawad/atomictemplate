/*
 * BaseImage.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import clsx from "clsx"
import React from "react"
import Image from "next/image"
import { logoImage } from "@images"
import { BaseImageProps } from "./BaseImage.types"

import styles from "./base-image.module.css"

/**
 * BaseImage - Simplified image wrapper component using Next.js Image with fill mode
 *
 * Always renders an image in fill mode wrapped in a positioned container.
 * The parent wrapper controls dimensions, and the image fills it completely.
 *
 * @param {ImageSource} src - Image source (URL string or StaticImageData from import)
 * @param {string} alt - Alt text for accessibility. Default: "image"
 * @param {string} className - CSS classes for the wrapper div (controls image dimensions)
 * @param {number | string} width - Width of the wrapper div (e.g., 300, "100%", "20rem")
 * @param {number | string} height - Height of the wrapper div (e.g., 200, "50vh", "15rem")
 * @param {string} objectFit - How image fits in container (cover, contain, fill, none, scale-down). Default: "cover"
 * @param {boolean} priority - Load image with high priority (for above-the-fold images). Default: false
 *
 * @example
 * // Fixed size with props
 * <BaseImage src="/photo.jpg" width={400} height={300} alt="Photo" />
 *
 * @example
 * // Responsive with Tailwind classes
 * <BaseImage src={logoImage} className="w-full h-64" alt="Logo" />
 *
 * @example
 * // Contain mode for logos
 * <BaseImage src="/logo.svg" width="200px" height="100px" objectFit="contain" />
 */
export default function BaseImage({
  src,
  alt = "image",
  className,
  width,
  height,
  objectFit = "cover",
  priority = false,
}: BaseImageProps) {
  if (!src) {
    return (
      <div className={styles.placeholder_image}>
        <Image alt="logo" src={logoImage} width={200} height={60} />
      </div>
    )
  }

  return (
    <div
      className={clsx(styles.image_wrapper, className)}
      style={{
        width,
        height,
      }}
    >
      <Image
        alt={alt}
        src={src}
        fill
        priority={priority}
        style={{ objectFit }}
      />
    </div>
  )
}
