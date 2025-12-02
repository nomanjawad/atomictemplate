<!--
  data-pattern-quick-reference.md
  Created by Noman Jawad
  Copyright (c) 2025 skytechSolutions
  All rights reserved
-->

# Data Pattern - Quick Reference Card

> 📖 Full documentation: [data-driven-architecture.md](./data-driven-architecture.md)

## The Golden Rule

**Data flows ONE WAY**: Data Files → Page Components → Organisms → User

Components **NEVER**:

- ❌ Fetch their own data
- ❌ Validate data
- ❌ Have hardcoded content

## Create a New Page in 5 Steps

### 1. Create Data File

```typescript
// src/data/full-pages/my-page.ts
import { MyPage } from "@validations"

export const myPageData: MyPage = {
  banner: {
    title: "My Title",
    description: "My description",
  },
}
```

### 2. Create Schema

```typescript
// src/validations/full-pages/my-page.schema.ts
import { validator } from "@libs"
import { BannerSchema } from "@validations"

export const MyPageSchema = validator.object({
  banner: BannerSchema,
})

export type MyPage = validator.infer<typeof MyPageSchema>
```

### 3. Export Both

```typescript
// src/data/full-pages/index.ts
export { myPageData } from "./my-page"

// src/validations/full-pages/index.ts
export * from "./my-page.schema"
```

### 4. Create Page Component

```typescript
// src/components/pages/MyPage/MyPage.tsx
import { PageHeader } from "@organisms"
import { myPageData } from "@data"

export default function MyPage() {
  return (
    <PageHeader
      banner={myPageData.banner}
      isVisibleBackground
      height="large"
    />
  )
}
```

### 5. Create Route

```typescript
// src/app/my-page/page.tsx
import { MyPage } from "@pages"

export default function MyPageRoute() {
  return <MyPage />
}
```

## Common Patterns

### Page with Multiple Sections

```typescript
import { myPageData } from "@data"

export default function MyPage() {
  return (
    <>
      <PageHeader banner={myPageData.banner} />
      <FeaturesSection features={myPageData.features} />
      <FaqSection faqData={myPageData.faq} />
      <Banner /> {/* Uses ctaData internally */}
    </>
  )
}
```

### Optional Sections

```typescript
export default function MyPage() {
  return (
    <>
      <PageHeader banner={myPageData.banner} />
      {myPageData.testimonials && (
        <TestimonialsSection data={myPageData.testimonials} />
      )}
    </>
  )
}
```

### Loop Through Data

```typescript
{sections.map((section, index) => (
  <Section key={index}>
    <h2>{section.title}</h2>
    <p>{section.description}</p>
  </Section>
))}
```

## Import Aliases

| Alias          | Path                       | Use For                 |
| -------------- | -------------------------- | ----------------------- |
| `@data`        | `src/data`                 | Import data files       |
| `@validations` | `src/validations`          | Import types/schemas    |
| `@organisms`   | `src/components/organisms` | Import organisms        |
| `@molecules`   | `src/components/molecules` | Import molecules        |
| `@atoms`       | `src/components/atoms`     | Import atoms            |
| `@pages`       | `src/components/pages`     | Import page components  |
| `@images`      | `public/images`            | Import images           |
| `@icons`       | `public/icons`             | Import icons            |
| `@constants`   | `src/constants`            | Import constants/routes |

## Data Organization

```
src/data/
├── full-pages/      → Page-specific data (home, gallery, contact)
├── common/          → Shared data (navbar, footer, faq, cta)
├── blog-post/       → Blog content
├── ar/              → Arabic translations
└── ru/              → Russian translations
```

## Schema Organization

```
src/validations/
├── full-pages/      → Page schemas (home, gallery, contact)
├── common/          → Shared schemas (banner, button, faq)
└── index.ts         → Re-exports everything
```

## Common Schemas

| Schema         | Use For             | Import From    |
| -------------- | ------------------- | -------------- |
| `BannerSchema` | Page banners/heroes | `@validations` |
| `ButtonSchema` | CTA buttons         | `@validations` |
| `FAQSchema`    | FAQ sections        | `@validations` |
| `ImageSchema`  | Image sources       | `@validations` |

## Validation: When & Where

| Scenario          | Validate? | Where?                |
| ----------------- | --------- | --------------------- |
| Static data files | ❌ No     | TypeScript types only |
| API response      | ✅ Yes    | Service layer         |
| CMS data          | ✅ Yes    | Service layer         |
| User form input   | ✅ Yes    | Form handler          |

## Future API Migration

### Current (Static)

```typescript
import { homePageData } from "@data"

export default function HomePage() {
  return <PageHeader banner={homePageData.banner} />
}
```

### Future (API)

```typescript
import { getHomePageData } from "@services"

export default async function HomePage() {
  const homePageData = await getHomePageData()
  return <PageHeader banner={homePageData.banner} />
}
```

### Service Layer

```typescript
// src/services/page.service.ts
export async function getHomePageData(): Promise<HomePage> {
  const response = await fetch("/api/pages/home")
  const data = await response.json()
  return HomePageSchema.parse(data) // ✅ Validates!
}
```

## Troubleshooting

### Type Error: "Type X is not assignable to Type Y"

- ✅ Check data matches schema
- ✅ Run `pnpm type-check`
- ✅ Verify imports use correct aliases

### Component Not Rendering Data

- ✅ Check data is imported in page component
- ✅ Verify props passed to organism
- ✅ Check organism accepts correct prop type

### Schema Validation Fails

- ✅ Check API response format matches schema
- ✅ Use `.optional()` for optional fields
- ✅ Check for typos in field names

### Import Not Found

- ✅ Check barrel exports (`index.ts` files)
- ✅ Verify file extension matches (`.ts` vs `.tsx`)
- ✅ Check tsconfig.json for correct aliases

## Best Practices Checklist

### ✅ DO

- Import data from `@data`
- Pass data via props
- Use TypeScript types
- Keep components pure (no side effects)
- Use optional chaining (`banner?.title`)
- Document complex data structures

### ❌ DON'T

- Hardcode content in components
- Fetch data in organism components
- Mix styling with data
- Store secrets in data files
- Validate static data at runtime
- Create circular dependencies

## Commands

```bash
# Type check
pnpm type-check

# Lint
pnpm lint

# Clean cache
pnpm clean-cache

# Dev server
pnpm dev

# Build
pnpm build
```

## Help

- 📖 Full Guide: `docs/data-driven-architecture.md`
- 🚀 Migration: `docs/migration-to-backend.md`
- 💡 Example Data: `src/data/full-pages/example-page-data.ts`
- 🎯 Example Component: `src/components/pages/ExamplePage/ExamplePage.tsx`
- 📝 Changelog: `docs/changelog-data-driven.md`

---

**Remember**: Data Files → Page Components → Organisms → User

That's it! Keep it simple, keep it consistent. 🎉
