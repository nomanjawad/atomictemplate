/*
 * AnimatedToggleArrow.types.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

export interface AnimatedToggleArrowProps {
  shouldToggled: boolean
  rotate?: number
  color?: string
  clickedColor?: string
  onToggle?: () => void
}
