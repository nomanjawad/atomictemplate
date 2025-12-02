/*
 * Banner.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { PrimaryAction } from "@molecules"
import BannerCircles from "./BannerCircles"
import { BannerProps } from "./banner.type"
import { BaseText, Container, Content, Section } from "@atoms"
import { ctaData } from "@data"
import type { Cta, Button } from "@validations"

import styles from "./banner.module.css"

export default function Banner({
  href,
  bannerTitle,
  actionTitle,
}: BannerProps) {
  // Use props if provided, otherwise use data from ctaData
  const ctaButton = ctaData.ctaButton as Button
  const displayTitle = bannerTitle || ctaData.ctaTitle
  const displayActionTitle = actionTitle || ctaButton?.text || ""
  const displayHref = href || ctaButton?.url

  return (
    <Section id="banner">
      <Container>
        <Content justify="center" align="center">
          <Content
            padding="large"
            shadow="medium"
            radius="medium"
            className={styles.banner}
          >
            <BannerCircles />
            <Content justify="center" align="center" direction="column">
              <Content className={styles.banner_wrapper} padding="large">
                <Content
                  direction="column"
                  justify="center"
                  align="center"
                  gap="lg"
                >
                  <BaseText tag="h2" variant="banner">
                    {displayTitle}
                  </BaseText>
                  {displayHref && (
                    <PrimaryAction
                      href={displayHref}
                      title={displayActionTitle}
                    />
                  )}
                </Content>
              </Content>
            </Content>
          </Content>
        </Content>
      </Container>
    </Section>
  )
}
