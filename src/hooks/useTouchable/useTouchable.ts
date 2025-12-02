/*
 * useTouchable.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect, useState } from "react"
import type { UseTouchableReturn } from "./useTouchable.types"

/**
 * Detect whether the device is touch-capable.
 * Uses a combination of feature detection and a pointer fallback to confirm touch.
 *
 * @returns {object}
 * @property {boolean} isTouchable - True if the device appears to support touch input.
 *
 * @example
 * const { isTouchable } = useTouchable()
 */
export default function useTouchable(): UseTouchableReturn {
  const [isTouchable, setIsTouchable] = useState<boolean>(false)

  useEffect(() => {
    const detectTouchCapable = () => {
      if (typeof window === "undefined") return false
      const hasTouchStart = "ontouchstart" in window
      const hasMaxTouchPoints =
        typeof navigator !== "undefined" && (navigator.maxTouchPoints ?? 0) > 0
      const isCoarse =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(pointer: coarse)").matches

      const hasMsMax =
        typeof navigator !== "undefined" && (navigator.maxTouchPoints ?? 0) > 0
      return hasMaxTouchPoints || hasTouchStart || isCoarse || hasMsMax
    }

    setIsTouchable(detectTouchCapable())

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") setIsTouchable(true)
    }
    window.addEventListener("pointerdown", onPointerDown, {
      passive: true,
    } as AddEventListenerOptions)

    return () => {
      window.removeEventListener("pointerdown", onPointerDown as EventListener)
    }
  }, [])

  return { isTouchable }
}
