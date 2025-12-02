/*
 * ExampleStatsSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { Section, Container, Content } from "@atoms"
import { examplePageData } from "@data"

export default function ExampleStatsSection() {
  const { stats } = examplePageData

  if (!stats) return null

  return (
    <Section
      padding="2xl"
      bgColor="bg-linear-to-br from-primary/90 to-secondary/90"
    >
      <Container>
        <Content direction="column" gap="xl">
          {stats.sectionTitle && (
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
              {stats.sectionTitle}
            </h2>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg md:text-xl font-semibold text-white/90 mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-white/75">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Content>
      </Container>
    </Section>
  )
}
