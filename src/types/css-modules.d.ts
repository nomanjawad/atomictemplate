/*
 * css-modules.d.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

/**
 * Benefits of this declaration:
 * No “Cannot find module '*.module.css'” errors.
 * Autocomplete on styles.className.
 * Can be use standard ES imports instead of require.
 */
declare module "*.module.css" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.css" {}
