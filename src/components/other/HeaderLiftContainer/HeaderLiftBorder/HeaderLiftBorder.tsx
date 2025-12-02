/*
 * HeaderLiftBorder.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import styles from "./header-lift-border.module.css"

export interface HeaderLiftBorderPros {
  height?: number | string
  borderColor?: string
}

export default function HeaderLiftBorder({
  height,
  borderColor,
}: HeaderLiftBorderPros) {
  return (
    <div
      className={styles.header_lift_border_container}
      style={{ height: height, borderColor: borderColor }}
    />
  )
}
