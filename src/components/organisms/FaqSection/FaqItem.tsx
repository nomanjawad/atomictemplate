/*
 * FaqItem.tsx
 * Created by Abdul Jabbar Gazi
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Content, BaseText } from "@atoms"
import { TextBlock } from "@molecules"
import { AnimatedToggleArrow } from "@animations"
import styles from "./faq-section.module.css"

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

export function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!panelRef.current || !contentRef.current) return

    if (isOpen) {
      gsap.to(panelRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      })
    } else {
      gsap.to(panelRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [isOpen])

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.item_header} onClick={onClick}>
        <Content justify="between" align="center">
          <TextBlock
            title={question}
            options={{
              title: { tag: "p", size: "regular", weight: "semibold" },
            }}
          />
          <AnimatedToggleArrow shouldToggled={isOpen} onToggle={() => {}} />
        </Content>
      </div>
      <div
        ref={panelRef}
        className={styles.panel_wrapper}
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
      >
        <div ref={contentRef} className={styles.panel_content}>
          <BaseText variant="tertiary">{answer}</BaseText>
        </div>
      </div>
    </div>
  )
}
