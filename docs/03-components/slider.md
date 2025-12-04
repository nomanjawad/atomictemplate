# Slider Component Documentation

## Overview

The **Slider** component is a fully-featured, highly customizable carousel/slider built with GSAP animations and native touch support. It supports multiple display modes including standard slider, autoplay, and smooth marquee scrolling.

---

## Features

### Core Functionality

- ✅ **Flexible Layout** - Configure visible slides and scroll amount
- ✅ **GSAP Animations** - Smooth, performant transitions
- ✅ **Touch/Swipe Support** - Native mobile and desktop drag
- ✅ **Navigation Controls** - Arrows (inside/outside) and dot indicators
- ✅ **Infinite Loop** - Seamless continuous scrolling
- ✅ **Direction Support** - LTR and RTL layouts
- ✅ **Equal Height Mode** - Stretch all slides to match tallest
- ✅ **Center Mode** - Center active slide with partial prev/next view
- ✅ **Gap Control** - Configurable spacing between slides

### Advanced Features

- ✅ **Autoplay** - Auto-advance slides with pause on hover
- ✅ **Marquee Mode** - Smooth infinite scrolling animation (NEW!)
- ✅ **Customizable Speed** - Control animation duration
- ✅ **Reverse Order** - Flip array order
- ✅ **Custom Icons** - Use Lucide icons or custom components
- ✅ **Responsive Ready** - Works across all screen sizes

---

## Component API

### SliderProps

```typescript
interface SliderProps {
  items: InfoCardOption[] // Array of InfoCard configurations
  options?: SliderOptions // Slider configuration
  className?: string // Additional CSS classes
}
```

### SliderOptions

```typescript
interface SliderOptions {
  // Display
  slidesToShow?: number // Number of slides visible (default: 3)
  slidesToScroll?: number // Number of slides to move per action (default: 1)
  gap?: number | string // Space between slides (default: 16)
  stretch?: boolean // Equal height for all slides (default: true)
  centerMode?: boolean // Center active slide (default: false)

  // Navigation
  pagination?: PaginationType // "arrows" | "dots" | "both" | "none" (default: "both")
  arrows?: ArrowOptions // Arrow configuration

  // Behavior
  autoplay?: AutoplayOptions // Auto-advance configuration
  marquee?: MarqueeOptions // Marquee scrolling configuration (NEW!)
  loop?: boolean // Infinite loop (default: true)
  speed?: number // Transition duration in ms (default: 500)
  direction?: Direction // "ltr" | "rtl" (default: "ltr")
  reverse?: boolean // Reverse items array (default: false)
  draggable?: boolean // Enable touch/drag (default: true)

  // Responsive
  responsive?: ResponsiveOptions // Breakpoint-specific settings
}
```

### ArrowOptions

```typescript
interface ArrowOptions {
  position?: "inside" | "outside" // Arrow placement (default: "outside")
  icons?: {
    prev?: ReactNode // Custom previous icon
    next?: ReactNode // Custom next icon
  }
  className?: string // Custom arrow styles
}
```

### AutoplayOptions

```typescript
interface AutoplayOptions {
  enabled?: boolean // Enable autoplay (default: false)
  delay?: number // Delay between slides in ms (default: 3000)
  pauseOnHover?: boolean // Pause on mouse hover (default: true)
}
```

### MarqueeOptions (NEW!)

```typescript
interface MarqueeOptions {
  enabled?: boolean // Enable marquee mode (default: false)
  speed?: number // Animation duration in seconds (default: 50)
  pauseOnHover?: boolean // Pause on mouse hover (default: true)
}
```

---

## Usage Examples

### Basic Slider

```tsx
import { Slider } from "@organisms"
import { sliderData } from "@data"

;<Slider
  items={sliderData}
  options={{
    slidesToShow: 3,
    slidesToScroll: 1,
    gap: 24,
    pagination: "both",
  }}
/>
```

### Autoplay Slider

```tsx
<Slider
  items={sliderData}
  options={{
    slidesToShow: 3,
    autoplay: {
      enabled: true,
      delay: 3000,
      pauseOnHover: true,
    },
    loop: true,
  }}
/>
```

### Marquee Mode (NEW!)

Perfect for logo carousels, partner sections, or testimonials:

```tsx
<Slider
  items={logoData}
  options={{
    gap: 48,
    marquee: {
      enabled: true,
      speed: 30, // 30 seconds for full loop
      pauseOnHover: true,
    },
  }}
  className="py-12"
/>
```

### Single Slide View

```tsx
<Slider
  items={testimonialData}
  options={{
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: {
      position: "inside",
    },
  }}
/>
```

### RTL Support

```tsx
<Slider
  items={sliderData}
  options={{
    direction: "rtl",
    slidesToShow: 3,
  }}
/>
```

### Custom Navigation Icons

```tsx
import { ChevronLeft, ChevronRight } from "lucide-react"

;<Slider
  items={sliderData}
  options={{
    arrows: {
      position: "outside",
      icons: {
        prev: <ChevronLeft className="w-6 h-6" />,
        next: <ChevronRight className="w-6 h-6" />,
      },
    },
  }}
/>
```

---

## Data Structure

The Slider uses `InfoCardOption[]` for items. Each item follows the InfoCard schema:

```typescript
interface InfoCardOption {
  imageSection?: {
    src: string
    alt?: string
    width?: number | string
    height?: number | string
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
    priority?: boolean
  }
  textSection?: {
    title?: string
    subTitle?: string
    description?: string
    titleProps?: BaseTextProps
    subTitleProps?: BaseTextProps
    descriptionProps?: BaseTextProps
  }
  link?: {
    href: string
    type: "wrap" | "button"
    buttonText?: string
  }
}
```

### Example Data File

```typescript
// src/data/common/slider-data.ts
import { imgPlaceholder1 } from "@images"
import { staticRoutes } from "@constants"
import type { InfoCardOption } from "@organisms"

export const sliderData: InfoCardOption[] = [
  {
    imageSection: {
      src: imgPlaceholder1,
      alt: "Feature Title",
    },
    textSection: {
      title: "Amazing Feature",
      subTitle: "Subtitle Here",
      description: "Feature description goes here",
      titleProps: {
        tag: "h3",
        variant: "primary",
        weight: "bold",
      },
      subTitleProps: {
        tag: "p",
        variant: "secondary",
        weight: "semibold",
      },
      descriptionProps: {
        tag: "p",
        variant: "tertiary",
      },
    },
    link: {
      href: staticRoutes.SERVICES,
      type: "button",
      buttonText: "Learn More",
    },
  },
  // ... more items
]
```

---

## Marquee Mode Details

### When to Use Marquee

- **Logo Carousels** - Showcase partner/client logos
- **Awards & Certifications** - Display credentials
- **Product Features** - Highlight features continuously
- **Social Proof** - Testimonials or reviews
- **Event Sponsors** - Conference/event sponsors

### Marquee Behavior

- Items duplicate automatically for seamless loop
- Navigation controls (arrows/dots) are hidden
- Smooth GSAP-powered infinite scroll
- Pause on hover (optional)
- Works with all content types (images, cards, text)

### Performance Tips

- Use `speed` to control smoothness (30-60 seconds recommended)
- Limit items to 10-15 for optimal performance
- Compress images for faster loading
- Use `priority` prop for above-fold images

---

## Styling

### Custom Classes

Add custom styles via className prop:

```tsx
<Slider items={sliderData} className="my-custom-slider bg-gray-100 py-8" />
```

### CSS Module Classes

Available classes in `slider.module.css`:

- `.slider` - Main container
- `.sliderViewport` - Viewport wrapper
- `.sliderTrack` - Track containing slides
- `.slide` - Individual slide wrapper
- `.arrow` - Arrow buttons
- `.dots` - Dot indicators
- `.marquee` - Marquee mode styles

### Tailwind Integration

The slider works seamlessly with Tailwind:

```tsx
<Slider
  items={sliderData}
  options={{ gap: 24 }} // Can use numbers or Tailwind classes
  className="max-w-7xl mx-auto px-4"
/>
```

---

## Validation Schema

Located in `src/validations/common/slider.schema.ts`:

```typescript
import { validator } from "@libs"

export const SliderSchema = validator.object({
  items: validator.array(InfoCardItemSchema).min(1),
  options: SliderOptionsSchema.optional(),
})
```

Use for runtime validation:

```typescript
import { SliderSchema } from "@validations"

const result = SliderSchema.safeParse(sliderConfig)
if (!result.success) {
  console.error(result.error)
}
```

---

## Accessibility

The Slider includes basic accessibility features:

- **Keyboard Navigation** - Left/right arrow keys (when focused)
- **ARIA Labels** - Navigation buttons have descriptive labels
- **Focus Management** - Proper tab order
- **Reduced Motion** - Respects user preferences (via GSAP)

For enhanced accessibility, consider adding:

- Skip to content links
- Screen reader announcements for slide changes
- Keyboard shortcuts documentation

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Considerations

- **Lazy Loading** - Use `priority={false}` for off-screen images
- **Image Optimization** - Next.js Image component handles optimization
- **GSAP Performance** - Uses GPU-accelerated transforms
- **Render Optimization** - Only active slides are fully rendered

---

## Common Patterns

### Logo Carousel (Marquee)

```tsx
<Section className="bg-gray-50 py-16">
  <Container>
    <h2 className="text-center mb-8">Trusted By</h2>
    <Slider
      items={logoData}
      options={{
        gap: 64,
        marquee: { enabled: true, speed: 40 },
      }}
    />
  </Container>
</Section>
```

### Testimonial Slider

```tsx
<Slider
  items={testimonialData}
  options={{
    slidesToShow: 1,
    centerMode: true,
    autoplay: { enabled: true, delay: 5000 },
    arrows: { position: "inside" },
    pagination: "dots",
  }}
/>
```

### Product Showcase

```tsx
<Slider
  items={productData}
  options={{
    slidesToShow: 4,
    slidesToScroll: 2,
    gap: 24,
    arrows: { position: "outside" },
  }}
/>
```

---

## Troubleshooting

### Slides Not Advancing

- Check `loop` option is enabled
- Verify `items` array has multiple items
- Ensure autoplay `enabled: true` if using autoplay

### Marquee Not Smooth

- Increase `speed` value (higher = slower, smoother)
- Reduce number of items (10-15 optimal)
- Check for heavy images slowing render

### Touch/Drag Not Working

- Verify `draggable: true` in options
- Check for conflicting touch event listeners
- Ensure `marquee.enabled` is false (drag disabled in marquee mode)

### Arrows Not Showing

- Verify `pagination` is not "dots" or "none"
- Check arrow `position` value
- Ensure sufficient container width for outside arrows

---

## Migration from Legacy Carousel

If migrating from the old carousel component:

```diff
- <Carousel items={data} autoPlay />
+ <Slider items={data} options={{ autoplay: { enabled: true } }} />

- <Carousel showDots={false} />
+ <Slider options={{ pagination: "arrows" }} />

- <Carousel itemsToShow={3} />
+ <Slider options={{ slidesToShow: 3 }} />
```

---

## Related Components

- **InfoCard** - Individual slide content
- **Container** - Layout wrapper
- **Section** - Section wrapper with spacing

## Related Documentation

- [InfoCard Documentation](./infocard.md)
- [Data Pattern Guide](../../02-architecture/data-pattern-quick-reference.md)
- [Component Guide](../../03-components/component-documentation-guide.md)

---

## File Locations

```
src/
├── components/organisms/Slider/
│   ├── Slider.tsx              # Main component
│   ├── slider.types.ts         # TypeScript definitions
│   ├── slider.module.css       # Styles
│   └── index.ts                # Exports
├── data/common/
│   └── slider-data.ts          # Example data
└── validations/common/
    └── slider.schema.ts        # Zod validation
```

---

## Version History

- **v1.0.0** - Initial release with standard slider functionality
- **v1.1.0** - Added marquee mode for smooth infinite scrolling
