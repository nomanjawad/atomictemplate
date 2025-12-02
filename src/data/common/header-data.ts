/*
 * header-data.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { staticRoutes } from "@constants"
import { MenuItem } from "@molecules"

export interface HeaderData {
  navigation: MenuItem[]
  button: {
    text: string
    href: string
  }
}

export const headerData: HeaderData = {
  navigation: [
    { title: "Home", url: staticRoutes.HOME },
    { title: "Gallery", url: staticRoutes.GALLERY },
    { title: "Contact Us", url: staticRoutes.CONTACT_US },
  ],
  button: {
    text: "Get Started",
    href: staticRoutes.CONTACT_US,
  },
}
