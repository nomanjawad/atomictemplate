/*
 * useLanguageStore.ts
 * Created for language management
 * Copyright (c) 2025
 * All rights reserved
 */

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Language = "en" | "ru" | "ar"

interface LanguageStore {
  language: Language
  isLanguageInitialized: boolean
  setLanguage: (language: Language) => void
  setLanguageInitialized: (initialized: boolean) => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "en",
      isLanguageInitialized: false,
      setLanguage: (language: Language) => set({ language }),
      setLanguageInitialized: (initialized: boolean) =>
        set({ isLanguageInitialized: initialized }),
    }),
    {
      name: "language-store",
      partialize: (state) => ({
        language: state.language,
        isLanguageInitialized: state.isLanguageInitialized,
      }),
    }
  )
)
