/*
 * to-sentence-case.ts
 * Created by Noman Jawad
 */

export default function toSentenceCase(text: string): string {
  if (!text) return ""
  text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  text = text.replaceAll("-", " ")

  return text
}
