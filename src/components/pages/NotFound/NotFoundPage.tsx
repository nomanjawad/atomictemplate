/*
 * NotFoundPage.page.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import Link from "next/link"

import { BaseText } from "@atoms"

import styles from "./not-found-page.module.css"
import { sharedClass } from "@constants"

export default function NotFoundPage() {
  return (
    <main className={styles.wrapper}>
      <BaseText tag="h1" className={styles.title}>
        Page not found
      </BaseText>
      <p className={styles.desc}>
        Sorry, we couldn’t find what you’re looking for.
      </p>
      <Link href="/" className={sharedClass.LINK}>
        Go back home
      </Link>
    </main>
  )
}
