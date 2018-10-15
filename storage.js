
/**
 * get cookie
 *
 * @param {string} cname
 * @returns {string}
 */
function getCookie(cname) {
  const name = cname + '='
  const cookeArr = document.cookie.split(';')
  for (let i = 0; i < cookeArr.length; i++) {
    let cookieItem = cookeArr[i].trim()
    if (cookieItem.indexOf(name) === 0) return cookieItem.substring(name.length, cookieItem.length)
  }
  return ''
}

/**
 * set cookie
 *
 * @param {string} cname
 * @param {string} cvalue
 * @param {number} [exdays=7]
 */
function setCookie(cname, cvalue, exdays = 7) {
  let date = new Date()
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + date.toGMTString()
  document.cookie = cname + '=' + cvalue + '; ' + expires
}
