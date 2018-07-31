// components/search/search-cmp.js
import KeywordModel from '../../models/keyword.js';
let keywordModel = new KeywordModel();

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
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function () {
    // this.setData({
    //   historyKeys: keyModel.getHistory()
    // })
    keywordModel.getHot((data) => {
      console.log(data)
      this.setData({
        hotKeys: data.result.hots
      })
    })
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
