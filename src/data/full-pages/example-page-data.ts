/*
 * example-page-data.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

/**
 * ============================================================================
 * EXAMPLE PAGE DATA - COMPLETE DOCUMENTATION
 * ============================================================================
 *
 * This file demonstrates the complete data structure for a page in this template.
 * Follow these patterns for creating new pages.
 *
 * STRUCTURE OVERVIEW:
 * -------------------
 * 1. Import necessary types and constants
 * 2. Define TypeScript interfaces for type safety
 * 3. Export the data object that matches the interface
 * 4. Data will be validated against schema (see example-page.schema.ts)
 *
 *
 * DATA ORGANIZATION BEST PRACTICES:
 * ----------------------------------
 *
 * ✅ DO:
 * - Use clear, descriptive interface names (e.g., ExamplePageData, ExampleHeroData)
 * - Group related data into nested objects (hero, features, testimonials, etc.)
 * - Use arrays for repeating content (list of features, team members, etc.)
 * - Include optional fields with `?` for flexibility
 * - Add JSDoc comments for complex structures
 * - Use constants from @constants for routes
 * - Keep data in /src/data/full-pages/ for full pages
 * - Keep shared data in /src/data/common/ for reusable components
 *
 * ❌ DON'T:
 * - Hardcode routes (use staticRoutes from @constants)
 * - Mix presentation logic with data
 * - Include component-specific styling in data
 * - Store sensitive information (API keys, secrets)
 * - Use inline styles or className values
 *
 *
 * DATA FILE LOCATION STRATEGY:
 * -----------------------------
 * /src/data/common/        → Shared across multiple pages (navbar, footer, CTA)
 * /src/data/full-pages/    → Full page data (home, gallery, contact, example)
 * /src/data/blog-post/     → Blog/dynamic content
 * /src/data/ar/            → Arabic translations
 * /src/data/ru/            → Russian translations
 */

import { staticRoutes } from "@constants"

/**
 * ============================================================================
 * TYPESCRIPT INTERFACES - TYPE DEFINITIONS
 * ============================================================================
 *
 * Define all interfaces BEFORE the data object for:
 * - Type safety during development
 * - IntelliSense/autocomplete support
 * - Validation against schemas
 * - Documentation through types
 */

/**
 * Hero Section Data
 * -----------------
 * The main banner/hero section at the top of the page
 *
 * @property {string} title - Main heading (h1) - Keep under 60 chars for SEO
 * @property {string} subtitle - Supporting text above title - Optional
 * @property {string} description - Longer description paragraph
 * @property {object} primaryButton - Main call-to-action button
 * @property {object} secondaryButton - Optional secondary action
 * @property {string} backgroundImage - Background image path from @images
 * @property {string[]} badges - Optional trust badges/stats
 */
export interface ExampleHeroData {
  title: string
  subtitle?: string
  description: string
  primaryButton: {
    text: string
    href: string
    variant?: "primary" | "secondary" | "outline"
  }
  secondaryButton?: {
    text: string
    href: string
    variant?: "primary" | "secondary" | "outline"
  }
  backgroundImage?: string
  badges?: string[]
}

/**
 * Feature Item
 * ------------
 * Individual feature/benefit with icon, title, and description
 */
export interface ExampleFeature {
  id: string
  icon: string // Icon name or path
  title: string
  description: string
  link?: {
    text: string
    href: string
  }
}

/**
 * Features Section Data
 * ---------------------
 * Grid/list of features or benefits
 */
export interface ExampleFeaturesData {
  sectionTitle: string
  sectionDescription?: string
  features: ExampleFeature[]
  layout?: "grid" | "list" | "carousel"
  columns?: 2 | 3 | 4
}

/**
 * Testimonial Item
 * ----------------
 * Customer review/testimonial
 */
export interface ExampleTestimonial {
  id: string
  name: string
  role: string
  company?: string
  avatar?: string
  rating: number // 1-5
  quote: string
  date?: string
}

/**
 * Testimonials Section Data
 * --------------------------
 * Social proof section with customer reviews
 */
export interface ExampleTestimonialsData {
  sectionTitle: string
  sectionDescription?: string
  testimonials: ExampleTestimonial[]
  displayStyle?: "carousel" | "grid" | "masonry"
}

/**
 * Stats Item
 * ----------
 * Single statistic (number + label)
 */
export interface ExampleStat {
  value: string // e.g., "10K+", "99%", "$5M"
  label: string
  description?: string
  icon?: string
}

/**
 * Stats Section Data
 * ------------------
 * Impressive numbers section
 */
export interface ExampleStatsData {
  sectionTitle?: string
  stats: ExampleStat[]
  background?: "light" | "dark" | "gradient"
}

/**
 * FAQ Item
 * --------
 * Single FAQ question and answer
 */
export interface ExampleFAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

/**
 * FAQ Section Data
 * ----------------
 * Frequently asked questions
 */
export interface ExampleFAQData {
  sectionTitle: string
  sectionDescription?: string
  faqs: ExampleFAQItem[]
  categories?: string[]
}

/**
 * CTA Section Data
 * ----------------
 * Call-to-action banner
 */
export interface ExampleCTAData {
  title: string
  description: string
  button: {
    text: string
    href: string
  }
  background?: "gradient" | "solid" | "image"
}

/**
 * Main Page Data Interface
 * -------------------------
 * Complete page data structure combining all sections
 *
 * NAMING CONVENTION:
 * - Use descriptive section names (hero, features, testimonials)
 * - Mark optional sections with `?`
 * - Keep logical order (top to bottom of page)
 */
export interface ExamplePageData {
  // Page metadata (for SEO and head tags)
  meta: {
    title: string
    description: string
    keywords: string[]
  }

  // Page sections (in display order)
  hero: ExampleHeroData
  features?: ExampleFeaturesData
  stats?: ExampleStatsData
  testimonials?: ExampleTestimonialsData
  faq?: ExampleFAQData
  cta?: ExampleCTAData
}

/**
 * ============================================================================
 * ACTUAL PAGE DATA - EXPORT
 * ============================================================================
 *
 * This is the actual data that will be:
 * 1. Validated against the schema (example-page.schema.ts)
 * 2. Imported into page components
 * 3. Rendered on the page
 *
 * DATA BEST PRACTICES:
 * --------------------
 * ✅ Use real, meaningful content (not Lorem Ipsum in production)
 * ✅ Keep text concise and scannable
 * ✅ Use action-oriented button text ("Get Started", not "Click Here")
 * ✅ Include actual numbers in stats (with sources if public-facing)
 * ✅ Test all links and ensure they work
 * ✅ Optimize images before adding (use Next.js Image optimization)
 * ✅ Use consistent tone and voice
 * ✅ Follow brand guidelines for messaging
 */
export const examplePageData: ExamplePageData = {
  // ===== PAGE METADATA =====
  // Used in page.tsx for <head> tags and SEO
  meta: {
    title: "Example Page - Complete Documentation",
    description:
      "A comprehensive example demonstrating data structure, validation, and page creation best practices for this Next.js template.",
    keywords: [
      "example",
      "documentation",
      "data structure",
      "validation",
      "best practices",
    ],
  },

  // ===== HERO SECTION =====
  // Main banner at the top of the page
  hero: {
    subtitle: "Complete Example",
    title: "Build Better Pages with Validated Data",
    description:
      "This example demonstrates how to create properly structured, type-safe, and validated page data. Follow these patterns for consistent, maintainable code.",
    primaryButton: {
      text: "Get Started",
      href: staticRoutes.CONTACT_US,
      variant: "primary",
    },
    secondaryButton: {
      text: "View Documentation",
      href: staticRoutes.HOME,
      variant: "outline",
    },
    badges: ["Type Safe", "Validated", "Best Practices", "Production Ready"],
  },

  // ===== FEATURES SECTION =====
  // Grid of features/benefits
  features: {
    sectionTitle: "Key Features of This Approach",
    sectionDescription:
      "Following these patterns ensures consistent, maintainable, and scalable code across your entire application.",
    layout: "grid",
    columns: 3,
    features: [
      {
        id: "feature-1",
        icon: "check",
        title: "Type Safety",
        description:
          "TypeScript interfaces ensure your data matches the expected structure at compile time, catching errors before runtime.",
        link: {
          text: "Learn More",
          href: staticRoutes.HOME,
        },
      },
      {
        id: "feature-2",
        icon: "shield",
        title: "Schema Validation",
        description:
          "Zod schemas validate data at runtime, ensuring data integrity even from external sources or APIs.",
        link: {
          text: "View Schema",
          href: staticRoutes.HOME,
        },
      },
      {
        id: "feature-3",
        icon: "code",
        title: "Consistent Structure",
        description:
          "Organized data structure makes it easy for developers to understand and maintain code across the project.",
        link: {
          text: "See Examples",
          href: staticRoutes.HOME,
        },
      },
      {
        id: "feature-4",
        icon: "zap",
        title: "Easy Updates",
        description:
          "Centralized data files mean content updates don't require touching component code, reducing bugs.",
        link: {
          text: "Quick Start",
          href: staticRoutes.HOME,
        },
      },
      {
        id: "feature-5",
        icon: "globe",
        title: "i18n Ready",
        description:
          "Data structure supports multiple languages with separate data files (ar/, ru/) for translations.",
        link: {
          text: "Add Language",
          href: staticRoutes.HOME,
        },
      },
      {
        id: "feature-6",
        icon: "rocket",
        title: "Performance",
        description:
          "Static data imports are optimized by Next.js, resulting in fast page loads and better SEO.",
        link: {
          text: "Optimize More",
          href: staticRoutes.HOME,
        },
      },
    ],
  },

  // ===== STATS SECTION =====
  // Impressive numbers
  stats: {
    sectionTitle: "By The Numbers",
    background: "gradient",
    stats: [
      {
        value: "100%",
        label: "Type Safe",
        description: "Full TypeScript coverage",
        icon: "check",
      },
      {
        value: "50+",
        label: "Components",
        description: "Ready to use",
        icon: "box",
      },
      {
        value: "10+",
        label: "Page Examples",
        description: "Complete implementations",
        icon: "file",
      },
      {
        value: "99.9%",
        label: "Uptime",
        description: "Production ready",
        icon: "server",
      },
    ],
  },

  // ===== TESTIMONIALS SECTION =====
  // Social proof
  testimonials: {
    sectionTitle: "What Developers Say",
    sectionDescription: "Feedback from developers using this template",
    displayStyle: "carousel",
    testimonials: [
      {
        id: "testimonial-1",
        name: "John Developer",
        role: "Senior Frontend Developer",
        company: "Tech Corp",
        rating: 5,
        quote:
          "The validation layer and type safety saved us countless hours of debugging. Highly recommended for any serious Next.js project.",
        date: "2025-11-15",
      },
      {
        id: "testimonial-2",
        name: "Sarah Engineer",
        role: "Full Stack Developer",
        company: "StartupXYZ",
        rating: 5,
        quote:
          "Clear patterns and excellent documentation made onboarding new developers incredibly smooth. The data structure is intuitive.",
        date: "2025-11-20",
      },
      {
        id: "testimonial-3",
        name: "Mike Coder",
        role: "Lead Developer",
        company: "Agency Pro",
        rating: 5,
        quote:
          "We've built 5+ projects with this template. The consistency across projects is a game changer for team productivity.",
        date: "2025-11-25",
      },
    ],
  },

  // ===== FAQ SECTION =====
  // Common questions
  faq: {
    sectionTitle: "Frequently Asked Questions",
    sectionDescription: "Everything you need to know about this data pattern",
    categories: ["General", "Data", "Validation", "Components"],
    faqs: [
      {
        id: "faq-1",
        question: "Why use separate data files instead of inline data?",
        answer:
          "Separate data files provide better organization, easier content management, support for i18n, and separation of concerns. Content editors can update data without touching component code.",
        category: "General",
      },
      {
        id: "faq-2",
        question: "What is the difference between data interfaces and schemas?",
        answer:
          "TypeScript interfaces provide compile-time type checking, while Zod schemas provide runtime validation. Both work together: interfaces for development, schemas for data integrity.",
        category: "Data",
      },
      {
        id: "faq-3",
        question: "When should I create a new data file vs. reuse existing?",
        answer:
          "Create new data files for page-specific content (full-pages/). Reuse existing data files for shared content like navbar, footer, or CTA sections (common/).",
        category: "Data",
      },
      {
        id: "faq-4",
        question: "How do I add validation for custom fields?",
        answer:
          "Create a schema file in src/validations/ using Zod. Import validator from @libs and define your schema. See example-page.schema.ts for reference.",
        category: "Validation",
      },
      {
        id: "faq-5",
        question: "Can I use this pattern with API data?",
        answer:
          "Yes! Use the same interfaces and schemas to validate API responses. This ensures external data matches your expected structure before rendering.",
        category: "Validation",
      },
      {
        id: "faq-6",
        question: "How do I handle optional sections?",
        answer:
          "Use TypeScript optional properties (?) in interfaces and .optional() in schemas. Components should check if data exists before rendering.",
        category: "Components",
      },
    ],
  },

  // ===== CTA SECTION =====
  // Final call-to-action
  cta: {
    title: "Ready to Build Your Page?",
    description:
      "Use this example as a template for your next page. Copy the structure, update the data, and create beautiful, type-safe pages in minutes.",
    button: {
      text: "Start Building",
      href: staticRoutes.CONTACT_US,
    },
    background: "gradient",
  },
}

/**
 * ============================================================================
 * NEXT STEPS
 * ============================================================================
 *
 * After creating this data file:
 *
 * 1. CREATE VALIDATION SCHEMA
 *    → /src/validations/full-pages/example-page.schema.ts
 *    → Use Zod to validate the data structure
 *    → See example-page.schema.ts for implementation
 *
 * 2. EXPORT FROM INDEX
 *    → Add to /src/data/full-pages/index.ts
 *    → export { examplePageData } from "./example-page-data"
 *
 * 3. CREATE PAGE COMPONENTS
 *    → /src/components/pages/ExamplePage/ExamplePage.tsx
 *    → Create section components (Hero, Features, etc.)
 *    → Import data: import { examplePageData } from "@data"
 *
 * 4. CREATE ROUTE PAGE
 *    → /src/app/example/page.tsx
 *    → Import and render ExamplePage component
 *    → Add metadata from examplePageData.meta
 *
 * 5. UPDATE CONSTANTS
 *    → Add EXAMPLE route to /src/constants/app-route.ts
 *    → Use in navigation components
 *
 * 6. TEST VALIDATION
 *    → Ensure data passes schema validation
 *    → Test with invalid data to verify error handling
 *
 * 7. UPDATE NAVIGATION
 *    → Add to navbar/footer if needed
 *    → Update sitemap and robots.txt
 *
 * ============================================================================
 */
