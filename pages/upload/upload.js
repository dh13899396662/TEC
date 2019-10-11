//upload.js
//获取应用实例
const app = getApp()

Page({
  data: {
    team: '0',
    teamData: ['点击选择班级', '第一个班级', '第二个班级', '第三个班级'],
    student: '0',
    studentData: ['请先选择班级', '张三', '李四'],
  },
  teamChange: function (e) {
    this.setData({
      team: e.detail.value
    })
  },
  studentChange: function (e) {
    this.setData({
      student: e.detail.value
    })
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '上传风采'
    })
  }
})