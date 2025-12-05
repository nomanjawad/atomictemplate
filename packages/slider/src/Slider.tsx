/**
 * @atomictemplate/slider
 * Enhanced Slider Component with full accessibility, lazy loading, and responsive features
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 */

"use client"

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react"
import { gsap } from "gsap"

import type {
  SliderProps,
  SliderRef,
  SliderOptions,
  SlideItem,
  LazyLoadOptions,
  A11yOptions,
  SlideRenderProps,
  SlideRenderer,
  MediaSource,
  BreakpointConfig,
  ImageRenderer,
} from "./slider.types"
import { BREAKPOINTS, DEFAULT_OPTIONS } from "./slider.types"
import styles from "./slider.module.css"

/* ============================================
   Helper Functions
   ============================================ */

/**
 * Clamp a number between min and max
 */
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

/**
 * Get current breakpoint based on window width
 */
function getCurrentBreakpoint(width: number): keyof typeof BREAKPOINTS | null {
  if (width >= BREAKPOINTS["2xl"]) return "2xl"
  if (width >= BREAKPOINTS.xl) return "xl"
  if (width >= BREAKPOINTS.lg) return "lg"
  if (width >= BREAKPOINTS.md) return "md"
  if (width >= BREAKPOINTS.sm) return "sm"
  return null
}

/**
 * Merge responsive config with current options
 */
function getResponsiveValue<K extends keyof BreakpointConfig>(
  key: K,
  options: SliderOptions,
  windowWidth: number,
): BreakpointConfig[K] | undefined {
  if (!options.responsive) return undefined

  const breakpoint = getCurrentBreakpoint(windowWidth)
  if (!breakpoint) return undefined

  const config = options.responsive[breakpoint]
  return config?.[key]
}

/* ============================================
   Arrow Icons (SVG)
   ============================================ */

const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

/* ============================================
   Lazy Load Hook
   ============================================ */

interface UseLazyLoadReturn {
  isLoaded: boolean
  isError: boolean
  containerRef: React.RefObject<HTMLDivElement | null>
  handleError: (error: Error) => void
}

function useLazyLoad(
  options: LazyLoadOptions | undefined,
  slideIndex: number,
  currentSlide: number,
  slidesToShow: number,
): UseLazyLoadReturn {
  const [isLoaded, setIsLoaded] = useState(!options?.enabled)
  const [isError, setIsError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Expose setIsError for external use
  const handleError = useCallback(
    (error: Error) => {
      setIsError(true)
      options?.onError?.(slideIndex, error)
    },
    [options, slideIndex],
  )

  useEffect(() => {
    if (!options?.enabled) {
      setIsLoaded(true)
      return
    }

    // Preload slides within visible range + 1
    const visibleStart = currentSlide
    const visibleEnd = currentSlide + slidesToShow
    const shouldPreload =
      slideIndex >= visibleStart - 1 && slideIndex <= visibleEnd + 1

    if (shouldPreload) {
      setIsLoaded(true)
      return
    }

    // Intersection Observer for lazy loading
    const element = containerRef.current
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsLoaded(true)
      return
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true)
            options.onLoad?.(slideIndex)
            observerRef.current?.disconnect()
          }
        })
      },
      {
        rootMargin: options.rootMargin ?? "200px",
        threshold: options.threshold ?? 0,
      },
    )

    observerRef.current.observe(element)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [options, slideIndex, currentSlide, slidesToShow])

  return { isLoaded, isError, containerRef, handleError }
}

/* ============================================
   Media Renderer Component
   ============================================ */

interface MediaRendererProps {
  media: MediaSource
  isLoaded: boolean
  className?: string
  renderImage?: ImageRenderer
}

 
const MediaRenderer: React.FC<MediaRendererProps> = ({
  media,
  isLoaded,
  className,
  renderImage,
}) => {
  if (!isLoaded) {
    return <div className={styles.placeholder} aria-hidden="true" />
  }

  switch (media.type) {
    case "image":
      // Use custom image renderer if provided (e.g., Next.js Image)
      if (renderImage) {
        return renderImage({
          src: media.src,
          alt: media.alt ?? "",
          width: media.width,
          height: media.height,
          loading: "lazy",
          className: `${styles.slideMedia} ${className ?? ""}`,
        })
      }
      // Default to native img element
      return (
        <img
          src={media.src}
          alt={media.alt ?? ""}
          className={`${styles.slideMedia} ${className ?? ""}`}
          loading="lazy"
        />
      )

    case "video":
      return (
        <video
          src={media.src}
          poster={media.poster}
          autoPlay={media.autoPlay ?? false}
          muted={media.muted ?? true}
          loop={media.loop ?? true}
          className={`${styles.slideVideo} ${className ?? ""}`}
        />
      )

    case "gif":
      // Use custom image renderer if provided (e.g., Next.js Image)
      if (renderImage) {
        return renderImage({
          src: media.src,
          alt: media.alt ?? "",
          className: `${styles.slideMedia} ${className ?? ""}`,
        })
      }
      return (
        <img
          src={media.src}
          alt={media.alt ?? ""}
          className={`${styles.slideMedia} ${className ?? ""}`}
        />
      )

    case "lottie":
      // Lottie requires external library - render placeholder with data attributes
      return (
        <div
          className={`${styles.slideLottie} ${className ?? ""}`}
          data-lottie-src={media.src}
          data-lottie-loop={media.loop ?? true}
          data-lottie-autoplay={media.autoPlay ?? true}
          aria-label={media.alt}
        />
      )

    default:
      return null
  }
}

/* ============================================
   Slide Component
   ============================================ */

interface SlideComponentProps {
  item: SlideItem | ReactNode
  index: number
  currentSlide: number
  slidesToShow: number
  slideWidth: string
  gap: number | string
  lazyLoad?: LazyLoadOptions
  a11y?: A11yOptions
  renderSlide?: SlideRenderer
  renderImage?: ImageRenderer
  transition: "slide" | "fade" | "none"
  totalSlides: number
}

const SlideComponent: React.FC<SlideComponentProps> = ({
  item,
  index,
  currentSlide,
  slidesToShow,
  slideWidth,
  gap,
  lazyLoad,
  a11y,
  renderSlide,
  renderImage,
  transition,
  totalSlides,
}) => {
  const { isLoaded, containerRef } = useLazyLoad(
    lazyLoad,
    index,
    currentSlide,
    slidesToShow,
  )
  const isActive = index >= currentSlide && index < currentSlide + slidesToShow

  const slideStyle: React.CSSProperties = {
    width: slideWidth,
    marginRight: typeof gap === "number" ? `${gap}px` : gap,
  }

  const slideClasses = [
    styles.slide,
    transition === "fade" && isActive ? styles.active : "",
    !isLoaded ? styles.loading : "",
  ]
    .filter(Boolean)
    .join(" ")

  // ARIA attributes for accessibility
  const ariaAttrs = a11y?.enabled
    ? {
        role: a11y.slideRole ?? "group",
        "aria-roledescription": a11y.itemRoleDescription ?? "slide",
        "aria-label": `Slide ${index + 1} of ${totalSlides}`,
        "aria-hidden": transition === "fade" && !isActive,
        tabIndex: isActive ? 0 : -1,
      }
    : {}

  // Check if item is a SlideItem object
  const isSlideItem = (val: unknown): val is SlideItem => {
    return typeof val === "object" && val !== null && !React.isValidElement(val)
  }

  // Custom render function
  if (renderSlide && isSlideItem(item)) {
    const renderProps: SlideRenderProps = {
      item,
      index,
      isActive,
      isLoaded,
      isVisible: isLoaded && isActive,
    }

    return (
      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={slideClasses}
        style={slideStyle}
        {...ariaAttrs}
      >
        {renderSlide(renderProps)}
      </div>
    )
  }

  // Render content
  let content: ReactNode

  if (React.isValidElement(item)) {
    // Direct React element
    content = item
  } else if (isSlideItem(item)) {
    // SlideItem object
    if (item.media) {
      content = (
        <MediaRenderer
          media={item.media}
          isLoaded={isLoaded}
          renderImage={renderImage}
        />
      )
    } else if (item.content) {
      content = item.content
    } else {
      content = null
    }
  } else {
    // Fallback
    content = <div>{String(item)}</div>
  }

  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={slideClasses}
      style={slideStyle}
      onClick={isSlideItem(item) ? item.onClick : undefined}
      {...ariaAttrs}
    >
      {content}
    </div>
  )
}

/* ============================================
   Main Slider Component
   ============================================ */

function SliderInner(
  props: SliderProps,
  ref: React.ForwardedRef<SliderRef>,
): React.ReactElement {
  const {
    items = [],
    children,
    options = {},
    className,
    style,
    renderSlide,
    renderImage,
    renderArrow,
    renderDot,
    initialSlide = 0,
    id,
  } = props

  // Merge options with defaults
  const mergedOptions: SliderOptions = useMemo(
    () => ({
      ...DEFAULT_OPTIONS,
      ...options,
      arrows: { ...DEFAULT_OPTIONS.arrows, ...options.arrows },
      dots: { ...DEFAULT_OPTIONS.dots, ...options.dots },
      autoplay: { ...DEFAULT_OPTIONS.autoplay, ...options.autoplay },
      marquee: { ...DEFAULT_OPTIONS.marquee, ...options.marquee },
      lazyLoad: { ...DEFAULT_OPTIONS.lazyLoad, ...options.lazyLoad },
      a11y: { ...DEFAULT_OPTIONS.a11y, ...options.a11y },
      keyboard: { ...DEFAULT_OPTIONS.keyboard, ...options.keyboard },
    }),
    [options],
  )

  // State
  const [currentSlide, setCurrentSlide] = useState(initialSlide)
  const [isAutoplayActive, setIsAutoplayActive] = useState(
    mergedOptions.autoplay?.enabled ?? false,
  )
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  )

  // Refs
  const sliderRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartRef = useRef<number>(0)
  const touchDeltaRef = useRef<number>(0)

  // Convert children to slide items if provided
  const slideItems = useMemo(() => {
    if (children) {
      return React.Children.toArray(children)
    }
    return items
  }, [children, items])

  const totalSlides = slideItems.length

  // Get effective options based on responsive config
  const slidesToShow =
    getResponsiveValue("slidesToShow", mergedOptions, windowWidth) ??
    mergedOptions.slidesToShow ??
    1
  const slidesToScroll =
    getResponsiveValue("slidesToScroll", mergedOptions, windowWidth) ??
    mergedOptions.slidesToScroll ??
    1
  const gap =
    getResponsiveValue("gap", mergedOptions, windowWidth) ??
    mergedOptions.gap ??
    16
  const loop =
    getResponsiveValue("loop", mergedOptions, windowWidth) ??
    mergedOptions.loop ??
    true
  const centerMode =
    getResponsiveValue("centerMode", mergedOptions, windowWidth) ??
    mergedOptions.centerMode ??
    false

  const showArrows =
    mergedOptions.pagination === "arrows" || mergedOptions.pagination === "both"
  const showDots =
    mergedOptions.pagination === "dots" || mergedOptions.pagination === "both"
  const arrowsEnabled = mergedOptions.arrows?.enabled ?? true
  const dotsEnabled = mergedOptions.dots?.enabled ?? true
  const transition = mergedOptions.transition ?? "slide"
  const speed = mergedOptions.speed ?? 500
  const isMarquee = mergedOptions.marquee?.enabled ?? false

  const maxSlide = Math.max(0, totalSlides - slidesToShow)
  const numericGap =
    typeof gap === "number" ? gap : parseInt(String(gap), 10) || 0
  const slideWidth = `calc((100% - ${numericGap * (slidesToShow - 1)}px) / ${slidesToShow})`

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Call onInit callback
  useEffect(() => {
    mergedOptions.onInit?.()
    return () => {
      mergedOptions.onDestroy?.()
    }
  }, [mergedOptions])

  // Navigation functions
  const goToSlide = useCallback(
    (index: number) => {
      const prevSlide = currentSlide
      let newIndex = index

      if (loop) {
        if (newIndex < 0) newIndex = maxSlide
        if (newIndex > maxSlide) newIndex = 0
      } else {
        newIndex = clamp(newIndex, 0, maxSlide)
      }

      setCurrentSlide(newIndex)
      mergedOptions.onSlideChange?.(newIndex, prevSlide)

      // Check for reaching start/end
      if (newIndex === 0) mergedOptions.onReachStart?.()
      if (newIndex === maxSlide) mergedOptions.onReachEnd?.()

      if (trackRef.current && transition === "slide") {
        const offset = -(newIndex * (100 / slidesToShow))
        gsap.to(trackRef.current, {
          xPercent: offset,
          duration: speed / 1000,
          ease: "power2.out",
        })
      }
    },
    [
      currentSlide,
      loop,
      maxSlide,
      slidesToShow,
      transition,
      speed,
      mergedOptions,
    ],
  )

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + slidesToScroll)
  }, [currentSlide, slidesToScroll, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - slidesToScroll)
  }, [currentSlide, slidesToScroll, goToSlide])

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)

    const delay = mergedOptions.autoplay?.delay ?? 3000

    autoplayRef.current = setInterval(() => {
      if (mergedOptions.autoplay?.stopOnLastSlide && currentSlide >= maxSlide) {
        if (autoplayRef.current) clearInterval(autoplayRef.current)
        setIsAutoplayActive(false)
        return
      }
      nextSlide()
    }, delay)

    setIsAutoplayActive(true)
  }, [mergedOptions.autoplay, currentSlide, maxSlide, nextSlide])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
    setIsAutoplayActive(false)
  }, [])

  // Initialize autoplay
  useEffect(() => {
    if (mergedOptions.autoplay?.enabled && !isMarquee) {
      startAutoplay()
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [mergedOptions.autoplay?.enabled, isMarquee, startAutoplay])

  // Marquee mode animation
  useEffect(() => {
    if (!isMarquee || !trackRef.current) return

    const marqueeOptions = mergedOptions.marquee!
    const speed = marqueeOptions.speed ?? 50
    const direction = marqueeOptions.direction === "right" ? 1 : -1

    // Clone slides for seamless loop
    const track = trackRef.current
    const clone = track.innerHTML
    track.innerHTML = clone + clone

    const animation = gsap.to(track, {
      xPercent: direction * -50,
      duration: (totalSlides * 100) / speed,
      ease: "none",
      repeat: -1,
    })

    const handleHover = () => {
      if (marqueeOptions.pauseOnHover) animation.pause()
    }
    const handleLeave = () => {
      if (marqueeOptions.pauseOnHover) animation.resume()
    }

    track.addEventListener("mouseenter", handleHover)
    track.addEventListener("mouseleave", handleLeave)

    return () => {
      animation.kill()
      track.innerHTML = clone
      track.removeEventListener("mouseenter", handleHover)
      track.removeEventListener("mouseleave", handleLeave)
    }
  }, [isMarquee, mergedOptions.marquee, totalSlides])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!mergedOptions.keyboard?.enabled) return

      const key = e.key

      switch (key) {
        case "ArrowLeft":
          e.preventDefault()
          prevSlide()
          break
        case "ArrowRight":
          e.preventDefault()
          nextSlide()
          break
        case "Home":
          e.preventDefault()
          goToSlide(0)
          break
        case "End":
          e.preventDefault()
          goToSlide(maxSlide)
          break
        case "PageUp":
          if (mergedOptions.keyboard.pageUpDown) {
            e.preventDefault()
            goToSlide(currentSlide - slidesToShow)
          }
          break
        case "PageDown":
          if (mergedOptions.keyboard.pageUpDown) {
            e.preventDefault()
            goToSlide(currentSlide + slidesToShow)
          }
          break
      }
    },
    [
      mergedOptions.keyboard,
      prevSlide,
      nextSlide,
      goToSlide,
      maxSlide,
      currentSlide,
      slidesToShow,
    ],
  )

  // Touch handlers (for draggable)
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!mergedOptions.draggable) return
      touchStartRef.current = e.touches[0].clientX
      touchDeltaRef.current = 0
    },
    [mergedOptions.draggable],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!mergedOptions.draggable) return
      touchDeltaRef.current = e.touches[0].clientX - touchStartRef.current
    },
    [mergedOptions.draggable],
  )

  const handleTouchEnd = useCallback(() => {
    if (!mergedOptions.draggable) return

    const delta = touchDeltaRef.current
    const threshold = 50

    if (Math.abs(delta) > threshold) {
      if (mergedOptions.autoplay?.stopOnInteraction) {
        stopAutoplay()
      }

      if (delta > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }

    touchStartRef.current = 0
    touchDeltaRef.current = 0
  }, [
    mergedOptions.draggable,
    mergedOptions.autoplay,
    stopAutoplay,
    nextSlide,
    prevSlide,
  ])

  // Pause on hover
  const handleMouseEnter = useCallback(() => {
    if (mergedOptions.autoplay?.pauseOnHover && isAutoplayActive) {
      stopAutoplay()
    }
  }, [mergedOptions.autoplay, isAutoplayActive, stopAutoplay])

  const handleMouseLeave = useCallback(() => {
    if (
      mergedOptions.autoplay?.pauseOnHover &&
      mergedOptions.autoplay.enabled &&
      !isAutoplayActive
    ) {
      startAutoplay()
    }
  }, [mergedOptions.autoplay, isAutoplayActive, startAutoplay])

  // Update function for recalculating dimensions
  const update = useCallback(() => {
    if (trackRef.current && transition === "slide") {
      const offset = -(currentSlide * (100 / slidesToShow))
      gsap.set(trackRef.current, { xPercent: offset })
    }
  }, [currentSlide, slidesToShow, transition])

  // Destroy function
  const destroy = useCallback(() => {
    stopAutoplay()
    if (trackRef.current) {
      gsap.killTweensOf(trackRef.current)
    }
  }, [stopAutoplay])

  // Expose imperative handle
  useImperativeHandle(
    ref,
    () => ({
      goToSlide,
      nextSlide,
      prevSlide,
      getCurrentIndex: () => currentSlide,
      getTotalSlides: () => totalSlides,
      startAutoplay,
      stopAutoplay,
      isAutoplayRunning: () => isAutoplayActive,
      update,
      destroy,
    }),
    [
      goToSlide,
      nextSlide,
      prevSlide,
      currentSlide,
      totalSlides,
      startAutoplay,
      stopAutoplay,
      isAutoplayActive,
      update,
      destroy,
    ],
  )

  // Can navigate checks
  const canGoPrev = loop || currentSlide > 0
  const canGoNext = loop || currentSlide < maxSlide

  // Track classes
  const trackClasses = [
    styles.sliderTrack,
    transition === "fade" ? styles.fade : "",
    isMarquee ? styles.marquee : "",
    mergedOptions.stretch ? styles.stretch : "",
    centerMode ? styles.centerMode : "",
  ]
    .filter(Boolean)
    .join(" ")

  // Arrow classes
  const getArrowClasses = (direction: "prev" | "next") => {
    const baseClass = styles.arrow
    const directionClass =
      direction === "prev" ? styles.arrowPrev : styles.arrowNext
    const position = mergedOptions.arrows?.position ?? "inside"
    const positionClass =
      position === "inside"
        ? styles.arrowInside
        : position === "outside"
          ? styles.arrowOutside
          : styles.arrowBottom
    const hoverClass = mergedOptions.arrows?.showOnHover
      ? styles.arrowShowOnHover
      : ""

    return [baseClass, directionClass, positionClass, hoverClass]
      .filter(Boolean)
      .join(" ")
  }

  // ARIA attributes
  const a11yOptions = mergedOptions.a11y
  const sliderAriaAttrs = a11yOptions?.enabled
    ? {
        role: a11yOptions.containerRole ?? "region",
        "aria-roledescription":
          a11yOptions.containerRoleDescription ?? "carousel",
        "aria-label": "Slider",
      }
    : {}

  return (
    <div
      ref={sliderRef}
      id={id}
      className={`${styles.slider} ${className ?? ""}`}
      style={style}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={mergedOptions.keyboard?.enabled ? 0 : undefined}
      {...sliderAriaAttrs}
    >
      {/* Viewport */}
      <div className={styles.sliderViewport}>
        {/* Track */}
        <div ref={trackRef} className={trackClasses}>
          {slideItems.map((item, index) => (
            <SlideComponent
              key={index}
              item={item}
              index={index}
              currentSlide={currentSlide}
              slidesToShow={slidesToShow}
              slideWidth={slideWidth}
              gap={gap}
              lazyLoad={mergedOptions.lazyLoad}
              a11y={mergedOptions.a11y}
              renderSlide={renderSlide}
              renderImage={renderImage}
              transition={transition}
              totalSlides={totalSlides}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && arrowsEnabled && !isMarquee && (
        <>
          {renderArrow ? (
            renderArrow("prev", prevSlide, !canGoPrev)
          ) : (
            <button
              type="button"
              className={getArrowClasses("prev")}
              onClick={prevSlide}
              disabled={!canGoPrev}
              aria-label={a11yOptions?.prevSlideMessage ?? "Previous slide"}
            >
              {mergedOptions.arrows?.icons?.prev ?? <ChevronLeftIcon />}
            </button>
          )}
          {renderArrow ? (
            renderArrow("next", nextSlide, !canGoNext)
          ) : (
            <button
              type="button"
              className={getArrowClasses("next")}
              onClick={nextSlide}
              disabled={!canGoNext}
              aria-label={a11yOptions?.nextSlideMessage ?? "Next slide"}
            >
              {mergedOptions.arrows?.icons?.next ?? <ChevronRightIcon />}
            </button>
          )}
        </>
      )}

      {/* Dots */}
      {showDots && dotsEnabled && !isMarquee && (
        <div
          className={styles.dots}
          role="tablist"
          aria-label="Slide navigation"
        >
          {Array.from({ length: maxSlide + 1 }).map((_, index) => {
            const isActive = index === currentSlide

            if (renderDot) {
              return (
                <React.Fragment key={index}>
                  {renderDot(index, isActive, () => goToSlide(index))}
                </React.Fragment>
              )
            }

            return (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${isActive ? styles.dotActive : ""} ${
                  mergedOptions.dots?.className ?? ""
                } ${isActive ? (mergedOptions.dots?.activeClassName ?? "") : ""}`}
                onClick={
                  mergedOptions.dots?.clickable !== false
                    ? () => goToSlide(index)
                    : undefined
                }
                role="tab"
                aria-selected={isActive}
                aria-label={
                  a11yOptions?.paginationBulletMessage?.replace(
                    "{{index}}",
                    String(index + 1),
                  ) ?? `Go to slide ${index + 1}`
                }
              />
            )
          })}
        </div>
      )}

      {/* Live region for screen readers */}
      {a11yOptions?.enabled && a11yOptions?.liveRegion && (
        <div
          className={styles.liveRegion}
          role="status"
          aria-live={a11yOptions.liveRegionPoliteness ?? "polite"}
          aria-atomic="true"
        >
          Slide {currentSlide + 1} of {totalSlides}
        </div>
      )}
    </div>
  )
}

// Forward ref wrapper
export const Slider = forwardRef<SliderRef, SliderProps>(SliderInner)

// Display name for debugging
Slider.displayName = "Slider"

export default Slider
