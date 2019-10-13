//upload.js
//获取应用实例
import * as api from '../../api/index.js'
import * as xx from '../../common/wx.js'
import config from '../../utils/config.js'
const app = getApp()

Page({
  data: {
    team: '0',
    teamData: ['第一个班级', '第二个班级', '第三个班级'],
      imgList: [],
      imgUrls:[],
    courseList: [],
    student: '',
    studentData: [],
    params: {
        life_imgs: '',
        life_courseid: '1',
        life_userid: '1'
    },
    searchName: ''
  },
    chooseImage () {
        wx.chooseImage({
            count: 1, // 做多1张
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                // 存储临时地址
                this.setData({
                    imgList: res.tempFilePaths
                })
                this.release()
            }
        })
    },
    uploadFile: function (filePath) {
        // 返回Promise是为了解决图片上传的异步问题
        return new Promise((resolve, reject) => {
            wx.uploadFile({
                url: `${config.request.baseURL}/jiaofei/wxa/common/uploadFile`, // 上传地址
                filePath: filePath,
                name: 'file', // 这里的具体值，问后端人员
                formData: {},
                header: {
                    "Content-Type": "multipart/form-data"
                },
                success: (res) => {
                    // 图片上传成功后，后端会返回一个地址，可以把它存到imgUrls
                    resolve(res)
                },
                fail: (err) => {
                    console.log(err)
                }
            })
        })
    },
    release () {
        // 点击提交后，开始上传图片
        let imgUrls = []
        for (let index = 0; index < this.data.imgList.length; index++) {
            this.uploadFile(this.data.imgList[index]).then((res) => {
                // 这里要注意把res.data parse一下，默认是字符串
                console.log(res)
                let ret = JSON.parse(res.data)
                if (ret.retCode === xx.ERRCODE.OK) {
                    this.data.imgUrls.push(ret.retMsg)
                   this.setData({
                       imgUrls: this.data.imgUrls
                   }) // 图片地址
                    console.log(this.data.imgUrls)
                }
            })
        }
        console.log(imgUrls) // 3张图片上传成功后，执行其他操作
    },
    publish () {
        if (!this.data.student || !this.data.imgUrls.length) {
            xx.toast('请先选择学生或上传照片!')
            return
        }
        let datas = { life_imgs: this.data.imgUrls, life_userid: this.data.studentData[this.data.student].id}
        api.upload(datas).then(res => {
            if (res.data.retCode === xx.ERRCODE.OK) {
                xx.toast('发布成功')
                xx.back()
            }
        })
    },
    pickerClick (e) {
        xx.toast('请先输入学生姓名')
    },
    searchList (e) {
        console.log(e.detail.value)
        this.setData({
            searchName: e.detail.value
        })
        api.queryStudents({ stu_name: this.data.searchName}).then(res => {
            if (res.data.retCode === xx.ERRCODE.OK) {
                console.log(res)
                this.setData({
                    studentData: res.data.retMsg.list
                })
            }
        })
    },
  teamChange: function (e) {
    this.setData({
      team: e.detail.value
    })
  },
  studentChange: function (e) {
    this.setData({
      student: e.detail.value
    })
  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '上传风采'
    })
      this.queryCourses()
  },
    queryCourses () {
        api.queryCourses().then(res => {
            if (res.data.retCode === xx.ERRCODE.OK) {
                this.setData({
                    courseList: res.data.retMsg.list
                })
            }
        })
    }
})