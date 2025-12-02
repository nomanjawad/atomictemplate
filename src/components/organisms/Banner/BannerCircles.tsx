/*
 * BannerCircles.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import styles from "./banner.module.css"

gsap.registerPlugin(ScrollTrigger)

export default function BannerCircles() {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!innerRef.current || !outerRef.current) return

    // Animate inner circle
    gsap.fromTo(
      innerRef.current,
      { x: 20, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 0.2,
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    // Animate outer circle with delay
    gsap.fromTo(
      outerRef.current,
      { x: 20, opacity: 0, scale: 0.6 },
      {
        x: 0,
        opacity: 0.1,
        scale: 1,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, [])

  return (
    <>
      <div ref={innerRef} className={styles.circle_inner} />
      <div ref={outerRef} className={styles.circle_outer} />
    </>
  )
}
