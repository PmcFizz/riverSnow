var app = getApp()
Page({
	data: {
		autoplay: true,
		interval: 3000,
		duration: 1000,
		swiperCurrent: 0,
		selectCurrent: 0,
		banners: [
			{picUrl: '../../image/tmh/10.png', businessId: '1'},
			{picUrl: '../../image/tmh/9.png', businessId: '2'},
			{picUrl: '../../image/tmh/11.png', businessId: '3'},
			{picUrl: '../../image/tmh/12.png', businessId: '3'},
			{picUrl: '../../image/tmh/13.png', businessId: '3'}],
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
