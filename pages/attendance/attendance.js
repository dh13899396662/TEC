//attendance.js
//获取应用实例
import * as api from '../../api/index.js'
import * as xx from '../../common/wx.js'
const app = getApp()

Page({
  data: {
    noData: true,
    // 渲染测试数据
    classInfo: {
      id: '',
      title: '',
      name: '',
      time: '',
      total: 0
    },
    studentList: []
  },
  onShow: function() {
      this.getMyCouplan()
    wx.setNavigationBarTitle({
      title: '考勤'
    })
  },
  getMyCouplan () {
      api.getMyCouplan().then(res => {
          if (res.data.retCode === xx.ERRCODE.OK) {
              this.setData({
                  classInfo: res.data.retMsg
              })
              api.queryKaoQins({ couplan_id: res.data.retMsg.course_id}).then(ret => {
                  console.log(ret)
                  if (ret.data.retCode === xx.ERRCODE.OK) {
                      console.log('进入')
                      let total = 'classInfo.total'
                      this.setData({
                          'classInfo.total': ret.data.retMsg.length,
                          studentList: ret.data.retMsg
                      })
                  }
              })
              console.log(res)
          }
      })
  },
    mark (e) {
        console.log(e.currentTarget.dataset.index)
        let index = e.currentTarget.dataset.index
        let info = this.data.studentList[index]
        let data = { signuser_id: info.user_id, couplan_id: info.course_id }
        console.log(info)
        api.addKaoQin(data).then(res => {
            if (res.data.retCode === xx.ERRCODE.OK) {
                xx.toast('签到成功', () => {
                    this.getMyCouplan()
                })
            } else xx.toast(res.data.retMsg)
        })
    },
    cancle (e) {
        console.log('取消')
        let index = e.currentTarget.dataset.index
        let info = this.data.studentList[index]
        console.log(info)
        if (info.kq_cardno) {
            xx.toast('机器签到，无法取消')
            return
        }
        let data = { signuser_id: info.user_id, couplan_id: info.course_id }
        console.log(info)
        api.calcleKaoQin(data).then(res => {
            if (res.data.retCode === xx.ERRCODE.OK) {
                xx.toast('取消签到成功', () => {
                    this.getMyCouplan()
                })
            }
        })
    }
})