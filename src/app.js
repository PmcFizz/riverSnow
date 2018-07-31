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
				title: '天美汇餐饮管理有限公司旗下品牌天美汇休闲饮品隆重招商',
				id: '6',
				detailImgArr: ['http://mczaiyun.top/ckb/22.jpg',
					'http://mczaiyun.top/ckb/23.jpg',
					'http://mczaiyun.top/ckb/24.jpg',
					'http://mczaiyun.top/ckb/25.jpg',
					'http://mczaiyun.top/ckb/26.jpg']
			},
			{
				title: '深圳市天美汇餐饮管理有限公司怎么样？',
				logo: 'http://mczaiyun.top/ckb/1.jpg',
				id: '3',
				detailImgArr: ['http://mczaiyun.top/ckb/2.jpg']
			},
			{
				title: '深圳市天美汇餐饮管理有限公司联系方式',
				logo: 'http://mczaiyun.top/ckb/3.jpg',
				id: '1',
				detailImgArr: ['http://mczaiyun.top/ckb/4.jpg']
			},
			{
				title: '深圳市天美汇餐饮管理有限公司黄页',
				logo: 'http://mczaiyun.top/ckb/5.jpg',
				id: '4',
				detailImgArr: ['http://mczaiyun.top/ckb/6.jpg']
			},
			{
				title: '深圳市天美汇餐饮管理有限公司官方网站',
				logo: 'http://mczaiyun.top/ckb/7.jpg',
				id: '5',
				detailImgArr: ['http://mczaiyun.top/ckb/8.jpg']
			},
			{
				title: '深圳市天美汇餐饮管理有限公司地址在哪里？',
				logo: 'http://mczaiyun.top/ckb/9.jpg',
				id: '2',
				detailImgArr: ['http://mczaiyun.top/ckb/10.jpg']
			},
		],
		// 案例
		exampleList: [
			{
				logo: 'http://mczaiyun.top/ckb/21.jpg',
				title: '创客宝扫码支付介绍',
				id: 106,
				detailImgArr: ['http://mczaiyun.top/ckb/22.jpg',
					'http://mczaiyun.top/ckb/23.jpg',
					'http://mczaiyun.top/ckb/24.jpg',
					'http://mczaiyun.top/ckb/25.jpg',
					'http://mczaiyun.top/ckb/26.jpg']
			},
			{
				logo: 'http://mczaiyun.top/ckb/11.jpg',
				title: '支付收益一多码付',
				id: 101,
				detailImgArr: ['http://mczaiyun.top/ckb/12.jpg']
			},
			{
				logo: 'http://mczaiyun.top/ckb/13.jpg',
				title: '大数据中心,轻松锁客',
				id: 102,
				detailImgArr: ['http://mczaiyun.top/ckb/14.jpg']
			},
			{
				logo: 'http://mczaiyun.top/ckb/15.jpg',
				title: '创客宝,让零售更智慧',
				id: 103,
				detailImgArr: ['http://mczaiyun.top/ckb/16.jpg']
			},
			{
				logo: 'http://mczaiyun.top/ckb/17.jpg',
				title: '决战新零售的四要素',
				id: 104,
				detailImgArr: ['http://mczaiyun.top/ckb/18.jpg']
			},
			{
				logo: 'http://mczaiyun.top/ckb/19.jpg',
				title: '创客宝多码付全线启动',
				id: 105,
				detailImgArr: ['http://mczaiyun.top/ckb/20.jpg']
			}]
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
