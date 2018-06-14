var app = getApp()
Page({
	data: {
		companyName: '深圳市创客宝科技有限公司',
		userName: '苏国栋',
		phone: '13926578824'
	},
	onLoad: function () {},
	call: function () {
		wx.makePhoneCall({phoneNumber: this.data.phone})
	}

})
