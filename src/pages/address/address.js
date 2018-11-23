var app = getApp()
Page({
	data: {
		menuArr: [
			{name: '关于我们', link: '/pages/aboutUs/aboutUs'},
			{name: '业务范围', link: '/pages/business/business'},
			{name: '您的问题', link: '/pages/yourProblem/yourProblem'},
			{name: '真诚服务', link: '/pages/myService/myService'},
			{name: '联系我们', link: '/pages/contactUs/contactUs'}
		]
	},
	onLoad: function () {},
	goMap: function () {
		wx.navigateTo({url: '/pages/map/map'})
	}

})
