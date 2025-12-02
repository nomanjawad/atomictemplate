/*
 * useSampleApiFetch.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

//A sample file fo api call for fetching data in a structure way.

"use client"

import { useState, useEffect } from "react"

import { getBlogPost } from "@services"
import { BlogPost } from "@validations"

export default function useSampleApiFetch(slug: string) {
  const [data, setData] = useState<BlogPost>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!slug) return

    setLoading(true)
    getBlogPost(slug).then((res) => {
      if (res.error) setError(res.error)
      else setData(res.data)
      setLoading(false)
    })
  }, [slug])

  return { data, error, loading }
}
