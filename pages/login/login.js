//index.js
//获取应用实例
import * as api from '../../api/index.js'
import * as xx from '../../common/wx.js' 

Page({
    data: {
        userInfo: {},
        skipUrl: '',
        systemType: {}
    },
    userInfoHandler(e) {
        wx.showLoading({
            title: '获取微信授权中',
            mask: true
        })
        this.setData({
            userInfo: e.detail.userInfo
        })
        if (!this.data.userInfo) {
            wx.showToast({
                title: '您拒绝了授权请求请重新获取',
                icon: 'none',
            })
        } else {
            this._login()
        }
    },
    _login() {
        let that = this
        wx.login({
            success(res) {
                if (res.code) {
                    let obj = {}
                    console.log(res)
                    obj.code = res.code
                    that._getToken(obj)
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        });
    },
    _getToken(obj) {
        const datas = {
            code: obj.code
        }
        api.getToken(datas).then(res => {
            if (res.data.sessionId) {
                xx.hide()
                xx.setCookie('token', res.data.sessionId)
                res.data.isNew && this.infoCheck()
                !res.data.isNew && this.teacherCheck()
            } else {
                xx.toast2(res.data.msg)
            }
        })
    },
    infoCheck () {
        let that = this
        wx.getUserInfo({
            success: function (res) {
                console.log(res)
                let data = { signature: res.signature, rawData: res.rawData, iv: res.iv, encryptedData: encodeURIComponent(res.encryptedData) }
                api.getUnionId(data).then(res => that.teacherCheck()).catch(ret => {throw Error(ret)
})
            }
        })
    },
    teacherCheck () {
        api.teacherCheck().then(res => {
          if (res.data.retCode === xx.ERRCODE.NO_ATTEST) {
            xx.reLaunch('/pages/teacher-check/teacher-check')
          } else {
            console.log(11)
            xx.reLaunch('/pages/index/index')
          }
        })
    }
})