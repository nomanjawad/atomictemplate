/*
 * require-index-file.mjs
 * Created by Noman Jawad
 * skytech_solutions-frontend-nextJs-typescript
 * Copyright (c) 2025 noman_jawad
 * All rights reserved
 */

//Enforce presence of index.ts/tsx in component and hook folders.

import fs from "fs"
import path from "path"

function toPosix(p) {
  return p.split(path.sep).join("/")
}

const rule = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Require index.ts/tsx in selected folders (components/hooks)",
      recommended: false,
    },
    schema: [
      {
        type: "object",
        properties: {
          targets: {
            type: "array",
            items: { type: "string" },
          },
          exts: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const filename = context.getFilename()
    if (!filename || filename === "<text>") return {}

    const opt = context.options?.[0] || {}
    const targets = opt.targets || ["src/components", "src/hooks"]
    const exts = opt.exts || [".ts", ".tsx"]

    const relPath = toPosix(filename)
    const dir = path.posix.dirname(relPath)
    const base = path.posix.basename(relPath)

    // Skip index files themselves
    if (/^index\.[a-z]+$/i.test(base)) return {}

    // Only check inside targeted folders
    const applies = targets.some((t) => dir.includes(toPosix(t)))
    if (!applies) return {}

    function hasIndexFile(d) {
      try {
        const entries = fs.readdirSync(d)
        return entries.some((name) => {
          return exts.some((e) => name === `index${e}`)
        })
      } catch {
        return false
      }
    }

    return {
      "Program:exit"(node) {
        if (!hasIndexFile(dir)) {
          context.report({
            node,
            message: `Folder "${dir}" is missing a barrel index (index.ts or index.tsx)`,
          })
        }
      },
    }
  },
}

export default rule
