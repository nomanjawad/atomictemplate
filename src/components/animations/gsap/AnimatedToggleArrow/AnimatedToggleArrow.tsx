/*
 * AnimatedToggleArrow.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import styles from "./animated-toggle-arrow.module.css"
import { AnimatedToggleArrowProps } from "./AnimatedToggleArrow.types"

export function AnimatedToggleArrow({
  shouldToggled,
  rotate = 180,
  color = "var(--color-foreground-primary)",
  clickedColor = "var(--color-foreground-accent)",
  onToggle,
}: AnimatedToggleArrowProps) {
  const arrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!arrowRef.current) return

    gsap.to(arrowRef.current, {
      rotation: shouldToggled ? rotate : 0,
      duration: 0.3,
      ease: "power2.inOut",
    })
  }, [shouldToggled, rotate])

  return (
    <div
      ref={arrowRef}
      className={styles.arrow}
      onClick={onToggle}
      style={{
        color: shouldToggled ? clickedColor : color,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
