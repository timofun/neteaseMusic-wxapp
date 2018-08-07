// pages/discover/discover.js
import Discover from '../../models/discover.js'
import { random } from '../../utils/util.js'
let discover = new Discover()
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchPanel: false,
    more: false,
    _tab: '1',
    bannerList: [],
    recommendSonglist: [],
    topPlaylist: [],
    playlistHighquality: [],
    playing: false,
    waittingUrl: '/images/icon/player.png',
    playingUrl: '/images/icon/playing.gif',
    recommendImg: [
      {
        id: '1',
        img: '/images/type/private.png',
        name: '私人FM'
      },
      {
        id: '2',
        img: '/images/type/date.png',
        name: '每日推荐'
      },
      {
        id: '3',
        img: '/images/type/songlist.png',
        name: '歌单'
        },
      {
        id: '4',
        img: '/images/type/rank.png',
        name: '排行榜'
      }
    ],
    radioImg: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var _this = this;
    discover.getBanner((data) => {
      this.setData({
        bannerList: data.banners
      })
    })
    discover.getPersonalized((data) => {
      this.setData({
        recommendSonglist: data.result
      })
    })

    discover.getPlaylistHighquality((data) => {
      this.setData({
        playlistHighquality: data.playlists
      })
    })
  
  },

  onActivateSearch: function (event) {
    this.setData({
      searchPanel: true
    })
  },

  onCancel: function (event) {
    this.setData({
      searchPanel: false
    })
  },

  /**
   * 点击音律按钮进入player页面
   */
  goPlayer: function () {
    if (app.globalData.g_currentSongId) {
      wx.navigateTo({
        url: '../../pages/player/player?songid=' + app.globalData.g_currentSongId,
      })
    } else {
      wx.showToast({
        title: '未播放任何歌曲！',
        icon: 'none',
        duration: 2000
      })
    }
    
  },

  onType: function (e) {
    console.log(e)
    switch (e.detail.idx) {
      case '1':
        wx.navigateTo({
          url: '../../pages/personalFm/personalFm'
        })
        break;
      case '2':
        wx.navigateTo({
          url: '../../pages/recommend/recommend'
        })
        break;
      case '3':
        wx.navigateTo({
          url: '../../pages/allPlaylist/allPlaylist'
        })
        break;
      case '4':
        wx.navigateTo({
          url: '../../pages/top/top'
        })
        break;
      default:
        break;    
    }
  },

  /**
   * 点击歌单获取详情
   */
  goPlaylist: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../../pages/playlist/playlist?playlistid=' + e.detail.playlistid,
    })
  },

  tabClick: function (e) {
    this.setData({
      _tab: e.currentTarget.dataset.tab
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
    wx.onBackgroundAudioPause(() => {
      this.setData({
        playing: false
      })
      app.globalData.g_isPlayingMusic = false;
    });
    wx.onBackgroundAudioStop(() => {
      this.setData({
        playing: false
      })
      app.globalData.g_isPlayingMusic = false;
    });
    if (app.globalData.g_isPlayingMusic) {
      this.setData({
        playing: true
      })
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
    this.setData({
      more: random(16)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})