//app.js

App({
	serverHost: 'https://www.iwin8.cc', // 服务器Host
	onLaunch: function () { },
	// 全局数据
	globalData: {
		userInfo: null,
		sessionId: ''
	},
	// 联系我们
	contentUs: function (data, cb) {
		var sessionId = this.globalData.sessionId
		wx.request({
			url: this.serverHost + '/module/leaveWord/save.do',
			data: data,
			header: {'Cookie': 'JSESSIONID=' + sessionId},
			method: 'POST',
			success: function (res) {
				if (res.statusCode === 200) {
					typeof cb == 'function' && cb(res)
				}
			}
		})
	},
	// 获取当前用户信息
	getUserInfo: function (cb) {
		var that = this
		if (this.globalData.userInfo) {
			typeof cb == 'function' && cb(this.globalData.userInfo)
		} else {
			//调用登陆接口
			wx.login({
				success: function (loginRes) {
					// 用户登录后获取code 回传开发服务器 获取openid
					console.log(loginRes)
					wx.getUserInfo({
						success: function (res) {
							that.globalData.userInfo = res.userInfo
							typeof cb == 'function' && cb(that.globalData.userInfo)
						}
					})
				}
			})
		}
	},
	// 保存客户问题
	saveCustomerProblem: function (data, cb) {
		wx.request({
			url: this.serverHost + '/module/leaveWord/save.do',
			data: data,
			method: 'POST',
			success: function (res) {
				if (res.statusCode === 200) {
					typeof cb == 'function' && cb(res)
				}
			}
		})
	}
})
