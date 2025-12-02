/*
 * index.js
 * Created by Noman Jawad
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

import headingRules from "./heading-rules.mjs"
import fileNamingRules from "./file-naming-rules.mjs"
import componentHookNameMatch from "./component-hook-name-match.mjs"
import requireIndexFile from "./require-index-file.mjs"

export const rules = {
  "heading-rules": headingRules,
  "file-naming-rules": fileNamingRules,
  "component-hook-name-match": componentHookNameMatch,
  "require-index-file": requireIndexFile,
}
