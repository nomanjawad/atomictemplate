/*
 * useHideNavbar.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect, useState, useRef } from "react"

import { useNavbarStore } from "@store"

import type {
  UseHideNavbarOption,
  UseHideNavbarReturn,
} from "./useHideNavbar.types"

/**
 * useHideNavbar: Automatically hides the GlobalNavbar when a specific component
 * appears on screen, and shows it again when the component leaves the screen.
 *
 * Uses IntersectionObserver to detect when the referenced element is visible.
 * When the element intersects with the viewport, the navbar becomes invisible.
 * When the element leaves the viewport, the navbar becomes visible again.
 *
 * @param {UseHideNavbarOption} options Configuration options
 * @param {RefObject<HTMLElement | null>} options.ref - React ref to the element that triggers hiding
 * @param {number} [options.threshold=0] - Intersection threshold (0 to 1)
 * @param {string} [options.rootMargin="0px"] - Root margin for IntersectionObserver
 * @param {boolean} [options.enabled=true] - Whether the hook is enabled
 *
 * @returns {UseHideNavbarReturn} Hook return value
 * @property {boolean} isIntersecting - Whether the element is currently intersecting
 *
 * @example
 * ```tsx
 * import { useRef } from "react"
 * import { useHideNavbar } from "@hooks"
 *
 * export default function MyComponent() {
 *   const sectionRef = useRef<HTMLElement>(null)
 *   const { isIntersecting } = useHideNavbar({ ref: sectionRef })
 *
 *   return (
 *     <section ref={sectionRef}>
 *       Content that should hide navbar when visible
 *     </section>
 *   )
 * }
 * ```
 */
export default function useHideNavbar({
  ref,
  threshold = 0,
  rootMargin = "0px",
  enabled = true,
}: UseHideNavbarOption): UseHideNavbarReturn {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const setIsVisible = useNavbarStore((state) => state.setIsVisible)

  useEffect(() => {
    // Skip if hook is disabled or ref is not available
    if (!enabled || !ref.current) {
      return
    }

    // Create IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isCurrentlyIntersecting = entry.isIntersecting
          setIsIntersecting(isCurrentlyIntersecting)

          // Hide navbar when element is intersecting, show when not
          setIsVisible(!isCurrentlyIntersecting)
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    // Start observing
    const element = ref.current
    observerRef.current.observe(element)

    // Cleanup
    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element)
        observerRef.current.disconnect()
      }

      // Reset navbar visibility when component unmounts
      setIsVisible(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, threshold, rootMargin, enabled])

  return {
    isIntersecting,
  }
}
