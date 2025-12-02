/*
 * UpdateVisitedPath.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */
"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import { globalNavRoutes } from "@constants"
import { useVisitStore } from "@store"

export default function UpdateVisitedPath() {
  const { setCurrentPath, setGlobalNavigationActiveIndex } = useVisitStore()

  const pathName = usePathname()

  useEffect(() => {
    setCurrentPath(pathName)

    const matchingRouteIndex = globalNavRoutes.findIndex(
      (route) =>
        pathName === route.path || pathName.startsWith(route.path + "/")
    )

    if (matchingRouteIndex !== -1) {
      setGlobalNavigationActiveIndex(matchingRouteIndex)
    } else {
      setGlobalNavigationActiveIndex(undefined)
    }
  }, [pathName, setCurrentPath, setGlobalNavigationActiveIndex])

  return null
}
