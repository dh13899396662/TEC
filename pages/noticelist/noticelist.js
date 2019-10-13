//noticelist.js
//获取应用实例
import * as xx from '../../common/wx.js'
const app = getApp()

Page({
  data: {
    listData: [{
      id: '1',
      title: '70年,教育与共和国砥砺同行',
      date: '2019年10月01日 10:00'
    }, {
        id: '2',
        title: '家国命运的见证 | 万里边疆教育行',
        date: '2019年10月01日 10:00'
      }, {
        id: '3',
        title: '以务实举措抓好主题教育 烟台市将问政烟台作为重要抓手',
        date: '2019年10月01日 10:00'
      }, {
        id: '4',
        title: '国家教育事业发展“十三五”规划专家解读',
        date: '2019年10月01日 10:00'
      }]
  },
  // 前往详情
  toNoticeDetail: function (e) {
      let index = e.currentTarget.dataset.index;
      let datas = JSON.stringify(this.data.listData[index])
    xx.navTo(`/pages/noticedetail/noticedetail?data=${datas}`)
  },
  onLoad: function(options) {
      console.log(JSON.parse(options.noticeData))
      this.setData({
          listData: JSON.parse(options.noticeData)
      })
    wx.setNavigationBarTitle({
      title: '培训公告'
    })
  }
})