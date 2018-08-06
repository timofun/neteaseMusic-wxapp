// pages/player/player.js
import Music from '../../models/music.js'
let music = new Music()
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    song: Object,
    url: {
      type: String,
      value: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let songid = options.songid;
    if (app.globalData.g_currentSongId && songid === app.globalData.g_currentSongId 
        && app.globalData.g_songUrl && app.globalData.g_currentSong) {
      this.setData({
        url: app.globalData.g_songUrl
      })
      this.setData({
        song: app.globalData.g_currentSong
      })
      wx.setNavigationBarTitle({
        title: app.globalData.g_currentSong.name
      })
    } else {
      app.globalData.g_currentSongId = songid
      music.getSrc(songid, (data) => {
        console.log(data)
        if (data.code !== 200) {
          this.setData({
            url: 'error'
          })
          return
        }
        this.setData({
          url: data.data[0].url
        })
        app.globalData.g_songUrl = data.data[0].url
      })

      music.getSongDetail(songid, (data) => {
        this.setData({
          song: data.songs[0],
          // url: `http://music.163.com/song/media/outer/url?id=${data.songs[0].id}.mp3'`
        })
        app.globalData.g_currentSong = data.songs[0]
        wx.setNavigationBarTitle({
          title: data.songs[0].name
        })
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
    console.log(this.data.song)
    return {
      title: this.data.song.name,
      path: '/pages/player/player?songid=' + app.globalData.g_currentSongId
    }
  }
})