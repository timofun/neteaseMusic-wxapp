// pages/top/top.js
import Discover from '../../models/discover.js'
const discover = new Discover();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: {
      yun: [
        {
          idx: 3,
          title: '云音乐飙升榜',
          img: '../../images/top/1.jpg'
        },
        {
          idx: 0,
          title: '云音乐新歌榜',
          img: '../../images/top/2.jpg'
        },
        {
          idx: 2,
          title: '网易原创歌曲榜',
          img: '../../images/top/3.jpg'
        },
        {
          idx: 1,
          title: '云音乐热歌榜',
          img: '../../images/top/4.jpg'
        },
        {
          idx: 4,
          title: '云音乐电音榜',
          img: '../../images/top/6.jpg'
        },
        {
          idx: 23,
          title: '云音乐嘻哈榜',
          img: '../../images/top/7.jpg'
        },
        {
          idx: 22,
          title: '云音乐ACG音乐榜',
          img: '../../images/top/9.jpg'
        }
      ],
      world: [
        {
          idx: 5,
          title: 'UK排行榜周榜',
          img: '../../images/top/14.jpg'
        },
        {
          idx: 6,
          title: '美国Billboard周榜',
          img: '../../images/top/15.jpg'
        },
        {
          idx: 7,
          title: 'KTV嗨榜',
          img: '../../images/top/21.jpg'
        },
        {
          idx: 8,
          title: 'iTunes榜',
          img: '../../images/top/17.jpg'
        },
        {
          idx: 9,
          title: 'Hit FM Top榜',
          img: '../../images/top/22.jpg'
        },
        {
          idx: 10,
          title: '日本Oricon周榜',
          img: '../../images/top/12.jpg'
        },
        {
          idx: 14,
          title: '中国TOP排行榜(港台榜)',
          img: '../../images/top/23.jpg'
        },
        {
          idx: 15,
          title: '中国TOP排行榜(内地榜)',
          img: '../../images/top/24.jpg'
        },
        {
          idx:16,
          title: '香港电台中文歌曲龙虎榜',
          img: '../../images/top/25.jpg'
        },
        {
          idx: 18,
          title: '中国嘻哈榜',
          img: '../../images/top/26.jpg'
        },
        {
          idx: 19,
          title: '法国 NRJ EuroHot 30周榜',
          img: '../../images/top/16.jpg'
        },
        {
          idx: 21,
          title: 'Beatport全球电子舞曲榜',
          img: '../../images/top/11.jpg'
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  onTap: function (e) {
    let idx = e.currentTarget.dataset.idx
    wx.navigateTo({
      url: '../../pages/playlist/playlist?idx=' + idx,
    })
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