/*
 * HomePage.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import Image from "next/image"
import { PageHeader, FaqSection } from "@organisms"
import { Container, Section } from "@atoms"
// Import Slider from published npm package
import { Slider, type ImageRenderProps } from "@atomictemplate/slider"
import { homePageData, faqData } from "@data"

// Demo slide items
const demoSlides = [
  {
    id: 1,
    media: {
      type: "image" as const,
      src: "https://picsum.photos/800/400?random=1",
      alt: "Slide 1",
      width: 800,
      height: 400,
    },
  },
  {
    id: 2,
    media: {
      type: "image" as const,
      src: "https://picsum.photos/800/400?random=2",
      alt: "Slide 2",
      width: 800,
      height: 400,
    },
  },
  {
    id: 3,
    media: {
      type: "image" as const,
      src: "https://picsum.photos/800/400?random=3",
      alt: "Slide 3",
      width: 800,
      height: 400,
    },
  },
  {
    id: 4,
    media: {
      type: "image" as const,
      src: "https://picsum.photos/800/400?random=4",
      alt: "Slide 4",
      width: 800,
      height: 400,
    },
  },
]

// Custom image renderer using Next.js Image
const renderNextImage = (props: ImageRenderProps) => (
  <Image
    src={props.src}
    alt={props.alt}
    width={typeof props.width === "number" ? props.width : 800}
    height={typeof props.height === "number" ? props.height : 400}
    className={props.className}
    style={{ objectFit: "cover", width: "100%", height: "auto" }}
  />
)

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
              Slider Demo - Testing renderImage
            </h2>

            {/* Slider with Next.js Image */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">
                With Next.js Image (renderImage prop)
              </h3>
              <Slider
                items={demoSlides}
                renderImage={renderNextImage}
                options={{
                  slidesToShow: 2,
                  gap: 24,
                  autoplay: { enabled: true, delay: 4000 },
                  loop: true,
                  arrows: { enabled: true },
                  dots: { enabled: true },
                  a11y: { enabled: true },
                }}
              />
            </div>

            {/* Slider without renderImage (native img) */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Without renderImage (native img)
              </h3>
              <Slider
                items={demoSlides}
                options={{
                  slidesToShow: 3,
                  gap: 16,
                  loop: true,
                  arrows: { enabled: true },
                  dots: { enabled: true },
                }}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <FaqSection faqData={faqData} />
    </>
  )
}
