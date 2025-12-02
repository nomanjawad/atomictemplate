/*
 * app-routes.ts
 * Created by Noman Jawad
 * All rights reserved
 */

export const staticRoutes = {
  // Main pages
  HOME: "/",
  ABOUT_US: "/about-us",
  CONTACT_US: "/contact-us",
  INDUSTRY: "/industry",
  SERVICES: "/services",
  TRAINING_PROGRAMS: "/training-programs",
  CSR: "/csr",
  GALLERY: "/gallery",
  EXAMPLE: "/example",

  // Content pages
  ALL_BLOG: "/blog",
  ALL_SUCCESS_STORY: "/success-stories",

  // Legal pages
  COOKIES_POLICY: "/cookies-policy",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_CONDITION: "/terms-condition",
} as const

export const dynamicRoutes = {
  /** Generate blog post route: /blog/{slug} */
  BLOG: (slug: string): string => `/blog/${slug}`,

  /** Generate case study route: /case-study/{slug} */
  SUCCESS_STORY: (slug: string): string => `/success-stories/${slug}`,

  /** Generate services route: /service/{slug} */
  SERVICE: (slug: string): string => `/services/${slug}`,
} as const

export const legalRoutes = [
  { name: "Privacy Policy", path: staticRoutes.PRIVACY_POLICY },
  { name: "Cookies Policy", path: staticRoutes.COOKIES_POLICY },
  { name: "Terms and Conditions", path: staticRoutes.TERMS_CONDITION },
] as const

export const globalNavRoutes = [
  { name: "Our Agency", path: staticRoutes.ABOUT_US },
] as const

export const companyRoutes = {
  services: { name: "Service List", path: staticRoutes.SERVICES },
  successStories: { name: "Success Stories", path: staticRoutes.CONTACT_US },
  contactUs: { name: "Contact Us", path: staticRoutes.CONTACT_US },
  trainingProgram: {
    name: "Training Programs",
    path: staticRoutes.TRAINING_PROGRAMS,
  },
} as const

export const menubarRoutes = [
  { name: "Our Agency", path: staticRoutes.ABOUT_US },
  { name: "Blog", path: staticRoutes.ALL_BLOG },
] as const
