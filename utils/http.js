import { config } from '../config.js'


class HTTP {
  constructor() {
    this.baseRestUrl = config.api_blink_url
  }

  //http 请求类, 当noRefech为true时，不做未授权重试机制
  request(params) {
    var that = this
    var url = this.baseRestUrl + params.url;

    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.method,
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        // 200为正确返回
        if (res.data.code === 200) {
          params.success && params.success(res.data);
        } else {
          params.success && params.success(res.data);
        }
      },
      fail: function (err) {
        wx.showToast({
          title: '请求失败！',
          icon: 'none',
          duration: 2000
        })
        params.fail && params.fail(err)
      }
    });
  }
};

export { HTTP };