/*
 * ExampleCTASection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { Section, Container, Content } from "@atoms"
import { PrimaryAction } from "@molecules"
import { examplePageData } from "@data"

export default function ExampleCTASection() {
  const { cta } = examplePageData

  if (!cta) return null

  return (
    <Section padding="2xl" bgColor="bg-linear-to-r from-primary to-secondary">
      <Container>
        <Content
          direction="column"
          align="center"
          gap="lg"
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            {cta.title}
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {cta.description}
          </p>

          <div className="mt-4">
            <PrimaryAction title={cta.button.text} href={cta.button.href} />
          </div>
        </Content>
      </Container>
    </Section>
  )
}
