/*
 * gallery-page.schema.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { validator } from "@libs"
import { BannerSchema } from "@validations"

export const GalleryPageSchema = validator.object({
  slug: validator.string(),
  title: validator.string(),
  banner: BannerSchema,
  gallery: validator.object({
    title: validator.string(),
    description: validator.string(),
    images: validator.string().array(),
  }),
})

export type GalleryPage = validator.infer<typeof GalleryPageSchema>
