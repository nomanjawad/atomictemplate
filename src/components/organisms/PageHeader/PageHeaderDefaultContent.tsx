/*
 * PageHeaderDefaultContent.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

"use client"

import { usePath } from "@hooks"
import { toCapitalize } from "@utils"
import { BaseText, Content } from "@atoms"
import { RouteIndicator } from "@molecules/RouteIndicator"

import styles from "./page-heder.module.css"

export default function PageHeaderDefaultContent() {
  const { currentPathLeaf } = usePath()

  return (
    <Content justify="center">
      <Content radius="medium" className={styles.route_details}>
        <Content direction="column" gap="xl" align="center" justify="center">
          <RouteIndicator />
          <BaseText tag="h1" variant="banner">
            {toCapitalize(currentPathLeaf.replace("-", " "))}
          </BaseText>
        </Content>
      </Content>
    </Content>
  )
}
