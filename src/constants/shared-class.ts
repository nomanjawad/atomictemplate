/*
 * shared-class.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

export const sharedClass = {
  LINK: "link",
  CONTENT: "content",
  STICKY: "sticky",
  FIXED: "fixed",
  GLASS_EFFECT: "glass_morphism_effect",
  CENTER_TEXT: "center_text",
}

export type SharedClass = keyof typeof sharedClass
