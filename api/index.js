import { request } from '../utils/request'

// 获取token
export const getToken = data => request(`/jiaofei/wxa/user/login?code=${data.code}`, 'get', {}, false)
   
// 教师认证信息
export const teacherCheck = data => request(`/jiaofei/wxa/teacher/teacherInfo`, 'post', {}, true)

// 教师认证
export const teacherCertificat = data => request(`/jiaofei/wxa/teacher/validateTeacher`, 'post', data, true)

// 通知公告
export const notices = data => request(`/jiaofei/wxa/common/queryNotices`, 'get', data, true)

// 我的排课
export const kaoQin = data => request(`/jiaofei/wxa/teacher/queryKaoqins`, 'get', data, true)

