/*
 * ContactMapSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { Section, Container, Content } from "@atoms"
import { contactPageData } from "@data"

export default function ContactMapSection() {
  const { map } = contactPageData

  if (!map) return null

  return (
    <Section padding="2xl" bgColor="bg-white">
      <Container>
        <Content direction="column" gap="xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {map.title}
            </h2>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </Content>
      </Container>
    </Section>
  )
}
