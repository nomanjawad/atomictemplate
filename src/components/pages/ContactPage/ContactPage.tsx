/*
 * ContactPage.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { ContactHeroSection } from "./ContactHeroSection"
import { ContactInfoSection } from "./ContactInfoSection"
import { ContactFormSection } from "./ContactFormSection"
import { ContactMapSection } from "./ContactMapSection"

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactMapSection />
    </>
  )
}
