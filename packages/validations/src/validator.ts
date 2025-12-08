/*
 * validator.ts
 * @atomictemplate/validations
 * Zod wrapper for consistent validation across frontend and backend
 */

import { z } from "zod"

export { z as validator }

/**
 * Image validator - accepts string paths/URLs for images
 * In frontend: static imports resolve to strings
 * In backend: URLs or file paths
 */
export const imageValidator = z.string()

/**
 * URL validator with custom error message
 */
export const urlValidator = z.string().url("Must be a valid URL")

/**
 * Email validator with custom error message
 */
export const emailValidator = z.string().email("Must be a valid email address")

/**
 * UUID validator
 */
export const uuidValidator = z.string().uuid("Must be a valid UUID")

/**
 * Slug validator - lowercase, hyphens, no spaces
 */
export const slugValidator = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Must be URL-friendly (kebab-case)")

/**
 * Phone validator - international format
 */
export const phoneValidator = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, "Must be a valid phone number")
