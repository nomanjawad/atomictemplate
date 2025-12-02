/*
 * PageWisePathHeaderVisibility.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { usePath } from "@hooks"
import { PathWisePageHeaderProps } from "./page-wise-visibility.types"

export default function PageWisePathHeaderVisibility({
  pathList,
  variant,
  children,
}: PathWisePageHeaderProps) {
  const { pathName } = usePath()

  if (!pathName) return null

  // If no pathList provided, show children by default
  if (!pathList || pathList.length === 0) return <>{children}</>

  const isPathMatched = pathList.includes(pathName)

  // Include mode: only show if path matches
  if (variant === "include") {
    return isPathMatched ? <>{children}</> : null
  }

  // Exclude mode: hide if path matches
  if (variant === "exclude") {
    return isPathMatched ? null : <>{children}</>
  }

  return <>{children}</>
}
