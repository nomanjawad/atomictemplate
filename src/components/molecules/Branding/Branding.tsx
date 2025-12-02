/*
 * Branding.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseText, Content } from "@atoms"
import { BrandLogo } from "@molecules"

import styles from "./branding.module.css"

export interface BrandingData {
  description: string
}

export default function Branding({ branding }: { branding?: BrandingData }) {
  return (
    <Content className={styles.branding_container}>
      <Content direction="column" justify="between" gap="xl">
        <Content>
          <Content direction="column" gap="lg">
            <BrandLogo />
            {branding?.description && (
              <BaseText className={styles.branding_description}>
                {branding.description}
              </BaseText>
            )}
          </Content>
        </Content>
      </Content>
    </Content>
  )
}
