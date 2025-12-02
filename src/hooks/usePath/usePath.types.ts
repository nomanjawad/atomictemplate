/*
 * usePath.types.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

export interface UsePathReturn {
  leafList: string[]
  pathName: string | null
  currentPathLeaf: string
  getPathLeaf: (path: string) => string
  toGivenPath: (path: string) => void
  toPreviousPath: () => void
  toForwardPath: () => void
}
