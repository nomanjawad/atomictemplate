# Example Page - Complete Documentation

## 📚 Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Data Layer](#data-layer)
4. [Validation Layer](#validation-layer)
5. [Component Layer](#component-layer)
6. [Route Layer](#route-layer)
7. [How to Create a New Page](#how-to-create-a-new-page)
8. [Best Practices](#best-practices)
9. [Common Patterns](#common-patterns)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

This example demonstrates the **complete architecture** for creating pages in this Next.js template. It includes:

- ✅ Type-safe data structures with TypeScript
- ✅ Runtime validation with Zod schemas
- ✅ Atomic design component architecture
- ✅ SEO-optimized page setup
- ✅ Responsive design patterns
- ✅ Accessibility best practices
- ✅ Full documentation

---

## 📁 File Structure

```
src/
├── data/
│   └── full-pages/
│       ├── example-page-data.ts          ← Data file with TypeScript interfaces
│       └── index.ts                      ← Export data
│
├── validations/
│   └── full-pages/
│       ├── example-page.schema.ts        ← Zod validation schemas
│       └── index.ts                      ← Export schemas
│
├── components/
│   └── pages/
│       ├── ExamplePage/
│       │   ├── ExamplePage.tsx           ← Main page component
│       │   ├── ExampleHeroSection/       ← Hero section
│       │   ├── ExampleFeaturesSection/   ← Features section
│       │   ├── ExampleStatsSection/      ← Stats section
│       │   ├── ExampleTestimonialsSection/ ← Testimonials section
│       │   ├── ExampleFAQSection/        ← FAQ section
│       │   ├── ExampleCTASection/        ← CTA section
│       │   └── index.ts                  ← Export all components
│       └── index.ts                      ← Export ExamplePage
│
├── app/
│   └── example/
│       └── page.tsx                      ← Next.js route file
│
└── constants/
    └── app-route.ts                      ← Route constants
```

---

## 📝 Data Layer

### Location

`src/data/full-pages/example-page-data.ts`

### Purpose

- Store all page content in one centralized location
- Separate content from presentation logic
- Enable easy content updates without touching component code
- Support i18n (internationalization) by duplicating for each language

### Structure

```typescript
// 1. Import constants
import { staticRoutes } from "@constants"

// 2. Define TypeScript interfaces
export interface ExamplePageData {
  meta: { title, description, keywords }
  hero: { title, description, buttons, etc. }
  features?: { ... }  // Optional sections use ?
  // ... other sections
}

// 3. Export the data object
export const examplePageData: ExamplePageData = {
  meta: { ... },
  hero: { ... },
  // ... rest of data
}
```

### Key Principles

1. **Type Safety**: Define interfaces before data
2. **Optional Sections**: Use `?` for optional fields
3. **Constants**: Use `staticRoutes` for all URLs
4. **Documentation**: Add JSDoc comments for complex structures
5. **Logical Grouping**: Group related data into nested objects

### Data Organization

- **Full Pages**: `/src/data/full-pages/` - Complete page data
- **Common**: `/src/data/common/` - Shared components (navbar, footer)
- **Translations**: `/src/data/ar/`, `/src/data/ru/` - Language versions

---

## ✅ Validation Layer

### Location

`src/validations/full-pages/example-page.schema.ts`

### Purpose

- Validate data at runtime to catch errors
- Generate TypeScript types from schemas
- Provide clear error messages
- Ensure data consistency from external sources (APIs, CMS)

### Structure

```typescript
import { validator } from "@libs" // validator is Zod

// 1. Define atomic schemas (smallest pieces)
export const ButtonSchema = validator.object({
  text: validator.string().min(1),
  href: validator.string().min(1),
  variant: validator.enum(["primary", "secondary"]).optional(),
})

// 2. Compose complex schemas from simple ones
export const ExampleHeroSchema = validator.object({
  title: validator.string().min(10).max(100),
  description: validator.string().min(20),
  primaryButton: ButtonSchema,
  secondaryButton: ButtonSchema.optional(),
})

// 3. Create main page schema
export const examplePageSchema = validator.object({
  meta: ExamplePageMetaSchema,
  hero: ExampleHeroSchema,
  features: ExampleFeaturesSchema.optional(),
  // ... other sections
})

// 4. Export inferred types
export type ExamplePage = validator.infer<typeof examplePageSchema>
```

### Validation Methods

**Automatic (throws on error)**:

```typescript
const validData = examplePageSchema.parse(data)
```

**Safe (returns result object)**:

```typescript
const result = examplePageSchema.safeParse(data)
if (result.success) {
  console.log(result.data)
} else {
  console.error(result.error.issues)
}
```

### Common Validators

- `validator.string()` - String validation
- `validator.number()` - Number validation
- `validator.boolean()` - Boolean validation
- `validator.array(Schema)` - Array validation
- `validator.object({ })` - Object validation
- `validator.enum([...])` - Enum validation
- `.optional()` - Make field optional
- `.min(n)` - Minimum length/value
- `.max(n)` - Maximum length/value
- `.email()` - Email format
- `.url()` - URL format
- `.regex(/.../)` - Regex pattern

---

## 🧩 Component Layer

### Location

`src/components/pages/ExamplePage/`

### Architecture

**Atomic Design Pattern**:

```
Pages → Organisms → Molecules → Atoms
```

**Layout Pattern**:

```
Section → Container → Content → Components
```

### Main Page Component

**File**: `ExamplePage.tsx`

```typescript
import ExampleHeroSection from "./ExampleHeroSection/ExampleHeroSection"
// ... other sections

export default function ExamplePage() {
  return (
    <>
      <ExampleHeroSection />
      <ExampleFeaturesSection />
      {/* ... other sections */}
    </>
  )
}
```

**Responsibilities**:

- Compose all sections
- Handle conditional rendering
- Manage section order
- Keep thin (no business logic)

### Section Components

**File**: `ExampleHeroSection/ExampleHeroSection.tsx`

```typescript
import { Section, Container, Content } from "@atoms"
import { examplePageData } from "@data"

export default function ExampleHeroSection() {
  const { hero } = examplePageData

  return (
    <Section padding="2xl" bgColor="bg-white">
      <Container>
        <Content direction="column" gap="lg">
          {/* Section content */}
        </Content>
      </Container>
    </Section>
  )
}
```

**Layout Components**:

- `Section` - Full-width wrapper with background
- `Container` - Max-width content container (1440px)
- `Content` - Flexbox layout for content

**Props**:

- `padding`: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
- `bgColor`: Any Tailwind class
- `direction`: "row" | "column"
- `gap`: "none" | "sm" | "md" | "lg" | "xl" | "2xl"
- `align`: "start" | "center" | "end"
- `justify`: "start" | "center" | "end" | "between"

### Responsive Design

**Tailwind Breakpoints**:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

**Common Patterns**:

```typescript
// Mobile first, then desktop
className = "text-lg md:text-xl lg:text-2xl"

// Grid responsive columns
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Hide/show based on screen
className = "hidden md:block" // Hidden on mobile
className = "block md:hidden" // Hidden on desktop

// Stack on mobile, row on desktop
className = "flex flex-col md:flex-row"
```

---

## 🛣️ Route Layer

### Location

`src/app/example/page.tsx`

### Purpose

- Define the Next.js route (URL endpoint)
- Set up SEO metadata
- Import and render page component

### Structure

```typescript
import { ExamplePage } from "@pages"
import type { Metadata } from "next"

// SEO Metadata
export const metadata: Metadata = {
  title: "Example Page Title",
  description: "Example page description for SEO",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Example Page",
    description: "OG description for social sharing",
    type: "website",
  },
}

// Page Component
export default function ExampleRoute() {
  return <ExamplePage />
}
```

### Metadata Fields

**Essential**:

- `title` - Browser tab title (50-60 chars)
- `description` - Meta description (150-160 chars)
- `keywords` - SEO keywords array

**Social Media**:

- `openGraph` - Facebook, LinkedIn preview
- `twitter` - Twitter card data

**Advanced**:

- `robots` - Search engine crawling rules
- `alternates` - Language/locale alternatives
- `icons` - Favicon configuration
- `verification` - Site ownership verification

### Rendering Strategies

**Static Generation (Default)**:

```typescript
// No config needed - default behavior
// Best for: Marketing pages, blogs, documentation
```

**Server-Side Rendering**:

```typescript
export const dynamic = "force-dynamic"
// Best for: User dashboards, real-time data
```

**Incremental Static Regeneration**:

```typescript
export const revalidate = 3600 // Revalidate every hour
// Best for: Content that updates periodically
```

---

## 🚀 How to Create a New Page

### Step-by-Step Guide

#### 1. Create Data File

**Location**: `src/data/full-pages/my-page-data.ts`

```typescript
import { staticRoutes } from "@constants"

export interface MyPageData {
  hero: {
    title: string
    description: string
  }
  // ... other sections
}

export const myPageData: MyPageData = {
  hero: {
    title: "My Page Title",
    description: "My page description",
  },
}
```

**Export in** `src/data/full-pages/index.ts`:

```typescript
export { myPageData } from "./my-page-data"
```

#### 2. Create Validation Schema

**Location**: `src/validations/full-pages/my-page.schema.ts`

```typescript
import { validator } from "@libs"

export const MyPageHeroSchema = validator.object({
  title: validator.string().min(10).max(100),
  description: validator.string().min(20),
})

export const myPageSchema = validator.object({
  hero: MyPageHeroSchema,
})

export type MyPage = validator.infer<typeof myPageSchema>
```

**Export in** `src/validations/full-pages/index.ts`:

```typescript
export * from "./my-page.schema"
```

#### 3. Create Page Components

**Location**: `src/components/pages/MyPage/`

**MyPage.tsx**:

```typescript
import MyHeroSection from "./MyHeroSection/MyHeroSection"

export default function MyPage() {
  return (
    <>
      <MyHeroSection />
    </>
  )
}
```

**MyHeroSection/MyHeroSection.tsx**:

```typescript
import { Section, Container, Content } from "@atoms"
import { myPageData } from "@data"

export default function MyHeroSection() {
  const { hero } = myPageData

  return (
    <Section padding="2xl">
      <Container>
        <Content direction="column" gap="lg">
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </Content>
      </Container>
    </Section>
  )
}
```

**Export in** `src/components/pages/MyPage/index.ts`:

```typescript
export { default as MyPage } from "./MyPage"
```

**Export in** `src/components/pages/index.ts`:

```typescript
export * from "./MyPage"
```

#### 4. Add Route Constant

**Location**: `src/constants/app-route.ts`

```typescript
export const staticRoutes = {
  // ... existing routes
  MY_PAGE: "/my-page",
} as const
```

#### 5. Create Route Page

**Location**: `src/app/my-page/page.tsx`

```typescript
import { MyPage } from "@pages"
import type { Metadata } from "next"
import { myPageData } from "@data"

export const metadata: Metadata = {
  title: myPageData.hero.title,
  description: myPageData.hero.description,
}

export default function MyPageRoute() {
  return <MyPage />
}
```

#### 6. Add to Navigation (Optional)

**Update navbar data** if needed:
`src/data/common/navbar-data.ts` or `header-data.ts`

---

## 💡 Best Practices

### Data Management

- ✅ Keep data separate from components
- ✅ Use TypeScript interfaces for type safety
- ✅ Use constants for all URLs
- ✅ Group related data logically
- ❌ Don't hardcode content in components
- ❌ Don't use inline styles or classNames in data

### Validation

- ✅ Validate all external data
- ✅ Use descriptive error messages
- ✅ Add min/max constraints where appropriate
- ✅ Make optional fields explicit with `.optional()`
- ❌ Don't skip validation on user input
- ❌ Don't use `.any()` unless necessary

### Components

- ✅ Keep components focused and single-purpose
- ✅ Use Section → Container → Content layout
- ✅ Follow mobile-first responsive design
- ✅ Add proper TypeScript types
- ✅ Use semantic HTML elements
- ❌ Don't create deeply nested structures
- ❌ Don't mix presentation and business logic

### Performance

- ✅ Use Next.js Image component for images
- ✅ Lazy load content below the fold
- ✅ Use static generation when possible
- ✅ Minimize re-renders with React.memo
- ❌ Don't load large assets eagerly
- ❌ Don't fetch data on every render

### SEO

- ✅ Add unique title and description to every page
- ✅ Use proper heading hierarchy (h1 → h2 → h3)
- ✅ Include keywords naturally
- ✅ Add Open Graph metadata
- ✅ Set up canonical URLs
- ❌ Don't duplicate meta descriptions
- ❌ Don't keyword stuff

### Accessibility

- ✅ Use semantic HTML
- ✅ Add alt text to all images
- ✅ Ensure keyboard navigation works
- ✅ Maintain sufficient color contrast
- ✅ Add ARIA labels where needed
- ❌ Don't convey information by color alone
- ❌ Don't forget focus states

---

## 📖 Common Patterns

### Conditional Sections

```typescript
export default function MyPage() {
  const { hero, features, cta } = myPageData

  return (
    <>
      <HeroSection />
      {features && <FeaturesSection />}
      {cta && <CTASection />}
    </>
  )
}
```

### Props-Based Sections (Reusable)

```typescript
interface Props {
  title: string
  description: string
}

export default function HeroSection({ title, description }: Props) {
  return (
    <Section>
      <h1>{title}</h1>
      <p>{description}</p>
    </Section>
  )
}
```

### Dynamic Data

```typescript
async function MyPage() {
  const data = await fetchData()
  const validated = myPageSchema.parse(data)
  return <MyPageContent data={validated} />
}
```

### Client-Side Interactivity

```typescript
"use client"

import { useState } from "react"

export default function InteractiveSection() {
  const [isOpen, setIsOpen] = useState(false)
  // ... interactive logic
}
```

---

## 🔧 Troubleshooting

### Common Issues

**"Module not found"**

- Check import paths
- Ensure exports in index.ts files
- Verify file names match imports

**"Type error"**

- Run `pnpm typecheck`
- Check TypeScript interfaces match data
- Verify optional fields use `?`

**"Validation failed"**

- Check data matches schema
- Use `.safeParse()` to see detailed errors
- Verify all required fields are present

**"Styles not applying"**

- Check Tailwind class names are correct
- Verify no typos in className
- Check for conflicting styles

**"Page not found (404)"**

- Verify file is at `src/app/[route]/page.tsx`
- Check route constant matches URL
- Ensure default export exists

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Zod Documentation](https://zod.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Created with ❤️ by Noman E Jawad | © 2025 skytech_solutions**
