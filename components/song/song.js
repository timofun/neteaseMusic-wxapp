// components/book/normal/book-normal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    song: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: String,
    author: String,
    img: String
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (event) {
      this.triggerEvent('songtap', {
        songid: this.properties.song.id
      }, {})
      wx.navigateTo({
        url: '../../pages/player/player?songid=' + this.properties.song.id,
      })
    }
  }
})
