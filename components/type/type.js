// components/tag/tag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: String,
    name: String,
    typeid: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (event) {
      this.triggerEvent('tapping', {
        idx: this.properties.typeid
      })
    }
  }
})
