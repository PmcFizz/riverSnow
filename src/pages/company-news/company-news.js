//获取应用实例
var app = getApp()
Page({
	data: {
		newsArr: []
	},
	onLoad: function () {
		this.setData({newsArr: app.globalData.newsList})
	},
	getNewsList: function () {
		var _self = this
		app.getNewsList({}, function (res) {
			if (res.code === 0) {
				_self.setData({newsArr: res.data})
			}
		})
	},
	goHref: function (even) {
		wx.navigateTo({url: '/pages/new-detail/new-detail?id=' + even.currentTarget.dataset.id})
	}

})
