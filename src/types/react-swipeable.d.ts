/*
 * react-swipeable.d.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

declare module "react-swipeable" {
  export interface SwipeableConfig {
    onSwipedLeft?: () => void
    onSwipedRight?: () => void
    trackMouse?: boolean
    preventDefaultTouchmoveEvent?: boolean
    preventScrollOnSwipe?: boolean
    [key: string]: unknown
  }

  export interface SwipeableHandlers {
    [key: string]: unknown
  }

  export function useSwipeable(config: SwipeableConfig): SwipeableHandlers
}
