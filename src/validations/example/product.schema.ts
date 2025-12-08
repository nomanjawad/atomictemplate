/*
 * product.schema.ts
 * 
 * ============================================================================
 * EXAMPLE: How to Create Custom Validation Schemas
 * ============================================================================
 * 
 * This file demonstrates how to create your own validation schemas using Zod.
 * Use this as a reference when creating schemas for your project.
 * 
 * STEP-BY-STEP GUIDE:
 * 
 * 1. Import the validator (Zod wrapper) from the package or lib
 * 2. Define your schema using validator.object(), validator.string(), etc.
 * 3. Export the schema and its inferred TypeScript type
 * 4. Create a data file that uses your schema (see example/product.data.ts)
 * 
 * BEST PRACTICES:
 * - Use descriptive error messages
 * - Use .optional() for optional fields
 * - Use .default() for fields with fallback values
 * - Export both the schema and the inferred type
 * - Keep schemas in separate files for organization
 * 
 * ============================================================================
 */

import { validator, imageValidator } from "@atomictemplate/validations"

// ============================================================================
// STEP 1: Define Sub-Schemas (building blocks)
// ============================================================================

/**
 * Price Schema - Validates pricing information
 */
export const PriceSchema = validator.object({
  amount: validator.number().positive("Price must be positive"),
  currency: validator.enum(["USD", "EUR", "GBP", "AED"]).default("USD"),
  discountPercent: validator.number().min(0).max(100).optional(),
})

/**
 * Product Image Schema - For product gallery images
 */
export const ProductImageSchema = validator.object({
  src: imageValidator,
  alt: validator.string().min(1, "Alt text is required for accessibility"),
  isPrimary: validator.boolean().optional(),
})

/**
 * Product Variant Schema - For size/color variants
 */
export const ProductVariantSchema = validator.object({
  id: validator.string().min(1),
  name: validator.string().min(1, "Variant name is required"),
  sku: validator.string().optional(),
  price: PriceSchema.optional(),
  inStock: validator.boolean().default(true),
})

// ============================================================================
// STEP 2: Define the Main Schema
// ============================================================================

/**
 * Product Schema - Complete product validation
 * 
 * This schema validates a product object with all its properties.
 * Use validator.object() to define the structure.
 */
export const ProductSchema = validator.object({
  // Required fields
  id: validator.string().uuid("Product ID must be a valid UUID"),
  name: validator.string()
    .min(2, "Product name must be at least 2 characters")
    .max(100, "Product name must be less than 100 characters"),
  slug: validator.string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL-friendly (kebab-case)"),
  description: validator.string()
    .min(10, "Description must be at least 10 characters"),
  
  // Pricing
  price: PriceSchema,
  
  // Images (at least one required)
  images: validator.array(ProductImageSchema)
    .min(1, "At least one product image is required"),
  
  // Categorization
  category: validator.string().min(1, "Category is required"),
  tags: validator.array(validator.string()).default([]),
  
  // Variants (optional)
  variants: validator.array(ProductVariantSchema).optional(),
  
  // Status
  status: validator.enum(["draft", "active", "archived"]).default("draft"),
  featured: validator.boolean().default(false),
  
  // SEO
  metaTitle: validator.string().max(60).optional(),
  metaDescription: validator.string().max(160).optional(),
  
  // Timestamps (optional, usually set by backend)
  createdAt: validator.coerce.date().optional(),
  updatedAt: validator.coerce.date().optional(),
})

// ============================================================================
// STEP 3: Export TypeScript Types (inferred from schemas)
// ============================================================================

/**
 * TypeScript types are automatically inferred from the schemas.
 * Use these types in your components and functions.
 * 
 * Example:
 * const product: Product = { ... }
 * function renderProduct(product: Product) { ... }
 */
export type ExamplePrice = validator.infer<typeof PriceSchema>
export type ExampleProductImage = validator.infer<typeof ProductImageSchema>
export type ExampleProductVariant = validator.infer<typeof ProductVariantSchema>
export type ExampleProduct = validator.infer<typeof ProductSchema>

// ============================================================================
// STEP 4: Create a Partial Schema (for updates)
// ============================================================================

/**
 * For PATCH/update operations, you might want all fields to be optional.
 * Use .partial() to make all fields optional.
 */
export const ExampleProductUpdateSchema = ProductSchema.partial()
export type ExampleProductUpdate = validator.infer<typeof ExampleProductUpdateSchema>

// ============================================================================
// STEP 5: Create a List/Collection Schema
// ============================================================================

/**
 * For lists/collections, wrap the schema in an array.
 */
export const ExampleProductListSchema = validator.array(ProductSchema)
export type ExampleProductList = validator.infer<typeof ExampleProductListSchema>

// ============================================================================
// HELPER FUNCTIONS (optional)
// ============================================================================

/**
 * Validate product data with error handling
 * Returns validated data or null if invalid
 */
export function validateProduct(data: unknown): ExampleProduct | null {
  const result = ProductSchema.safeParse(data)
  if (result.success) {
    return result.data
  }
  console.error("Product validation failed:", result.error.issues)
  return null
}

/**
 * Get validation errors for a product
 * Useful for form validation
 */
export function getProductValidationErrors(data: unknown): Record<string, string> | null {
  const result = ProductSchema.safeParse(data)
  if (result.success) {
    return null
  }
  
  const errors: Record<string, string> = {}
  for (const issue of result.error.issues) {
    const path = issue.path.join(".")
    errors[path] = issue.message
  }
  return errors
}
