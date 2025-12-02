/*
 * SectionHeader.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseText, Content, ContentProps } from "@atoms"

import styles from "./section-header.module.css"
import { PrimaryAction } from "@molecules"

interface SectionHeaderProps extends Pick<ContentProps, "align"> {
  title: string
  description: string
  route: {
    name: string
    href: string
  }
}

export default function SectionHeader({
  route,
  align,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Content direction="column" gap="xl" align={align} className={styles.section_header}>
      <Content gap="md" direction="column">
        <BaseText tag="h2" className={styles.section_title}>
          {title}
        </BaseText>
        <BaseText className={styles.section_description}>
          {description}
        </BaseText>
      </Content>

      <PrimaryAction href={route.href} title={route.name} />
    </Content>
  )
}
