/*
 * ExampleFeaturesSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { Section, Container, Content, BaseImage } from "@atoms"
import { examplePageData } from "@data"
import { InternalLink } from "@atoms"

export default function ExampleFeaturesSection() {
  const { features } = examplePageData

  if (!features) return null

  return (
    <Section padding="2xl" bgColor="bg-white">
      <Container>
        <Content direction="column" gap="xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {features.sectionTitle}
            </h2>
            {features.sectionDescription && (
              <p className="text-lg md:text-xl text-gray-600">
                {features.sectionDescription}
              </p>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon Placeholder */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Link */}
                  {feature.link && (
                    <InternalLink
                      href={feature.link.href}
                      className="text-primary font-medium hover:underline inline-flex items-center gap-2 mt-2"
                    >
                      {feature.link.text}
                      <span>→</span>
                    </InternalLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Content>
      </Container>
    </Section>
  )
}
