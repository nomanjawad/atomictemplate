/*
 * HeaderLiftContainer.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { Content, Section, Container } from "@atoms"
import { HeaderLiftBorder } from "./HeaderLiftBorder"
import { HeaderLiftContainerProps } from "./HeaderLiftContainer.types"

import styles from "./header-lift-container.module.css"
import clsx from "clsx"

export default function HeaderLiftContainer({
  options,
  children,
}: HeaderLiftContainerProps) {
  return (
    <Section className={styles.left_header_section} {...options?.section}>
      <Container>
        <Content
          {...options?.content}
          className={clsx(
            styles.header_lift_container,
            options?.content?.className
          )}
        >
          <HeaderLiftBorder {...options?.border} />
          {children}
        </Content>
      </Container>
    </Section>
  )
}
