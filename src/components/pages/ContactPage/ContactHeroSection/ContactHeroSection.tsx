/*
 * ContactHeroSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { Section, Container, Content } from "@atoms"
import { contactPageData } from "@data"

export default function ContactHeroSection() {
  const { hero } = contactPageData

  return (
    <Section
      bgColor="bg-gradient-to-br from-primary/10 to-secondary/10"
      padding="2xl"
    >
      <Container>
        <Content
          direction="column"
          align="center"
          gap="md"
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            {hero.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            {hero.description}
          </p>
        </Content>
      </Container>
    </Section>
  )
}
