//lessondetail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    teamInfo: {
      name: '声乐中音练习培训',
      title: '青少年儿童声乐练习进阶班',
      time: '15',
      total: '23'
    },
    lessonData: [{
      date: '2019年09月30日',
      list: [{
        time: '10:00 - 11:30',
        total: '1.5'
      }, {
        time: '16:00 - 18:00',
        total: '2'
      }]
    }, {
      date: '2019年09月30日',
      list: [{
        time: '10:00 - 11:30',
        total: '1.5'
      }, {
        time: '16:00 - 18:00',
        total: '2'
      }]
    }, {
      date: '2019年09月30日',
      list: [{
        time: '10:00 - 11:30',
        total: '1.5'
      }, {
        time: '16:00 - 18:00',
        total: '2'
      }]
    }, {
      date: '2019年09月30日',
      list: [{
        time: '10:00 - 11:30',
        total: '1.5'
      }, {
        time: '16:00 - 18:00',
        total: '2'
      }]
    }]
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '课时详情'
    })
  }
})