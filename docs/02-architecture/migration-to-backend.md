<!--
  migration-to-backend.md
  Created by Noman Jawad
  Copyright (c) 2025 skytechSolutions
  All rights reserved
-->

# Migration to Backend CMS/API Guide

Quick reference guide for migrating from static data files to a backend CMS or API.

## Current State (Static Data)

```
Data Files (src/data/) → Page Components → Organisms → Rendered
```

## Future State (API/CMS)

```
Backend CMS/API → Service Layer → Page Components → Organisms → Rendered
                       ↓
                  Zod Validation
```

## Step-by-Step Migration

### Step 1: Create Service Layer

Create `src/services/page.service.ts`:

```typescript
import { HomePageSchema, type HomePage } from "@validations"

export async function getHomePageData(): Promise<HomePage> {
  // Current: Static import
  const { homePageData } = await import("@data/full-pages/home-page")
  return homePageData

  // Future: Replace with API call
  // const response = await fetch(`${process.env.API_URL}/pages/home`)
  // const data = await response.json()
  // return HomePageSchema.parse(data) // ✅ Validates API response
}

export async function getGalleryPageData(): Promise<GalleryPage> {
  const { galleryPageData } = await import("@data/full-pages/gallery-page-data")
  return galleryPageData
}

export async function getContactPageData(): Promise<ContactPage> {
  const { contactPageData } = await import("@data/full-pages/contact-page-data")
  return contactPageData
}
```

### Step 2: Update Page Components

**Before**:

```typescript
// src/components/pages/Home/HomePage.tsx
import { homePageData } from "@data"

export default function HomePage() {
  return <PageHeader banner={homePageData.banner} />
}
```

**After**:

```typescript
// src/components/pages/Home/HomePage.tsx
import { getHomePageData } from "@services"

export default async function HomePage() {
  const homePageData = await getHomePageData()
  return <PageHeader banner={homePageData.banner} />
}
```

### Step 3: Organism Components - NO CHANGES NEEDED! ✅

```typescript
// src/components/organisms/PageHeader/PageHeader.tsx
// This component NEVER changes during migration!
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

### Step 4: Switch to API

Update service functions when backend is ready:

```typescript
// src/services/page.service.ts
import { HomePageSchema, type HomePage } from "@validations"

export async function getHomePageData(): Promise<HomePage> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pages/home`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    const data = await response.json()

    // ✅ Validate API response
    return HomePageSchema.parse(data)
  } catch (error) {
    console.error("Error fetching home page data:", error)

    // Fallback to static data
    const { homePageData } = await import("@data/full-pages/home-page")
    return homePageData
  }
}
```

## Files That Need Updates

### ✅ Need Updates

- [ ] `src/services/page.service.ts` - Create service layer
- [ ] Page components in `src/components/pages/*/` - Change to use services
- [ ] `.env.local` - Add API URL
- [ ] Error boundaries - Add for API errors

### ❌ No Changes Needed

- ✅ All organism components
- ✅ All molecule components
- ✅ All atom components
- ✅ Schema files (unless backend contract changes)
- ✅ Data files (keep as fallback)

## Environment Variables

Add to `.env.local`:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
API_SECRET_KEY=your-secret-key

# CMS Configuration (if using)
CMS_ENDPOINT=https://cms.yourdomain.com/api
CMS_API_TOKEN=your-cms-token
```

## Backend Team Requirements

### Data Contracts

Backend team needs to provide data matching your schemas:

**Example: Home Page Endpoint**

`GET /api/pages/home`

Response format must match `HomePageSchema`:

```json
{
  "title": "Home Page",
  "banner": {
    "title": "Welcome to Your Next.js Starter",
    "description": "A modern, scalable template...",
    "backgroundImageUrl": "https://cdn.example.com/images/hero-banner.jpg"
  }
}
```

### Schema Documentation

Share your Zod schemas with backend team:

- `src/validations/full-pages/*.schema.ts`
- They can use tools like `zod-to-json-schema` to generate JSON schemas
- Or manually create OpenAPI/Swagger docs

### Required Endpoints

| Page               | Endpoint                          | Schema                     |
| ------------------ | --------------------------------- | -------------------------- |
| Home               | `GET /api/pages/home`             | `HomePageSchema`           |
| Gallery            | `GET /api/pages/gallery`          | `GalleryPageSchema`        |
| Contact            | `GET /api/pages/contact`          | `ContactPageSchema`        |
| Privacy Policy     | `GET /api/pages/privacy-policy`   | `PrivacyPolicyPageSchema`  |
| Terms & Conditions | `GET /api/pages/terms-conditions` | `TermsConditionPageSchema` |

### Authentication (if needed)

If API requires authentication:

```typescript
// src/services/api-client.ts
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
}

export async function fetchAPI(endpoint: string) {
  const response = await fetch(`${process.env.API_URL}${endpoint}`, {
    headers,
    next: { revalidate: 3600 },
  })
  return response.json()
}
```

## Error Handling

### Service Layer Error Handling

```typescript
export async function getHomePageData(): Promise<HomePage> {
  try {
    const response = await fetch("/api/pages/home")
    const data = await response.json()
    return HomePageSchema.parse(data)
  } catch (error) {
    if (error instanceof validator.ZodError) {
      console.error("Schema validation failed:", error.errors)
      // Log to error tracking service
    }

    // Fallback to static data
    const { homePageData } = await import("@data/full-pages/home-page")
    return homePageData
  }
}
```

### Component Level Error Handling

```typescript
// src/components/pages/Home/HomePage.tsx
import { Suspense } from "react"
import { ErrorBoundary } from "@pages"
import { LoadingPage } from "@pages"

export default function HomePageRoute() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <HomePage />
      </Suspense>
    </ErrorBoundary>
  )
}
```

## Caching Strategy

### Next.js App Router Caching

```typescript
// Revalidate every hour
export async function getHomePageData(): Promise<HomePage> {
  const response = await fetch("/api/pages/home", {
    next: { revalidate: 3600 },
  })
  // ...
}

// Revalidate on-demand
export async function getHomePageData(): Promise<HomePage> {
  const response = await fetch("/api/pages/home", {
    cache: "no-store", // Always fresh
  })
  // ...
}
```

### Route Segment Config

```typescript
// src/app/page.tsx
export const revalidate = 3600 // Revalidate every hour
export const dynamic = "force-static" // Force static generation
```

## Testing

### Before Migration

```bash
# Verify static data works
pnpm dev
# Visit all pages, verify content loads
```

### During Migration

```bash
# Test with mock API
# Create mock API responses in /api folder
pnpm dev
```

### After Migration

```bash
# Test with real API
NEXT_PUBLIC_API_URL=https://api.yourdomain.com pnpm dev

# Test error states
# - Disconnect internet
# - Visit pages, verify fallback to static data

# Test validation
# - Send invalid data from API
# - Verify error logging
```

## Deployment Checklist

- [ ] Environment variables configured in deployment platform
- [ ] API endpoints accessible from deployment environment
- [ ] CORS configured on backend (if needed)
- [ ] Error tracking service setup (Sentry, LogRocket, etc.)
- [ ] Test all pages load with API data
- [ ] Test error fallback to static data
- [ ] Verify caching strategy works
- [ ] Check performance (Lighthouse scores)
- [ ] Test on mobile devices
- [ ] Run security audit

## Rollback Plan

If API migration fails:

1. **Remove service layer calls**:

   ```typescript
   // Revert to:
   import { homePageData } from "@data"
   ```

2. **Components don't change** - Already rendering from props ✅

3. **Redeploy** - Back to static data immediately

## Summary

### Changes Required

1. Create service layer (`src/services/`)
2. Update page components to use services
3. Add environment variables
4. Add error boundaries

### No Changes Required

- ✅ All organism components
- ✅ All molecule components
- ✅ All atom components
- ✅ Schemas (unless backend changes)

### Benefits

- 🚀 Dynamic content from CMS
- ✨ Content updates without redeployment
- 🔒 Type-safe API responses
- 🎯 Clear separation of concerns
- ⚡ Easy rollback to static data

---

**Read More**: [data-driven-architecture.md](./data-driven-architecture.md)
