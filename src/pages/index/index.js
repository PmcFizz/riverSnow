var app = getApp()
Page({
	data: {
		autoplay: true,
		interval: 3000,
		duration: 1000,
		swiperCurrent: 0,
		selectCurrent: 0,
		banners: [
			{picUrl: 'http://mczaiyun.top/tmh/10.png', businessId: '1'},
			{picUrl: 'http://mczaiyun.top/tmh/9.png', businessId: '2'},
			{picUrl: 'http://mczaiyun.top/tmh/11.png', businessId: '3'},
			{picUrl: 'http://mczaiyun.top/tmh/12.png', businessId: '3'},
			{picUrl: 'http://mczaiyun.top/tmh/13.png', businessId: '3'}],
		newsArr: [],
		picArr: [
			'http://mczaiyun.top/tmh/20.png',
			'http://mczaiyun.top/tmh/21.png',
			'http://mczaiyun.top/tmh/22.png',
			'http://mczaiyun.top/tmh/23.png'
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
