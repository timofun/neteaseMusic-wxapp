import { HTTP } from '../utils/http.js'

class Music extends HTTP {
  constructor() {
    super()
  }

  /**
   * 获取歌曲播放src
   * @param { 成功后的回调函数 } success 
   */
  getSrc (songid, success) {
    let params = {
      url: 'music/url',
      data: {
        id: songid
      },
      success: success
    }
    this.request(params)
  }

  /**
   * 获取歌曲详情
   * @param { 成功后的回调函数 } success 
   */
  getSongDetail (songid, success) {
    let params = {
      url: 'song/detail',
      data: {
        ids: songid
      },
      success: success
    }
    this.request(params)
  }

}

export default Music;