import { HTTP } from '../utils/http.js'

class Login extends HTTP {
  constructor() {
    super()
  }

  /**
   * 登录
   * @param { 成功后的回调函数 } success 
   */
  login(phone, pwd, success) {
    let params = {
      url: 'login/cellphone',
      data: {
        phone: phone,
        password: pwd
      },
      success: success
    }
    this.request(params)
  }

  getUserDetail(uid, success) {
    let params = {
      url: 'user/detail',
      data: {
        uid: uid,
      },
      success: success
    }
    this.request(params)
  }

  /**
   * 获取本地用户信息
   */
  getUserinfo() {
    var userinfo = wx.getStorageSync('userinfo')
    return userinfo
  }

  addUserinfo (user) {
    wx.setStorageSync('userinfo', JSON.stringify(user))
  }

  getUid () {
    var userinfo = wx.getStorageSync('uid')
    return userinfo
  }

  addUid (uid) {
    wx.setStorageSync('uid', uid)
  }

  logout () {
    wx.clearStorageSync()
  }

}

export default Login;