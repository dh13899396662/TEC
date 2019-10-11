//lessonlist.js
//获取应用实例
const app = getApp()

Page({
  data: {
    teamData: [
      '全部班级', '第一个班级', '第二个班级', '第三个班级', '第四个班级'
    ],
    index: 0,
    listData: [{
      id: '1',
      name: '声乐中音练习培训',
      title: '幼儿绘画启蒙一班',
      total: 24,
      time: 15
    }, {
      id: '1',
      name: '绘画培训',
      title: '青少年儿童声乐练习进阶班',
      total: 24,
      time: 15
    }, {
      id: '1',
      name: '声乐中音练习培训',
      title: '幼儿绘画启蒙一班',
      total: 24,
      time: 15
    }, {
      id: '1',
        name: '班级名称绘画培训占位长度内容很长很长',
      title: '青少年儿童声乐练习进阶班',
      total: 24,
      time: 15
    }, {
      id: '1',
      name: '声乐中音练习培训',
      title: '幼儿绘画启蒙一班',
      total: 24,
      time: 15
    }]
  },
  // 前往课时详情
  toLessonDetail: function (e) {
    wx.navigateTo({
      url: '../lessondetail/lessondetail'
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '课时统计'
    })
  }
})