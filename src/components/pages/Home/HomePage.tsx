/*
 * HomePage.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { PageHeader, FaqSection, Slider } from "@organisms"
import { Container, Section } from "@atoms"
import { homePageData, faqData, sliderData } from "@data"

export default function HomePage() {
  return (
    <>
      {/* Hero Section with banner data */}
      <PageHeader
        banner={homePageData.banner}
        isVisibleBackground
        height="large"
      />

      {/* Slider Demo Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Features Slider Demo
            </h2>
            <Slider
              items={sliderData}
              options={{
                slidesToShow: 3,
                slidesToScroll: 1,
                gap: 24,
                stretch: true,
                centerMode: false,
                pagination: "both",
                arrows: {
                  position: "inside",
                  className: "",
                },
                autoplay: {
                  enabled: true,
                  delay: 3000,
                  pauseOnHover: true,
                },
                loop: true,
                speed: 500,
                direction: "ltr",
                reverse: false,
                draggable: true,
              }}
              className="px-8"
            />
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <FaqSection faqData={faqData} />
    </>
  )
}
