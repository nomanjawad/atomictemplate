/*
 * LanguageInitializer.tsx
 * Client component to initialize language based on IP
 * Copyright (c) 2025
 * All rights reserved
 */

"use client"

import { useIPLanguageDetection } from "@hooks"

/**
 * Client component that initializes language detection based on IP
 * Should be included in the root layout
 */
export default function LanguageInitializer() {
  useIPLanguageDetection()
  return null
}
