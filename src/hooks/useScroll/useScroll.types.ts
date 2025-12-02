/*
 * useScroll.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { RefObject } from "react"

export interface UseScrollOption {
  maxIndex: number
  scrollDurationMS?: number
  scrollsPerBlock?: number
}

export interface UseScrollReturn {
  progress: number
  activeIndex: number
  breakProgress: number
  triggerRef: RefObject<HTMLDivElement | null>
  blockProgress: number
}
