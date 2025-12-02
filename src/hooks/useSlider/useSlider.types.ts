/*
 * useSlider.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import type { RefObject } from "react"
import type { SwipeableHandlers } from "react-swipeable"

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
  swipeHandlers: SwipeableHandlers
  defaultIntervalSecond: number
  slideDirection: SlideDirection
  setIsAutoChange: (value: boolean) => void
}
