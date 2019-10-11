//usercenter.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '',
      tag: '艺术培训  / 绘画培训'
    }
  },
  // 前往完善信息
  toUserInfo: function (e) {
    wx.navigateTo({
      url: '../userinfo/userinfo'
    })
  },
  // 前往课程表
  toTimeTable: function (e) {
    wx.navigateTo({
      url: '../timetable/timetable'
    })
  },
  // 前往点评
  toComment: function (e) {
    wx.navigateTo({
      url: '../comment/comment'
    })
  },
  // 前往风采
  toAtlas: function (e) {
    wx.navigateTo({
      url: '../atlas/atlas'
    })
  },
  // 课程平台
  toSystem: function () {
    wx.showToast({
      title: '平台搭建中，敬请期待',
      icon: 'none',
      duration: 2000
    })
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '我的'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#3dad68'
    })
  }
})