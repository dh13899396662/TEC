//attendance.js
//获取应用实例
const app = getApp()

Page({
  data: {
    noData: true,
    // 渲染测试数据
    classInfo: {
      id: '111',
      title: '儿童美术基础培训课程',
      name: '幼儿美术初级班一班',
      time: '10:00-12:00',
      total: '16'
    },
    studentList: [{
      id: '1',
      name: '张健康',
      sex: '1',
      status: '1'
    }, {
      id: '2',
      name: '李柯惠',
      sex: '2',
      status: '2'
    }, {
      id: '3',
      name: '王东风',
      sex: '1',
      status: '1'
    }, {
      id: '4',
      name: '李建航',
      sex: '1',
      status: '1'
    }, {
      id: '5',
      name: '刘立军',
      sex: '1',
      status: '1'
    }]
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '考勤'
    })
  }
})