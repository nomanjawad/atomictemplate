/*
 * global.d.ts
 * Created by Noman Jawad
 * Copyright (c) 2025 skytechSolutions
 * All rights reserved
 */

// global.d.ts

import type { StaticImageData } from "next/image"

// Images can be either:
// 1. Static imports: import { logoImage } from "@images" (returns StaticImageData)
// 2. String URLs: "https://placehold.co/..." or "/path/to/image.jpg"
export type ImageSource = string | StaticImageData
