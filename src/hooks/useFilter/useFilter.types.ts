/*
 * useFilter.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

export interface UseFilterOption<Item extends Record<string, unknown>> {
  initialData?: Item[]
  initialFilterKey?: keyof Item | ""
  initialFilterValue?: string
}

export interface UseFilterReturn<Item extends Record<string, unknown>> {
  initializeFilter: (options: UseFilterOption<Item>) => void
  filteredData: Item[]
}
