var app = getApp()
Page({
	data: {
		companyName: '深圳市创客宝科技有限公司',
		userName: '苏先生',
		phone: '13926578824',
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
