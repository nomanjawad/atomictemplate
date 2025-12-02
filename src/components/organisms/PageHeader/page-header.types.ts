/*
 * page-header.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ReactNode } from "react"
import type { Banner } from "@validations"

export interface PageHeaderProps {
  banner?: Banner
  isVisibleBackground?: boolean
  isVisibleDefault?: boolean
  backgroundImage?: string
  children?: ReactNode
  height?: "large" | "default" | "medium"
  childContainerClass?: string
}
