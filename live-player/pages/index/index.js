var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showGetUser:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              app.globalData.userInfo = res.userInfo
              console.log(app.globalData.userInfo)
            }
          })
        }else{
          self.checkUserInfo()
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  // 点击观看视频
  toPlay: function (even) {
    console.log(even)
    var type = even.currentTarget.dataset.type
    app.globalData.palyType = type
    wx.switchTab({
      url: '/pages/live/live'
    })
  },
  checkUserInfo () {
    var self =this
    if (!app.globalData.userInfo || app.globalData.userInfo == null){
      self.setData({
        showGetUser: true
      })
    }
  },
  cancleShow(){
    this.setData({
      showGetUser: false
    })
  },
  onGotUserInfo :function(e){
    var self = this
    console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    self.setData({
      showGetUser: false
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})