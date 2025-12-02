/*
 * useIPLanguageDetection.ts
 * Created for IP-based language detection
 * Copyright (c) 2025
 * All rights reserved
 */

"use client"

import { useEffect } from "react"
import { useLanguageStore } from "@store"
import { detectLanguageFromIP } from "@services"

/**
 * Hook to automatically detect and set language based on user's IP address
 * Only runs once on first visit (when language hasn't been initialized)
 */
export default function useIPLanguageDetection() {
  const { isLanguageInitialized, setLanguage, setLanguageInitialized } =
    useLanguageStore()

  useEffect(() => {
    // Only detect language on first visit
    if (isLanguageInitialized) {
      return
    }

    const detectAndSetLanguage = async () => {
      try {
        const detectedLanguage = await detectLanguageFromIP()
        setLanguage(detectedLanguage)
        setLanguageInitialized(true)
      } catch (error) {
        console.error("Failed to detect language from IP:", error)
        // Mark as initialized even if detection fails to prevent repeated attempts
        setLanguageInitialized(true)
      }
    }

    detectAndSetLanguage()
  }, [isLanguageInitialized, setLanguage, setLanguageInitialized])
}
