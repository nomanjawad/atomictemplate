/*
 * index.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect } from "react"

import { ClientDebugWrapperProps } from "./ClientDebugWrapper.types"

// Active only in development, unless disabled explicitly
const isActiveBrowserDebug: boolean =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"

export default function ClientDebugWrapper({
  allowDebugger = true,
  children,
}: ClientDebugWrapperProps) {
  useEffect(() => {
    if (allowDebugger || isActiveBrowserDebug) return

    const blockContext = (e: MouseEvent) => e.preventDefault()

    const onKeyDown = (e: KeyboardEvent) => {
      const k = (e.key || "").toLowerCase()
      const isCtrlOrMeta = e.ctrlKey || e.metaKey

      const shouldBlock =
        k === "f12" ||
        // DevTools / Console / Inspector (cross-platform)
        (isCtrlOrMeta && e.shiftKey && ["i", "j", "c", "k"].includes(k)) ||
        // View Source
        (isCtrlOrMeta && k === "u") ||
        // macOS specific (Cmd + Option)
        (e.metaKey && e.altKey && ["i", "j", "u", "k"].includes(k))

      if (shouldBlock) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    document.addEventListener("contextmenu", blockContext, true)
    document.addEventListener("keydown", onKeyDown, true)

    return () => {
      document.removeEventListener("contextmenu", blockContext, true)
      document.removeEventListener("keydown", onKeyDown, true)
    }
  }, [allowDebugger])

  return <>{children}</>
}
