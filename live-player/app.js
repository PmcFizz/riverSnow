//app.js
App({
  onLaunch: function () {
    var that = this

   
    // wx.authorize({
    //   scope:'scope.userInfo',
    //   success: function (data) {
    //     console.log(data)
    //     wx.getUserInfo({
    //       success: function (res) {
    //         that.globalData.userInfo = res.userInfo
    //       },
    //       fail: function () {
    //         // 调用微信弹窗接口
    //         wx.showModal({
    //           title: '提示',
    //           showCancel: 'false',
    //           content: '您点击了拒绝授权，将无法正常使用小程序的功能体验。请10分钟后再次点击授权，或者删除小程序重新进入。',
    //           success: function (res) {
    //             if (res.confirm) {
    //               console.log('用户点击确定')
    //             }
    //           }
    //         })
    //       }
    //     })
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    palyType: 'first' // 全局变量 播放地址
  }
})
