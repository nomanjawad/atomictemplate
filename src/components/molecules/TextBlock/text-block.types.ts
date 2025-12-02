/*
 * text-block.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { BaseTextProps, ContentProps } from "@atoms"

export interface TextBlockOption {
  flex?: Omit<ContentProps, "children">
  title?: Omit<BaseTextProps, "children">
  subTitle?: Omit<BaseTextProps, "children">
  description?: Omit<BaseTextProps, "children">
}

export interface TextBlockProps {
  title: string | number
  subTitle?: string
  description?: string
  options?: TextBlockOption
}
