import {HTTP} from '../utils/http.js'
class KeywordModel extends HTTP{
  key = 'q'
  max = 10
  constructor(){
    super()
  }

  getHistory(){
    var keywords = wx.getStorageSync(this.key)
    return keywords
  }

  getHot(success){
    let params = {
      url: 'search/hot',
      success: success
    }
    this.request(params)
  }


  addToHistory(word){
    let keywords = this.getHistory()
    if (keywords){
      let index = keywords.indexOf(word)
      if(index == -1){
        let length = keywords.length
        if(length >= this.max){
          keywords.pop(word)
        }
        keywords.unshift(word)
      }
      wx.setStorageSync(this.key, keywords)
    }
    else{
      keywords = [word]
      wx.setStorageSync(this.key, keywords)
    }
  }
}

export default KeywordModel;