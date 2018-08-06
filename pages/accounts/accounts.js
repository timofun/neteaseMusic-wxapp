// pages/accounts/accounts.js
import Login from '../../models/login.js'
const login = new Login();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    user: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  login: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  logout: function () {
    wx.showModal({
      title: '提示',
      content: '确认注销此账号吗？',
      success: (res) => {
        if (res.confirm) {
          login.logout()
          this.setData({
            isLogin: false,
            user: {}
          })
        }
      }
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
    let userinfo = login.getUserinfo()
    if (userinfo) {
      this.setData({
        isLogin: true,
        user: JSON.parse(userinfo)
      })
    } else {
      let uid = login.getUid()
      if (uid) {
        login.getUserDetail(uid, data => {
          let u = {
            nickname: data.profile.nickname,
            signature: data.profile.signature,
            avatar: data.profile.avatarUrl,
            bgUrl: data.profile.backgroundUrl
          }
          login.addUserinfo(u)
          this.setData({
            user: u,
            isLogin: true
          })
        })
      }
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