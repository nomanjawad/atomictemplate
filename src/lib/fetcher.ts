/*
 * fetcher.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ISR_REVALIDATE_DURATION_SEC, BASE_URL } from "@constants"

export interface FetchFunctionArguments {
  url: string
  options?: RequestInit
  revalidate?: number | false
  tags?: string[]
}

function buildUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url
  }

  const cleanBase = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL
  const cleanUrl = url.startsWith("/") ? url : `/${url}`

  return `${cleanBase}${cleanUrl}`
}

/**
 * Universal fetch wrapper with Next.js ISR caching
 * Automatically adds BASE_URL to relative paths, uses absolute URLs as-is
 * @param options - Fetch configuration object
 * @returns Promise resolving to parsed JSON response
 */
export async function fetcher<T>({
  url,
  tags,
  options,
  revalidate = ISR_REVALIDATE_DURATION_SEC || false,
}: FetchFunctionArguments): Promise<T> {
  if (!url) throw new Error("Url is empty")

  const fullUrl = buildUrl(url)

  const res = await fetch(fullUrl, {
    ...options,
    next: {
      revalidate,
      tags,
    },
  })

  if (!res.ok) throw new Error(`Fetch error: ${res.status}`)
  return res.json()
}
