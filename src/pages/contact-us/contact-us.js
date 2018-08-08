var app = getApp()
Page({
	data: {
		companyName: '深圳天美汇鸡翅包饭管理有限公司',
		userName: '汪小姐',
		phone: '13570806050',
		email:'wangbaohong789@126.com'
	},
	onLoad: function () {},
	getCompanyInfo: function () {
		var _self = this
		app.getCompanyInfo({}, function (res) {
			if (res.code === 0) {
				_self.setData({
					companyName: res.data,
					userName: res.data,
					phone: res.data,
					email: res.data,
				})
			}
		})
	},
	call: function () {
		wx.makePhoneCall({phoneNumber: this.data.phone})
	}

})
