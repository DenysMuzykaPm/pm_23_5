const date_1 = new Date('1/2/2023')
const date_2 = new Date('1/5/2023')

function dateDifference(date1, date2) {
  // Get 1 day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24

  const date1Ms = date1.getTime()
  const date2Ms = date2.getTime()
  let differenceMs = date2Ms - date1Ms
  const days = Math.round(differenceMs / oneDay)
  const weeks = (days / 7).toFixed(2)
  const seconds = days * 24 * 60 * 60
  return `days: ${days}, weeks: ${weeks}, ${seconds}`
}

console.log(dateDifference(date_1, date_2))
