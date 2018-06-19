//app.js
App({
	serverHost: 'https://www.easy-mock.com/mock/5b2857a7397321317275c87b/api', // 服务器Host
	onLaunch: function () {},
	// 全局数据
	globalData: {
		userInfo: null,
		sessionId: ''
	},
	// 获取首页banner
	getBanner: function (data, cb) {
		wx.reqest({
			url: this.serverHost + '/getBanner',
			data: data,
			method: 'GET',
			success: function (res) {
				if (res.statusCode === 200) {
					typeof cb == 'function' && cb(res)
				}
			}
		})
	},
	// 获取案例列表
	getExampleList: function (data, cb) {
		wx.reqest({
			url: this.serverHost + '/getExampleList',
			data: data,
			method: 'GET',
			success: function (res) {
				if (res.statusCode === 200) {
					typeof cb == 'function' && cb(res)
				}
			}
		})
	},
	// 获取新闻列表
	getNewsList: function (data, cb) {
		wx.reqest({
			url: this.serverHost + '/getNewsList',
			data: data,
			method: 'GET',
			success: function (res) {
				if (res.statusCode === 200) {
					typeof cb == 'function' && cb(res)
				}
			}
		})
	},
	// 获取公司信息
	getCompanyInfo: function (data, cb) {
		wx.reqest({
			url: this.serverHost + '/getCompanyInfo',
			data: data,
			method: 'GET',
			success: function (res) {
				if (res.statusCode === 200) {
					typeof cb == 'function' && cb(res)
				}
			}
		})
	}
})
