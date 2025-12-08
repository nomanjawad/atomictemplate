/*
 * index.ts
 * Validation schemas for the project
 * 
 * This file re-exports from @atomictemplate/validations package
 * and includes example schemas to help you create your own.
 * 
 * OPTIONS:
 * 1. Use the package schemas (recommended): import from "@atomictemplate/validations"
 * 2. Create custom schemas: see the example folder for reference
 * 
 * USAGE:
 * import { HomePageSchema, ProductSchema } from "@validations"
 */

// Re-export everything from the validations package
// This gives you all the pre-built schemas (HomePage, BlogPost, FAQ, Slider, etc.)
export * from "@atomictemplate/validations"

// Export local example schemas (for learning and custom schemas)
export * from "./example"
