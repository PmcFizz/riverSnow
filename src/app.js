//app.js
App({
	serverHost: 'http://mczaiyun.top/ckb/', // 服务器Host
	onLaunch: function () {},
	// 全局数据
	globalData: {
		userInfo: null,
		newsList: [
			// 新闻
			{
				logo: 'http://mczaiyun.top/ckb/21.jpg',
				title: '关注天美汇鸡翅包飯明星网红小吃',
				color: 'red',
				id: '1',
				content: ['http://mczaiyun.top/tmh/e9.png', 'http://mczaiyun.top/tmh/e10.png', 'http://mczaiyun.top/tmh/e11.png', 'http://mczaiyun.top/tmh/e12.png', 'http://mczaiyun.top/tmh/e13.png']
			},
			{
				title: '天美汇鸡翅包饭配特调茶饮小资生活',
				logo: 'http://mczaiyun.top/ckb/1.png',
				id: '2',
				color: '#fdd34d',
				content: ['http://mczaiyun.top/tmh/e14.png', 'http://mczaiyun.top/tmh/e15.png', 'http://mczaiyun.top/tmh/e16.png']
			},
			{
				title: '网红美食天美汇鸡翅包饭十大加盟优势',
				logo: 'http://mczaiyun.top/ckb/3.png',
				id: '3',
				color: 'blue',
				content: ['http://mczaiyun.top/tmh/e17.png', 'http://mczaiyun.top/tmh/e18.png', 'http://mczaiyun.top/tmh/e19.png']
			},
			{
				title: '天美汇鸡翅包饭合作加盟类型',
				logo: 'http://mczaiyun.top/ckb/5.png',
				id: '4',
				color: '#f6ba40',
				content: ['http://mczaiyun.top/tmh/e20.png', 'http://mczaiyun.top/tmh/e21.png', 'http://mczaiyun.top/tmh/e22.png', 'http://mczaiyun.top/tmh/e23.png',
					'http://mczaiyun.top/tmh/e24.png', 'http://mczaiyun.top/tmh/e25.png', 'http://mczaiyun.top/tmh/e26.png']
			},
			{
				title: '加盟天美汇鸡翅包饭投资预算',
				logo: 'http://mczaiyun.top/ckb/7.png',
				id: '5',
				color: 'red',
				content: ['http://mczaiyun.top/tmh/e27.png', 'http://mczaiyun.top/tmh/e28.png', 'http://mczaiyun.top/tmh/e29.png']
			}
		],
		// 案例
		exampleList: []
	},
	// 根据新闻和案例id获取详情
	getDetailById: function (id) {
		var newsArr = this.globalData.newsList
		var exampleArr = this.globalData.exampleList
		for (var i = 0; i < newsArr.length; i++) {
			if (newsArr[i].id == id) {
				return newsArr[i]
				break
			}
		}
		for (var j = 0; j < exampleArr.length; j++) {
			if (exampleArr[j].id == id) {
				return exampleArr[j]
				break
			}
		}
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
