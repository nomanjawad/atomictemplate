/*
 * useHideNavbar.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import type { RefObject } from "react"

export interface UseHideNavbarOption {
  /**
   * React ref object pointing to the element that should trigger navbar hiding
   */
  ref: RefObject<HTMLElement | null>
  /**
   * Threshold for IntersectionObserver (0 to 1)
   * Default: 0 means any intersection will trigger
   */
  threshold?: number
  /**
   * Root margin for IntersectionObserver
   * Default: "0px"
   */
  rootMargin?: string
  /**
   * Whether to enable the hook
   * Default: true
   */
  enabled?: boolean
}

export interface UseHideNavbarReturn {
  /**
   * Whether the element is currently intersecting (visible on screen)
   */
  isIntersecting: boolean
}
