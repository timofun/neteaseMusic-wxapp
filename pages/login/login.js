// pages/login/login.js
import Login from '../../models/login.js';
const login = new Login();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onLoginSubmitTap: function (e) {
    console.log(e)
    login.login(e.detail.value.phone, e.detail.value.pwd, data => {
      if (data.code === 502) {
        wx.showToast({
          title: data.msg,
          icon: 'none',
          duration: 2000
        })
        return
      }
      login.addUid(data.account.id);
      wx.showToast({
        title: '登录成功！',
        icon: 'success',
        success: function () {
          setTimeout(() => {
            wx.navigateBack({
              delta: 1
            })
          }, 2000)
        }
      })

    })

  },

  checkPhoneNumber: function (e) {
    console.log(e)
    let phoneNo = e.detail.value
    // 正则验证
    let isValid = /^1[3456789]\d{9}$/.test(phoneNo)
    if (isValid) {
      this.setData({
        disabled: false
      })
    } else {
      wx.showToast({
        title: '手机号输入错误',
        icon: 'none',
        duration: 1000
      })
    }
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