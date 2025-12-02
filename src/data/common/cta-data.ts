/*
 * cta-data.ts
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { staticRoutes } from "@constants"
import { Cta } from "@validations"

export const ctaData: Cta = {
  ctaTitle:
    "Ready to Start Your Next Project?",
  ctaButton: {
    text: "Get Started",
    url: staticRoutes.HOME,
  },
}
