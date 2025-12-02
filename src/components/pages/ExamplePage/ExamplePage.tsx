/*
 * ExamplePage.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

/**
 * ============================================================================
 * EXAMPLE PAGE COMPONENT - COMPLETE DOCUMENTATION
 * ============================================================================
 *
 * This file demonstrates how to create a complete page component following
 * the template's architecture and best practices.
 *
 *
 * PAGE COMPONENT STRUCTURE:
 * -------------------------
 * 1. Imports (types, data, components)
 * 2. Component definition
 * 3. Data import and optional validation
 * 4. Section components composition
 * 5. Exports
 *
 *
 * COMPONENT ARCHITECTURE:
 * -----------------------
 * Page Component (ExamplePage)
 *   ↓
 * Section Components (ExampleHeroSection, ExampleFeaturesSection, etc.)
 *   ↓
 * Organism Components (Gallery, Carousel, Grid, etc.)
 *   ↓
 * Molecule Components (Card, TextBlock, Button, etc.)
 *   ↓
 * Atom Components (BaseImage, BaseText, InternalLink, etc.)
 *
 *
 * ATOMIC DESIGN PATTERN:
 * ----------------------
 * Atoms     → Basic building blocks (buttons, inputs, images)
 * Molecules → Simple combinations (card, navbar item, form field)
 * Organisms → Complex sections (header, footer, gallery, carousel)
 * Templates → Page layouts (not used in this template, using layouts instead)
 * Pages     → Actual pages with real data
 *
 *
 * BEST PRACTICES:
 * ---------------
 * ✅ Keep page components thin - they should only compose sections
 * ✅ Move complex logic to section components
 * ✅ Import data from centralized data files
 * ✅ Use TypeScript for type safety
 * ✅ Validate data if from external sources
 * ✅ Follow naming conventions (ExamplePage, ExampleHeroSection, etc.)
 * ✅ Use semantic HTML elements
 * ✅ Keep sections reusable when possible
 * ✅ Add proper documentation
 *
 * ❌ Don't put business logic in page components
 * ❌ Don't hardcode data in components
 * ❌ Don't create deeply nested component structures
 * ❌ Don't mix styling concerns with page logic
 */

import ExampleHeroSection from "./ExampleHeroSection/ExampleHeroSection"
import ExampleFeaturesSection from "./ExampleFeaturesSection/ExampleFeaturesSection"
import ExampleStatsSection from "./ExampleStatsSection/ExampleStatsSection"
import ExampleTestimonialsSection from "./ExampleTestimonialsSection/ExampleTestimonialsSection"
import ExampleFAQSection from "./ExampleFAQSection/ExampleFAQSection"
import ExampleCTASection from "./ExampleCTASection/ExampleCTASection"

/**
 * ExamplePage Component
 * ---------------------
 * Main page component that composes all sections
 *
 * STRUCTURE:
 * - Each section is a separate component for better organization
 * - Sections receive their data as props from the data file
 * - Optional sections are conditionally rendered
 * - Sections are in logical display order (top to bottom)
 *
 * @returns Complete example page with all sections
 *
 * @example
 * // In app/example/page.tsx:
 * import { ExamplePage } from "@pages"
 * export default function ExampleRoute() {
 *   return <ExamplePage />
 * }
 */
export default function ExamplePage() {
  return (
    <>
      {/* Hero Section - Always visible */}
      <ExampleHeroSection />

      {/* Features Section - Always visible */}
      <ExampleFeaturesSection />

      {/* Stats Section - Always visible */}
      <ExampleStatsSection />

      {/* Testimonials Section - Always visible */}
      <ExampleTestimonialsSection />

      {/* FAQ Section - Always visible */}
      <ExampleFAQSection />

      {/* CTA Section - Always visible */}
      <ExampleCTASection />
    </>
  )
}

/**
 * ============================================================================
 * ALTERNATIVE PATTERNS
 * ============================================================================
 *
 * 1. CONDITIONAL SECTIONS:
 * ------------------------
 * If some sections are optional based on data:
 *
 * import { examplePageData } from "@data"
 *
 * export default function ExamplePage() {
 *   return (
 *     <>
 *       <ExampleHeroSection />
 *       {examplePageData.features && <ExampleFeaturesSection />}
 *       {examplePageData.stats && <ExampleStatsSection />}
 *       <ExampleCTASection />
 *     </>
 *   )
 * }
 *
 *
 * 2. DYNAMIC SECTIONS:
 * --------------------
 * If sections are dynamic based on CMS or API:
 *
 * interface Props {
 *   data: ExamplePageData
 * }
 *
 * export default function ExamplePage({ data }: Props) {
 *   return (
 *     <>
 *       <ExampleHeroSection data={data.hero} />
 *       {data.sections.map((section) => (
 *         <DynamicSection key={section.id} {...section} />
 *       ))}
 *     </>
 *   )
 * }
 *
 *
 * 3. WITH VALIDATION:
 * -------------------
 * If data comes from external source:
 *
 * import { examplePageSchema } from "@validations"
 *
 * export default function ExamplePage({ data }: Props) {
 *   const validatedData = examplePageSchema.parse(data)
 *   return (sections here)
 * }
 *
 *
 * 4. WITH ERROR BOUNDARY:
 * -----------------------
 * Wrap page in error boundary for production:
 *
 * import { ErrorBoundary } from "@pages"
 *
 * export default function ExamplePage() {
 *   return ErrorBoundary wrapping sections
 * }
 *
 *
 * 5. WITH LOADING STATE:
 * ----------------------
 * For pages with async data:
 *
 * import { Suspense } from "react"
 * import { LoadingPage } from "@pages"
 *
 * export default function ExamplePage() {
 *   return (
 *     <Suspense fallback={<LoadingPage />}>
 *       <ExamplePageContent />
 *     </Suspense>
 *   )
 * }
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * SECTION COMPONENT GUIDELINES
 * ============================================================================
 *
 * When creating section components (see ./ExampleHeroSection/ etc.):
 *
 * 1. STRUCTURE:
 *    - Use Section → Container → Content layout pattern
 *    - Import data at section level
 *    - Keep sections self-contained
 *
 * 2. NAMING:
 *    - Format: {PageName}{SectionName}Section
 *    - Example: ExampleHeroSection, ExampleFeaturesSection
 *    - Be descriptive and consistent
 *
 * 3. ORGANIZATION:
 *    - Each section in its own folder
 *    - Include index.ts for exports
 *    - CSS modules if needed (keep Tailwind primary)
 *
 * 4. PROPS:
 *    - Receive data as props when possible
 *    - Use TypeScript interfaces for prop types
 *    - Provide default values where appropriate
 *
 * 5. ACCESSIBILITY:
 *    - Use semantic HTML (section, article, aside, etc.)
 *    - Include ARIA labels where needed
 *    - Ensure keyboard navigation works
 *    - Test with screen readers
 *
 * 6. PERFORMANCE:
 *    - Use Next.js Image component for images
 *    - Lazy load non-critical content
 *    - Optimize animations with GSAP
 *    - Minimize re-renders
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * FILE STRUCTURE EXAMPLE
 * ============================================================================
 *
 * /src/components/pages/ExamplePage/
 * ├── ExamplePage.tsx                  ← This file (main component)
 * ├── index.ts                         ← Exports
 * ├── ExampleHeroSection/
 * │   ├── ExampleHeroSection.tsx
 * │   └── index.ts
 * ├── ExampleFeaturesSection/
 * │   ├── ExampleFeaturesSection.tsx
 * │   └── index.ts
 * ├── ExampleStatsSection/
 * │   ├── ExampleStatsSection.tsx
 * │   └── index.ts
 * ├── ExampleTestimonialsSection/
 * │   ├── ExampleTestimonialsSection.tsx
 * │   └── index.ts
 * ├── ExampleFAQSection/
 * │   ├── ExampleFAQSection.tsx
 * │   └── index.ts
 * └── ExampleCTASection/
 *     ├── ExampleCTASection.tsx
 *     └── index.ts
 *
 * ============================================================================
 */
