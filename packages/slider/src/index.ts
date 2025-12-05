/*
 * @atomictemplate/slider
 * Enhanced Slider with lazy loading, accessibility, and responsive features
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

// Main component export
export { Slider, default } from './Slider';

// Type exports
export type {
  // Core types
  PaginationType,
  ArrowPosition,
  Direction,
  SlideTransition,

  // Media types
  MediaType,
  MediaSource,

  // Options interfaces
  ArrowIcons,
  ArrowOptions,
  AutoplayOptions,
  MarqueeOptions,
  LazyLoadOptions,
  A11yOptions,
  KeyboardOptions,

  // Responsive
  BreakpointConfig,
  ResponsiveOptions,

  // Slide
  SlideItem,
  SliderOptions,

  // Props
  SliderProps,
  SliderRef,

  // Render props
  SlideRenderProps,
  SlideRenderer,
  
  // Image render props (for custom image components like Next.js Image)
  ImageRenderProps,
  ImageRenderer,
  
  // Breakpoint types
  BreakpointKey,
} from './slider.types';

// Constants
export { DEFAULT_OPTIONS, BREAKPOINTS } from './slider.types';
