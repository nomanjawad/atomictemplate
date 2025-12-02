/*
 * IconWithLabel.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseTextProps, ContentProps } from "@atoms"
import { ImageSource } from "@types"
import { LucideIcon } from "lucide-react"

export interface IconWithLabelProps {
  image?: ImageSource
  icon?: LucideIcon
  label: string
  width?: number
  height?: number
  imgAltText?: string
  isVisibleIconWrapper?: boolean
  iconWrapperBackgroundColor?: string
  iconColor?: string
  flexOption?: Omit<ContentProps, "children">
  labelOption?: Omit<BaseTextProps, "children">
  href?: string
}
