/*
 * LoadingPage.page.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseText } from "@atoms"

import styles from "./loading-page.module.css"

export default function LoadingPage() {
  return (
    <main role="status" aria-busy="true" className={styles.wrapper}>
      <BaseText tag="span" aria-hidden className={styles.dot} />
      <BaseText tag="span" className={styles.BaseText}>
        Loading…
      </BaseText>
    </main>
  )
}
