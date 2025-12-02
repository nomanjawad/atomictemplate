/*
 * formateDate.ts
 * Created by Noman Jawad
 */

export default function formateDate(rawDate: string) {
  const date = new Date(rawDate)
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })

  return formattedDate
}
