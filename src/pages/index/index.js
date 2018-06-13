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
			{picUrl: '../../image/ckb/banner1.jpg', businessId: '1'},
			{picUrl: '../../image/ckb/banner2.jpg', businessId: '2'},
			{picUrl: '../../image/ckb/banner3.jpg', businessId: '3'}]

	},
	onLoad: function () {

	},
	swiperchange: function (e) {
		this.setData({swiperCurrent: e.detail.current})
	},
	clickMenuBtn: function (e) {
		console.log(e.currentTarget.dataset.link)
		wx.navigateTo({
			url: e.currentTarget.dataset.link,
		})
	}

})
