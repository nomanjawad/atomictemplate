/*
 * validator.ts
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import { z } from "zod"

export { z as validator }

// Image validator for static image imports
// All images are exported from public/images/index.ts as string constants
export const imageValidator = z.string()
