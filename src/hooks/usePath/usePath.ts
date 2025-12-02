/*
 * usePath.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect, useState, useMemo } from "react"

import { usePathname, useRouter } from "next/navigation"

import type { UsePathReturn } from "./usePath.types"

/**
 * `usePath` hook is essentially a path utility + navigation helper for Next.js:
 *
 * `Stateful path tracking :`
 * - leafList: an array of path segments (e.g., /blog/my-post → ["", "blog", "my-post"])
 * - currentPathLeaf: the last segment (e.g., "my-post")
 *
 * `Pure utility:`
 * - getPathLeaf(path) → returns the last segment of any path string
 *
 * `Navigation helpers (wrappers around Next.js router):`
 * - toGivenPath("/about") → navigate programmatically
 * - toPreviousPath() → go back
 *  -toForwardPath() → go forward
 *
 * @returns {UsePathReturn} Path data and navigation helpers.
 * @example
 * const { currentPathLeaf, getPathLeaf, toGivenPath } = usePath()
 * // currentPathLeaf -> last segment of the current pathname
 * // getPathLeaf('/blog/my-post/') -> 'my-post'
 * // toGivenPath('/about') -> navigates to /about
 *
 */
export default function usePath(): UsePathReturn {
  const router = useRouter()
  const pathName = usePathname()
  const [leafList, setLeafList] = useState<string[]>([])

  /**
   * Derive currentPathLeaf from leafList (no redundant state)
   */
  const currentPathLeaf = useMemo(() => {
    return leafList[leafList.length - 1] || ""
  }, [leafList])

  useEffect(() => {
    // Handle edge cases: empty path, trailing slashes
    const cleanPath = pathName?.replace(/\/+$/, "") || "/"
    const pathLeafs = cleanPath === "/" ? [""] : cleanPath.split("/")
    setLeafList(pathLeafs)
  }, [pathName])

  /**
   * Returns the last segment (leaf) of a path.
   * Collapses trailing slashes and treats the root path ('/') as an empty leaf.
   */
  function getPathLeaf(path: string = "/"): string {
    const cleanPath = path.replace(/\/+$/, "")
    const pathLeafs = cleanPath === "/" ? [""] : cleanPath.split("/")
    return pathLeafs[pathLeafs.length - 1]
  }

  /**
   * Navigate to the given path via Next.js router.
   */
  function toGivenPath(path: string) {
    router.push(path)
  }

  /**
   * Navigate back to the previous entry in the browser history.
   */
  function toPreviousPath() {
    router.back()
  }

  /**
   * Navigate forward to the next entry in the browser history.
   */
  function toForwardPath() {
    router.forward()
  }

  return {
    leafList,
    pathName,
    getPathLeaf,
    toGivenPath,
    toForwardPath,
    toPreviousPath,
    currentPathLeaf,
  }
}
