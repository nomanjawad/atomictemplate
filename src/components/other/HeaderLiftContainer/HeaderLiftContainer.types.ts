/*
 * HeaderLiftContainer.tsx
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { ReactNode } from "react"

import { SectionProps, ContainerProps, ContentProps } from "@atoms"
import { HeaderLiftBorderProps } from "./HeaderLiftBorder"

export interface HeaderLiftOptions {
  border?: HeaderLiftBorderProps
  section?: Omit<SectionProps, "children">
  container?: Omit<ContainerProps, "children">
  content?: Omit<ContentProps, "children">
}

export interface HeaderLiftContainerProps {
  children: ReactNode
  borderColor?: string
  options?: HeaderLiftOptions
}
