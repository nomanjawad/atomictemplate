/*
 * gallery-data.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { GalleryPage } from "@validations"
import {
  imgGallery1,
  imgGallery2,
  imgGallery3,
  imgGallery4,
  imgGallery5,
  imgGallery6,
  imgGalleryBanner,
} from "@images"

export const galleryPageData: GalleryPage = {
  slug: "gallery",
  title: "Gallery",
  banner: {
    title: "Our Gallery",
    backgroundImageUrl: imgGalleryBanner,
  },
  gallery: {
    title: "Photo Collection",
    description: "Explore our visual showcase",
    images: [
      imgGallery1,
      imgGallery2,
      imgGallery3,
      imgGallery4,
      imgGallery5,
      imgGallery6,
    ],
  },
}
