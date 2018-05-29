var app = getApp()
Page({
	data: {
		menuArr: [
			{name: '关于我们', link: 'pages/aboutUs/aboutUs'},
			{name: '业务范围', link: 'pages/business/business'},
			{name: '优秀案例', link: 'pages/showExample/showExample'},
			{name: '联系我们', link: 'pages/joinUs/joinUs'}
		]
	},
	onLoad: function () {

	},
	clickMenuBtn: function (e) {
		console.log(1111111111)
		// wx.navigateTo({
		// 	url: e.currentTarget.dataset.link,
		// })
	}

})
