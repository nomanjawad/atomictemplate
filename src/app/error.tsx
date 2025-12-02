/*
 * error.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect } from "react"

import { ErrorBoundaryPage } from "@pages/index"
import { customLog } from "@utils"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    //  Log the error
    customLog(error)
  }, [error])

  return <ErrorBoundaryPage message={error?.message} onRetry={reset} />
}
