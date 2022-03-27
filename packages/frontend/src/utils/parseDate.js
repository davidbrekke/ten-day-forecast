const parseDate = (date) =>
  `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}`

const getDayOfWeek = (date) => new Date(date).getDay()

export { parseDate, getDayOfWeek }
