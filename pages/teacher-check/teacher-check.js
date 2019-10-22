//userinfo.js
//获取应用实例
import * as api from '../../api/index.js'
import * as xx from '../../common/wx.js'
const app = getApp()

Page({
    data: {
        name: '',
        password: ''
    },
    onLoad: function () {
        wx.setNavigationBarTitle({
            title: '完善信息'
        })
    },
    nameInput (e) {
        this.setData({
            name: e.detail.value
        })
    },
    numberInput(e) {
        this.setData({
            password: e.detail.value
        })
    },
    release () {
      api.teacherCertificat({ name: this.data.name, passwd: this.data.password }).then(res => {
        xx.toast(res.data.retMsg)
        if (res.data.retCode === xx.ERRCODE.OK) {
          xx.barTo('/pages/index/index')
        }
      })
    }
})