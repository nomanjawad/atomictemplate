/*
 * FaqSection.tsx
 * Created by Abdul Jabbar Gazi
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

"use client"

import { useState } from "react"
import { Container, Content, Section } from "@atoms"

import { FaqItem } from "./FaqItem"
import styles from "./faq-section.module.css"
import { TextBlock } from "@molecules"
import { FAQ } from "@validations"

export default function FaqSection({ faqData }: { faqData?: FAQ }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  if (!faqData || !faqData.items) {
    return null
  }

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <Section>
      <Container>
        <Content
          justify="center"
          align="center"
          direction="column"
          className={styles.bottomPadding}
        >
          <TextBlock
            title={faqData.title || ""}
            description={faqData.description || ""}
            options={{
              title: { tag: "h2", variant: "primary" },
              description: { tag: "h2", variant: "primary" },
              flex: { align: "center", justify: "center" },
            }}
          />
        </Content>

        <Content justify="center" gap="xl" className={styles.two_column_layout}>
          <Content direction="column" gap="md" className={styles.left_column}>
            {faqData.items.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </Content>
        </Content>
      </Container>
    </Section>
  )
}
