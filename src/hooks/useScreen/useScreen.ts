/*
 * useScreen.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useState, useEffect } from "react"

import { UseScreenReturn } from "./useScreen.types"

const DEFAULT_MOBILE_BREAKPOINT_PX = 550

/**
 * useScreen: Track viewport size and basic input capability.
 *
 * @returns {object} `width`, `height`, `isTouchable`, `isMobileScreen`
 * @property {number} width - Current viewport width in pixels.
 * @property {number} height - Current viewport height in pixels.
 * @property {boolean} isTouchable - True if touch input detected (via useTouchable).
 * @property {boolean} isMobileScreen - True when `width <= DEFAULT_MOBILE_BREAKPOINT_PX`.
 *
 * Adds a resize listener and cleans up on unmount.
 *
 * @example
 * const { width, isMobileScreen } = useScreen({ DEFAULT_MOBILE_BREAKPOINT_PX: 768 })
 */
export default function useScreen(): UseScreenReturn {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const isMobileScreen = width <= DEFAULT_MOBILE_BREAKPOINT_PX

  function handleWindowResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    // Initial size
    handleWindowResize()

    // Event listener for window resize
    window.addEventListener("resize", handleWindowResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  // Touch capability is provided by useTouchable()

  return {
    width,
    height,
    isMobileScreen,
  }
}
