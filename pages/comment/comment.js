//comment.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showDialog: false,
    team: '0',
    teamData: ['全部班级', '第一个班级', '第二个班级', '第三个班级'],
    time: '0',
    timeData: ['最新时间', '倒序', '正序'],
    type: '2',
    typeData: ['全部', '已回复', '待回复'],
    listData: [{
      name: '艾米丽',
      avator: '../../static/images/avator2.jpg',
      time: '2019/10/01 12:37',
      cont: '老师的课非常好，详细、全名、专业~而且老师对待学生也非常的有耐心，真心感谢老师的授课！',
      reply: ['非常感谢您对我课程的评价~我会继续努力，提供更好的教学课程！']
    }, {
      name: '艾米丽',
      avator: '../../static/images/avator2.jpg',
      time: '2019/10/01 12:37',
      cont: '老师的课非常好，详细、全名、专业~而且老师对待学生也非常的有耐心，真心感谢老师的授课！',
      reply: []
    }, {
      name: '艾米丽',
      avator: '../../static/images/avator2.jpg',
      time: '2019/10/01 12:37',
      cont: '老师的课非常好，详细、全名、专业~而且老师对待学生也非常的有耐心，真心感谢老师的授课！',
      reply: []
    }, {
      name: '艾米丽',
      avator: '../../static/images/avator2.jpg',
      time: '2019/10/01 12:37',
      cont: '老师的课非常好，详细、全名、专业~而且老师对待学生也非常的有耐心，真心感谢老师的授课！',
      reply: ['非常感谢您对我课程的评价~我会继续努力，提供更好的教学课程！']
    }]
  },
  teamChange: function (e) {
    this.setData({
      team: e.detail.value
    })
  },
  timeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  typeChange: function (e) {
    this.setData({
      type: e.detail.value
    })
  },
  // 回复
  replyStar: function () {
    this.setData({
      showDialog: true
    })
  },
  closeDialog: function () {
    this.setData({
      showDialog: false
    })
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '课程点评'
    })
  }
})