/*
 * BaseImage.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

import { ImageSource } from "@types"

export interface BaseImageProps {
  src?: ImageSource
  alt?: string
  className?: string
  width?: number | string
  height?: number | string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  priority?: boolean
}
