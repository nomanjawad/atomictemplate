/*
 * Menu.types.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { ReactNode } from "react"

export interface MenuItem {
  title: string
  url: string
  icon?: ReactNode
  badge?: string
  isExternal?: boolean
}

export type MenuOrientation = "horizontal" | "vertical"
export type MenuVariant = "navbar" | "sidebar" | "mobile" | "dropdown"

export interface MenuProps {
  items: MenuItem[]
  orientation?: MenuOrientation
  variant?: MenuVariant
  activeUrl?: string
  onItemClick?: (item: MenuItem) => void
  className?: string
  itemClassName?: string
  activeClassName?: string
}
