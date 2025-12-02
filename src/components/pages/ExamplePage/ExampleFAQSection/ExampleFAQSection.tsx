/*
 * ExampleFAQSection.tsx
 * Created by Noman E Jawad
 * Copyright (c) 2025 skytech_solutions
 * All rights reserved
 */

"use client"

import { useState } from "react"
import { Section, Container, Content } from "@atoms"
import { examplePageData } from "@data"

export default function ExampleFAQSection() {
  const { faq } = examplePageData
  const [openId, setOpenId] = useState<string | null>(null)

  if (!faq) return null

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <Section padding="2xl" bgColor="bg-white">
      <Container>
        <Content direction="column" gap="xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {faq.sectionTitle}
            </h2>
            {faq.sectionDescription && (
              <p className="text-lg md:text-xl text-gray-600">
                {faq.sectionDescription}
              </p>
            )}
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-4">
            {faq.faqs.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                      openId === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openId === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
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
