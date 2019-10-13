//atlas.js
//获取应用实例
import * as api from '../../api/index.js'
import * as xx from '../../common/wx.js'
const app = getApp()

Page({
  data: {
      params: {
          pageNumber: 1,
          pageSize: 20,
          sortField: '',
          sortMethord: ''
      },
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
      this.getClassLife()
    wx.setNavigationBarTitle({
      title: '学生风采'
    })
  },
  getClassLife () {
      api.classLife(this.data.params).then(res => {
          if (res.data.retCode === xx.ERRCODE.OK) {
              this.setData({
                  listData: res.data.retMsg.list
              })
              console.log(this.data.listData)
            //   this.queryImage()
          }
      })
  },
    queryImage () {
        this.data.listData.forEach((item, index) => {
            let it = this.data.listData[index]
            it.life_imgs = 'http://orangepi.cross.echosite.cn/jiaofei/wxa/common/getFileByID/' + item.life_imgs
            this.setData({
                it: this.data.listData[index]
            })
            console.log(this.data.listData)
        })
    }
})