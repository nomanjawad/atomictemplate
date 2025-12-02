# Carousel Component - Product Requirements Document

## Overview
A reusable, flexible carousel component built with React and Framer Motion that displays three items (left, center, right) with configurable animations, visibility, and control mechanisms.

---

## Phase 1: Core Implementation (MVP)

### 1.1 Three-Item Layout
- Display three components in a horizontal row: Left, Center, Right
- Center item is the active/focused item
- Left and right items are adjacent slides

### 1.2 Dynamic Visibility Control
- **Requirement**: Left and right items should have configurable visibility
- **Implementation**: Props to control what percentage of left/right items are visible
- **Default**: 20% visibility for side items

### 1.3 Animation with Framer Motion
- **Default Animation**: Basic slide animation (horizontal translation)
- **Custom Animations**: Accept custom Framer Motion variants via props
- **Transitions**: Smooth transitions between slides with configurable duration
- **Default Duration**: 0.3s

### 1.4 Content as Props
- Accept React nodes for left, center, and right content
- Support any type of content (images, cards, text, custom components)

### 1.5 Width Control
- **Container Width**: Controlled via props
- **Default**: 100% of parent container
- **Options**: Accept CSS width values (px, %, vw, etc.)

### 1.6 Gap Control
- **Requirement**: Spacing between the three components
- **Implementation**: Gap/margin controlled via props
- **Default**: 16px (1rem)

### 1.7 Control Functions
- **External Controls**: Functions passed as props for programmatic control
  - `onNext()`: Navigate to next slide
  - `onPrevious()`: Navigate to previous slide
  - `onGoTo(index)`: Jump to specific slide
- **Internal State**: Track current active slide index

### 1.8 Component API (Phase 1)

```typescript
interface CarouselProps {
  // Content
  items: React.ReactNode[];

  // Layout
  containerWidth?: string; // default: "100%"
  gap?: string; // default: "1rem"
  sideItemVisibility?: number; // percentage 0-100, default: 20

  // Animation
  animationVariants?: {
    enter: Variant;
    center: Variant;
    exit: Variant;
  };
  transitionDuration?: number; // seconds, default: 0.3

  // Controls
  initialSlide?: number; // default: 0
  onChange?: (index: number) => void;

  // Control functions (optional - for external control)
  controlRef?: React.MutableRefObject<CarouselControls>;
}

interface CarouselControls {
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
  getCurrentIndex: () => number;
}
```

---

## Phase 2: Enhanced Features

### 2.1 Auto-play
- **Feature**: Automatic slide advancement
- **Props**:
  - `autoPlay?: boolean` (default: false)
  - `autoPlayInterval?: number` (ms, default: 3000)
  - `pauseOnHover?: boolean` (default: true)

### 2.2 Loop Behavior
- **Feature**: Configure carousel looping
- **Props**:
  - `loop?: boolean` (default: true)
  - When false, disable navigation at boundaries

### 2.3 Swipe/Drag Support
- **Feature**: Touch and mouse drag navigation
- **Implementation**: Framer Motion drag gestures
- **Props**:
  - `enableDrag?: boolean` (default: true)
  - `dragThreshold?: number` (pixels to trigger slide change, default: 50)

### 2.4 Active Slide Tracking
- **Feature**: Enhanced callback with slide data
- **Props**:
  - `onSlideChange?: (current: number, previous: number) => void`

### 2.5 Transition Configuration
- **Feature**: More granular animation control
- **Props**:
  - `easing?: string` (CSS easing function)
  - `stiffness?: number` (for spring animations)
  - `damping?: number` (for spring animations)

### 2.6 Snap Behavior
- **Feature**: Ensure slides snap to center
- **Implementation**: Built into drag behavior
- Always snap to nearest slide on release

### 2.7 Responsive Visibility
- **Feature**: Different side item visibility for breakpoints
- **Props**:
  - `responsiveVisibility?: { mobile?: number; tablet?: number; desktop?: number; }`

### 2.8 Accessibility
- **Feature**: Full keyboard and screen reader support
- **Implementation**:
  - Arrow key navigation (left/right)
  - Tab navigation
  - ARIA labels and roles
  - Focus management
- **Props**:
  - `ariaLabel?: string`
  - `ariaLabelledBy?: string`

### 2.9 Indicator Dots
- **Feature**: Visual slide indicators
- **Props**:
  - `showIndicators?: boolean` (default: false)
  - `indicatorPosition?: "top" | "bottom"` (default: "bottom")
  - `customIndicator?: React.ComponentType<{ isActive: boolean; onClick: () => void }>`

### 2.10 Performance Optimization
- **Feature**: Render optimization
- **Implementation**:
  - Lazy render slides outside viewport
  - Render current + adjacent slides only
- **Props**:
  - `preloadAdjacent?: number` (how many adjacent slides to preload, default: 1)

### 2.11 Custom Easing
- **Feature**: Predefined easing presets
- **Props**:
  - `easingPreset?: "linear" | "easeIn" | "easeOut" | "easeInOut" | "spring"`

### 2.12 Vertical Mode
- **Feature**: Vertical carousel orientation
- **Props**:
  - `orientation?: "horizontal" | "vertical"` (default: "horizontal")

### 2.13 Additional Navigation Controls
- **Feature**: Built-in navigation buttons
- **Props**:
  - `showNavButtons?: boolean` (default: false)
  - `navButtonPosition?: "inside" | "outside"` (default: "inside")
  - `customNavButton?: { prev: React.ReactNode; next: React.ReactNode }`

---

## Technical Specifications

### Dependencies
- React 18+
- Framer Motion 10+
- TypeScript

### File Structure
```
src/components/molecules/Carousel/
├── Carousel.tsx              # Main component
├── CarouselItem.tsx          # Individual slide wrapper
├── CarouselControls.tsx      # Navigation controls (Phase 2)
├── CarouselIndicators.tsx    # Dot indicators (Phase 2)
├── carousel.module.css       # Styles
├── useCarousel.ts            # Custom hook for state management
├── carousel.types.ts         # TypeScript definitions
└── index.ts                  # Exports
```

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Success Criteria

### Phase 1
- ✅ Three-item layout renders correctly
- ✅ Side items have configurable visibility
- ✅ Smooth animations with Framer Motion
- ✅ Custom content renders in all positions
- ✅ Width and gap are configurable
- ✅ External control functions work correctly
- ✅ TypeScript types are complete and accurate

### Phase 2
- ✅ Auto-play works with pause on hover
- ✅ Drag/swipe navigation is smooth
- ✅ Keyboard navigation works
- ✅ ARIA labels are present and correct
- ✅ Indicator dots sync with active slide
- ✅ Performance is optimized for large datasets
- ✅ Responsive visibility adjusts correctly

---

## Testing Plan

### Phase 1
- Unit tests for navigation logic
- Visual regression tests for layout
- Animation timing tests
- Props validation tests

### Phase 2
- Accessibility audit (WCAG 2.1 AA)
- Touch/drag interaction tests
- Performance benchmarks
- Cross-browser compatibility tests

---

## Timeline

### Phase 1 (MVP)
- Estimated: 2-3 days
- Includes: Core functionality, basic styling, TypeScript types

### Phase 2 (Enhanced)
- Estimated: 3-4 days
- Includes: All enhancement features, comprehensive testing, documentation

---

## Future Considerations
- 3D carousel transformations
- Multiple items visible at center
- Thumbnail navigation
- Video/media lazy loading
- RTL (Right-to-Left) language support
- Server-side rendering compatibility
