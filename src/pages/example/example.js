//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		exampleList: [],
	},
	onLoad: function () {
		this.setData({exampleList: app.globalData.exampleList})
	},
	getExampleList: function () {
		var _self = this
		app.getExampleList({}, function (res) {
			if (res.code === 0) {
				_self.setData({newsArr: res.data})
			}
		})
	},
	goHref: function (even) {
		wx.navigateTo({url: '/pages/new-detail/new-detail?id=' + even.currentTarget.dataset.id})
	}

})
