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
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
		duration: 1000,
		loadingHidden: false, // loading
		userInfo: {},
		swiperCurrent: 0,
		selectCurrent: 0,
		categories: [],
		activeCategoryId: 0,
		goods: [],
		scrollTop: '0',
		loadingMoreHidden: true,

		hasNoCoupons: true,
		coupons: [],
		searchInput: '',
		banners: [
			{picUrl: '../../image/ckb/banner1.jpg', businessId: '1'},
			{picUrl: '../../image/ckb/banner2.jpg', businessId: '2'},
			{picUrl: '../../image/ckb/banner3.jpg', businessId: '3'}]

	},
	onLoad: function () {

	},
	clickMenuBtn: function (e) {
		console.log(e.currentTarget.dataset.link)
		wx.navigateTo({
			url: e.currentTarget.dataset.link,
		})
	}

})
