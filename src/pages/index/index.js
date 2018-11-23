var app = getApp()
Page({
	data: {
		autoplay: true,
		interval: 3000,
		duration: 1000,
		swiperCurrent: 0,
		selectCurrent: 0,
		banners: [
			{picUrl: 'http://mczaiyun.top/ckb/101.png', businessId: '1'},
			{picUrl: 'http://mczaiyun.top/ckb/102.png', businessId: '2'},
			{picUrl: 'http://mczaiyun.top/ckb/103.png', businessId: '3'},
			{picUrl: 'http://mczaiyun.top/ckb/104.png', businessId: '3'},
			{picUrl: 'http://mczaiyun.top/ckb/105.png', businessId: '3'}],
		newsArr: [],
		picArr: [
			'http://mczaiyun.top/ckb/106.png',
			'http://mczaiyun.top/ckb/107.png',
			'http://mczaiyun.top/ckb/108.png',
			'http://mczaiyun.top/ckb/109.png'
		]

	},
	onLoad: function () {
		this.setData({newsArr: app.globalData.newsList})
	},
	swiperchange: function (e) {
		this.setData({swiperCurrent: e.detail.current})
	},
	getBanner: function () {
		var _self = this
		app.getBanner({}, function (res) {
			if (res.code === 0) {
				_self.setData({banners: res.data})
			}
		})
	},
	clickMenuBtn: function (e) {
		wx.navigateTo({url: e.currentTarget.dataset.link})
	},
	goHref: function (even) {
		wx.navigateTo({url: '/pages/new-detail/new-detail?id=' + even.currentTarget.dataset.id})
	}

})
