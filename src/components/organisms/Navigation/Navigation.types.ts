/*
 * Navigation.types.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { MenuItem } from "@molecules"

export type NavigationVariant = "desktop" | "mobile"

export interface NavigationProps {
  items: MenuItem[]
  variant?: NavigationVariant
  onItemClick?: (item: MenuItem) => void
  className?: string
}
