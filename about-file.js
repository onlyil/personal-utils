
/**
 * download file
 *
 * @param {object(blob)} blob
 * @param {string} filename
 */
function downloadBlobFile(blob, filename) {
  const objUrl = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  if ('download' in a) {
    document.body.appendChild(a)
    a.href = objUrl
    a.download = filename
    a.click()
    window.URL.revokeObjectURL(objUrl)
    document.body.removeChild(a)
    return
  }
  // IE
  navigator.msSaveBlob(blob, filename)
}

/**
 * Data URL to Blob
 *
 * @param {string} dataurl
 * @returns {object(blob)}
 */
function DataURL2Blob(dataurl) {
  const matches = dataurl.match(/^data:(\w+\/\w+)?(;base64)?,(\S+)$/)
  const mediatype = matches[1] || 'text/plain'
  const binaryStr = atob(matches[3])
  const typedArr = new Uint8Array(binaryStr.length)
  for (let i = 0; i < binaryStr.length; i++) {
    typedArr[i] = binaryStr.charCodeAt(i)
  }
  return new Blob([typedArr], { type: mediatype })
}

/**
 * blob to Data URL
 *
 * @param {object(blob)} blob
 * @param {function} cb
 */
function Blob2DataURL(blob, cb) {
  const reader = new FileReader()
  reader.addEventListener('load', function () {
    cb(this.result)
  })
  reader.readAsDataURL(blob)
}
