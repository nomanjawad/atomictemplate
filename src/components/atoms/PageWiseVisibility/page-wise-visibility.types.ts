/*
 * page-wise-visibility.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ReactNode } from "react"

export interface PathWisePageHeaderProps {
  pathList: string[]
  variant: "include" | "exclude"
  children: ReactNode
}
