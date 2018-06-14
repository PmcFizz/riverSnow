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
			{picUrl: '../../image/ckb/2.png', businessId: '1'},
			{picUrl: '../../image/ckb/3.png', businessId: '2'},
			{picUrl: '../../image/ckb/5.png', businessId: '3'},
			{picUrl: '../../image/ckb/6.png', businessId: '3'},
			{picUrl: '../../image/ckb/7.png', businessId: '3'}],
		newsArr: [{}, {}, {}, {}, {}],
		picArr: ['../../image/ckb/banner1.jpg', '../../image/ckb/banner2.jpg', '../../image/ckb/banner3.jpg']

	},
	onLoad: function () { },
	swiperchange: function (e) {
		this.setData({swiperCurrent: e.detail.current})
	},
	clickMenuBtn: function (e) {
		wx.navigateTo({
			url: e.currentTarget.dataset.link,
		})
	}

})
