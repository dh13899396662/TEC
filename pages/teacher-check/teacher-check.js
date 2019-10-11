//userinfo.js
//获取应用实例
import * as api from '../../api/index.js'
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
        api.teacherCertificat({ name: this.data.name, passwd: this.data.password}).then(res => console.log(res))
    }
})