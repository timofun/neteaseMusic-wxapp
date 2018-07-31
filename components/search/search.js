// components/search/search-cmp.js

Component({
  /**
   * 组件的属性列表
   */

  /**
   * 组件的初始数据
   */
  data: {
    // start:0,
    // count:20,
    historyKeys:[],
    hotKeys:[],
    finished:false,
    q:'',
    loading:false,
    loadingCenter:false
  },

  /**
   * 组件的方法列表
   * 
   */
  methods: {
    onCancel: function(event) {
      this.triggerEvent('cancel',{},{})
    },
    onDelete: function() {
      this.setData({
        q: ''
      })
    }
  }
})
