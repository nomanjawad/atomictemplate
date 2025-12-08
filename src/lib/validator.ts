/*
 * validator.ts
 * Re-exports from @atomictemplate/validations package
 */

// Re-export all validators from the package
export {
  validator,
  imageValidator,
  urlValidator,
  emailValidator,
  uuidValidator,
  slugValidator,
  phoneValidator,
} from "@atomictemplate/validations"

// Re-export zod for direct access
export { z } from "zod"
