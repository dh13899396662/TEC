//atlas.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showDialog: false,
    team: '0',
    teamData: ['全部班级', '第一个班级', '第二个班级', '第三个班级'],
    listData: [{
      team: '艺术培训一班',
      path: '../../static/images/atlas.jpg',
      name: '艾米丽',
      sex: '2',
      time: '2019年10月01日'
    }, {
      team: '艺术培训一班',
      path: '../../static/images/atlas.jpg',
      name: '艾米丽',
      sex: '2',
      time: '2019年10月01日'
    }, {
      team: '艺术培训一班',
      path: '../../static/images/atlas.jpg',
      name: '艾米丽',
      sex: '2',
      time: '2019年10月01日'
    }, {
      team: '艺术培训一班',
      path: '../../static/images/atlas.jpg',
      name: '艾米丽',
      sex: '2',
      time: '2019年10月01日'
    }, {
      team: '艺术培训一班',
      path: '../../static/images/atlas.jpg',
      name: '艾米丽',
      sex: '2',
      time: '2019年10月01日'
    }, {
      team: '艺术培训一班',
      path: '../../static/images/atlas.jpg',
      name: '艾米丽',
      sex: '2',
      time: '2019年10月01日'
    }]
  },
  teamChange: function(e) {
    this.setData({
      team: e.detail.value
    })
  },
  // 前往上传
  toUpload: function() {
    wx.navigateTo({
      url: '../upload/upload'
    })
  },
  // 查看管理
  seeAtlas: function () {
    this.setData({
      showDialog: true
    })
  },
  closeDialog: function () {
    this.setData({
      showDialog: false
    })
  },
  // 删除
  deleteAtlas: function () {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除这张图片吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.setData({
            showDialog: false
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '学生风采'
    })
  }
})