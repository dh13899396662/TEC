//timetable.js
//获取应用实例
import * as api from '../../api/index.js'
const app = getApp()

Page({
  data: {
    date: '',
    month: '',
    year: '',
    starDate: '2018-01',
    endDate: '',
    listData: [{
      week: '周二',
      day: '01',
      lesson: [{
        name: '绘画培训',
        team: '幼儿绘画启蒙一班',
        time: '10:00-11:30',
        status: '3'
      }, {
        name: '绘画培训',
        team: '幼儿绘画启蒙二班',
        time: '16:00-18:00',
        status: '3'
      }]
    }, {
      week: '周三',
      day: '02',
      lesson: [{
        name: '绘画培训',
        team: '幼儿绘画启蒙一班',
        time: '10:00-11:30',
        status: '2'
      }, {
        name: '声乐中音练习培训',
        team: '青少年儿童声乐练习进阶班',
        time: '16:00-18:00',
        status: '1'
      }]
      }, {
        week: '周四',
        day: '03',
        lesson: [{
          name: '声乐中音练习培训',
          team: '青少年儿童声乐练习进阶班',
          time: '10:00-11:30',
          status: '1'
        }, {
          name: '绘画培训',
          team: '幼儿绘画启蒙二班',
          time: '16:00-18:00',
          status: '1'
        }]
      }, {
        week: '周五',
        day: '04',
        lesson: [{
          name: '声乐中音练习培训',
          team: '青少年儿童声乐练习进阶班',
          time: '10:00-11:30',
          status: '1'
        }, {
          name: '绘画培训',
          team: '幼儿绘画启蒙二班',
          time: '16:00-18:00',
          status: '1'
        }]
      }, {
        week: '周六',
        day: '05',
        lesson: [{
          name: '声乐中音练习培训',
          team: '青少年儿童声乐练习进阶班',
          time: '10:00-11:30',
          status: '1'
        }]
      }]
  },
  bindDateChange: function(e) {
    let date = e.detail.value;
    this.setData({
      date: date,
      month: date.substr(-2),
      year: date.substr(0, 4)
    })
  },

  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '课程表'
    })
    this._kaoQin()
    let date = new Date(),
      m = date.getMonth() + 1,
      month = m > 9 ? m : '0' + m,
      year = date.getFullYear();
    this.setData({
      date: year + '-' + month,
      month: month,
      year: year,
      endDate: year + '-' + month
    })
  },
  _kaoQin () {
    api.kaoQin()
  }
})