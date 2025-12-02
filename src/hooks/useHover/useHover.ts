/*
 * useHover.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { RefObject, useEffect, useRef, useState } from "react"
import type { UseHoverReturn } from "./useHover.types"

export default function useHover<ElementRef extends HTMLElement = HTMLElement>(
  ref?: RefObject<ElementRef | null>
): UseHoverReturn<ElementRef> {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const hoverRef = useRef<ElementRef | null>(null)

  useEffect(() => {
    const elementRef = ref || hoverRef
    const element = elementRef.current

    if (!element) return

    const onMouseEnter = () => setIsHovered(true)
    const onMouseLeave = () => setIsHovered(false)
    const onTouchStart = () => setIsHovered(true)
    const onTouchEnd = () => setIsHovered(false)

    element.addEventListener("mouseenter", onMouseEnter)
    element.addEventListener("mouseleave", onMouseLeave)
    element.addEventListener("touchstart", onTouchStart)
    element.addEventListener("touchend", onTouchEnd)

    return () => {
      element.removeEventListener("mouseenter", onMouseEnter)
      element.removeEventListener("mouseleave", onMouseLeave)
      element.removeEventListener("touchstart", onTouchStart)
      element.removeEventListener("touchend", onTouchEnd)
    }
  }, [ref, hoverRef])

  return { isHovered, hoverRef, setHoverStatus: setIsHovered }
}
