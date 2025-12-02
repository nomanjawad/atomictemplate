/*
 * geolocation.service.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

import { Language } from "@store"

interface GeolocationResponse {
  country_code?: string
  country?: string
}

/**
 * Detects user's country based on IP address
 * Uses ipapi.co free API (no API key required)
 * @returns Promise with country code or null
 */
export async function detectCountryFromIP(): Promise<string | null> {
  try {
    // Add timeout to prevent hanging
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    const response = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      console.warn("Failed to fetch geolocation data")
      return null
    }

    const data: GeolocationResponse = await response.json()
    return data.country_code || null
  } catch (error) {
    // Silently fail - this is expected in development and when offline
    if ((error as Error).name === "AbortError") {
      console.warn("IP detection timed out")
    }
    return null
  }
}

/**
 * Maps country code to language
 * @param countryCode - ISO country code (e.g., "RU", "SA")
 * @returns Language code
 */
export function mapCountryToLanguage(countryCode: string): Language {
  const countryUpper = countryCode.toUpperCase()

  // Russia and Russian-speaking countries
  if (countryUpper === "RU" || countryUpper === "BY" || countryUpper === "KZ") {
    return "ru"
  }

  // Saudi Arabia and other Arabic-speaking countries
  if (
    countryUpper === "SA" || // Saudi Arabia
    countryUpper === "AE" || // UAE
    countryUpper === "KW" || // Kuwait
    countryUpper === "QA" || // Qatar
    countryUpper === "BH" || // Bahrain
    countryUpper === "OM" || // Oman
    countryUpper === "JO" || // Jordan
    countryUpper === "LB" || // Lebanon
    countryUpper === "EG" || // Egypt
    countryUpper === "IQ" || // Iraq
    countryUpper === "SY" || // Syria
    countryUpper === "YE" || // Yemen
    countryUpper === "LY" || // Libya
    countryUpper === "TN" || // Tunisia
    countryUpper === "DZ" || // Algeria
    countryUpper === "MA" // Morocco
  ) {
    return "ar"
  }

  // Default to English
  return "en"
}

/**
 * Detects language from browser settings
 * @returns Language code based on browser language
 */
export function detectLanguageFromBrowser(): Language {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "en"
  }

  const browserLang =
    navigator.language ||
    (navigator as Navigator & { userLanguage?: string }).userLanguage ||
    "en"
  const langCode = browserLang.toLowerCase().split("-")[0]

  if (langCode === "ru") return "ru"
  if (langCode === "ar") return "ar"

  return "en"
}

/**
 * Detects user's preferred language based on IP geolocation
 * Falls back to browser language if IP detection fails
 * @returns Promise with detected language
 */
export async function detectLanguageFromIP(): Promise<Language> {
  const countryCode = await detectCountryFromIP()

  if (!countryCode) {
    // Fallback to browser language detection
    return detectLanguageFromBrowser()
  }

  return mapCountryToLanguage(countryCode)
}
