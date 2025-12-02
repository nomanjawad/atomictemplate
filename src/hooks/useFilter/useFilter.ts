/*
 * useFilter.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { useEffect, useState } from "react"

import type { UseFilterReturn, UseFilterOption } from "./useFilter.types"

/**
 * A reusable hook for filtering an array of objects by a given key and value.
 *
 * @template Item - The object type contained in the array
 * @returns {UseFilterReturn} Hook API
 * - initializeFilter: Function to set initial data, filter value, and filter key
 * - filteredData: The resulting filtered array
 *
 * @example
 *
 * ```tsx
 * import { useEffect } from "react"
 * import useFilter from "@/hooks/useFilter"
 * import type { UseFilterOption } from "@/interface"
 *
 * type User = { id: number; name: string; email: string }
 *
 * export default function UserList() {
 *   const { initializeFilter, filteredData } = useFilter<User>()
 *
 *   useEffect(() => {
 *     const options: UseFilterOption<User> = {
 *       initialData: [
 *         { id: 1, name: "John Doe", email: "john@example.com" },
 *         { id: 2, name: "Jane Smith", email: "jane@example.com" }
 *       ],
 *       initialFilterKey: "name",
 *       initialFilterValue: ""
 *     }
 *
 *     initializeFilter(options)
 *   }, [])
 *
 *   return (
 *     <div>
 *       <ul>
 *         {filteredData.map((user) => (
 *           <li key={user.id}>{user.name}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   )
 * }
 * ```
 */
export default function useFilter<
  Item extends Record<string, unknown>
>(): UseFilterReturn<Item> {
  const [sourceData, setSourceData] = useState<Item[]>([])
  const [filterValue, setFilterValue] = useState<string>("")
  const [filterKey, setFilterKey] = useState<keyof Item | "">("")
  const [filteredData, setFilteredData] = useState<Item[]>([])

  // MARK: Whenever the filter value, filter key, or source data changes, recompute the filtered result.
  useEffect(() => {
    applyFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue, filterKey, sourceData])

  /**
   * Initializes the filter state with data, filter value, and filter key.
   */
  function initializeFilter({
    initialData = [],
    initialFilterKey = "",
    initialFilterValue = "",
  }: UseFilterOption<Item>): void {
    setSourceData(initialData)
    setFilterKey(initialFilterKey)
    setFilterValue(initialFilterValue)
  }

  /**
   * Applies the filtering logic and updates the filteredData state.
   */
  function applyFilter(): void {
    if (!filterKey || filterValue.trim() === "") {
      setFilteredData(sourceData)
      return
    }

    const normalizedFilterValue = filterValue.toLowerCase()

    const filteredItems = sourceData.filter((currentItem) => {
      const rawValue = currentItem[filterKey as keyof Item]
      const stringifiedValue = rawValue == null ? "" : String(rawValue)
      return stringifiedValue.toLowerCase().includes(normalizedFilterValue)
    })

    setFilteredData(filteredItems)
  }

  return { initializeFilter, filteredData }
}
