var app = getApp()
Page({
	data: {
		companyName: '深圳市天美汇餐饮管理有限公司',
		userName: '',
		phone: '0755-27931117',
		email: ''
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
