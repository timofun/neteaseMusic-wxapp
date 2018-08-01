// components/search/search-cmp.js
import { HTTP } from '../../utils/http.js'
import KeywordModel from '../../models/keyword.js';
import paginationBev from '../behaviors/pagination.js'
let keywordModel = new KeywordModel();
let http = new HTTP();

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [paginationBev],
  properties: {
    more: {
      type: String,
      observer: '_loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // start:0,
    // count:20,
    historyKeys:[],
    hotKeys:[],
    finished:false,
    keywords:'',
    loading:false,
    loadingCenter:false
  },

  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached: function () {
    this.setData({
      historyKeys: keywordModel.getHistory()
    })
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
    _loadMore: function () {
      if (!this.data.keywords) {
        return
      }
      let hasMore = this.hasMore()
      if (!hasMore) {
        return
      }
      this.setData({
        loading: true
      })
      http.request({
        url: 'search/m',
        data: {
          keywords: this.data.keywords,
          offset: this.getCurrentStart(),
          limit: this.getCurrentLimit()
        },
        success: (data) => {
          this.setMoreData(data.result.songs)
          this.setData({
            loading: false
          })
        }
      })
    },
    onConfirm: function (event) {
      // 首先切换状态，保持客户端流畅
      this.setData({
        finished: true,
        loadingCenter: true
      })

      this.initPagination()

      let keywords = event.detail.value || event.detail.text

      http.request({
        url: 'search/m',
        data: {
          keywords: keywords,
          offset: this.getCurrentStart(),
          limit: this.getCurrentLimit()
        },
        success: (data) => {
          if (data.result.songs) {
            keywordModel.addToHistory(keywords)
          }
          this.setMoreData(data.result.songs)
          this.setData({
            keywords: keywords,
            loadingCenter: false
          })
        }
      })
    },
    onCancel: function(event) {
      this.triggerEvent('cancel',{},{})
    },
    onDelete: function() {
      this.setData({
        keywords: '',
        finished: false,
        empty: false,
      })
    }
  }
})
