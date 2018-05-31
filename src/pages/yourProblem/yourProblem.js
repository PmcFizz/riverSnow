//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		userInfo: {
			nickName: '',
			headerImg: '',
			name: '',
			phoneNo: '',
			email: '',
			problemContent: ''
		}
	},
	onLoad: function () {

	},
	nameInput: function (e) {
		var userInfoName = 'userInfo.name'
		this.setData({
			[userInfoName]: e.detail.value
		})
	},
	phoneNoInput: function (e) {
		var userInfoPhoneNo = 'userInfo.phoneNo'
		this.setData({
			[userInfoPhoneNo]: e.detail.value
		})
	},
	emailInput: function (e) {
		var userInfoEmail = 'userInfo.email'
		this.setData({
			[userInfoEmail]: e.detail.value
		})
	},
	problemContentInput: function (e) {
		var userInfoProblemContent = 'userInfo.problemContent'
		this.setData({
			[userInfoProblemContent]: e.detail.value
		})
	},
	clickSubmitData: function () {
		if (!this.data.userInfo.name) {
			wx.showToast({
				title: '请填写姓名',
				icon: 'none',
				duration: 1000
			})
			return false
		}
		if (!this.data.userInfo.phoneNo) {
			wx.showToast({
				title: '请填写手机号',
				icon: 'none',
				duration: 1000
			})
			return false
		}

		if (!this.data.userInfo.problemContent) {
			wx.showToast({
				title: '请填写问题内容',
				icon: 'none',
				duration: 1000
			})
			return false
		}

		var sendData = {
			nickName: this.data.userInfo.nickName,
			headerImg: this.data.userInfo.headerImg,
			name: this.data.userInfo.name,
			phoneNo: this.data.userInfo.phoneNo,
			email: this.data.userInfo.email,
			problemContent: this.data.userInfo.problemContent
		}
		app.saveCustomerProblem(sendData, function (res) {
			if (res.data.code == 200) {
				wx.showToast({
					title: '发送成功!',
					icon: 'success',
					duration: 2000
				})
			} else {
				wx.showToast({
					title: res.data.msg,
					icon: 'none',
					duration: 2000
				})
			}
		})
	}
})
