/*
 * infoCard.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseTextProps } from "@atoms"
import { ImageSource } from "@types"
import { ReactNode } from "react"

export interface ImageSectionOption {
  src?: ImageSource
  alt?: string
  className?: string
  width?: number | string
  height?: number | string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  priority?: boolean
}

export interface TextSectionOption {
  title?: string
  description?: string
  subTitle?: string
  className?: string
  titleProps?: Omit<BaseTextProps, "children">
  subTitleProps?: Omit<BaseTextProps, "children">
  descriptionProps?: Omit<BaseTextProps, "children">
}

export interface LinkOption {
  href: string
  type: "wrap" | "button"
  buttonText?: string // Required if type is "button"
}

export interface InfoCardOption {
  imageSection?: ImageSectionOption
  textSection?: TextSectionOption
  link?: LinkOption
}

export interface InfoCardProps {
  children?: ReactNode
  options?: InfoCardOption
}
