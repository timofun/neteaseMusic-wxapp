import {
  HTTP
} from '../../utils/http.js'

let paginationBev = Behavior({
  properties: {
   
  },
  data: {
    offset: 0,
    limit: 20,
    dataArray: [],
    empty:false,
    ending:false
  },

  methods: {
    setMoreData: function(dataArray) {
      if (!dataArray && !dataArray.length) {
        this.data.ending = true
        if(!this.data.dataArray){
          this.setData({
            empty:true
          })
        }
      }
      let temp =this.data.dataArray.concat(dataArray)
      this.data.offset++
      this.setData({
        dataArray: temp
      })
      return true
    },

    hasMore:function(){
      return !this.data.ending
    },

    getCurrentStart:function(){
      return this.data.offset
    },

    getCurrentLimit: function () {
      return this.data.limit
    },

    initPagination:function(){
      this.data.ending = false
      this.data.offset = 0
      this.data.dataArray = []
      this.setData({
        dataArray:[]
      })
    }
  }
})


export default paginationBev;
