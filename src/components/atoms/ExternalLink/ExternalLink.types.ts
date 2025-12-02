/*
 * ExternalLink.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import React from "react"

export interface ExternalLinkProps {
  href: string
  className?: string
  isTrusted?: boolean
  rel?: string | string[]
  children: React.ReactNode
}
