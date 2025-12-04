/*
 * useSlider.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useState, useRef, useEffect, useMemo, useCallback } from "react"

import {
  UseSliderOption,
  UseSliderReturn,
  SlideDirection,
} from "./useSlider.types"

const DEFAULT_SCROLL_MULTIPLIER = 350
const DEFAULT_INTERVAL_SECOND = 4

/**
 * useSlider: Minimal slider state and controls with auto-advance and swipe.
 *
 * @param options Optional configuration for slider behavior.
 * @returns API to control and observe the slider.
 */
export default function useSlider({
  maxIndex = 1,
  intervalSecond,
  holdSecond,
  autoChangeEnabled,
  defaultIndex = 0,
}: UseSliderOption = {}): UseSliderReturn {
  const containerRef = useRef<HTMLElement | null>(null)
  const autoIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const defaultIntervalSecond = intervalSecond ?? DEFAULT_INTERVAL_SECOND
  const defaultHoldSecond = holdSecond ?? defaultIntervalSecond
  const autoChangeInitiallyEnabled = autoChangeEnabled ?? true

  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex)
  const [isAutoChange, setIsAutoChange] = useState<boolean>(
    autoChangeInitiallyEnabled
  )
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("right")

  // Derived indices
  const nextIndex = useMemo(
    () => (activeIndex + 1 > maxIndex ? 0 : activeIndex + 1),
    [activeIndex, maxIndex]
  )
  const previousIndex = useMemo(
    () => (activeIndex - 1 < 0 ? maxIndex : activeIndex - 1),
    [activeIndex, maxIndex]
  )

  function clearAutoInterval() {
    if (autoIntervalRef.current) {
      clearInterval(autoIntervalRef.current)
      autoIntervalRef.current = null
    }
  }

  function clearResumeTimeout() {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
  }

  const pauseAutoChangeTemporarily = useCallback(() => {
    if (!autoChangeInitiallyEnabled) return
    setIsAutoChange(false)
    clearResumeTimeout()
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoChange(true)
    }, defaultHoldSecond * 1000)
  }, [autoChangeInitiallyEnabled, defaultHoldSecond])

  const updateActiveIndex = useCallback((index: number) => {
    setActiveIndex(index)
    pauseAutoChangeTemporarily()
  }, [pauseAutoChangeTemporarily])

  const forwardIndex = useCallback(() => {
    setSlideDirection("right")
    updateActiveIndex(nextIndex)
  }, [nextIndex, updateActiveIndex])

  const backwardIndex = useCallback(() => {
    setSlideDirection("left")
    updateActiveIndex(previousIndex)
  }, [previousIndex, updateActiveIndex])

  function scrollTo(scrollX: number) {
    containerRef.current?.scrollTo({ left: scrollX, behavior: "smooth" })
  }

  // Auto advance management
  useEffect(() => {
    clearAutoInterval()
    if (isAutoChange) {
      autoIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % (maxIndex + 1))
      }, defaultIntervalSecond * 1000)
    }
    return () => {
      clearAutoInterval()
      clearResumeTimeout()
    }
  }, [isAutoChange, defaultIntervalSecond, maxIndex])

  // Scroll to desired position when active index changes
  useEffect(() => {
    const width = containerRef.current?.clientWidth ?? DEFAULT_SCROLL_MULTIPLIER
    containerRef.current?.scrollTo({
      left: activeIndex * width,
      behavior: "smooth",
    })
  }, [activeIndex])

  // Native touch/swipe handlers (replacing react-swipeable)
  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    let touchStartX = 0
    let touchEndX = 0
    const minSwipeDistance = 50

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
      const distance = touchStartX - touchEndX
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance

      if (isLeftSwipe) {
        forwardIndex()
      } else if (isRightSwipe) {
        backwardIndex()
      }
    }

    element.addEventListener("touchstart", handleTouchStart)
    element.addEventListener("touchmove", handleTouchMove)
    element.addEventListener("touchend", handleTouchEnd)

    return () => {
      element.removeEventListener("touchstart", handleTouchStart)
      element.removeEventListener("touchmove", handleTouchMove)
      element.removeEventListener("touchend", handleTouchEnd)
    }
  }, [nextIndex, previousIndex, backwardIndex, forwardIndex])

  return {
    nextIndex,
    previousIndex,
    scrollTo,
    activeIndex,
    containerRef,
    setActiveIndex,
    updateActiveIndex,
    forwardIndex,
    backwardIndex,
    defaultIntervalSecond,
    slideDirection,
    setIsAutoChange,
  }
}
