/*
 * customLog.ts
 * Created by Noman Jawad
 */

// utils/customLog.ts
const isDev = process.env.NEXT_PUBLIC_NODE_ENV === "development"

export function customLog(...args: unknown[]): void {
  if (isDev) {
    console.log(...args)
  }
}

export default customLog
