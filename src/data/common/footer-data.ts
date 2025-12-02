/*
 * footer-data.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { staticRoutes } from "@constants"

export interface FooterRoute {
  name: string
  href: string
}

export interface FooterNavGroup {
  title: string
  routes: FooterRoute[]
}

export interface FooterData {
  branding: {
    description: string
    tagline?: string
  }
  navigation: FooterNavGroup[]
  contact?: {
    email: string
    phone: string
    address?: string
  }
  social?: {
    name: string
    href: string
    icon?: string
  }[]
  copyright: string
}

export const footerData: FooterData = {
  branding: {
    description: "Building amazing web experiences with modern technology.",
    tagline: "Your Digital Partner",
  },
  navigation: [
    {
      title: "Company",
      routes: [
        { name: "Home", href: staticRoutes.HOME },
        { name: "Gallery", href: staticRoutes.GALLERY },
        { name: "Contact Us", href: staticRoutes.CONTACT_US },
      ],
    },
    {
      title: "Legal",
      routes: [
        { name: "Privacy Policy", href: staticRoutes.PRIVACY_POLICY },
        { name: "Terms & Conditions", href: staticRoutes.TERMS_CONDITION },
      ],
    },
  ],
  contact: {
    email: "hello@example.com",
    phone: "+1 234 567 8900",
  },
  copyright: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
}
