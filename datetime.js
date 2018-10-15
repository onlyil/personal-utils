
/**
 * format date from Date.getDate()
 * eg. 2 -> '02'; 12 -> '12'
 * @param {number} date
 * @returns {string}
 */
function formatDate(date) {
  return date.toString().length < 2 ? '0' + date : '' + date
}

/**
 * format month from Date.getDate()
 *
 * @param {number} month
 * @returns {String}
 */
function formatMonth(month) {
  month += 1
  return month.toString().length < 2 ? '0' + month : '' + month
}

/**
 * 
 * 获得 YYYY-MM-DD
 * @param {date object} date
 * @returns {string} 'YYYY-MM-DD'
 */
function getFormatDate (date, separator = '-') {
  let year = date.getFullYear()
  let month = formatMonth(date.getMonth() + 1)
  let day = formatDate(date.getDate())
  return Array.of(year, month, day).join(separator)
}

/**
 * 
 * 获得指定月天数
 * @param {string} year
 * @param {string} month
 * @returns {number}
 */
function getTheMonthDaysNum(year, month) {
  return new Date(year, month, 0).getDate()
}

/**
 * 
 * 获得指定日是周几
 * @param {string} year
 * @param {string} month 1-12
 * @param {string} day 1-31
 * @returns {number} 1-7
 */
function getWeekOfDate(year, month, day) {
  let week = new Date(year, month - 1, day).getDay()
  return week === 0 ? 7 : week
}

/**
 * get next date string
 *
 * @param {string} date
 * @returns {string}
 */
function getNextDate(date) {
  let dateObj = new Date(date),
      year = dateObj.getFullYear(),
      month = dateObj.getMonth(),
      day = dateObj.getDate()
  let nextDateObj = new Date(year, month, day + 1)
  return getFormatDate(nextDateObj)
}

/**
 * get last date string
 *
 * @param {string} date
 * @returns {string}
 */
function getLastDate(date) {
  let dateObj = new Date(date),
    year = dateObj.getFullYear(),
    month = dateObj.getMonth(),
    day = dateObj.getDate()
  let lastDateObj = new Date(year, month, day - 1)
  return getFormatDate(lastDateObj)
}
