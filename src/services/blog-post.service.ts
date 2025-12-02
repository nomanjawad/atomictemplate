/*
 * blog-post.service.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BlogPost, BlogPostSchema } from "@validations"
import { ISR_REVALIDATE_DURATION_SEC } from "@constants"
import { ServiceReturn } from "./service.types"
import { fetcher } from "../lib/fetcher"
import { customLog } from "@utils"

export async function getBlogPost(
  slug: string
): Promise<ServiceReturn<BlogPost>> {
  if (!slug) return { error: "slug should not be null." }

  const encodedSlug = encodeURIComponent(slug)

  try {
    const data = await fetcher<BlogPost>({
      url: `/blog-post/?slug=${encodedSlug}`,
      tags: ["blog-post", `blog-post/${slug}`],
      revalidate: ISR_REVALIDATE_DURATION_SEC,
    })
    const validated = BlogPostSchema.parse(data)
    return { data: validated }
  } catch (err) {
    customLog(err)
    return { error: err instanceof Error ? err.message : "Unknown error" }
  }
}
