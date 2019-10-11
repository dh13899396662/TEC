//index.js
//获取应用实例
import * as api from '../../api/index.js'

const app = getApp()

Page({
  data: {
    // 渲染测试数据
    noticeParams: {
      pageNumber: 1,
      pageSize: 20,
      sortField: '',
      sortMethord: 'asc'
    },
    noticeData: [{
      id: '1',
      title: '70年,教育与共和国砥砺同行'
    }, {
      id: '2',
      title: '以务实举措抓好主题教育 烟台市将问政烟台作为重要抓手'
    }],
    statistics: {
      total: '8',
      hours: '124'
    },
    curriculumData: [{
      id: '1',
      name: '幼儿学前艺术培训班',
      total: '12',
      hours: '21'
    }, {
      id: '2',
      name: '儿童音乐美声课程班',
      total: '14',
      hours: '16'
    }, {
      id: '3',
      name: '绘画艺术进阶版',
      total: '8',
      hours: '9'
    }]
  },
  // 前往公告列表
  toNoticeList: function() {
    wx.navigateTo({
      url: '../noticelist/noticelist'
    })
  },
  // 前往公告详情
  toNoticeDetail: function(e) {
    let id = e.target.dataset.id;
    console.log('当前公告ID：' + id)
    wx.navigateTo({
      url: '../noticedetail/noticedetail'
    })
  },
  // 前往课时列表
  toLessonList: function (e) {
    wx.navigateTo({
      url: '../lessonlist/lessonlist'
    })
  },
  // 前往课时详情
  toLessonDetail: function (e) {
    wx.navigateTo({
      url: '../lessondetail/lessondetail'
    })
  },
  onLoad: function() {
    this.queryNotices()
  },
  queryNotices () {
    api.notices(this.data.noticeParams)
  }
})