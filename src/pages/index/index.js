var app = getApp()
Page({
	data: {
		menuArr: [
			{name: '公司动态', link: '/pages/company-news/company-news'},
			{name: '新闻详情', link: '/pages/new-detail/new-detail'},
			{name: '成功案例', link: '/pages/example/example'},
			{name: '案例详情', link: '/pages/example-detail/example-detail'},
			{name: '联系我们', link: '/pages/contact-us/contact-us'},
			{name: '关于我们', link: '/pages/about-us/about-us'}
		],
		autoplay: true,
		interval: 3000,
		duration: 1000,
		swiperCurrent: 0,
		selectCurrent: 0,
		banners: [
			{picUrl: 'http://i4.bvimg.com/649796/a3e3c98e90626845.png', businessId: '1'},
			{picUrl: 'http://i4.bvimg.com/649796/c561466972bffefe.png', businessId: '2'},
			{picUrl: 'http://i4.bvimg.com/649796/92583979b8f78553.png', businessId: '3'},
			{picUrl: 'http://i4.bvimg.com/649796/25b01da2f746ea35.png', businessId: '3'},
			{picUrl: 'http://i4.bvimg.com/649796/ab4099d65e0c9640.png', businessId: '3'}],
		newsArr: [{title: '创客宝云铺商城新增蜂鸟订单专属平台红包', logo: 'http://i2.bvimg.com/649796/529498f8ac94a9ea.png', id: '1'},
			{title: '祝所有女神节日快乐', logo: 'http://i2.bvimg.com/649796/6f027d1cb7f45548.png', id: '2'},
			{title: '创客宝入驻商家突飞猛进', logo: 'http://i2.bvimg.com/649796/f8b21c027df0a0c8.png', id: '3'},
			{title: '实体商家免费加入创客宝,轻松实现月入过万', logo: 'http://i2.bvimg.com/649796/a89c1236a325059d.png', id: '4'},
			{title: '创客宝回馈客户,随机立减百元大奖等你拿', logo: 'http://i2.bvimg.com/649796/c9e44468856d94b3.png', id: '5'}],
		picArr: ['http://i4.bvimg.com/649796/a3e3c98e90626845.png',
			'http://i4.bvimg.com/649796/c561466972bffefe.png',
			'http://i4.bvimg.com/649796/92583979b8f78553.png',
			'http://i4.bvimg.com/649796/25b01da2f746ea35.png',
			'http://i4.bvimg.com/649796/ab4099d65e0c9640.png']

	},
	onLoad: function () { },
	swiperchange: function (e) {
		this.setData({swiperCurrent: e.detail.current})
	},
	clickMenuBtn: function (e) {
		wx.navigateTo({
			url: e.currentTarget.dataset.link
		})
	},
	goHref: function (even) {
		wx.navigateTo({url: '/pages/new-detail/new-detail?id=' + even.currentTarget.dataset.id})
	}

})
