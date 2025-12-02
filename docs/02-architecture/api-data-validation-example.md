# API Data Validation - Safe Pattern

> 📖 **For complete architecture guide**: See [data-driven-architecture.md](./data-driven-architecture.md) and [migration-to-backend.md](./migration-to-backend.md)

## ❌ Unsafe: Type Assertion with API Data

```typescript
// DANGEROUS - Don't do this with API data!
const response = await fetch("/api/about")
const data = await response.json()
const banner = data.banner as BannerType // ❌ No runtime validation!
```

**Problems:**

- Type assertions only affect TypeScript, not runtime
- API could return wrong structure
- No error handling for invalid data
- Runtime errors will occur if data doesn't match

## ✅ Safe: Runtime Validation with Schema

Your codebase already uses this pattern! See `blog-post.service.ts`:

```typescript
// ✅ SAFE - Runtime validation
const data = await fetcher<BlogPost>({ url: "/blog-post/..." })
const validated = BlogPostSchema.parse(data) // ✅ Validates at runtime
return { data: validated }
```

## Example: Safe About Page with API Data

If `aboutData` came from an API, here's the safe pattern:

### 1. Create a Service Function

```typescript
// src/services/about-page.service.ts
import { AboutPage, AboutPageSchema } from "@validations"
import { ServiceReturn } from "./service.types"
import { fetcher } from "../lib/fetcher"
import { customLog } from "@utils"

export async function getAboutPage(): Promise<ServiceReturn<AboutPage>> {
  try {
    const data = await fetcher<AboutPage>({
      url: "/about-page",
      tags: ["about-page"],
    })

    // ✅ Runtime validation - throws if invalid
    const validated = AboutPageSchema.parse(data)
    return { data: validated }
  } catch (err) {
    customLog(err)
    return {
      error: err instanceof Error ? err.message : "Failed to fetch about page",
    }
  }
}
```

### 2. Use in Component with Proper Error Handling

```typescript
// src/components/pages/AboutUs/AboutUsPage.tsx
import { getAboutPage } from "@services"
import { AboutUsPageHeader } from "./AboutUsPageHeader"
import { Banner as BannerType } from "@validations"

export default async function AboutUsPage() {
  const result = await getAboutPage()

  if (result.error || !result.data) {
    return <div>Error: {result.error}</div>
  }

  // ✅ Safe - data is validated at runtime
  // No type assertion needed because parse() ensures type safety
  const banner: BannerType = result.data.banner

  return (
    <>
      <AboutUsPageHeader banner={banner} />
      {/* ... rest of page */}
    </>
  )
}
```

### 3. Alternative: Validate Just the Banner

If you only need to validate the banner:

```typescript
import { Banner, BannerSchema } from "@validations"

export default async function AboutUsPage() {
  const response = await fetch('/api/about')
  const data = await response.json()

  try {
    // ✅ Validate only the banner part
    const banner = BannerSchema.parse(data.banner)

    return (
      <>
        <AboutUsPageHeader banner={banner} />
        {/* ... */}
      </>
    )
  } catch (err) {
    // Handle validation error
    return <div>Invalid banner data</div>
  }
}
```

## Key Differences

| Approach           | Static Data                    | API Data                             |
| ------------------ | ------------------------------ | ------------------------------------ |
| **Type Assertion** | ✅ Safe (compile-time checked) | ❌ Unsafe (no runtime check)         |
| **Schema.parse()** | ✅ Safe (but unnecessary)      | ✅ **Required** (runtime validation) |

## Why `.parse()` is Safe

1. **Runtime Validation**: Actually checks the data structure at runtime
2. **Type Safety**: Returns properly typed data after validation
3. **Error Handling**: Throws if data doesn't match schema
4. **TypeScript Integration**: TypeScript knows the return type

## Current Implementation (Static Data)

Your current code is safe because:

- `aboutData` is static/compile-time data
- It's explicitly typed as `AboutPage`
- The structure is guaranteed to match

But if you switch to API data, you **must** use `.parse()` for safety!

## Migration to API/CMS

When ready to migrate from static data to API/CMS:

1. **Create service layer** - See [migration-to-backend.md](./migration-to-backend.md)
2. **Update page components** - Use async/await with service functions
3. **Organism components stay unchanged** - They receive same typed props
4. **Always validate** - Use `.parse()` on all external data

For complete migration guide, read:

- [data-driven-architecture.md](./data-driven-architecture.md#migration-to-apicms)
- [migration-to-backend.md](./migration-to-backend.md)
