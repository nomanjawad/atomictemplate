# Changelog

All notable changes to `@atomictemplate/slider` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-12-05

### Fixed

- Fixed package exports configuration (ESM/CJS paths were incorrect)
- `import` now correctly points to `./dist/index.js`
- `require` now correctly points to `./dist/index.cjs`

## [1.0.0] - 2025-12-05

### Added

- Initial release of `@atomictemplate/slider`
- **Core Features**
  - Flexible slide layout with configurable `slidesToShow` and `slidesToScroll`
  - GSAP-powered smooth animations
  - Touch/swipe support for mobile devices
  - Navigation controls (arrows and dots)
  - Infinite loop mode
  - LTR and RTL direction support
  - Center mode for focused slides
  - Configurable gap between slides

- **Lazy Loading**
  - IntersectionObserver-based lazy loading
  - Configurable root margin and threshold
  - Preloads adjacent slides for smooth transitions

- **Accessibility**
  - Full keyboard navigation (Arrow keys, Home, End, PageUp, PageDown)
  - ARIA labels and roles
  - Screen reader announcements
  - Focus management

- **Media Support**
  - Image slides with lazy loading
  - Video slides with autoplay, muted, loop options
  - GIF support
  - Lottie animation placeholder (requires external library)

- **Marquee Mode**
  - Smooth infinite scrolling animation
  - Configurable speed
  - Pause on hover

- **Autoplay**
  - Automatic slide advancement
  - Configurable delay
  - Pause on hover and interaction

- **Responsive Design**
  - Breakpoint-based configuration (sm, md, lg, xl, 2xl)
  - Override slidesToShow, gap, and other options per breakpoint

- **Customization**
  - `renderSlide` - Custom slide content renderer
  - `renderImage` - Custom image component (for Next.js Image, etc.)
  - `renderArrow` - Custom arrow buttons
  - `renderDot` - Custom dot indicators

- **Imperative API**
  - `SliderRef` with `goToSlide`, `nextSlide`, `prevSlide`
  - `pauseAutoplay`, `resumeAutoplay`
  - `getCurrentSlide`, `getTotalSlides`

- **TypeScript**
  - Full type definitions
  - Exported types: `SliderProps`, `SliderRef`, `SliderOptions`, `SlideItem`, `MediaSource`, `ImageRenderProps`, `ImageRenderer`

### Technical

- Built with React 18+ and TypeScript
- Uses GSAP for animations
- CSS Modules for styling (no Tailwind dependency)
- ESM and CommonJS builds via tsup
- Zero framework lock-in (works with Next.js, Vite, CRA, Remix)
