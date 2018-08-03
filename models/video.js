import { HTTP } from '../utils/http.js'

class Video extends HTTP {
  constructor() {
    super()
  }

  /**
   * 获取mv排行榜
   * @param { 成功后的回调函数 } success 
   */
  getVideoTop(limit, success) {
    let params = {
      url: 'top/mv',
      data: {
        limit: limit
      },
      success: success
    }
    this.request(params)
  }

  /**
   * 获取mv详情
   * @param { 成功后的回调函数 } success 
   */
  getVideoDetail(videoid, success) {
    let params = {
      url: 'mv',
      data: {
        mvid: videoid
      },
      success: success
    }
    this.request(params)
  }

}

export default Video;