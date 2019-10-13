import { request } from '../utils/request'

// 获取token
export const getToken = data => request(`/jiaofei/wxa/user/login?code=${data.code}`, 'get', {}, false)
   
// 教师认证信息
export const teacherCheck = data => request(`/jiaofei/wxa/teacher/teacherInfo`, 'get', {}, true)

// 教师认证
export const teacherCertificat = data => request(`/jiaofei/wxa/teacher/validateTeacher?name=${data.name}&passwd=${data.passwd}`, 'post', data, true)

// 通知公告
export const notices = data => request(`/jiaofei/wxa/common/queryNotices`, 'get', data, true)

// 我的排课
export const kaoQin = data => request(`/jiaofei/wxa/teacher/queryKaoqins`, 'get', data, true)

// 获取unionId
export const getUnionId = data => request('/jiaofei/wxa/user/info?signature=' + data.signature + '&rawData=' + data.rawData + '&iv=' +data.iv + '&encryptedData=' + data.encryptedData, 'post', data, true)

// 我的排课
export const myCouplan = data => request(`/jiaofei/wxa/teacher/queryMyCouplan`, 'get', data, true)

// 我的排课
export const myKaoQins = data => request(`/jiaofei/wxa/teacher/queryKaoqins`, 'get', data, true)

// 我上传的班级风采
export const classLife = data => request(`/jiaofei/wxa/teacher/queryClassLifes`, 'get', data, true)

// 上传班级风采
export const uploadClassLife = data => request(`/jiaofei/wxa/teacher/uploadClassLife`, 'get', data, true)

// 考勤查询
export const queryKaoQins = data => request(`/jiaofei/wxa/teacher/queryKaoqins?couplan_id=${data.couplan_id}`, 'post', data, true)
// 我当前的排课
export const getMyCouplan = data => request(`/jiaofei/wxa/teacher/queryCurrentMyCouplan`, 'get', data, true)

// 打卡
export const addKaoQin = data => request(`/jiaofei/wxa/teacher/addKaoqin?signuser_id=${data.signuser_id}&couplan_id=${data.couplan_id}`, 'post', data, true)

// 取消打卡
export const calcleKaoQin = data => request(`
/jiaofei/wxa/teacher/delKaoqin?signuser_id=${data.signuser_id}&couplan_id=${data.couplan_id}`, 'post', data, true)

// 课程查询
export const queryCourses = data => request(`/jiaofei/wxa/teacher/queryMyCouplan`, 'get', data, true)

// 我的排课（课程表）
export const myCourses = data => request(`
/jiaofei/wxa/teacher/queryMyCouplanByDate?startDate=${data.startDate}&endDate=${data.endDate}`, 'post', data, true)

// 模糊查询学生
export const queryStudents = data => request(`
/jiaofei/wxa/teacher/queryStudents?stu_name=${data.stu_name}`, 'post', data, true)

// 文件上传
export const fileUpload = data => request(`
/jiaofei/wxa/common/uploadFile`, 'post', data, true, 'multipart/form-data')

// 文件获取
export const getFile = data => request(`/jiaofei/wxa/common/getFileByID/${data}`, 'get', data, true)

// 上传班级风采 
export const upload = data => request(`
/jiaofei/wxa/teacher/uploadClassLife?life_imgs=${data.life_imgs}&life_userid=${data.life_userid}`, 'post', data, true)


