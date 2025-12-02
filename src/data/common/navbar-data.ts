/*
 * navbar-data.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

import { staticRoutes } from "@constants"

export interface NavbarData {
  topNavbar: {
    email: string
    phone: string
  }
  mainNavigation: Array<{
    title: string
    url: string
  }>
  mobileNavigation: Array<{
    title: string
    url: string
  }>
  resources: {
    label: string
    items: Array<{
      name: string
      href: string
    }>
  }
  button: {
    text: string
    href: string
  }
}

export const navbarData: NavbarData = {
  topNavbar: {
    email: "hello@example.com",
    phone: "+1 234 567 8900",
  },
  mainNavigation: [
    { title: "Home", url: staticRoutes.HOME },
    { title: "Gallery", url: staticRoutes.GALLERY },
    { title: "Contact Us", url: staticRoutes.CONTACT_US },
  ],
  mobileNavigation: [
    { title: "Home", url: staticRoutes.HOME },
    { title: "Gallery", url: staticRoutes.GALLERY },
    { title: "Contact Us", url: staticRoutes.CONTACT_US },
  ],
  resources: {
    label: "More",
    items: [
      { name: "Privacy Policy", href: staticRoutes.PRIVACY_POLICY },
      { name: "Terms & Conditions", href: staticRoutes.TERMS_CONDITION },
    ],
  },
  button: {
    text: "Get Started",
    href: staticRoutes.CONTACT_US,
  },
}
