/*
 * settings.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""
export const ISR_REVALIDATE_DURATION_SEC = parseInt(
  process.env.NEXT_PUBLIC_ISR_REVALIDATE_DURATION_SEC || "0",
  10 // radix
)
