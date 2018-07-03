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
		newsArr: [
			{title: '创客宝入驻商家突飞猛进', logo: 'http://i2.bvimg.com/649796/f8b21c027df0a0c8.png', id: '3'},
			{title: '创客宝云铺商城新增蜂鸟订单专属平台红包', logo: 'http://i2.bvimg.com/649796/529498f8ac94a9ea.png', id: '1'},
			{title: '实体商家免费加入创客宝,轻松实现月入过万', logo: 'http://i2.bvimg.com/649796/a89c1236a325059d.png', id: '4'},
			{title: '创客宝回馈客户,随机立减百元大奖等你拿', logo: 'http://i2.bvimg.com/649796/c9e44468856d94b3.png', id: '5'},
			{title: '祝所有女神节日快乐', logo: 'http://i2.bvimg.com/649796/6f027d1cb7f45548.png', id: '2'}],
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
