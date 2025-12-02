/*
 * useLoadingStore.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { create } from "zustand"

export interface LoadingState {
  isLoading: boolean
  progress: number
  startLoading: () => void
  stopLoading: () => void
  intervalId: ReturnType<typeof setInterval> | null
}

export const useLoadingStore = create<LoadingState>((set, get) => ({
  isLoading: false,
  progress: 0,
  intervalId: null,

  startLoading: () => {
    // Clear any existing interval to prevent multiple intervals
    const { intervalId } = get()
    if (intervalId) {
      clearInterval(intervalId)
    }

    set({ isLoading: true, progress: 0 })

    const interval = setInterval(() => {
      const { progress, isLoading } = get()

      if (!isLoading || progress >= 100) {
        clearInterval(interval)
        set({ intervalId: null })
        if (progress >= 100) {
          setTimeout(() => set({ isLoading: false }), 100)
        }
        return
      }

      set({ progress: progress + 1 })
    }, 25)

    set({ intervalId: interval })
  },

  stopLoading: () => {
    const { intervalId } = get()
    if (intervalId) {
      clearInterval(intervalId)
    }
    set({ isLoading: false, progress: 0, intervalId: null })
  },
}))
