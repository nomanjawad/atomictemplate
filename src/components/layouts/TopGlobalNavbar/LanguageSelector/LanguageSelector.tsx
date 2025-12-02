/*
 * LanguageSelector.tsx
 * Created for language selection
 * Copyright (c) 2025
 * All rights reserved
 */

"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguageStore, type Language } from "@store"
import styles from "./language-selector.module.css"

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
]

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className={styles.language_selector} ref={dropdownRef}>
      <button
        className={styles.language_button}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span className={styles.label}>{currentLanguage.label}</span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.dropdown_item} ${
                language === lang.code ? styles.active : ""
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.label}>{lang.label}</span>
              {language === lang.code && (
                <span className={styles.check}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
