/*
 * Header.types.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { MenuItem } from "@molecules"

export interface HeaderProps {
  /**
   * Navigation menu items
   */
  menuItems?: MenuItem[]

  /**
   * Button configuration
   */
  buttonText?: string
  buttonHref?: string

  /**
   * Header visibility (controlled by scroll)
   */
  isVisible?: boolean

  /**
   * Custom className for header wrapper
   */
  className?: string
}
