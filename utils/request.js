import config from './config'

// const baseURL = 'http://www.ciyun.com'

export const request = (url, method, data, needToken) => {
    return new Promise((resolve, reject) => {
        let token = wx.getStorageSync('token')
        if (!needToken) { // 不需要token时
            unExpectToken(url, method, data, resolve, reject)
        } else { // 需要token时
            if (!token) {
                wx.removeStorageSync('token')
                wx.redirectTo({
                    url: '/pages/login/login'
                })
            } else {
                expectToken(url, method, data, resolve, reject)
            }
        }
    })
}
export const unExpectToken = (url, method, data, resolve, reject) => { // 不需要Token
    wx.request({
        url: config.request.baseURL + url, // 接口地址,
        data: data,
        method: method,
        header: {
            'content-type': config.request.header
        },
        success(res) {
            resolve(res)
        },
        fail(ret) {
            reject(ret)
        }
    })
}
export const expectToken = (url, method, data, resolve, reject) => {
    wx.request({
        url: config.request.baseURL + url, // 接口地址,
        data: data,
        method: method,
        header: {
            'content-type': config.request.header,
            'wxa-sessionid': wx.getStorageSync('token')
        },
        success(res) {
            if (res.statusCode === 403) {
                wx.redirectTo({
                    url: '/pages/bindMobile/main'
                })
            } else if (res.statusCode === 401) {
                // wx.removeStorageSync('token')
                wx.redirectTo({
                    url: config.request.invaidToken
                })
            } else {
                resolve(res)
            }
        },
        fail(ret) {
            reject(ret)
        }
    })
}