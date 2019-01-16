
/**
 * format date from Date.getDate()
 * eg. 2 -> '02'; 12 -> '12'
 * @param {number} day
 * @returns {string}
 */
function formatDay(day) {
  return day.toString().length < 2 ? '0' + day : '' + day
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

/**
 * get formated date string
 *
 * @param {*} date date obj
 * @param {*} fmt format string
 * @returns formated date string
 */
function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  let oReg = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let key in oReg) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = oReg[key] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : addZero(str))
    }
  }
  return fmt
}

function addZero (str) {
  return ('00' + str).substr(str.length)
}

export default {
  formatDay,
  formatMonth,
  getFormatDate,
  getTheMonthDaysNum,
  getWeekOfDate,
  getNextDate,
  getLastDate,
  formatDate,
}
