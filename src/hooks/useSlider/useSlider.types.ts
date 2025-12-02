/*
 * useSlider.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import type { RefObject } from "react"

export type SlideDirection = "left" | "right"

export interface UseSliderOption {
  maxIndex?: number
  intervalSecond?: number
  holdSecond?: number
  autoChangeEnabled?: boolean
  defaultIndex?: number
}

export interface UseSliderReturn {
  nextIndex: number
  previousIndex: number
  scrollTo: (scrollX: number) => void
  activeIndex: number
  containerRef: RefObject<HTMLElement | null>
  setActiveIndex: (index: number) => void
  updateActiveIndex: (index: number) => void
  forwardIndex: () => void
  backwardIndex: () => void
  defaultIntervalSecond: number
  slideDirection: SlideDirection
  setIsAutoChange: (value: boolean) => void
}
