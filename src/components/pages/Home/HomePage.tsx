/*
 * HomePage.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { PageHeader, FaqSection } from "@organisms"
import { homePageData, faqData } from "@data"

export default function HomePage() {
  return (
    <>
      {/* Hero Section with banner data */}
      <PageHeader
        banner={homePageData.banner}
        isVisibleBackground
        height="large"
      />

      {/* FAQ Section */}
      <FaqSection faqData={faqData} />
    </>
  )
}
