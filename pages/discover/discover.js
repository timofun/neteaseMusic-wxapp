// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchPanel: false,
    books: Object,
    more: false,
    _tab: '1',
    bannerList: [],
    recommendSonglist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'http://192.168.1.102:3000/banner', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          bannerList: res.data.banners
        })
      }
    })
    wx.request({
      url: 'http://192.168.1.102:3000/personalized?limit=6',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        // item.playCount > 9999 ? item.playCount / 10000 + '万' : item.playCount
        _this.setData({
          recommendSonglist: res.data.result
        })
      }
    })
  },

  onActivateSearch: function (event) {
    this.setData({
      searchPanel: true
    })
  },

  onCancel: function (event) {
    this.setData({
      searchPanel: false
    })
  },

  tabClick: function (e) {
    this.setData({
      _tab: e.currentTarget.dataset.tab
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})