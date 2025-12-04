/*
 * Slider.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { gsap } from "gsap"
import InfoCard from "../InfoCard/InfoCard"
import { SliderProps } from "./slider.types"
import styles from "./slider.module.css"

/**
 * Slider - Fully customizable carousel/slider component
 *
 * FEATURES:
 * - GSAP-powered smooth animations
 * - Touch/swipe support on mobile
 * - Autoplay with pause on hover
 * - Infinite loop or finite
 * - Center mode with partial prev/next view
 * - Arrows, dots, or both navigation
 * - Responsive breakpoints (Tailwind)
 * - RTL/LTR direction support
 * - Equal height slides (stretch mode)
 * - Customizable arrows and positioning
 *
 * @example
 * <Slider
 *   items={sliderData}
 *   options={{
 *     slidesToShow: 3,
 *     slidesToScroll: 1,
 *     gap: 16,
 *     pagination: "both",
 *     autoplay: { enabled: true, delay: 3000, pauseOnHover: true },
 *     loop: true,
 *     centerMode: true
 *   }}
 * />
 */
export default function Slider({
  items,
  options = {},
  className = "",
}: SliderProps) {
  const {
    slidesToShow = 3,
    slidesToScroll = 1,
    gap = 16,
    stretch = true,
    centerMode = false,
    pagination = "both",
    arrows = { position: "outside" },
    autoplay = { enabled: false, delay: 3000, pauseOnHover: true },
    marquee = { enabled: false, speed: 50, pauseOnHover: true },
    loop = true,
    speed = 500,
    direction = "ltr",
    reverse = false,
    draggable = true,
  } = options

  // Reverse items if needed
  const displayItems = reverse ? [...items].reverse() : items

  // State
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  // Refs
  const sliderRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const marqueeAnimationRef = useRef<gsap.core.Tween | null>(null)

  // Calculate total slides
  const totalSlides = displayItems.length
  const maxIndex = Math.max(0, totalSlides - slidesToShow)

  // Navigation handlers
  const goToSlide = (index: number) => {
    if (!trackRef.current) return

    let targetIndex = index

    // Handle infinite loop
    if (loop) {
      if (index < 0) targetIndex = maxIndex
      if (index > maxIndex) targetIndex = 0
    } else {
      targetIndex = Math.max(0, Math.min(maxIndex, index))
    }

    setCurrentIndex(targetIndex)

    // Calculate translation
    const slideWidth = trackRef.current.offsetWidth / slidesToShow
    const translateX = -targetIndex * slideWidth * slidesToScroll

    // Animate with GSAP
    gsap.to(trackRef.current, {
      x: direction === "rtl" ? -translateX : translateX,
      duration: speed / 1000,
      ease: "power2.out",
    })
  }

  const nextSlide = () => {
    goToSlide(currentIndex + slidesToScroll)
  }

  const prevSlide = () => {
    goToSlide(currentIndex - slidesToScroll)
  }

  // Marquee effect
  useEffect(() => {
    if (!marquee.enabled || !trackRef.current) return

    const track = trackRef.current
    const trackWidth = track.scrollWidth / 2 // Half because we'll duplicate items

    // Create infinite loop animation
    const animation = gsap.to(track, {
      x: direction === "rtl" ? trackWidth : -trackWidth,
      duration: marquee.speed || 50,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % trackWidth),
      },
    })

    marqueeAnimationRef.current = animation

    // Pause on hover
    if (marquee.pauseOnHover && isHovered) {
      animation.pause()
    } else {
      animation.play()
    }

    return () => {
      animation.kill()
    }
  }, [
    marquee.enabled,
    marquee.speed,
    marquee.pauseOnHover,
    isHovered,
    direction,
  ])

  // Autoplay effect (only if marquee is disabled)
  useEffect(() => {
    if (!autoplay.enabled || marquee.enabled) return

    const startAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }

      autoplayTimerRef.current = setInterval(() => {
        if (!isHovered || !autoplay.pauseOnHover) {
          nextSlide()
        }
      }, autoplay.delay)
    }

    startAutoplay()

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [
    autoplay.enabled,
    autoplay.delay,
    autoplay.pauseOnHover,
    isHovered,
    currentIndex,
    marquee.enabled,
  ])

  // Touch/swipe handlers
  useEffect(() => {
    if (!draggable || !sliderRef.current) return

    const slider = sliderRef.current
    let touchStartX = 0
    let touchEndX = 0
    const minSwipeDistance = 50

    const handleTouchStart = (e: TouchEvent | MouseEvent) => {
      setIsDragging(true)
      touchStartX = "touches" in e ? e.touches[0].clientX : e.clientX
    }

    const handleTouchMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return
      touchEndX = "touches" in e ? e.touches[0].clientX : e.clientX
    }

    const handleTouchEnd = () => {
      if (!isDragging) return
      setIsDragging(false)

      const distance = touchStartX - touchEndX
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance

      if (direction === "ltr") {
        if (isLeftSwipe) nextSlide()
        if (isRightSwipe) prevSlide()
      } else {
        if (isLeftSwipe) prevSlide()
        if (isRightSwipe) nextSlide()
      }
    }

    slider.addEventListener("touchstart", handleTouchStart)
    slider.addEventListener("touchmove", handleTouchMove)
    slider.addEventListener("touchend", handleTouchEnd)
    slider.addEventListener("mousedown", handleTouchStart)
    slider.addEventListener("mousemove", handleTouchMove)
    slider.addEventListener("mouseup", handleTouchEnd)
    slider.addEventListener("mouseleave", handleTouchEnd)

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart)
      slider.removeEventListener("touchmove", handleTouchMove)
      slider.removeEventListener("touchend", handleTouchEnd)
      slider.removeEventListener("mousedown", handleTouchStart)
      slider.removeEventListener("mousemove", handleTouchMove)
      slider.removeEventListener("mouseup", handleTouchEnd)
      slider.removeEventListener("mouseleave", handleTouchEnd)
    }
  }, [draggable, isDragging, direction])

  // Arrow icons
  const PrevIcon = arrows.icons?.prev || <ChevronLeft />
  const NextIcon = arrows.icons?.next || <ChevronRight />

  const gapValue = typeof gap === "number" ? `${gap}px` : gap

  return (
    <div
      ref={sliderRef}
      className={`${styles.slider} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ direction }}
    >
      {/* Arrows - Outside (hidden in marquee mode) */}
      {!marquee.enabled &&
        pagination !== "none" &&
        pagination !== "dots" &&
        arrows.position === "outside" && (
          <>
            <button
              onClick={prevSlide}
              className={`${styles.arrow} ${styles.arrowOutside} ${styles.arrowPrev} ${arrows.className || ""}`}
              disabled={!loop && currentIndex === 0}
              aria-label="Previous slide"
            >
              {PrevIcon}
            </button>
            <button
              onClick={nextSlide}
              className={`${styles.arrow} ${styles.arrowOutside} ${styles.arrowNext} ${arrows.className || ""}`}
              disabled={!loop && currentIndex >= maxIndex}
              aria-label="Next slide"
            >
              {NextIcon}
            </button>
          </>
        )}

      <div className={styles.sliderViewport}>
        {/* Arrows - Inside (hidden in marquee mode) */}
        {!marquee.enabled &&
          pagination !== "none" &&
          pagination !== "dots" &&
          arrows.position !== "outside" && (
            <>
              <button
                onClick={prevSlide}
                className={`${styles.arrow} ${styles.arrowInside} ${styles.arrowPrev} ${arrows.className || ""}`}
                disabled={!loop && currentIndex === 0}
                aria-label="Previous slide"
              >
                {PrevIcon}
              </button>
              <button
                onClick={nextSlide}
                className={`${styles.arrow} ${styles.arrowInside} ${styles.arrowNext} ${arrows.className || ""}`}
                disabled={!loop && currentIndex >= maxIndex}
                aria-label="Next slide"
              >
                {NextIcon}
              </button>
            </>
          )}

        {/* Slider Track */}
        <div
          ref={trackRef}
          className={`${styles.sliderTrack} ${stretch ? styles.stretch : ""} ${centerMode ? styles.centerMode : ""} ${marquee.enabled ? styles.marquee : ""}`}
          style={{
            gap: gapValue,
            cursor:
              draggable && !marquee.enabled
                ? isDragging
                  ? "grabbing"
                  : "grab"
                : "default",
          }}
        >
          {/* Render items */}
          {displayItems.map((item, index) => (
            <div
              key={`original-${index}`}
              className={styles.slide}
              style={{
                flex: marquee.enabled
                  ? "0 0 auto"
                  : `0 0 calc((100% - ${gapValue} * ${slidesToShow - 1}) / ${slidesToShow})`,
                minWidth: marquee.enabled
                  ? "auto"
                  : `calc((100% - ${gapValue} * ${slidesToShow - 1}) / ${slidesToShow})`,
              }}
            >
              <InfoCard options={item} />
            </div>
          ))}

          {/* Duplicate items for seamless marquee loop */}
          {marquee.enabled &&
            displayItems.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className={styles.slide}
                style={{
                  flex: "0 0 auto",
                  minWidth: "auto",
                }}
              >
                <InfoCard options={item} />
              </div>
            ))}
        </div>
      </div>

      {/* Dots (hidden in marquee mode) */}
      {!marquee.enabled && pagination !== "none" && pagination !== "arrows" && (
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
