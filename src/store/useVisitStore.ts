/*
 * useVisitStore.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface VisitStore {
  currentPath: string
  previousPath: string
  globalNavigationActiveIndex: number | undefined
  setGlobalNavigationActiveIndex: (index: number | undefined) => void
  setCurrentPath: (path: string) => void
}

export const useVisitStore = create<VisitStore>()(
  persist(
    (set, get) => ({
      currentPath: "/",
      previousPath: "/",
      globalNavigationActiveIndex: undefined,

      setCurrentPath: (path: string) => {
        set({
          previousPath: get().currentPath,
          currentPath: path,
        })
      },
      setGlobalNavigationActiveIndex: (index: number | undefined) => {
        set({
          globalNavigationActiveIndex: index,
        })
      },
    }),
    {
      name: "visit-store",

      partialize: (state) => ({
        currentPath: state.currentPath,
        previousPath: state.previousPath,
        globalNavigationActiveIndex: state.globalNavigationActiveIndex,
      }),
    }
  )
)
