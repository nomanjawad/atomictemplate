# @atomictemplate/slider

> A fully customizable React slider/carousel with GSAP animations, lazy loading, accessibility, and marquee mode.

[![npm version](https://img.shields.io/npm/v/@atomictemplate/slider.svg)](https://www.npmjs.com/package/@atomictemplate/slider)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)

## Features

- 🖼️ **Lazy Loading** - IntersectionObserver-based lazy loading for optimal performance
- ⌨️ **Keyboard Navigation** - Full keyboard support (Arrow keys, Home, End, PageUp, PageDown)
- ♿ **Accessibility** - ARIA labels, roles, and screen reader support
- 🎬 **Media Support** - Images, videos, GIFs, and Lottie animations
- 📱 **Responsive** - Configurable breakpoints for different screen sizes
- 🔄 **Marquee Mode** - Smooth infinite scrolling animation
- 🎨 **Render Props** - Full customization via `renderSlide`, `renderImage`, `renderArrow`, `renderDot`
- 🚀 **GSAP Powered** - Smooth, performant animations
- 📦 **Framework Agnostic** - Works with Next.js, Vite, CRA, Remix, etc.
- 🎯 **TypeScript** - Full type definitions included

## Installation

```bash
# npm
npm install @atomictemplate/slider gsap

# pnpm
pnpm add @atomictemplate/slider gsap

# yarn
yarn add @atomictemplate/slider gsap
```

## Quick Start

```tsx
import { Slider } from "@atomictemplate/slider"

const slides = [
  {
    id: 1,
    media: {
      type: "image",
      src: "/images/slide1.jpg",
      alt: "Slide 1",
    },
  },
  {
    id: 2,
    media: {
      type: "image",
      src: "/images/slide2.jpg",
      alt: "Slide 2",
    },
  },
]

function App() {
  return (
    <Slider
      items={slides}
      options={{
        slidesToShow: 3,
        gap: 24,
        autoplay: { enabled: true, delay: 3000 },
        loop: true,
      }}
    />
  )
}
```

## Usage with Next.js Image

Use the `renderImage` prop to integrate with Next.js Image component:

```tsx
import { Slider, type ImageRenderProps } from "@atomictemplate/slider"
import Image from "next/image"

const renderNextImage = (props: ImageRenderProps) => (
  <Image
    src={props.src}
    alt={props.alt}
    width={props.width ?? 800}
    height={props.height ?? 600}
    className={props.className}
    style={{ objectFit: "cover" }}
  />
)

function App() {
  return (
    <Slider
      items={slides}
      renderImage={renderNextImage}
      options={{ slidesToShow: 2 }}
    />
  )
}
```

## API Reference

### SliderProps

| Prop           | Type            | Default           | Description                                     |
| -------------- | --------------- | ----------------- | ----------------------------------------------- |
| `items`        | `SlideItem[]`   | `[]`              | Array of slide items                            |
| `children`     | `ReactNode`     | -                 | Alternative to items - pass React children      |
| `options`      | `SliderOptions` | `DEFAULT_OPTIONS` | Slider configuration                            |
| `className`    | `string`        | -                 | Custom class for container                      |
| `style`        | `CSSProperties` | -                 | Custom styles for container                     |
| `renderSlide`  | `SlideRenderer` | -                 | Custom slide renderer                           |
| `renderImage`  | `ImageRenderer` | -                 | Custom image renderer (for Next.js Image, etc.) |
| `renderArrow`  | `Function`      | -                 | Custom arrow renderer                           |
| `renderDot`    | `Function`      | -                 | Custom dot renderer                             |
| `initialSlide` | `number`        | `0`               | Initial slide index                             |
| `id`           | `string`        | -                 | Unique ID for accessibility                     |

### SliderOptions

```typescript
interface SliderOptions {
  // Display
  slidesToShow?: number // Default: 1
  slidesToScroll?: number // Default: 1
  gap?: number | string // Default: 16
  centerMode?: boolean // Default: false

  // Navigation
  pagination?: "arrows" | "dots" | "both" | "none" // Default: 'both'
  arrows?: ArrowOptions
  dots?: { enabled?: boolean; className?: string }

  // Behavior
  loop?: boolean // Default: true
  speed?: number // Transition speed in ms. Default: 500
  transition?: "slide" | "fade" | "none" // Default: 'slide'
  draggable?: boolean // Default: true

  // Autoplay
  autoplay?: {
    enabled?: boolean // Default: false
    delay?: number // Default: 3000
    pauseOnHover?: boolean // Default: true
    pauseOnInteraction?: boolean // Default: true
  }

  // Marquee
  marquee?: {
    enabled?: boolean // Default: false
    speed?: number // Duration in seconds. Default: 50
    pauseOnHover?: boolean // Default: true
  }

  // Lazy Loading
  lazyLoad?: {
    enabled?: boolean // Default: true
    rootMargin?: string // Default: '200px'
    threshold?: number // Default: 0
  }

  // Accessibility
  a11y?: {
    enabled?: boolean // Default: true
    prevSlideMessage?: string
    nextSlideMessage?: string
    slideRole?: string
    containerRole?: string
  }

  // Keyboard
  keyboard?: {
    enabled?: boolean // Default: true
    onlyInViewport?: boolean // Default: true
  }

  // Responsive
  responsive?: {
    sm?: BreakpointConfig
    md?: BreakpointConfig
    lg?: BreakpointConfig
    xl?: BreakpointConfig
    "2xl"?: BreakpointConfig
  }

  // Callbacks
  onInit?: () => void
  onDestroy?: () => void
  onSlideChange?: (current: number, prev: number) => void
  onReachStart?: () => void
  onReachEnd?: () => void
}
```

### SlideItem

```typescript
interface SlideItem {
  id?: string | number
  media?: MediaSource
  content?: ReactNode
  className?: string
  onClick?: () => void
}

interface MediaSource {
  type: "image" | "video" | "gif" | "lottie"
  src: string
  alt?: string
  width?: number
  height?: number
  // Video specific
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
}
```

### SliderRef (Imperative Handle)

```typescript
interface SliderRef {
  goToSlide: (index: number) => void
  nextSlide: () => void
  prevSlide: () => void
  getCurrentSlide: () => number
  getTotalSlides: () => number
  pauseAutoplay: () => void
  resumeAutoplay: () => void
}
```

## Examples

### Basic Slider

```tsx
<Slider
  items={slides}
  options={{
    slidesToShow: 3,
    gap: 24,
    pagination: "both",
  }}
/>
```

### Autoplay Slider

```tsx
<Slider
  items={slides}
  options={{
    slidesToShow: 2,
    autoplay: {
      enabled: true,
      delay: 4000,
      pauseOnHover: true,
    },
    loop: true,
  }}
/>
```

### Marquee Mode (Logo Carousel)

```tsx
<Slider
  items={logoItems}
  options={{
    gap: 48,
    marquee: {
      enabled: true,
      speed: 30,
      pauseOnHover: true,
    },
  }}
/>
```

### Responsive Configuration

```tsx
<Slider
  items={slides}
  options={{
    slidesToShow: 1,
    responsive: {
      md: { slidesToShow: 2, gap: 16 },
      lg: { slidesToShow: 3, gap: 24 },
      xl: { slidesToShow: 4, gap: 32 },
    },
  }}
/>
```

### With Ref Control

```tsx
import { useRef } from "react"
import { Slider, type SliderRef } from "@atomictemplate/slider"

function App() {
  const sliderRef = useRef<SliderRef>(null)

  return (
    <>
      <Slider ref={sliderRef} items={slides} />
      <button onClick={() => sliderRef.current?.prevSlide()}>Prev</button>
      <button onClick={() => sliderRef.current?.nextSlide()}>Next</button>
    </>
  )
}
```

### Custom Render Props

```tsx
<Slider
  items={slides}
  renderSlide={({ item, index, isActive }) => (
    <div className={isActive ? "active" : ""}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )}
  renderArrow={(direction, onClick, disabled) => (
    <button onClick={onClick} disabled={disabled}>
      {direction === "prev" ? "←" : "→"}
    </button>
  )}
  renderDot={(index, isActive, onClick) => (
    <button onClick={onClick} className={isActive ? "dot-active" : "dot"} />
  )}
/>
```

### Video Slides

```tsx
const videoSlides = [
  {
    id: 1,
    media: {
      type: 'video',
      src: '/videos/intro.mp4',
      poster: '/images/poster.jpg',
      autoPlay: true,
      muted: true,
      loop: true,
    },
  },
]

<Slider items={videoSlides} />
```

## Styling

### Import CSS

```tsx
// Option 1: Import in your component
import '@atomictemplate/slider/styles.css'

// Option 2: Import in your global CSS
@import '@atomictemplate/slider/styles.css';
```

### CSS Classes

The slider uses CSS Modules internally. You can override styles with your own classes:

```css
/* Override arrow styles */
.my-slider [class*="arrow"] {
  background: #000;
  color: #fff;
}

/* Override dot styles */
.my-slider [class*="dot"] {
  width: 12px;
  height: 12px;
}
```

## Keyboard Navigation

| Key                | Action         |
| ------------------ | -------------- |
| `←` / `ArrowLeft`  | Previous slide |
| `→` / `ArrowRight` | Next slide     |
| `Home`             | First slide    |
| `End`              | Last slide     |
| `PageUp`           | Previous slide |
| `PageDown`         | Next slide     |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Peer Dependencies

- `react` >= 18.0.0
- `react-dom` >= 18.0.0

## Dependencies

- `gsap` >= 3.12.0

## License

MIT © [Noman Jawad](https://github.com/nomanjawad)

## Links

- [GitHub Repository](https://github.com/nomanjawad/atomictemplate/tree/main/packages/slider)
- [Report Issues](https://github.com/nomanjawad/atomictemplate/issues)
- [Changelog](https://github.com/nomanjawad/atomictemplate/blob/main/packages/slider/CHANGELOG.md)
