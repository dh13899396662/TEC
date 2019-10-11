// 时间戳转时间 2018-10-11 16:33:00
export function transform13Time(timestamp, type) {
  // var date = new Date(timestamp * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var date = new Date(timestamp)
  var Y = date.getFullYear() + '-'
  var M = padStarta(date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = padStarta(date.getDate())
  var h = ' ' + padStarta(date.getHours()) + ':'
  var m = padStarta(date.getMinutes()) + ':'
  var s = padStarta(date.getSeconds())
  // if (m <= 10) {
  //   m = '0' + m
  // }
  // var s = date.getSeconds()
  if (!type) { // 不传返回年月日
    return Y + M + D
  } else {
    return Y + M + D + h + m + s
  }
}
function padStarta(str) {
  str = str.toString()
  str = str.padStart(2, '0')
  // console.log(str)
  return str
}
// export function transform13Times(timestamp, type) {
//   // var date = new Date(timestamp * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
//   var date = new Date(timestamp)
//   var Y = date.getFullYear() + '-'
//   var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
//   var D = date.getDate()
//   var h = ' ' + date.getHours() + ':'
//   var m = date.getMinutes() + ':'
//   var s = date.getSeconds()
//   // console.log(typeof m)
//   if (m <= 10) {
//     m = '0' + m
//   }
//   // var s = date.getSeconds()
//   if (!type) { // 不传返回年月日
//     return Y + M + D
//   } else {
//     return Y + M + D + h + m + s
//   }
// }
