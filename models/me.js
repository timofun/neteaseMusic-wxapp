import { HTTP } from '../utils/http.js'

class Me extends HTTP {
  constructor() {
    super()
  }

  /**
   * 获取用户歌单
   * @param { 成功后的回调函数 } success 
   */
  getUerPlaylist(id, success) {
    let params = {
      url: 'user/playlist',
      data: {
        uid: id,
        limit: 1000
      },
      success: success
    }
    this.request(params)
  }

}

export default Me;