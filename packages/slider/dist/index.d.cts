import React, { ReactNode, CSSProperties } from 'react';

type PaginationType = "arrows" | "dots" | "both" | "none";
type ArrowPosition = "inside" | "outside" | "bottom";
type Direction = "ltr" | "rtl";
type SlideTransition = "slide" | "fade" | "none";
type MediaType = "image" | "video" | "gif" | "lottie" | "custom";
interface MediaSource {
    type: MediaType;
    src: string;
    poster?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
}
interface ArrowIcons {
    prev?: ReactNode;
    next?: ReactNode;
}
interface ArrowOptions {
    enabled?: boolean;
    position?: ArrowPosition;
    icons?: ArrowIcons;
    className?: string;
    showOnHover?: boolean;
}
interface AutoplayOptions {
    enabled?: boolean;
    delay?: number;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    stopOnInteraction?: boolean;
    stopOnLastSlide?: boolean;
}
interface MarqueeOptions {
    enabled?: boolean;
    speed?: number;
    pauseOnHover?: boolean;
    direction?: "left" | "right";
    gap?: number | string;
}
interface LazyLoadOptions {
    enabled?: boolean;
    rootMargin?: string;
    threshold?: number;
    placeholder?: ReactNode;
    onLoad?: (index: number) => void;
    onError?: (index: number, error: Error) => void;
}
interface A11yOptions {
    enabled?: boolean;
    prevSlideMessage?: string;
    nextSlideMessage?: string;
    firstSlideMessage?: string;
    lastSlideMessage?: string;
    paginationBulletMessage?: string;
    slideRole?: string;
    containerRole?: string;
    containerRoleDescription?: string;
    itemRoleDescription?: string;
    liveRegion?: boolean;
    liveRegionPoliteness?: "polite" | "assertive" | "off";
}
interface KeyboardOptions {
    enabled?: boolean;
    onlyInViewport?: boolean;
    pageUpDown?: boolean;
}
interface BreakpointConfig {
    slidesToShow?: number;
    slidesToScroll?: number;
    gap?: number | string;
    arrows?: Partial<ArrowOptions>;
    autoplay?: Partial<AutoplayOptions>;
    centerMode?: boolean;
    loop?: boolean;
}
interface ResponsiveOptions {
    /** Mobile first breakpoints (min-width) */
    sm?: BreakpointConfig;
    md?: BreakpointConfig;
    lg?: BreakpointConfig;
    xl?: BreakpointConfig;
    "2xl"?: BreakpointConfig;
    /** Custom breakpoints */
    [key: number]: BreakpointConfig;
}
interface SlideItem {
    id?: string | number;
    content?: ReactNode;
    media?: MediaSource;
    className?: string;
    style?: CSSProperties;
    "aria-label"?: string;
    onClick?: () => void;
    [key: string]: unknown;
}
interface SliderOptions {
    slidesToShow?: number;
    slidesToScroll?: number;
    gap?: number | string;
    stretch?: boolean;
    centerMode?: boolean;
    centerPadding?: string;
    pagination?: PaginationType;
    arrows?: ArrowOptions;
    dots?: {
        enabled?: boolean;
        className?: string;
        activeClassName?: string;
        clickable?: boolean;
    };
    autoplay?: AutoplayOptions;
    marquee?: MarqueeOptions;
    loop?: boolean;
    speed?: number;
    direction?: Direction;
    reverse?: boolean;
    draggable?: boolean;
    freeMode?: boolean;
    transition?: SlideTransition;
    lazyLoad?: LazyLoadOptions;
    keyboard?: KeyboardOptions;
    a11y?: A11yOptions;
    responsive?: ResponsiveOptions;
    onSlideChange?: (currentIndex: number, previousIndex: number) => void;
    onSlideClick?: (index: number, item: SlideItem) => void;
    onInit?: () => void;
    onDestroy?: () => void;
    onReachStart?: () => void;
    onReachEnd?: () => void;
}
interface SlideRenderProps {
    index: number;
    isActive: boolean;
    isVisible: boolean;
    isLoaded: boolean;
    item: SlideItem;
}
type SlideRenderer = (props: SlideRenderProps) => ReactNode;
interface ImageRenderProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
    className?: string;
    style?: CSSProperties;
    onLoad?: () => void;
    onError?: () => void;
}
type ImageRenderer = (props: ImageRenderProps) => ReactNode;
interface SliderProps {
    /** Slide items - can be SlideItem objects or React children */
    items?: SlideItem[];
    /** React children (alternative to items) */
    children?: ReactNode;
    /** Slider configuration options */
    options?: SliderOptions;
    /** Custom class name for the slider container */
    className?: string;
    /** Custom styles for the slider container */
    style?: CSSProperties;
    /** Custom slide renderer (for advanced use cases) */
    renderSlide?: SlideRenderer;
    /** Custom image renderer (e.g., for Next.js Image component) */
    renderImage?: ImageRenderer;
    /** Custom arrow renderer */
    renderArrow?: (direction: "prev" | "next", onClick: () => void, disabled: boolean) => ReactNode;
    /** Custom dot renderer */
    renderDot?: (index: number, isActive: boolean, onClick: () => void) => ReactNode;
    /** Initial slide index */
    initialSlide?: number;
    /** Unique ID for accessibility */
    id?: string;
}
interface SliderRef {
    /** Go to specific slide */
    goToSlide: (index: number) => void;
    /** Go to next slide */
    nextSlide: () => void;
    /** Go to previous slide */
    prevSlide: () => void;
    /** Get current slide index */
    getCurrentIndex: () => number;
    /** Get total slides count */
    getTotalSlides: () => number;
    /** Start autoplay */
    startAutoplay: () => void;
    /** Stop autoplay */
    stopAutoplay: () => void;
    /** Check if autoplay is running */
    isAutoplayRunning: () => boolean;
    /** Update slider (recalculate dimensions) */
    update: () => void;
    /** Destroy slider instance */
    destroy: () => void;
}
declare const DEFAULT_OPTIONS: Required<SliderOptions>;
declare const BREAKPOINTS: {
    readonly sm: 640;
    readonly md: 768;
    readonly lg: 1024;
    readonly xl: 1280;
    readonly "2xl": 1536;
};
type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * @atomictemplate/slider
 * Enhanced Slider Component with full accessibility, lazy loading, and responsive features
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 */

declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<SliderRef>>;

export { type A11yOptions, type ArrowIcons, type ArrowOptions, type ArrowPosition, type AutoplayOptions, BREAKPOINTS, type BreakpointConfig, type BreakpointKey, DEFAULT_OPTIONS, type Direction, type ImageRenderProps, type ImageRenderer, type KeyboardOptions, type LazyLoadOptions, type MarqueeOptions, type MediaSource, type MediaType, type PaginationType, type ResponsiveOptions, type SlideItem, type SlideRenderProps, type SlideRenderer, type SlideTransition, Slider, type SliderOptions, type SliderProps, type SliderRef, Slider as default };
