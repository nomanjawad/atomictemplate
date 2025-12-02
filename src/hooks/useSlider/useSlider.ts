/*
 * useSlider.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { useSwipeable } from "react-swipeable"

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

  function pauseAutoChangeTemporarily() {
    if (!autoChangeInitiallyEnabled) return
    setIsAutoChange(false)
    clearResumeTimeout()
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoChange(true)
    }, defaultHoldSecond * 1000)
  }

  function updateActiveIndex(index: number) {
    setActiveIndex(index)
    pauseAutoChangeTemporarily()
  }

  function forwardIndex() {
    setSlideDirection("right")
    updateActiveIndex(nextIndex)
  }

  function backwardIndex() {
    setSlideDirection("left")
    updateActiveIndex(previousIndex)
  }

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

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => forwardIndex(),
    onSwipedRight: () => backwardIndex(),
    preventDefaultTouchmoveEvent: true,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

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
    swipeHandlers,
    defaultIntervalSecond,
    slideDirection,
    setIsAutoChange,
  }
}
