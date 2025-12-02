/*
 * page.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

/**
 * ============================================================================
 * EXAMPLE ROUTE PAGE - COMPLETE DOCUMENTATION
 * ============================================================================
 *
 * This file demonstrates how to create a Next.js app router page.
 *
 * FILE LOCATION:
 * /src/app/example/page.tsx → Accessible at /example route
 *
 *
 * NEXT.JS APP ROUTER STRUCTURE:
 * ------------------------------
 * /src/app/
 *   ├── page.tsx                → Home page (/)
 *   ├── layout.tsx              → Root layout for all pages
 *   ├── error.tsx               → Error boundary
 *   ├── loading.tsx             → Loading state
 *   ├── not-found.tsx           → 404 page
 *   ├── example/
 *   │   └── page.tsx            → Example page (/example)
 *   ├── contact-us/
 *   │   └── page.tsx            → Contact page (/contact-us)
 *   └── blog/
 *       ├── page.tsx            → Blog listing (/blog)
 *       └── [slug]/
 *           └── page.tsx        → Blog post (/blog/[slug])
 *
 *
 * PAGE FILE REQUIREMENTS:
 * -----------------------
 * 1. Default export: Page component
 * 2. Named export: metadata or generateMetadata() for SEO
 * 3. Optional: generateStaticParams() for static generation
 * 4. Optional: revalidate for ISR (Incremental Static Regeneration)
 *
 *
 * METADATA FOR SEO:
 * -----------------
 * Static metadata (simple pages):
 *   export const metadata: Metadata = { ... }
 *
 * Dynamic metadata (from data/API):
 *   export async function generateMetadata(): Promise<Metadata> { ... }
 *
 *
 * RENDERING STRATEGIES:
 * ---------------------
 * 1. Static Generation (SSG) - Default, fastest
 *    - Page is built at build time
 *    - Best for content that doesn't change often
 *    - Use for: landing pages, blogs, documentation
 *
 * 2. Server-Side Rendering (SSR) - For dynamic content
 *    - Page is built on each request
 *    - Use for: user-specific content, real-time data
 *    - Add: export const dynamic = 'force-dynamic'
 *
 * 3. Incremental Static Regeneration (ISR) - Best of both
 *    - Static with periodic updates
 *    - Use for: content that updates occasionally
 *    - Add: export const revalidate = 3600 // seconds
 *
 *
 * BEST PRACTICES:
 * ---------------
 * ✅ Keep page files thin - they should only handle routing
 * ✅ Move component logic to /src/components/pages/
 * ✅ Use metadata for SEO (title, description, Open Graph)
 * ✅ Add proper keywords for search engines
 * ✅ Use TypeScript for type safety
 * ✅ Follow Next.js conventions (page.tsx, layout.tsx, etc.)
 * ✅ Import page components from @pages alias
 * ✅ Add loading.tsx for better UX
 * ✅ Add error.tsx for error handling
 *
 * ❌ Don't put business logic in page files
 * ❌ Don't forget metadata (crucial for SEO)
 * ❌ Don't use default metadata ("Page" as title)
 * ❌ Don't mix data fetching with rendering logic
 */

import { ExamplePage } from "@pages"
import type { Metadata } from "next"
import { examplePageData } from "@data"

/**
 * Page Metadata
 * -------------
 * SEO and social media sharing information
 *
 * IMPORTANT FIELDS:
 * - title: Browser tab title, search results (50-60 chars optimal)
 * - description: Meta description for search results (150-160 chars)
 * - keywords: Help search engines understand content
 * - openGraph: Social media preview when shared
 * - twitter: Twitter-specific metadata
 * - robots: Control search engine indexing
 * - alternates: Language/locale alternatives
 *
 * ADVANCED OPTIONS:
 * - metadataBase: Base URL for all relative URLs
 * - icons: Favicon, app icons
 * - manifest: PWA manifest
 * - verification: Site verification (Google, Bing, etc.)
 * - category: Page category
 * - classification: Page classification
 */
export const metadata: Metadata = {
  // Basic metadata
  title: examplePageData.meta.title,
  description: examplePageData.meta.description,
  keywords: examplePageData.meta.keywords,

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: examplePageData.meta.title,
    description: examplePageData.meta.description,
    type: "website",
    locale: "en_US",
    // url: "https://example.com/example", // Add your domain
    // siteName: "Your Site Name",
    // images: [
    //   {
    //     url: "/images/example-og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Example Page",
    //   },
    // ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: examplePageData.meta.title,
    description: examplePageData.meta.description,
    // creator: "@yourusername",
    // images: ["/images/example-twitter-image.jpg"],
  },

  // Robots (optional - controls search engine crawling)
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },

  // Category (optional)
  category: "documentation",
}

/**
 * ============================================================================
 * ALTERNATIVE: DYNAMIC METADATA
 * ============================================================================
 *
 * Use this pattern when metadata depends on dynamic data (API, database, etc.)
 *
 * export async function generateMetadata(): Promise<Metadata> {
 *   // Fetch data
 *   const data = await fetchPageData()
 *
 *   return {
 *     title: data.title,
 *     description: data.description,
 *     openGraph: {
 *       title: data.title,
 *       description: data.description,
 *       images: [data.ogImage],
 *     },
 *   }
 * }
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * STATIC GENERATION OPTIONS
 * ============================================================================
 *
 * 1. FORCE STATIC:
 *    export const dynamic = 'force-static'
 *    - Forces page to be statically generated
 *    - Good for pages that rarely change
 *
 * 2. FORCE DYNAMIC:
 *    export const dynamic = 'force-dynamic'
 *    - Forces SSR on every request
 *    - Good for user-specific or real-time content
 *
 * 3. ISR (Incremental Static Regeneration):
 *    export const revalidate = 3600 // Revalidate every hour
 *    - Static generation with periodic updates
 *    - Good for content that updates regularly
 *
 * 4. ON-DEMAND REVALIDATION:
 *    - Use revalidatePath() or revalidateTag() in server actions
 *    - Good for triggering updates from CMS/webhooks
 *
 * ============================================================================
 */

// Uncomment to enable ISR (revalidate every hour)
// export const revalidate = 3600

// Uncomment to force static generation
// export const dynamic = 'force-static'

/**
 * Example Page Component
 * ----------------------
 * Default export that renders the page
 *
 * IMPORTANT:
 * - Must be default export
 * - Should be a React Server Component by default
 * - Use "use client" directive only if needed for interactivity
 * - Keep thin - delegate to page components
 *
 * @returns ExamplePage component with all sections
 */
export default function ExampleRoute() {
  return <ExamplePage />
}

/**
 * ============================================================================
 * ADVANCED PATTERNS
 * ============================================================================
 *
 * 1. WITH DATA FETCHING:
 * ----------------------
 * async function ExampleRoute() {
 *   const data = await fetch('https://api.example.com/data').then(r => r.json())
 *   return <ExamplePage data={data} />
 * }
 *
 *
 * 2. WITH PARAMS (DYNAMIC ROUTES):
 * --------------------------------
 * File: /app/blog/[slug]/page.tsx
 *
 * interface Props {
 *   params: { slug: string }
 *   searchParams: { [key: string]: string | string[] | undefined }
 * }
 *
 * export default function BlogPostRoute({ params }: Props) {
 *   return <BlogPost slug={params.slug} />
 * }
 *
 * // Generate static paths at build time
 * export async function generateStaticParams() {
 *   const posts = await fetchAllPosts()
 *   return posts.map((post) => ({ slug: post.slug }))
 * }
 *
 *
 * 3. WITH SUSPENSE (LOADING STATES):
 * ----------------------------------
 * import { Suspense } from 'react'
 * import { LoadingSpinner } from '@components'
 *
 * export default function ExampleRoute() {
 *   return (
 *     <Suspense fallback={<LoadingSpinner />}>
 *       <ExamplePage />
 *     </Suspense>
 *   )
 * }
 *
 *
 * 4. WITH ERROR BOUNDARY:
 * -----------------------
 * Create error.tsx in the same folder:
 *
 * 'use client'
 *
 * export default function Error({
 *   error,
 *   reset,
 * }: {
 *   error: Error & { digest?: string }
 *   reset: () => void
 * }) {
 *   return (
 *     <div>
 *       <h2>Something went wrong!</h2>
 *       <button onClick={() => reset()}>Try again</button>
 *     </div>
 *   )
 * }
 *
 *
 * 5. WITH VALIDATION:
 * -------------------
 * import { examplePageSchema } from '@validations'
 *
 * async function ExampleRoute() {
 *   const rawData = await fetchData()
 *   const validatedData = examplePageSchema.parse(rawData)
 *   return <ExamplePage data={validatedData} />
 * }
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * CHECKLIST FOR NEW PAGES
 * ============================================================================
 *
 * DATA LAYER:
 * ☐ Create data file in /src/data/full-pages/
 * ☐ Define TypeScript interfaces
 * ☐ Export data from /src/data/full-pages/index.ts
 *
 * VALIDATION LAYER:
 * ☐ Create schema in /src/validations/full-pages/
 * ☐ Export schema from /src/validations/full-pages/index.ts
 * ☐ Test validation with valid and invalid data
 *
 * COMPONENT LAYER:
 * ☐ Create page component in /src/components/pages/
 * ☐ Create section components
 * ☐ Export from /src/components/pages/index.ts
 *
 * ROUTE LAYER:
 * ☐ Create /src/app/[route]/page.tsx
 * ☐ Add metadata for SEO
 * ☐ Import and render page component
 *
 * CONSTANTS:
 * ☐ Add route to /src/constants/app-route.ts
 * ☐ Use constant in navigation/links
 *
 * NAVIGATION:
 * ☐ Add to navbar if needed
 * ☐ Add to footer if needed
 * ☐ Update sitemap.xml
 *
 * TESTING:
 * ☐ Test page renders correctly
 * ☐ Test responsive design
 * ☐ Test all links work
 * ☐ Test metadata appears correctly
 * ☐ Run Lighthouse audit
 * ☐ Test accessibility
 *
 * ============================================================================
 */
