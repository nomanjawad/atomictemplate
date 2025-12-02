<!--
  data-driven-architecture.md
  Created by Noman Jawad
  Copyright (c) 2025 skytechSolutions
  All rights reserved
-->

# Data-Driven Architecture Guide

## Table of Contents

1. [Overview](#overview)
2. [Architecture Pattern](#architecture-pattern)
3. [Data Flow](#data-flow)
4. [File Structure](#file-structure)
5. [Creating New Pages](#creating-new-pages)
6. [Schema Validation](#schema-validation)
7. [Best Practices](#best-practices)
8. [Migration to API/CMS](#migration-to-apicms)
9. [Examples](#examples)

---

## Overview

This template uses a **data-driven architecture** that separates content from presentation. This approach provides:

- ✅ **Type Safety**: Full TypeScript support with compile-time checking
- ✅ **Runtime Validation**: Zod schemas validate data integrity
- ✅ **Separation of Concerns**: Content editors don't touch component code
- ✅ **i18n Ready**: Support for multiple languages with separate data files
- ✅ **Future-Proof**: Easy migration to API/CMS without changing components
- ✅ **Maintainability**: Centralized data management
- ✅ **Consistency**: Standardized patterns across the entire project

---

## Architecture Pattern

### Core Principle

**Data flows from centralized data files → Page components → Section components → Organism components**

```
src/data/full-pages/home-page.ts
  ↓ (import)
HomePage component
  ↓ (props)
PageHeader organism
  ↓ (render)
User sees content
```

### Three Layers

1. **Data Layer** (`src/data/`)
   - Static data files with TypeScript types
   - Organized by page and reusability
   - No component logic, only data

2. **Validation Layer** (`src/validations/`)
   - Zod schemas for runtime validation
   - TypeScript types inferred from schemas
   - Used for API/CMS data validation

3. **Component Layer** (`src/components/`)
   - Receives typed data via props
   - Never validates, only renders
   - Components are "dumb" - they don't know where data comes from

---

## Data Flow

### Current Pattern (Static Data)

```typescript
// 1. Define data with type
// src/data/full-pages/home-page.ts
import { HomePage } from "@validations"

export const homePageData: HomePage = {
  title: "Home Page",
  banner: {
    title: "Welcome to Your Next.js Starter",
    description: "A modern, scalable template...",
    backgroundImageUrl: imgHeroBanner,
  },
}
```

```typescript
// 2. Import data in page component
// src/components/pages/Home/HomePage.tsx
import { homePageData } from "@data"

export default function HomePage() {
  return (
    <PageHeader
      banner={homePageData.banner}
      isVisibleBackground
      height="large"
    />
  )
}
```

```typescript
// 3. Component receives and renders data
// src/components/organisms/PageHeader/PageHeader.tsx
export default function PageHeader({ banner }: PageHeaderProps) {
  return (
    <Section>
      <Container>
        {banner && (
          <>
            <BaseText tag="h1">{banner.title}</BaseText>
            <BaseText tag="p">{banner.description}</BaseText>
          </>
        )}
      </Container>
    </Section>
  )
}
```

### Future Pattern (API/CMS Data)

```typescript
// 1. Service layer fetches and validates
// src/services/page.service.ts
import { HomePageSchema } from "@validations"

export async function getHomePageData(): Promise<HomePage> {
  const response = await fetch("/api/home-page")
  const data = await response.json()

  // ✅ Validate API response
  return HomePageSchema.parse(data)
}
```

```typescript
// 2. Page component uses service (ONLY file that changes)
// src/components/pages/Home/HomePage.tsx
import { getHomePageData } from "@services"

export default async function HomePage() {
  const homePageData = await getHomePageData()

  // ✅ Same props, same component!
  return (
    <PageHeader
      banner={homePageData.banner}
      isVisibleBackground
      height="large"
    />
  )
}
```

```typescript
// 3. Component code NEVER changes! ✅
// Components receive same typed props regardless of data source
```

---

## File Structure

```
src/
├── data/                           # Data Layer
│   ├── full-pages/                 # Page-specific data
│   │   ├── home-page.ts           # HomePage data
│   │   ├── gallery-page-data.ts   # GalleryPage data
│   │   ├── contact-page-data.ts   # ContactPage data
│   │   ├── example-page-data.ts   # ExamplePage data (template)
│   │   ├── privacy-policy.ts      # Privacy policy data
│   │   ├── terms-condition.ts     # Terms & conditions data
│   │   └── index.ts               # Barrel exports
│   ├── common/                     # Shared/reusable data
│   │   ├── faq-data.ts            # FAQ items
│   │   ├── cta-data.ts            # Call-to-action
│   │   ├── navbar-data.ts         # Navigation menu
│   │   ├── footer-data.ts         # Footer content
│   │   └── form-fields-example.ts # Form configurations
│   ├── blog-post/                  # Blog/dynamic content
│   ├── ar/                         # Arabic translations
│   └── ru/                         # Russian translations
│
├── validations/                    # Validation Layer
│   ├── full-pages/                 # Page schemas
│   │   ├── home-page.schema.ts
│   │   ├── gallery-page.schema.ts
│   │   ├── contact-page.schema.ts
│   │   ├── example-page.schema.ts
│   │   ├── privacy-policy-page.schema.ts
│   │   ├── terms-condition-page.schema.ts
│   │   └── index.ts
│   ├── common/                     # Shared schemas
│   │   ├── banner.schema.ts
│   │   ├── button.schema.ts
│   │   ├── faq.schema.ts
│   │   └── index.ts
│   └── index.ts
│
├── components/                     # Component Layer
│   ├── pages/                      # Page components
│   │   ├── Home/
│   │   │   └── HomePage.tsx       # Imports data, passes to sections
│   │   ├── Gallery/
│   │   │   ├── GalleryPage.tsx
│   │   │   └── GallerySnapshotSection/
│   │   ├── ContactPage/
│   │   │   ├── ContactPage.tsx
│   │   │   ├── ContactHeroSection/
│   │   │   ├── ContactInfoSection/
│   │   │   └── ContactFormSection/
│   │   └── ExamplePage/           # Complete example with docs
│   │       ├── ExamplePage.tsx
│   │       ├── ExampleHeroSection/
│   │       ├── ExampleFeaturesSection/
│   │       └── ...
│   ├── organisms/                  # Complex components
│   │   ├── PageHeader/            # Accepts banner prop
│   │   ├── FaqSection/            # Accepts faqData prop
│   │   └── Banner/                # Accepts CTA props
│   └── ...
│
└── services/                       # Service Layer (future)
    ├── page.service.ts            # Page data fetching
    ├── blog.service.ts            # Blog data fetching
    └── index.ts
```

---

## Creating New Pages

### Step-by-Step Guide

#### 1. Create Data File

**Location**: `src/data/full-pages/my-page-data.ts`

```typescript
import { MyPage } from "@validations"
import { imgMyPageBanner } from "@images"

export const myPageData: MyPage = {
  title: "My Page",
  banner: {
    title: "Welcome to My Page",
    description: "This is an example page",
    backgroundImageUrl: imgMyPageBanner,
  },
  // ... other page data
}
```

#### 2. Create Schema File

**Location**: `src/validations/full-pages/my-page.schema.ts`

```typescript
import { validator } from "@libs"
import { BannerSchema } from "@validations"

export const MyPageSchema = validator.object({
  title: validator.string(),
  banner: BannerSchema,
  // ... other fields
})

export type MyPage = validator.infer<typeof MyPageSchema>
```

#### 3. Export from Index Files

**`src/data/full-pages/index.ts`**:

```typescript
export { myPageData } from "./my-page-data"
```

**`src/validations/full-pages/index.ts`**:

```typescript
export * from "./my-page.schema"
```

#### 4. Create Page Component

**Location**: `src/components/pages/MyPage/MyPage.tsx`

```typescript
import { PageHeader } from "@organisms"
import { myPageData } from "@data"

export default function MyPage() {
  return (
    <>
      <PageHeader
        banner={myPageData.banner}
        isVisibleBackground
        height="large"
      />
      {/* Other sections */}
    </>
  )
}
```

#### 5. Create Route

**Location**: `src/app/my-page/page.tsx`

```typescript
import { MyPage } from "@pages"

export default function MyPageRoute() {
  return <MyPage />
}
```

#### 6. Add Route Constant

**`src/constants/app-route.ts`**:

```typescript
export const staticRoutes = {
  // ... existing routes
  MY_PAGE: "/my-page",
}
```

---

## Schema Validation

### When to Use Schemas

| Data Source       | Validation Needed? | Where to Validate           |
| ----------------- | ------------------ | --------------------------- |
| Static data files | ❌ No              | TypeScript types sufficient |
| API responses     | ✅ Yes             | Service layer               |
| CMS data          | ✅ Yes             | Service layer               |
| User input        | ✅ Yes             | Form submission handler     |
| External services | ✅ Yes             | Service layer               |

### Schema Example

```typescript
// src/validations/common/banner.schema.ts
import { validator } from "@libs"

const imageValidator = validator.string().url().optional()

const ButtonSchema = validator.object({
  text: validator.string(),
  url: validator.string().url(),
  variant: validator.enum(["primary", "secondary", "outline"]).optional(),
})

export const BannerSchema = validator.object({
  title: validator.string().min(1).max(100),
  description: validator.string().optional(),
  backgroundImageUrl: imageValidator,
  heroImageUrl: imageValidator,
  button: ButtonSchema.optional(),
})

export type Banner = validator.infer<typeof BannerSchema>
export type Button = validator.infer<typeof ButtonSchema>
```

### Using Schemas for Validation

```typescript
// src/services/page.service.ts
import { HomePageSchema, type HomePage } from "@validations"

export async function getHomePageData(): Promise<HomePage> {
  try {
    const response = await fetch("/api/home-page")
    const data = await response.json()

    // ✅ Validates and returns typed data
    return HomePageSchema.parse(data)
  } catch (error) {
    if (error instanceof validator.ZodError) {
      console.error("Invalid data:", error.errors)
      // Handle validation error
    }
    throw error
  }
}
```

---

## Best Practices

### ✅ DO

1. **Keep data files simple**

   ```typescript
   // ✅ Good: Pure data
   export const pageData = {
     title: "My Title",
     items: ["Item 1", "Item 2"],
   }
   ```

2. **Use TypeScript types**

   ```typescript
   // ✅ Good: Typed data
   export const pageData: MyPage = {
     /* ... */
   }
   ```

3. **Import from aliases**

   ```typescript
   // ✅ Good: Clean imports
   import { myPageData } from "@data"
   import { MyPage } from "@validations"
   ```

4. **Validate external data**

   ```typescript
   // ✅ Good: Validate API responses
   const data = MyPageSchema.parse(apiResponse)
   ```

5. **Use optional fields wisely**
   ```typescript
   // ✅ Good: Optional for truly optional content
   banner?: Banner
   description?: string
   ```

### ❌ DON'T

1. **Don't hardcode in components**

   ```typescript
   // ❌ Bad: Hardcoded content
   <h1>Welcome to My Site</h1>

   // ✅ Good: Data-driven
   <h1>{banner.title}</h1>
   ```

2. **Don't mix logic with data**

   ```typescript
   // ❌ Bad: Logic in data file
   export const getData = () => {
     if (condition) return data1
     return data2
   }

   // ✅ Good: Pure data
   export const data1 = {
     /* ... */
   }
   export const data2 = {
     /* ... */
   }
   ```

3. **Don't store sensitive data**

   ```typescript
   // ❌ Bad: API keys in data files
   export const config = {
     apiKey: "secret-key-123",
   }

   // ✅ Good: Use environment variables
   const apiKey = process.env.API_KEY
   ```

4. **Don't validate static data**

   ```typescript
   // ❌ Bad: Unnecessary runtime validation
   const data = HomePageSchema.parse(homePageData)

   // ✅ Good: TypeScript types only
   const data: HomePage = homePageData
   ```

5. **Don't create circular dependencies**

   ```typescript
   // ❌ Bad: Data imports component
   import { MyComponent } from "@components"

   // ✅ Good: Only import types, constants, assets
   import { MyType } from "@validations"
   import { imgBanner } from "@images"
   ```

---

## Migration to API/CMS

### Step 1: Create Service Layer

```typescript
// src/services/page.service.ts
import { HomePageSchema, type HomePage } from "@validations"

export async function getHomePageData(): Promise<HomePage> {
  // For now, import static data
  const { homePageData } = await import("@data/full-pages/home-page")
  return homePageData

  // When backend is ready, switch to API:
  // const response = await fetch('/api/pages/home')
  // const data = await response.json()
  // return HomePageSchema.parse(data)
}
```

### Step 2: Update Page Component

```typescript
// src/components/pages/Home/HomePage.tsx
import { getHomePageData } from "@services"

export default async function HomePage() {
  const homePageData = await getHomePageData()

  return (
    <PageHeader
      banner={homePageData.banner}
      isVisibleBackground
      height="large"
    />
  )
}
```

### Step 3: Organism Components Stay Unchanged! ✅

```typescript
// src/components/organisms/PageHeader/PageHeader.tsx
// NO CHANGES NEEDED - still receives same typed props
export default function PageHeader({ banner }: PageHeaderProps) {
  return (
    <Section>
      {banner && (
        <>
          <BaseText tag="h1">{banner.title}</BaseText>
          <BaseText tag="p">{banner.description}</BaseText>
        </>
      )}
    </Section>
  )
}
```

### Migration Checklist

- [ ] Create service layer functions in `src/services/`
- [ ] Update page components to use service functions
- [ ] Backend team provides API endpoints
- [ ] Backend team provides data contracts (JSON schemas)
- [ ] Verify Zod schemas match backend contracts
- [ ] Update service functions to fetch from API
- [ ] Add error handling and loading states
- [ ] Test with real API data
- [ ] Update environment variables
- [ ] Deploy!

---

## Examples

### Example 1: Simple Page with Banner

**Data File**:

```typescript
// src/data/full-pages/about-page.ts
import { AboutPage } from "@validations"
import { imgAboutBanner } from "@images"

export const aboutPageData: AboutPage = {
  banner: {
    title: "About Us",
    description: "Learn more about our company",
    backgroundImageUrl: imgAboutBanner,
  },
}
```

**Schema File**:

```typescript
// src/validations/full-pages/about-page.schema.ts
import { validator } from "@libs"
import { BannerSchema } from "@validations"

export const AboutPageSchema = validator.object({
  banner: BannerSchema,
})

export type AboutPage = validator.infer<typeof AboutPageSchema>
```

**Page Component**:

```typescript
// src/components/pages/About/AboutPage.tsx
import { PageHeader } from "@organisms"
import { aboutPageData } from "@data"

export default function AboutPage() {
  return (
    <PageHeader
      banner={aboutPageData.banner}
      isVisibleBackground
      height="large"
    />
  )
}
```

### Example 2: Complex Page with Multiple Sections

**Data File**:

```typescript
// src/data/full-pages/services-page.ts
import { ServicesPage } from "@validations"

export const servicesPageData: ServicesPage = {
  banner: {
    title: "Our Services",
    description: "Comprehensive solutions for your business",
  },
  services: [
    {
      id: "service-1",
      title: "Web Development",
      description: "Modern, scalable web applications",
      icon: "code",
    },
    {
      id: "service-2",
      title: "Mobile Apps",
      description: "iOS and Android development",
      icon: "smartphone",
    },
  ],
  cta: {
    title: "Ready to get started?",
    button: {
      text: "Contact Us",
      url: "/contact",
    },
  },
}
```

**Schema File**:

```typescript
// src/validations/full-pages/services-page.schema.ts
import { validator } from "@libs"
import { BannerSchema, ButtonSchema } from "@validations"

const ServiceSchema = validator.object({
  id: validator.string(),
  title: validator.string(),
  description: validator.string(),
  icon: validator.string(),
})

export const ServicesPageSchema = validator.object({
  banner: BannerSchema,
  services: validator.array(ServiceSchema),
  cta: validator.object({
    title: validator.string(),
    button: ButtonSchema,
  }),
})

export type Service = validator.infer<typeof ServiceSchema>
export type ServicesPage = validator.infer<typeof ServicesPageSchema>
```

**Page Component**:

```typescript
// src/components/pages/Services/ServicesPage.tsx
import { PageHeader } from "@organisms"
import { servicesPageData } from "@data"
import { ServicesGrid } from "./ServicesGrid"
import { ServicesCTA } from "./ServicesCTA"

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        banner={servicesPageData.banner}
        isVisibleBackground
        height="large"
      />
      <ServicesGrid services={servicesPageData.services} />
      <ServicesCTA cta={servicesPageData.cta} />
    </>
  )
}
```

### Example 3: Form with Data-Driven Fields

**Data File**:

```typescript
// src/data/common/contact-form-fields.ts
import { FormFieldConfig } from "@validations"

export const contactFormFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "your@email.com",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    tag: "textarea",
    placeholder: "Your message...",
    required: true,
    rows: 6,
  },
]
```

**Component Usage**:

```typescript
// src/components/pages/ContactPage/ContactFormSection.tsx
"use client"

import { useState } from "react"
import { InputField } from "@molecules"
import { contactFormFields } from "@data"

export default function ContactFormSection() {
  const [formData, setFormData] = useState<Record<string, string>>({})

  return (
    <form>
      {contactFormFields.map((field) => (
        <InputField
          key={field.name}
          {...field}
          value={formData[field.name] || ""}
          setValue={(value) =>
            setFormData((prev) => ({ ...prev, [field.name]: value }))
          }
        />
      ))}
    </form>
  )
}
```

---

## Quick Reference

### Import Aliases

| Alias          | Path                       |
| -------------- | -------------------------- |
| `@data`        | `src/data`                 |
| `@validations` | `src/validations`          |
| `@components`  | `src/components`           |
| `@atoms`       | `src/components/atoms`     |
| `@molecules`   | `src/components/molecules` |
| `@organisms`   | `src/components/organisms` |
| `@layouts`     | `src/components/layouts`   |
| `@pages`       | `src/components/pages`     |
| `@images`      | `public/images`            |
| `@icons`       | `public/icons`             |
| `@utils`       | `src/utils`                |
| `@constants`   | `src/constants`            |
| `@libs`        | `src/lib`                  |
| `@services`    | `src/services`             |

### Common Schemas

- `BannerSchema` - Page banners/heroes
- `ButtonSchema` - CTA buttons
- `FAQSchema` - FAQ sections
- `ImageSchema` - Image assets
- `FormFieldConfigSchema` - Form fields

### Useful Commands

```bash
# Type check all files
pnpm type-check

# Lint all files
pnpm lint

# Clean cache if needed
pnpm clean-cache
```

---

## Summary

✅ **Data Layer**: Pure data files with TypeScript types  
✅ **Validation Layer**: Zod schemas for runtime validation  
✅ **Component Layer**: Dumb components that only render props  
✅ **Service Layer**: Future API/CMS integration point

This architecture ensures:

- Type safety from end to end
- Easy content updates without touching components
- Painless migration to backend CMS
- Maintainable, scalable codebase

**Next Steps**:

1. Review [example-page-data.ts](../data/full-pages/example-page-data.ts)
2. Review [ExamplePage](../components/pages/ExamplePage/ExamplePage.tsx)
3. Create your first page following the pattern
4. Read [Schema Validation](#schema-validation) before API migration

---

**Questions?** Check [ExamplePage documentation](../components/pages/ExamplePage/ExamplePage.tsx) for detailed examples.
