/*
 * slider.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ReactNode } from "react"
import { InfoCardOption } from "../InfoCard/infoCard.types"

export type PaginationType = "arrows" | "dots" | "both" | "none"
export type ArrowPosition = "inside" | "outside"
export type Direction = "ltr" | "rtl"

export interface ArrowIcons {
  prev?: ReactNode
  next?: ReactNode
}

export interface ArrowOptions {
  position?: ArrowPosition
  icons?: ArrowIcons
  className?: string
}

export interface AutoplayOptions {
  enabled?: boolean
  delay?: number
  pauseOnHover?: boolean
}

export interface MarqueeOptions {
  enabled?: boolean
  speed?: number
  pauseOnHover?: boolean
}

export interface ResponsiveConfig {
  slidesToShow?: number
  slidesToScroll?: number
}

export interface ResponsiveOptions {
  sm?: ResponsiveConfig
  md?: ResponsiveConfig
  lg?: ResponsiveConfig
  xl?: ResponsiveConfig
  "2xl"?: ResponsiveConfig
}

export interface SliderOptions {
  // Display
  slidesToShow?: number
  slidesToScroll?: number
  gap?: number | string
  stretch?: boolean
  centerMode?: boolean

  // Navigation
  pagination?: PaginationType
  arrows?: ArrowOptions

  // Behavior
  autoplay?: AutoplayOptions
  marquee?: MarqueeOptions
  loop?: boolean
  speed?: number
  direction?: Direction
  reverse?: boolean
  draggable?: boolean

  // Responsive
  responsive?: ResponsiveOptions
}

export interface SliderProps {
  items: InfoCardOption[]
  options?: SliderOptions
  className?: string
}
