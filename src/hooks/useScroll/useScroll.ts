/*
 * useScroll.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useRef } from "react"

import { UseScrollOption, UseScrollReturn } from "./useScroll.types"

import { useScrollProgress } from "@meadown/scroll-progress-trigger"

export default function useScroll({
  maxIndex,
  scrollDurationMS,
  scrollsPerBlock = 1,
}: UseScrollOption): UseScrollReturn {
  const triggerRef = useRef<HTMLDivElement>(null)

  const { progress, currentIndex, blockProgress } = useScrollProgress({
    triggerRef: triggerRef as React.RefObject<HTMLElement>,
    scrollDuration: scrollDurationMS || (maxIndex + 1) * 150,
    totalBlocks: maxIndex + 1,

    scrollsPerBlock,
    snapToBlocks: false,
  })

  return {
    breakProgress: 100 / (maxIndex + 1),
    triggerRef,
    progress,
    activeIndex: currentIndex || 0,
    blockProgress: blockProgress || 0,
  }
}
