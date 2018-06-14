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
		newsArr: [{title: '创客宝云铺商城新增蜂鸟订单专属平台红包', logo: '../../image/ckb/news-3.jpg', id: '1'},
			{title: '祝所有女神节日快乐', logo: '../../image/ckb/news-4.jpg', id: '2'},
			{title: '创客宝入驻商家突飞猛进', logo: '../../image/ckb/news-5.jpg', id: '3'},
			{title: '实体商家免费加入创客宝,轻松实现月入过万', logo: '../../image/ckb/news-6.jpg', id: '4'},
			{title: '创客宝回馈客户,随机立减百元大奖等你拿', logo: '../../image/ckb/news-7.jpg', id: '5'}],
		picArr: ['../../image/ckb/2.png', '../../image/ckb/3.png', '../../image/ckb/5.png', '../../image/ckb/6.png', '../../image/ckb/7.png']

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
