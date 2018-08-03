// pages/video/video.js
import Video from '../../models/video.js'
const video = new Video();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videolist: [],
    currentVideo: {},
    videoSrc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    video.getVideoTop(10, data => {
      this.setData({
        videolist: data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  getVideoDetail: function (e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    video.getVideoDetail(id, data => {
      this.setData({
        videoSrc: data.data.brs[240]
      })
      console.log(data)
    })
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