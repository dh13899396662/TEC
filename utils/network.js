var app = getApp()

module.exports = {
  /**
   * @methord app.network.ajax   
   * @auther hejun
   * @date 2019-01-15
   * @time 11:58
   * @desc 封装统一小程序后台访问应用
   */
  ajax: function(conf) {
    /**
     * conf 包含如下信息：
     * type:POST||GET,默认GET
     * params：{}
     * url:/test.do
     * success:function
     * error:function
     * complete:function
     * loading:function
     */
    var that = this;
    if (typeof(conf) == 'undefined') {
      console.error('conf文件不可为空')
      return false;
    }
    var _type = this.getParam('type', conf, 'POST');
    var _params = this.getParam('params', conf, {});
    var _url = this.getParam('url', conf, '');
    /**
     * 自定义成功函数，默认打印
     */
    var _success = this.getParam('success', conf, function(data) {
      console.info(data);
    });
    /**
     * 自定义报错了执行函数，默认打印错误信息
     */
    var _error = this.getParam('error', conf, function(data) {
      console.error(data);

    });
    /**
     * 自定义加载完成函数，默认执行微信的hideloading
     */
    var _complete = this.getParam('complete', conf, function() {
      wx.hideLoading();
    });
    /**
     * 自定义加载中函数，默认执行微信的showloading
     */
    var _loading = this.getParam('loading', conf, function(data) {
      wx.showLoading({
        title: '',
      })
    });
    _loading();
    wx.request({
      url: getApp().globalData.requestUrl + '/' + _url,
      method: _type,
      header: {
        'wxa-sessionid': getApp().globalData.sessionId,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: _params,
      success: function(data) {
        var _data = data.data;
        if (_data.retCode == '000000') {
          _success(_data.retMsg);
        } else if (_data.retCode == '000004') { //没登录信息，登录去
          console.log(_url);
          that.toLogins();
        } else {
          _error(_data.retMsg);
          wx.showToast({
            title: _data.retMsg,
            icon: 'none'
          })
        }
      },
      error: function(data) {
        var _data = data.data;
        _error(_data.retMsg);
      },
      complete: function() {
        _complete();
      }
    })

  },
  //
  toLogins: function() {
    var that = this;
    var pages = getCurrentPages(); //获取加载的页面
    var currentPage = pages[pages.length - 1]; //获取当前页面的对象
    var url = currentPage.route; //当前页面url  
    if (url == 'pages/login/login')  {
      console.log('已在授权登录界面！')
    }else {
      that.currentPage();
      console.log("需要授权登录，返回主界面");
      wx.navigateTo({
        url: '../../login/login',
      })
    }
  },
  /**
   * 取参数
   */
  getParam: function(key, obj, def) {
    var _value = obj[key];
    if (typeof(_value) == 'undefined') {
      return def; //如果def也没传，就自作孽不可活了
    }
    return _value;
  },
  currentPage: function() {
    var pages = getCurrentPages(); //获取加载的页面
    var currentPage = pages[pages.length - 1]; //获取当前页面的对象
    var url = currentPage.route; //当前页面url    
    var options = currentPage.options; //如果要获取url中所带的参数可以查看options    
    console.log(options)
    wx.setStorage({
      key: 'prePageUrl',
      data: {
        url: url,
        params: options
      }
    })
  }
}