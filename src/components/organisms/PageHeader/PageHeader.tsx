/*
 * PageHeader.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { clsx } from "clsx"

import { imgWorld } from "@images"
import { Container, Content, Section, BaseImage, BaseText } from "@atoms"
import { PageHeaderProps } from "./page-header.types"
import PageHeaderDefaultContent from "./PageHeaderDefaultContent"

import styles from "./page-heder.module.css"

export default function PageHeader({
  banner,
  children,
  backgroundImage,
  height = "default",
  childContainerClass,
  isVisibleBackground,
  isVisibleDefault = true,
}: PageHeaderProps) {
  return (
    <Section
      id="page-header"
      className={clsx(styles.page_header, styles[`h-${height}`])}
    >
      <Container>
        <Content justify="center">
          {isVisibleBackground && (
            <BaseImage
              src={banner?.backgroundImageUrl || backgroundImage || imgWorld}
              alt={banner?.title || "Banner background"}
              className={styles.background}
            />
          )}
          <Content
            direction="column"
            gap="2xl"
            justify="center"
            align="center"
            className={clsx(styles.content, childContainerClass)}
          >
            {banner ? (
              <Content direction="column" gap="xl" align="center">
                <BaseText tag="h1" variant="banner">
                  {banner.title}
                </BaseText>
                {banner.description && (
                  <BaseText
                    tag="p"
                    variant="secondary"
                    className="text-center max-w-2xl"
                  >
                    {banner.description}
                  </BaseText>
                )}
              </Content>
            ) : (
              isVisibleDefault && <PageHeaderDefaultContent />
            )}
            {children}
          </Content>
        </Content>
      </Container>
    </Section>
  )
}
