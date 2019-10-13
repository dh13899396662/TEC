import config from './config'

// const baseURL = 'http://www.ciyun.com'

export const request = (url, method, data, needToken, contentType=config.request.header) => {
    return new Promise((resolve, reject) => {
        let token = wx.getStorageSync('token')
        if (!needToken) { // 不需要token时
            unExpectToken(url, method, data, resolve, reject, contentType)
        } else { // 需要token时
            if (!token) {
                wx.removeStorageSync('token')
                wx.redirectTo({
                    url: '/pages/login/login'
                })
            } else {
                expectToken(url, method, data, resolve, reject, contentType)
            }
        }
    })
}
export const unExpectToken = (url, method, data, resolve, reject, contentType) => { // 不需要Token
    wx.request({
        url: config.request.baseURL + url, // 接口地址,
        data: data,
        method: method,
        header: {
            'content-type': contentType
        },
        success(res) {
            resolve(res)
        },
        fail(ret) {
            reject(ret)
        }
    })
}
export const expectToken = (url, method, data, resolve, reject, contentType) => {
    wx.request({
        url: config.request.baseURL + url, // 接口地址,
        data: data,
        method: method,
        header: {
            'content-type': contentType,
            'wxa-sessionid': wx.getStorageSync('token')
        },
        success(res) {
            if (res.data.retCode === '000004') {
                wx.redirectTo({
                    url: '/pages/login/login'
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