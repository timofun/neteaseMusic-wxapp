// pages/discover/discover.js
import Discover from '../../models/discover.js'
let discover = new Discover()
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
    discover.getBanner((data) => {
      this.setData({
        bannerList: data.banners
      })
    })
    discover.getPersonalized((data) => {
      this.setData({
        recommendSonglist: data.result
      })
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