/*
 * ErrorBoundary.page.tsx
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import Link from "next/link"
import { Button, BaseText } from "@atoms"
import styles from "./error-boundary.module.css"
import { sharedClass } from "@constants"

type Props = {
  message?: string
  onRetry?: () => void
}

export default function ErrorBoundaryPage({ message, onRetry }: Props) {
  return (
    <main className={styles.wrapper}>
      <BaseText tag="h1" className={styles.title}>
        Something went wrong
      </BaseText>
      <BaseText className={styles.message}>
        {message || "An unexpected error occurred."}
      </BaseText>
      {onRetry && (
        <Button onClick={onRetry} className={styles.button}>
          Try again
        </Button>
      )}
      <Link href="/" className={sharedClass.LINK}>
        Go back home
      </Link>
    </main>
  )
}
