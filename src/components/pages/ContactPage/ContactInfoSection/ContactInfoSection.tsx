/*
 * ContactInfoSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

import { Section, Container, Content, ExternalLink } from "@atoms"
import { contactPageData } from "@data"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  clock: Clock,
}

export default function ContactInfoSection() {
  const { contactInfo } = contactPageData

  return (
    <Section padding="2xl" bgColor="bg-white">
      <Container>
        <Content direction="column" gap="xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              Reach out to us through any of the following channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent =
                iconMap[info.icon as keyof typeof iconMap] || iconMap.email

              const cardContent = (
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.label}
                    </h3>
                    <p className="text-gray-600 wrap-break-word">
                      {info.value}
                    </p>
                  </div>
                </div>
              )

              return info.href ? (
                <ExternalLink
                  key={index}
                  href={info.href}
                  className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {cardContent}
                </ExternalLink>
              ) : (
                <div
                  key={index}
                  className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {cardContent}
                </div>
              )
            })}
          </div>
        </Content>
      </Container>
    </Section>
  )
}
