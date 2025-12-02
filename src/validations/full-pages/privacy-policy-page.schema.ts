/*
 * privacy-policy-page.schema.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

import { validator } from "@libs"

export const PrivacyPolicySectionSchema = validator.object({
  title: validator.string(),
  subtitle: validator.string().optional(),
  description: validator.string().optional(),
  list: validator.array(validator.string()).optional(),
  summary: validator.string().optional(),
})

export const PrivacyPolicyPageSchema = validator.object({
  title: validator.string(),
  lastUpdated: validator.string(),
  introduction: validator.string(),
  sections: validator.array(PrivacyPolicySectionSchema),
  contactInfo: validator.object({
    companyName: validator.string(),
    licenseNo: validator.string(),
    phone: validator.string(),
    mobile: validator.string(),
    email: validator.string(),
    website: validator.string(),
  }),
})

export type PrivacyPolicySection = validator.infer<
  typeof PrivacyPolicySectionSchema
>
export type PrivacyPolicyPage = validator.infer<typeof PrivacyPolicyPageSchema>
