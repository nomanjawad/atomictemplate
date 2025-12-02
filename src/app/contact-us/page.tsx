/*
 * page.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { ContactPage } from "@pages"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Have a question or want to work together? Contact us and we'll respond as soon as possible.",
  keywords: ["contact", "get in touch", "support", "inquiry"],
  openGraph: {
    title: "Contact Us | Get in Touch",
    description:
      "Have a question or want to work together? Contact us and we'll respond as soon as possible.",
  },
}

export default function ContactUsPage() {
  return <ContactPage />
}
