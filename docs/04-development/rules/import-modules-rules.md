# custom-rules/import-module-rules

## Keep import module clean by sequencing and seating

### What it checks

- Sequence wise import accordingly module type
  (`native` -> `third-party` -> `custom-module` -> `styles`)
- spacing: left one line gap after every module
- group:type wise group modules
- decorate smaller line to lager line for batter view

Good

```typescript
import React, { UseEffect } from "react"

import {zod} fom "zod"
import { framer } from "framer-motion"

import {Nav, Footer} from "@layouts"
import { Button, BaseText } from "@atoms"

import styles from "component.module.css"
```

Bad

```typescript
import { framer } from "framer-motion"
import {zod} fom "zod"
import { Button, BaseText } from "@atoms"
import {Nav, Footer} from "@layouts"
import styles from "component.module.css"
import React, { UseEffect } from "react"
```

### Config (defaults shown)

```js

```
