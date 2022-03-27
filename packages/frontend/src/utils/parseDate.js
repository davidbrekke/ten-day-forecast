const parseDate = (date) =>
  `${new Date(date).getMonth()}/${new Date(date).getDate()}`

const getDayOfWeek = (date) => new Date(date).getDay()

export { parseDate, getDayOfWeek }
