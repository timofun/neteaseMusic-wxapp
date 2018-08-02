import { HTTP } from '../utils/http.js'

class Playlist extends HTTP {
  constructor() {
    super()
  }

  /**
   * 获取歌单详情
   * @param { 成功后的回调函数 } success 
   */
  getPlaylist(playlistid, success) {
    let params = {
      url: 'playlist/detail',
      data: {
        id: playlistid
      },
      success: success
    }
    this.request(params)
  }

}

export default Playlist;