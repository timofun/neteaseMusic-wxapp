// components/classic/music/music.js

let mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [],

  properties: {
    src: String,
    name: String,
    img: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    waittingUrl: 'images/player@waitting.png',
    playingUrl: 'images/player@playing.png'
  },

  attached: function() {
    this._recoverPlaying()
    this._monitorSwitch()
  },

  detached: function() {
    // wx.pauseBackgroundAudio()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function(event) {
      if (!this.data.playing) {
        this.setData({
          playing: true,
        })
        if(mMgr.src == this.properties.src){
          mMgr.play()
        }
        else{
          mMgr.src = this.properties.src
        }
        mMgr.coverImgUrl = this.properties.img
        mMgr.title = this.properties.name
      } else {
        this.setData({
          playing: false,
        })
        mMgr.pause()
      }
    },

    _recoverPlaying: function() {
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src == this.properties.src) {
        if (!mMgr.paused) {
          this.setData({
            playing: true
          })
        }
      }
    },

    _monitorSwitch: function() {
      mMgr.onPlay(() => {
        this._recoverPlaying()
      })
      mMgr.onPause(() => {
        this._recoverPlaying()
      })
      mMgr.onStop(() => {
        this._recoverPlaying()
      }),
      mMgr.onEnded(()=>{
        this._recoverPlaying()
      })
    }

  }
})