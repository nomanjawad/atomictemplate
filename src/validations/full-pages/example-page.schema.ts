/*
 * example-page.schema.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

/**
 * ============================================================================
 * EXAMPLE PAGE VALIDATION SCHEMA - COMPLETE DOCUMENTATION
 * ============================================================================
 *
 * This file demonstrates how to create validation schemas using Zod.
 * Schemas provide runtime validation to ensure data integrity.
 *
 * WHY USE SCHEMAS?
 * ----------------
 * 1. Runtime Validation - Catch invalid data before it causes errors
 * 2. Type Inference - Generate TypeScript types from schemas
 * 3. Error Messages - Provide clear feedback when validation fails
 * 4. API Safety - Validate external data (APIs, forms, user input)
 * 5. Data Consistency - Ensure all data matches expected structure
 *
 *
 * SCHEMA STRUCTURE:
 * -----------------
 * 1. Import validator (Zod) from @libs
 * 2. Define schemas from smallest to largest (bottom-up approach)
 * 3. Compose complex schemas from simple ones
 * 4. Export schemas for use in data files and components
 * 5. Export inferred types for TypeScript
 *
 *
 * VALIDATION BEST PRACTICES:
 * --------------------------
 * ✅ DO:
 * - Use specific validators (.string(), .number(), .email(), etc.)
 * - Add custom error messages for user-facing validation
 * - Use .optional() for optional fields
 * - Use .default() for fields with fallback values
 * - Refine with .refine() for custom validation logic
 * - Use descriptive schema names (ButtonSchema, HeroSchema, etc.)
 * - Keep schemas close to where they're used
 * - Test schemas with valid and invalid data
 *
 * ❌ DON'T:
 * - Use .any() unless absolutely necessary
 * - Skip validation on user input
 * - Write overly complex validation logic
 * - Ignore validation errors
 * - Duplicate schema logic
 */

import { validator } from "@libs"

/**
 * ============================================================================
 * BASIC/ATOMIC SCHEMAS
 * ============================================================================
 * Start with the smallest building blocks
 */

/**
 * Button Schema
 * -------------
 * Validates button/link data structure
 *
 * REQUIRED FIELDS:
 * - text: Button label text
 * - href: URL or route path
 *
 * OPTIONAL FIELDS:
 * - variant: Button style variant
 *
 * VALIDATION RULES:
 * - text must be non-empty string
 * - href must be valid string (route or URL)
 * - variant must be one of predefined values
 */
export const ButtonSchema = validator.object({
  text: validator
    .string("Button text must be a string")
    .min(1, "Button text cannot be empty")
    .max(50, "Button text is too long (max 50 characters)"),

  href: validator
    .string("Button href must be a string")
    .min(1, "Button href cannot be empty"),

  variant: validator
    .enum(
      ["primary", "secondary", "outline"],
      "Variant must be 'primary', 'secondary', or 'outline'"
    )
    .optional(),
})

/**
 * Link Schema
 * -----------
 * Validates link data (simpler than button)
 */
export const LinkSchema = validator.object({
  text: validator.string().min(1, "Link text is required"),
  href: validator.string().min(1, "Link href is required"),
})

/**
 * ============================================================================
 * SECTION SCHEMAS
 * ============================================================================
 * Schemas for major page sections
 */

/**
 * Hero Section Schema
 * -------------------
 * Validates hero/banner section data
 *
 * STRUCTURE:
 * - title: Main heading (required)
 * - subtitle: Supporting text (optional)
 * - description: Longer description (required)
 * - primaryButton: Main CTA (required)
 * - secondaryButton: Secondary action (optional)
 * - backgroundImage: Background image path (optional)
 * - badges: Array of trust indicators (optional)
 *
 * CUSTOM VALIDATION:
 * - Title length check (SEO best practice: 30-60 chars)
 * - Description minimum length
 * - At least one button must be present
 */
export const ExampleHeroSchema = validator.object({
  title: validator
    .string()
    .min(10, "Hero title is too short (min 10 characters)")
    .max(100, "Hero title is too long (max 100 characters)"),

  subtitle: validator.string().optional(),

  description: validator
    .string()
    .min(20, "Hero description is too short (min 20 characters)")
    .max(500, "Hero description is too long (max 500 characters)"),

  primaryButton: ButtonSchema,

  secondaryButton: ButtonSchema.optional(),

  backgroundImage: validator.string().optional(),

  badges: validator
    .array(
      validator
        .string()
        .min(1, "Badge text cannot be empty")
        .max(30, "Badge text is too long")
    )
    .optional(),
})

/**
 * Feature Schema
 * --------------
 * Single feature/benefit item
 */
export const ExampleFeatureSchema = validator.object({
  id: validator
    .string()
    .min(1, "Feature ID is required")
    .regex(/^[a-z0-9-]+$/, "Feature ID must be lowercase with hyphens"),

  icon: validator.string().min(1, "Feature icon is required"),

  title: validator
    .string()
    .min(3, "Feature title is too short")
    .max(100, "Feature title is too long"),

  description: validator
    .string()
    .min(10, "Feature description is too short")
    .max(300, "Feature description is too long"),

  link: LinkSchema.optional(),
})

/**
 * Features Section Schema
 * -----------------------
 * Grid/list of features with configuration
 */
export const ExampleFeaturesSchema = validator.object({
  sectionTitle: validator.string().min(3, "Section title is required"),

  sectionDescription: validator.string().optional(),

  features: validator
    .array(ExampleFeatureSchema)
    .min(1, "At least one feature is required")
    .max(12, "Too many features (max 12)"),

  layout: validator.enum(["grid", "list", "carousel"]).optional(),

  columns: validator
    .number()
    .int()
    .min(2, "Minimum 2 columns")
    .max(4, "Maximum 4 columns")
    .optional(),
})

/**
 * Stat Schema
 * -----------
 * Single statistic item
 */
export const ExampleStatSchema = validator.object({
  value: validator
    .string()
    .min(1, "Stat value is required")
    .max(20, "Stat value is too long"),

  label: validator
    .string()
    .min(2, "Stat label is required")
    .max(50, "Stat label is too long"),

  description: validator
    .string()
    .max(100, "Stat description is too long")
    .optional(),

  icon: validator.string().optional(),
})

/**
 * Stats Section Schema
 * --------------------
 * Multiple statistics with optional title
 */
export const ExampleStatsSchema = validator.object({
  sectionTitle: validator.string().optional(),

  stats: validator
    .array(ExampleStatSchema)
    .min(2, "At least 2 stats required")
    .max(6, "Maximum 6 stats allowed"),

  background: validator.enum(["light", "dark", "gradient"]).optional(),
})

/**
 * Testimonial Schema
 * ------------------
 * Customer review/testimonial
 */
export const ExampleTestimonialSchema = validator.object({
  id: validator
    .string()
    .min(1, "Testimonial ID is required")
    .regex(/^[a-z0-9-]+$/, "Testimonial ID must be lowercase with hyphens"),

  name: validator.string().min(2, "Reviewer name is required"),

  role: validator.string().min(2, "Reviewer role is required"),

  company: validator.string().optional(),

  avatar: validator.string().optional(),

  rating: validator
    .number()
    .int()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5"),

  quote: validator
    .string()
    .min(20, "Testimonial quote is too short (min 20 characters)")
    .max(500, "Testimonial quote is too long (max 500 characters)"),

  date: validator.string().optional(),
})

/**
 * Testimonials Section Schema
 * ---------------------------
 */
export const ExampleTestimonialsSchema = validator.object({
  sectionTitle: validator.string().min(3, "Section title is required"),

  sectionDescription: validator.string().optional(),

  testimonials: validator
    .array(ExampleTestimonialSchema)
    .min(1, "At least one testimonial is required")
    .max(10, "Too many testimonials (max 10)"),

  displayStyle: validator.enum(["carousel", "grid", "masonry"]).optional(),
})

/**
 * FAQ Item Schema
 * ---------------
 */
export const ExampleFAQItemSchema = validator.object({
  id: validator
    .string()
    .min(1, "FAQ ID is required")
    .regex(/^[a-z0-9-]+$/, "FAQ ID must be lowercase with hyphens"),

  question: validator
    .string()
    .min(10, "Question is too short")
    .max(200, "Question is too long"),

  answer: validator
    .string()
    .min(20, "Answer is too short")
    .max(1000, "Answer is too long"),

  category: validator.string().optional(),
})

/**
 * FAQ Section Schema
 * ------------------
 */
export const ExampleFAQSchema = validator.object({
  sectionTitle: validator.string().min(3, "Section title is required"),

  sectionDescription: validator.string().optional(),

  faqs: validator
    .array(ExampleFAQItemSchema)
    .min(3, "At least 3 FAQs required")
    .max(20, "Too many FAQs (max 20)"),

  categories: validator.array(validator.string()).optional(),
})

/**
 * CTA Section Schema
 * ------------------
 */
export const ExampleCTASchema = validator.object({
  title: validator.string().min(5, "CTA title is required"),

  description: validator.string().min(10, "CTA description is required"),

  button: ButtonSchema,

  background: validator.enum(["gradient", "solid", "image"]).optional(),
})

/**
 * ============================================================================
 * MAIN PAGE SCHEMA
 * ============================================================================
 * Complete page validation combining all sections
 */

/**
 * Page Metadata Schema
 * --------------------
 * SEO and head tag data
 */
export const ExamplePageMetaSchema = validator.object({
  title: validator
    .string()
    .min(10, "Page title is too short (SEO: min 10 chars)")
    .max(60, "Page title is too long (SEO: max 60 chars)"),

  description: validator
    .string()
    .min(50, "Meta description is too short (SEO: min 50 chars)")
    .max(160, "Meta description is too long (SEO: max 160 chars)"),

  keywords: validator
    .array(validator.string().min(2, "Keyword is too short"))
    .min(3, "At least 3 keywords required for SEO")
    .max(10, "Too many keywords (max 10)"),
})

/**
 * Complete Example Page Schema
 * -----------------------------
 * Root schema that validates entire page data
 *
 * USAGE:
 * ------
 * // In data file:
 * import { examplePageSchema } from "@validations"
 *
 * // Validate data:
 * const validatedData = examplePageSchema.parse(examplePageData)
 *
 * // Or with try-catch:
 * try {
 *   const data = examplePageSchema.parse(examplePageData)
 *   // Use data
 * } catch (error) {
 *   console.error("Validation failed:", error)
 * }
 *
 * AUTOMATIC VALIDATION:
 * ---------------------
 * You can also validate automatically when importing:
 *
 * export const examplePageData = examplePageSchema.parse({
 *   // ... your data
 * })
 *
 * This will throw an error at build time if data is invalid.
 */
export const examplePageSchema = validator.object({
  // Required sections
  meta: ExamplePageMetaSchema,
  hero: ExampleHeroSchema,

  // Optional sections (use .optional())
  features: ExampleFeaturesSchema.optional(),
  stats: ExampleStatsSchema.optional(),
  testimonials: ExampleTestimonialsSchema.optional(),
  faq: ExampleFAQSchema.optional(),
  cta: ExampleCTASchema.optional(),
})

/**
 * ============================================================================
 * TYPE EXPORTS
 * ============================================================================
 * Export inferred types for use in components
 */

// Export types inferred from schemas
export type ExamplePageMeta = validator.infer<typeof ExamplePageMetaSchema>
export type ExampleHero = validator.infer<typeof ExampleHeroSchema>
export type ExampleFeature = validator.infer<typeof ExampleFeatureSchema>
export type ExampleFeatures = validator.infer<typeof ExampleFeaturesSchema>
export type ExampleStat = validator.infer<typeof ExampleStatSchema>
export type ExampleStats = validator.infer<typeof ExampleStatsSchema>
export type ExampleTestimonial = validator.infer<
  typeof ExampleTestimonialSchema
>
export type ExampleTestimonials = validator.infer<
  typeof ExampleTestimonialsSchema
>
export type ExampleFAQItem = validator.infer<typeof ExampleFAQItemSchema>
export type ExampleFAQ = validator.infer<typeof ExampleFAQSchema>
export type ExampleCTA = validator.infer<typeof ExampleCTASchema>
export type ExamplePage = validator.infer<typeof examplePageSchema>

/**
 * ============================================================================
 * VALIDATION HELPER FUNCTIONS
 * ============================================================================
 * Optional: Create helper functions for common validation tasks
 */

/**
 * Validate example page data with error handling
 *
 * @param data - Raw data to validate
 * @returns Validated data or null if invalid
 *
 * @example
 * const validData = validateExamplePageData(rawData)
 * if (validData) {
 *   // Use validated data
 * } else {
 *   // Handle validation error
 * }
 */
export function validateExamplePageData(data: unknown) {
  try {
    return examplePageSchema.parse(data)
  } catch (error) {
    console.error("Example page data validation failed:", error)
    return null
  }
}

/**
 * Safe parse with detailed error information
 *
 * @param data - Raw data to validate
 * @returns Success result with data or error result with issues
 *
 * @example
 * const result = safeValidateExamplePageData(rawData)
 * if (result.success) {
 *   console.log("Valid data:", result.data)
 * } else {
 *   console.error("Validation errors:", result.error.issues)
 * }
 */
export function safeValidateExamplePageData(data: unknown) {
  return examplePageSchema.safeParse(data)
}

/**
 * ============================================================================
 * TESTING VALIDATION
 * ============================================================================
 *
 * To test your schemas:
 *
 * 1. VALID DATA TEST:
 *    const validData = { ...complete valid data... }
 *    const result = examplePageSchema.parse(validData)
 *    // Should succeed
 *
 * 2. INVALID DATA TEST:
 *    const invalidData = { ...incomplete or wrong data... }
 *    try {
 *      examplePageSchema.parse(invalidData)
 *    } catch (error) {
 *      console.log(error.errors) // See what failed
 *    }
 *
 * 3. SAFE PARSE TEST:
 *    const result = examplePageSchema.safeParse(data)
 *    if (!result.success) {
 *      result.error.issues.forEach(issue => {
 *        console.log(`Field: ${issue.path.join('.')}`)
 *        console.log(`Error: ${issue.message}`)
 *      })
 *    }
 *
 * ============================================================================
 */

/**
 * ============================================================================
 * COMMON VALIDATION PATTERNS
 * ============================================================================
 *
 * EMAIL:
 * validator.string().email("Invalid email address")
 *
 * URL:
 * validator.string().url("Invalid URL")
 *
 * PHONE:
 * validator.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
 *
 * DATE:
 * validator.string().datetime("Invalid date format")
 * validator.date()
 *
 * ENUM:
 * validator.enum(["value1", "value2", "value3"])
 *
 * UNION:
 * validator.union([validator.string(), validator.number()])
 *
 * ARRAY WITH LENGTH:
 * validator.array(ItemSchema).min(1).max(10)
 *
 * OBJECT WITH DYNAMIC KEYS:
 * validator.record(validator.string(), ValueSchema)
 *
 * CONDITIONAL VALIDATION:
 * validator.object({ ... }).refine(
 *   (data) => data.condition ? data.required !== undefined : true,
 *   { message: "Field is required when condition is true" }
 * )
 *
 * TRANSFORM DATA:
 * validator.string().transform((val) => val.toLowerCase())
 *
 * DEFAULT VALUES:
 * validator.string().default("default value")
 *
 * ============================================================================
 */
