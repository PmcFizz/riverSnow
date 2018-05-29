var app = getApp()
Page({
	data: {
		menuArr: [
			{name: '关于我们', link: '/pages/aboutUs/aboutUs'},
			{name: '业务范围', link: '/pages/business/business'},
			{name: '优秀案例', link: '/pages/showExample/showExample'},
			{name: '您的问题', link: '/pages/yourProblem/yourProblem'},
			{name: '我的服务', link: '/pages/myService/myService'},
			{name: '联系我们', link: '/pages/contactUs/contactUs'}
		]
	},
	onLoad: function () {

	},
	clickMenuBtn: function (e) {
		console.log(e.currentTarget.dataset.link)
		wx.redirectTo({
			url: e.currentTarget.dataset.link,
		})
	}

})
