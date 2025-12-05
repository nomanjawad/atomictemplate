/*
 * slider.types.ts
 * @atomictemplate/slider
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ReactNode, CSSProperties } from "react"

// ============================================
// Core Types
// ============================================

export type PaginationType = "arrows" | "dots" | "both" | "none"
export type ArrowPosition = "inside" | "outside" | "bottom"
export type Direction = "ltr" | "rtl"
export type SlideTransition = "slide" | "fade" | "none"

// ============================================
// Media Types (for lazy loading)
// ============================================

export type MediaType = "image" | "video" | "gif" | "lottie" | "custom"

export interface MediaSource {
  type: MediaType
  src: string
  poster?: string // For video poster
  alt?: string
  width?: number | string
  height?: number | string
  autoPlay?: boolean // For video/lottie
  loop?: boolean // For video/lottie
  muted?: boolean // For video
}

// ============================================
// Arrow Options
// ============================================

export interface ArrowIcons {
  prev?: ReactNode
  next?: ReactNode
}

export interface ArrowOptions {
  enabled?: boolean
  position?: ArrowPosition
  icons?: ArrowIcons
  className?: string
  showOnHover?: boolean
}

// ============================================
// Autoplay Options
// ============================================

export interface AutoplayOptions {
  enabled?: boolean
  delay?: number
  pauseOnHover?: boolean
  pauseOnFocus?: boolean
  stopOnInteraction?: boolean
  stopOnLastSlide?: boolean
}

// ============================================
// Marquee Options
// ============================================

export interface MarqueeOptions {
  enabled?: boolean
  speed?: number
  pauseOnHover?: boolean
  direction?: "left" | "right"
  gap?: number | string
}

// ============================================
// Lazy Loading Options
// ============================================

export interface LazyLoadOptions {
  enabled?: boolean
  rootMargin?: string
  threshold?: number
  placeholder?: ReactNode
  onLoad?: (index: number) => void
  onError?: (index: number, error: Error) => void
}

// ============================================
// Accessibility Options
// ============================================

export interface A11yOptions {
  enabled?: boolean
  prevSlideMessage?: string
  nextSlideMessage?: string
  firstSlideMessage?: string
  lastSlideMessage?: string
  paginationBulletMessage?: string
  slideRole?: string
  containerRole?: string
  containerRoleDescription?: string
  itemRoleDescription?: string
  liveRegion?: boolean
  liveRegionPoliteness?: "polite" | "assertive" | "off"
}

// ============================================
// Keyboard Navigation Options
// ============================================

export interface KeyboardOptions {
  enabled?: boolean
  onlyInViewport?: boolean
  pageUpDown?: boolean
}

// ============================================
// Responsive Options (Breakpoint-specific)
// ============================================

export interface BreakpointConfig {
  slidesToShow?: number
  slidesToScroll?: number
  gap?: number | string
  arrows?: Partial<ArrowOptions>
  autoplay?: Partial<AutoplayOptions>
  centerMode?: boolean
  loop?: boolean
}

export interface ResponsiveOptions {
  /** Mobile first breakpoints (min-width) */
  sm?: BreakpointConfig  // 640px
  md?: BreakpointConfig  // 768px
  lg?: BreakpointConfig  // 1024px
  xl?: BreakpointConfig  // 1280px
  "2xl"?: BreakpointConfig // 1536px
  
  /** Custom breakpoints */
  [key: number]: BreakpointConfig
}

// ============================================
// Slide Item (Generic)
// ============================================

export interface SlideItem {
  id?: string | number
  content?: ReactNode
  media?: MediaSource
  className?: string
  style?: CSSProperties
  "aria-label"?: string
  onClick?: () => void
  [key: string]: unknown // Allow custom properties
}

// ============================================
// Main Slider Options
// ============================================

export interface SliderOptions {
  // Display
  slidesToShow?: number
  slidesToScroll?: number
  gap?: number | string
  stretch?: boolean
  centerMode?: boolean
  centerPadding?: string

  // Navigation
  pagination?: PaginationType
  arrows?: ArrowOptions
  dots?: {
    enabled?: boolean
    className?: string
    activeClassName?: string
    clickable?: boolean
  }

  // Behavior
  autoplay?: AutoplayOptions
  marquee?: MarqueeOptions
  loop?: boolean
  speed?: number
  direction?: Direction
  reverse?: boolean
  draggable?: boolean
  freeMode?: boolean
  transition?: SlideTransition

  // Features
  lazyLoad?: LazyLoadOptions
  keyboard?: KeyboardOptions
  a11y?: A11yOptions

  // Responsive
  responsive?: ResponsiveOptions

  // Callbacks
  onSlideChange?: (currentIndex: number, previousIndex: number) => void
  onSlideClick?: (index: number, item: SlideItem) => void
  onInit?: () => void
  onDestroy?: () => void
  onReachStart?: () => void
  onReachEnd?: () => void
}

// ============================================
// Render Props (for custom rendering)
// ============================================

export interface SlideRenderProps {
  index: number
  isActive: boolean
  isVisible: boolean
  isLoaded: boolean
  item: SlideItem
}

export type SlideRenderer = (props: SlideRenderProps) => ReactNode

// ============================================
// Image Render Props (for custom image component)
// ============================================

export interface ImageRenderProps {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  loading?: "lazy" | "eager"
  className?: string
  style?: CSSProperties
  onLoad?: () => void
  onError?: () => void
}

export type ImageRenderer = (props: ImageRenderProps) => ReactNode

// ============================================
// Main Slider Props
// ============================================

export interface SliderProps {
  /** Slide items - can be SlideItem objects or React children */
  items?: SlideItem[]
  
  /** React children (alternative to items) */
  children?: ReactNode
  
  /** Slider configuration options */
  options?: SliderOptions
  
  /** Custom class name for the slider container */
  className?: string
  
  /** Custom styles for the slider container */
  style?: CSSProperties
  
  /** Custom slide renderer (for advanced use cases) */
  renderSlide?: SlideRenderer
  
  /** Custom image renderer (e.g., for Next.js Image component) */
  renderImage?: ImageRenderer
  
  /** Custom arrow renderer */
  renderArrow?: (direction: "prev" | "next", onClick: () => void, disabled: boolean) => ReactNode
  
  /** Custom dot renderer */
  renderDot?: (index: number, isActive: boolean, onClick: () => void) => ReactNode
  
  /** Initial slide index */
  initialSlide?: number
  
  /** Unique ID for accessibility */
  id?: string
}

// ============================================
// Slider Ref (for imperative control)
// ============================================

export interface SliderRef {
  /** Go to specific slide */
  goToSlide: (index: number) => void
  
  /** Go to next slide */
  nextSlide: () => void
  
  /** Go to previous slide */
  prevSlide: () => void
  
  /** Get current slide index */
  getCurrentIndex: () => number
  
  /** Get total slides count */
  getTotalSlides: () => number
  
  /** Start autoplay */
  startAutoplay: () => void
  
  /** Stop autoplay */
  stopAutoplay: () => void
  
  /** Check if autoplay is running */
  isAutoplayRunning: () => boolean
  
  /** Update slider (recalculate dimensions) */
  update: () => void
  
  /** Destroy slider instance */
  destroy: () => void
}

// ============================================
// Default Values
// ============================================

export const DEFAULT_OPTIONS: Required<SliderOptions> = {
  slidesToShow: 1,
  slidesToScroll: 1,
  gap: 16,
  stretch: true,
  centerMode: false,
  centerPadding: "50px",
  pagination: "both",
  arrows: {
    enabled: true,
    position: "inside",
    showOnHover: false,
  },
  dots: {
    enabled: true,
    clickable: true,
  },
  autoplay: {
    enabled: false,
    delay: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    stopOnInteraction: false,
    stopOnLastSlide: false,
  },
  marquee: {
    enabled: false,
    speed: 50,
    pauseOnHover: true,
    direction: "left",
  },
  loop: true,
  speed: 500,
  direction: "ltr",
  reverse: false,
  draggable: true,
  freeMode: false,
  transition: "slide",
  lazyLoad: {
    enabled: false,
    rootMargin: "200px",
    threshold: 0,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  a11y: {
    enabled: true,
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    firstSlideMessage: "This is the first slide",
    lastSlideMessage: "This is the last slide",
    paginationBulletMessage: "Go to slide {{index}}",
    slideRole: "group",
    containerRole: "region",
    containerRoleDescription: "carousel",
    itemRoleDescription: "slide",
    liveRegion: true,
    liveRegionPoliteness: "polite",
  },
  responsive: {},
  onSlideChange: () => {},
  onSlideClick: () => {},
  onInit: () => {},
  onDestroy: () => {},
  onReachStart: () => {},
  onReachEnd: () => {},
}

// ============================================
// Breakpoint Values (for responsive)
// ============================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

export type BreakpointKey = keyof typeof BREAKPOINTS
