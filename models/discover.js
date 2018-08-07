import { HTTP } from '../utils/http.js'

class Discover extends HTTP {
  constructor() {
    super()
  }

  /**
   * 获取banner轮播列表
   * @param { 成功后的回调函数 } success 
   */
  getBanner (success) {
    let params = {
      url: 'banner',
      success: success
    }
    this.request(params)
  }

  /**
   * 获取私人FM
   * @param { 成功后的回调函数 } success 
   */
  getPersonalFm(success) {
    let params = {
      url: 'personal_fm',
      success: success
    }
    this.request(params)
  }

  /**
  * 获取每日推荐
  * @param { 成功后的回调函数 } success 
  */
  getRecommendResource(success) {
    let params = {
      url: 'recommend/resource',
      success: success
    }
    this.request(params)
  }

  /**
   * 获取排行榜
   * @param { 成功后的回调函数 } success 
   */
  getToplist(id, success) {
    let params = {
      url: 'top/list',
      data: {
        idx: id
      },
      success: success
    }
    this.request(params)
  }

  /**
   * 获取推荐歌单
   * @param { 成功后的回调函数 } success 
   */
  getPersonalized (success) {
    let params = {
      url: 'personalized',
      data: {
        limit: 6
      },
      success: success
    }
    this.request(params)
  }

  /**
   * 获取精品歌单
   * @param { 成功后的回调函数 } success 
   */
  getPlaylistHighquality(success) {
    let params = {
      url: 'top/playlist/highquality',
      data: {
        limit: 6
      },
      success: success
    }
    this.request(params)
  }

  /**
   * 获取网友精选碟
   * @param { 成功后的回调函数 } success 
   */
  getTopPlaylist (success) {
    let params = {
      url: 'top/playlist',
      data: {
        limit: 6
      },
      success: success
    }
    this.request(params)
  }

}

export default Discover;