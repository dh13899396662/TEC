//app.js
import * as api from './api/index.js'
import * as xx from './common/wx.js' 
App({
  onLaunch: function () {
    this._getToken()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
    _getToken() {
        let token = wx.getStorageSync('token')
        if (!token) {
            wx.reLaunch({
                url: '/pages/login/login'
            })
        } else this.teacherChecked()
    },
    teacherChecked() {
        console.log('teacherChecked')
        api.teacherCheck().then(res => {
            console.log(res)
            if (res.data.retCode === '000001') {
                xx.reLaunch('/pages/teacher-check/teacher-check')
            } else {
                xx.reLaunch('/pages/index/index')
            }
        }).catch(ret => console.log(ret))
    },
  globalData: {
    userInfo: null,
      userInfo: null,
      requestUrl: "http://orangepi.cross.echosite.cn/jiaofei/wxa", //体验版接口地址等
      // requestImgurl: "http://henji409.cross.echosite.cn/mingpian/wxa/",
      // appid: "wxe3b16e022e664feb",
      user: null,
      sessionId: '',
      isNew: true,
      showLogin: false,
  }
})