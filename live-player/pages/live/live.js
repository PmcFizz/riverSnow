var app = getApp()
Page({
  data: {
    height: '',
    showFullScreen:true,
    chatHistory: [], // 评论历史
    userInfo: {}, // 用户信息
    playLink:'', // 播放地址
    playLinkObj: {
      first: 'rtmp://rtmp.merauto.cn/aa1/stream', // aa1 直播1
      second: 'rtmp://rtmp.merauto.cn/aa2/stream' // aa2	直播2
    },
    dmsObj:{
      first:{
        s_key:'s_2f1e3d47406edc7e0c22c72db07ad68d',
        topic:'aa1'
      },
      second:{
        s_key: 's_03581e7c7edd28ddfd65e20db35790b0',
        topic: 'aa2'
      }
    },
    isShow: false,//控制emoji表情是否显示
    isLoad: true,//解决初试加载时emoji动画执行一次
    content: "",//评论框的内容
    isLoading: true,//是否显示加载数据提示
    disabled: true,
    cfBg: false,
    _index: 0,
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis: [],//qq、微信原始表情
    alipayEmoji: [],//支付宝表情
    title: '直播'//页面标题
  },
  play(e) {

  },
  // 播放器展示
  statechange (e) {
    console.log('播放器状态改变'+e)
  },
  // 获取用户信息
  getUserInfo() {
    const that = this
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo
      })
    }else{
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success(res) {
                that.setData({
                  userInfo: res.userInfo
                })
              }
            })
          }else{
            console.log('没有授权')
          }
        }
      })
    }
  },
  onLoad: function (options) {
    var em = {}, that = this, emChar = that.data.emojiChar.split("-");
    var emojis = []
    that.data.emoji.forEach(function (v, i) {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em)
    });
    that.setData({
      emojis: emojis
    })
    // 获取上一页的路径参数
    that.getUserInfo()
    // 评论内容高度
    var query = wx.createSelectorQuery();
    var that = this;
    var boxH = '';
    var playerH = '';
    var fixedH = '';
    query.select('.player').boundingClientRect(function (rect) {
      playerH = rect.height
    }).exec(); 
    query.select('.comment-fixed').boundingClientRect(function (rect) {
      fixedH = rect.height
    }).exec(); 
    query.select('.live-detail').boundingClientRect(function (rect) {
      boxH = rect.height
      that.setData({
        height: (boxH - playerH - fixedH +10)+'px'
      })
    }).exec();
  },
  onReady: function () {
    //设置当前标题
    this.ctx = wx.createLivePlayerContext('player')
    wx.setNavigationBarTitle({
      title: this.data.title
    })
  },
  onShow: function () {
    // 页面显示
    var that = this
    var palyType = app.globalData.palyType
    console.log(palyType,2222)
    that.setData({
      playLink: that.data.playLinkObj[palyType]
    })
    that.getAllChatHistory()
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //解决滑动穿透问题
  emojiScroll: function (e) {
    console.log(e)
  },
  //文本域失去焦点时 事件处理
  textAreaBlur: function (e) {
    //获取此时文本域值    
    this.setData({
      content: e.detail.value
    })

  },
  //文本域获得焦点事件处理
  textAreaFocus: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  //点击表情显示隐藏表情盒子
  emojiShowHide: function () {
    this.setData({
      isShow: !this.data.isShow,
      isLoad: false,
      cfBg: !this.data.cfBg
    })
    console.log(this.data.showFullScreen)
  },
  bindconfirm: function(){

  },
  bindFormSubmit :function (){

  },
  //表情选择
  emojiChoose: function (e) {
    //当前输入内容和表情合并
    this.setData({
      content: this.data.content + e.currentTarget.dataset.emoji
    })
  },
  //点击emoji背景遮罩隐藏emoji盒子
  cemojiCfBg: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  // 全屏
  fullScreen () {
    var self = this
    this.ctx.requestFullScreen({
      success:function(res) {
        self.setData({
          showFullScreen : false
        })
      },
      fail:function(err){
        console.log(err,11)
      }
    })
  },
  // 退出屏幕
  exitScreen (){
    var self = this
    this.ctx.exitFullScreen({
      success:function(res){
        self.setData({
          showFullScreen: true
        })
      }
    })
  },
  // b=播放
  bindPlay() {
    this.ctx.play({
      success: res => {
        console.log('play success')
      },
      fail: res => {
        console.log('play fail')
      }
    })
  },
  // 暂停
  bindPause() {
    this.ctx.pause({
      success: res => {
        
        console.log('pause success')
      },
      fail: res => {
        console.log('pause fail')
      }
    })
  },
  //发送评论评论 事件处理
  send: function () {
    var that = this
    if (!that.data.content) {
      return
    }
    if (!that.data.userInfo.avatarUrl || !that.data.userInfo.nickName){
      wx.showModal({
        title: '提示',
        content: '未获取到您的个人信息,暂不能发表评论'
      })
      return
    }
    // TODO 需要封装消息,当前人头像&名字&消息体
    var msgBody = that.data.userInfo.avatarUrl + '&&' + that.data.userInfo.nickName+'&&'+ that.data.content
    var url = 'https://api_dms.aodianyun.com/v1/messages/' + that.data.dmsObj[app.globalData.palyType].topic
    var s_key = 'dms ' + that.data.dmsObj[app.globalData.palyType].s_key
    console.log(url,s_key)
    wx.request({
      url: url,
      header: {
        'Authorization': s_key
      },
      method: 'post',
      data: { body: msgBody},
      success: function (res) {
        if (res.data.uuid) {
          // 显示到页面上
          // resArr.push({ avatarUrl: itemArr[0], nickName: itemArr[1], msg: itemArr[2], _id: newArr[i]._id })
          that.data.chatHistory = that.data.chatHistory.concat([
            { avatarUrl: that.data.userInfo.avatarUrl,
             nickName: that.data.userInfo.nickName, 
             _id: +new Date(),
             msg: that.data.content }
            ])
          // todo 需要往下滑
          that.setData({
            chatHistory: that.data.chatHistory
          })
          that.setData({
            content: ''
          })
        }
      },
      fail:function(res) {
        // wx.showModal({
        //   title: '提示',
        //   content: res.errMsg
        // })
      }
    })
  },
  // 获取评论区历史记录
  getAllChatHistory: function () {
    var that =this
    var url = 'https://api_dms.aodianyun.com/v1/historys/' + that.data.dmsObj[app.globalData.palyType].topic+'/0/100'
    var s_key = 'dms ' + that.data.dmsObj[app.globalData.palyType].s_key
    wx.request({
      url: url,      
      header:{
        'Authorization': s_key
      },
      method:'get',
      success:function (res){
        if(res.data.length>0){
          // 需要根据封装的消息体 解封
          var newArr = res.data.reverse()
          var resArr = []
          for(var i = 0; i<newArr.length;i++){
            var  itemArr = newArr[i].msg.split("&&")
            resArr.push({ avatarUrl: itemArr[0], nickName: itemArr[1], msg: itemArr[2], _id: newArr[i]._id})
          }
          that.setData({
            chatHistory:resArr
          })
        }
      },
      fail:function(res) {
        // wx.showModal({
        //   title: '提示',
        //   content: res.errMsg
        // })
      }
    })
  }
})