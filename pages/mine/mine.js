// pages/mine/mine.js
import Me from '../../models/me.js';
const me = new Me();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myPlaylist: [],
    orderPlaylist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getplaylist()
  },

  getplaylist: function () {
    let uid = wx.getStorageSync('uid')
    me.getUerPlaylist(uid, data => {
      let my = data.playlist.filter(i => {
        return i.creator.userId === uid
      })
      let order = data.playlist.filter(i => {
        return i.creator.userId !== uid
      })
      this.setData({
        myPlaylist: my,
        orderPlaylist: order
      })
    })
  },

  goPlayDetail: function (e) {
    console.log('e', e)
    wx.navigateTo({
      url: '../../pages/playlist/playlist?playlistid=' + e.currentTarget.dataset.id,
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
    if (!this.data.myPlaylist) {
      this.getplaylist()
    }
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