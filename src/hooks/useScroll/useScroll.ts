/*
 * useScroll.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { UseScrollOption, UseScrollReturn } from "./useScroll.types"

// Register GSAP ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function useScroll({
  maxIndex,
  scrollDurationMS,
}: UseScrollOption): UseScrollReturn {
  const triggerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [blockProgress, setBlockProgress] = useState(0)

  useEffect(() => {
    if (!triggerRef.current) return

    const element = triggerRef.current
    const scrollDuration = scrollDurationMS || (maxIndex + 1) * 150

    // Create ScrollTrigger instance
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: `+=${scrollDuration}`,
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const currentProgress = self.progress * 100
        setProgress(currentProgress)

        // Calculate active index based on progress
        const totalBlocks = maxIndex + 1
        const currentBlock = Math.floor(self.progress * totalBlocks)
        const clampedIndex = Math.min(currentBlock, maxIndex)
        setActiveIndex(clampedIndex)

        // Calculate progress within current block
        const blockSize = 1 / totalBlocks
        const blockStart = clampedIndex * blockSize
        const progressInBlock =
          ((self.progress - blockStart) / blockSize) * 100
        setBlockProgress(Math.min(progressInBlock, 100))
      },
    })

    return () => {
      scrollTriggerInstance.kill()
    }
  }, [maxIndex, scrollDurationMS])

  return {
    breakProgress: 100 / (maxIndex + 1),
    triggerRef,
    progress,
    activeIndex,
    blockProgress,
  }
}
