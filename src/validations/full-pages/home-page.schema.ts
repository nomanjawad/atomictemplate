/*
 * home-page.schema.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

import { validator } from "@libs"
import { BannerSchema } from "@validations"

export const HomePageSchema = validator.object({
  title: validator.string().optional(),
  banner: BannerSchema,
})

export type HomePage = validator.infer<typeof HomePageSchema>
