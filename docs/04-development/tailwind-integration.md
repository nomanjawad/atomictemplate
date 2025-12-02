# Tailwind CSS Integration Guide

## Overview

This project uses a **hybrid styling approach** combining:

- **CSS Modules** for component-specific, complex styling
- **Tailwind CSS v4** utilities for layout and simple styling
- **@apply directive** for organizing complex utility combinations

All design tokens from our CSS variables are mapped to Tailwind's configuration.

## When to Use What

### Use Tailwind Utilities (in JSX) When:

- ✅ Simple layout (flex, grid, spacing, padding)
- ✅ Responsive utilities (hidden, block, responsive spacing)
- ✅ One-off styling that won't be reused
- ✅ Prototyping or quick styling
- ✅ State variants with short class lists (hover, focus, active)

**Example:**

```tsx
<div className="flex items-center gap-4 p-4 bg-bg-accent-light rounded-md">
  <span className="text-fg-primary text-lg font-bold">Title</span>
</div>
```

### Use CSS Modules When:

- ✅ Complex component-specific styles
- ✅ Styles that need to be reused within a component
- ✅ Pseudo-elements (::before, ::after)
- ✅ Complex animations or transitions
- ✅ Nested selectors or complex state logic
- ✅ Component that has many style variants

**Example:**

```tsx
// Component.tsx
<div className={styles.complexCard}>
  <h3 className={styles.title}>Title</h3>
</div>

// Component.module.css
.complexCard {
  background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
  position: relative;
}

.complexCard::before {
  content: "";
  position: absolute;
  /* complex pseudo-element styles */
}

.title {
  /* complex title styles */
}
```

### Use CSS Variables (in CSS Modules) When:

- ✅ Complex component-specific styles with design tokens
- ✅ Need to use custom design tokens in CSS Modules
- ✅ Pseudo-elements, animations, or advanced CSS features
- ✅ Component requires many style variants

**⚠️ IMPORTANT LIMITATION:** Due to Tailwind v4 + CSS Modules + Turbopack limitations, `@apply` with custom utilities (like `bg-bg-negative-light`) **does not work reliably**. Instead, use CSS variables directly:

```css
/* Component.module.css */
.card {
  /* Use CSS variables for custom tokens */
  background-color: var(--color-bg-accent-light);
  border: 1px solid var(--color-border);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-box-small);
}

.card:hover {
  box-shadow: var(--shadow-box-medium);
}

.cardTitle {
  color: var(--color-foreground-primary);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: var(--space-sm);
}
```

**Available CSS Variables:**

- Colors: `--color-primary`, `--color-bg-negative-light`, `--color-foreground-primary`, `--color-border-error`, etc.
- Spacing: `--space-2xs`, `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`, `--space-2xl`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-card-parent`, `--radius-card-child`
- Shadows: `--shadow-box-small`, `--shadow-box-medium`, `--shadow-box-large`, `--shadow-box-x-small`, `--shadow-box-icon`

### Use @apply (with Standard Tailwind Utilities Only):

You **can** use `@apply` with **standard Tailwind utilities** (not custom tokens):

```css
/* Component.module.css */
@import "tailwindcss";

.flexContainer {
  @apply flex items-center justify-between;
  @apply gap-4 p-4;
  /* Then use CSS variables for custom tokens */
  background-color: var(--color-bg-accent-light);
}
```

## Design Tokens

All design tokens are available as Tailwind utilities:

### Colors

```tsx
// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-bg-accent-light">Accent light background</div>

// Text colors
<span className="text-fg-primary">Primary text</span>
<span className="text-fg-secondary">Secondary text</span>

// Border colors
<div className="border border-border-accent">Accent border</div>
```

### Spacing

Custom spacing scale: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`

```tsx
<div className="p-lg">Padding large (24px)</div>
<div className="gap-md">Gap medium (16px)</div>
<div className="mt-xl mb-sm">Margin top 32px, bottom 12px</div>
```

### Typography

Font sizes: `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`

```tsx
<h1 className="text-6xl">Largest heading</h1>
<p className="text-base">Body text</p>
<span className="text-sm">Small text</span>
```

### Border Radius

```tsx
<div className="rounded-sm">Small radius (8px)</div>
<div className="rounded-md">Medium radius (16px)</div>
<div className="rounded-card-parent">Card parent radius</div>
```

### Box Shadows

```tsx
<div className="shadow-small">Small shadow</div>
<div className="shadow-medium">Medium shadow</div>
<div className="shadow-large">Large shadow</div>
```

### Font Families

```tsx
<div className="font-urbanist">Urbanist font</div>
<div className="font-inter">Inter font</div>
```

## Best Practices

### 1. Use Tailwind Utilities in JSX, CSS Variables in CSS Modules

```tsx
// Use Tailwind utilities directly in JSX
<button className="flex items-center gap-2 bg-primary text-white px-lg py-sm rounded-md hover:opacity-90 transition-opacity shadow-small hover:shadow-medium">
  Click Me
</button>

// For complex components, use CSS Modules with CSS variables
// Button.module.css
.complexButton {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-box-small);
  transition: all 0.3s ease;
}

.complexButton:hover {
  opacity: 0.9;
  box-shadow: var(--shadow-box-medium);
}

// Button.tsx
<button className={styles.complexButton}>Click Me</button>
```

### 2. Combine Standard Tailwind Utilities with CSS Variables

```css
/* Component.module.css */
@import "tailwindcss";

.card {
  /* Use @apply for standard utilities */
  @apply flex flex-col gap-4 p-4 rounded-lg transition-shadow;
  /* Use CSS variables for custom tokens */
  background-color: var(--color-bg-accent-light);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-box-small);
}

.card:hover {
  box-shadow: var(--shadow-box-medium);
}
```

### 3. Combine Approaches for Complex Components

```tsx
// Card.tsx
<div className={cn(
  styles.card,
  "flex flex-col gap-4", // Simple layout utilities
  props.highlighted && styles.highlighted
)}>
  <h3 className={styles.title}>{title}</h3>
  <p className="text-fg-secondary">{description}</p>
</div>

// Card.module.css
.card {
  @apply border border-border rounded-md p-lg;
  @apply shadow-small hover:shadow-medium transition-shadow;
}

.card.highlighted {
  @apply border-border-accent bg-bg-accent-light;
}

.title {
  @apply text-2xl font-bold text-fg-primary;
}
```

### 4. Don't Use Arbitrary Values

❌ **Avoid:**

```tsx
<div className="w-[347px] text-[#ff0000]">Bad</div>
```

✅ **Instead, use tokens or CSS variables:**

```tsx
<div className="w-full text-negative">Good</div>
```

### 5. Group Related Utilities

```tsx
// ❌ Hard to read
<div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">

// ✅ Better
<div className={cn(
  "flex items-center justify-between", // Layout
  "p-4", // Spacing
  "bg-white border border-gray-200 rounded-lg", // Appearance
  "shadow-sm hover:shadow-md transition-shadow" // Interactive
)}>
```

## Migration Strategy

When converting existing components:

1. **Keep complex component styles in CSS Modules**
2. **Replace simple layout CSS with Tailwind utilities**
3. **Use @apply for long utility lists**
4. **Test each conversion to ensure no visual regressions**

Example:

```css
/* BEFORE (pure CSS Module) */
.container {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--color-bg-accent-light);
  border-radius: 16px;
}

/* AFTER (hybrid) */
.container {
  @apply flex items-center gap-md p-lg bg-bg-accent-light rounded-md;
}
```

## GSAP + Tailwind

GSAP works seamlessly with Tailwind classes:

```tsx
import { useRef, useEffect } from "react"
import gsap from "gsap"

export const AnimatedBox = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
  }, [])

  return (
    <div
      ref={boxRef}
      className="bg-primary text-white p-lg rounded-md shadow-large"
    >
      Animated with GSAP
    </div>
  )
}
```

## Configuration Files

### `tailwind.config.ts`

Contains all design token mappings. Tokens are in the `extend` section to preserve Tailwind defaults.

### `postcss.config.mjs`

Standard PostCSS configuration with Tailwind and Autoprefixer.

### `globals.css`

```css
@import "tailwindcss";

@layer base {
  /* All design token CSS files imported here */
}

@layer components {
  /* Shared component utilities */
}
```

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
