import moment from "moment"

/**
 * Returns the date as a readable string.
 * @param {Date} date The target date to compare.
 * @returns {string} Today, yesterday, x day before, x months before or DD/MM/YYYY.
 */
export default function getReadableDate(date: Date): string {
  const now = moment()
  const createdAt = moment(date)
  const diff = now.diff(createdAt, "days")

  if (diff === 0) return "Today"
  else if (diff === 1) return "Yesterday"
  else if (diff <= 30) return `${diff} days ago`
  else if (diff >= 30 && diff <= 90) return `${Math.floor(diff / 30)} month ago`
  else return createdAt.format("DD/MM/YYYY")
}
