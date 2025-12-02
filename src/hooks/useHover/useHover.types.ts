/*
 * useHover.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import type { RefObject } from "react"

export interface UseHoverReturn<ElementRef extends HTMLElement = HTMLElement> {
  isHovered: boolean
  hoverRef: RefObject<ElementRef | null>
  setHoverStatus: (value: boolean) => void
}
