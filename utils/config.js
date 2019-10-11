const config = {
  request: {
    baseURL: 'http://orangepi.cross.echosite.cn',
    header: 'application/json',
    Authorization: wx.getStorageSync('token'),
    invaidToken: '/pages/login/login'
  }
}
export default config