//timetable.js
//获取应用实例
import * as api from '../../api/index.js'
import * as xx from '../../common/wx.js'
const app = getApp()

Page({
  data: {
    date: '',
    month: '',
    year: '',
    starDate: '2018-01',
    endDate: '',
    weekIndex: [
      '第一周',
      '第二周',
      '第三周',
      '第四周',
      '第五周'
    ],
    activeIndex: 0,
    // listData: [{
    //   week: '周二',
    //   day: '01',
    //   lesson: [{
    //     name: '绘画培训',
    //     team: '幼儿绘画启蒙一班',
    //     time: '10:00-11:30',
    //     status: '3'
    //   }, {
    //     name: '绘画培训',
    //     team: '幼儿绘画启蒙二班',
    //     time: '16:00-18:00',
    //     status: '3'
    //   }]
    // }]
    listData: []
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
    this.getDate()
  },
  getDate () {
    let date = { year: this.data.year, month: this.data.month, weekIndex: this.data.activeIndex + 1}
    xx.load()
    api.getDate(date).then(res => {
      if (res.data.retCode === xx.ERRCODE.OK) {
        this.getCourses(res)
      }
    })
  },
  getCourses(res) {
    api.myCourses({
      startDate: res.data.retMsg.startDay,
      endDate: res.data.retMsg.endDay
    }).then(ret => {
      console.log(ret)
      if (ret.data.retCode === xx.ERRCODE.OK) {
        let list = ret.data.retMsg.map(item => {
          if (item.class_startTime) {
            item.class_startTime = item.class_startTime.slice(-2)
          }
          if (item.plan_zone) {
            item.course_state = this.getCourseState(item)
          }
          return item
        })
        this.setData({
          listData: list
        })
        xx.hide()
      }
    })
  },
  getCourseState (item) {
    let now = new Date()
    let year = Number(now.getFullYear())
    let month = Number(now.getMonth()) + 1
    let day = Number(now.getDate())

    month < 10 ? month = `0${month}` : month
    day < 10 ? day = `0${day}` : day
    let today = `${year}-${month}-${day}`
    
    let hour = Number(now.getHours())
    hour === 0 ? hour = 24 : hour
    let startHour = Number(item.plan_zone.slice(0, 2))
    let endHour = Number(item.plan_zone.slice(6, 8))
    let startYear = Number(item.plan_date.slice(0, 4))
    let startMonth = Number(item.plan_date.slice(5, 7))
    let startDay = Number(item.plan_date.slice(-2))

    if (hour < startHour) item.course_state = 0
    if (startHour <= hour && hour < endHour && today === item.plan_date) item.course_state = 1
    if (hour > endHour && today === item.plan_date) item.course_state = 2
    if (year > startYear || month > startMonth || day > startDay) {
      item.course_state = 2
    }
    return item.course_state
  },
  getActive (e) {
    console.log(e.currentTarget.dataset.index)
    this.setData({
      activeIndex: e.currentTarget.dataset.index
    })
    this.getDate()
  },
  _kaoQin () {
    api.kaoQin()
  }
})