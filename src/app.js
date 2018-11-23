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
				title: '创客宝电子名片-创客宝智慧云铺',
				logo: 'http://mczaiyun.top/ckb/301.png',
				id: '4',
				color:'red',
				detailImgArr: ['http://mczaiyun.top/ckb/301.png','http://mczaiyun.top/ckb/302.png',
					'http://mczaiyun.top/ckb/303.png','http://mczaiyun.top/ckb/304.png','http://mczaiyun.top/ckb/305.jpg']
			},
			{
				logo: 'http://mczaiyun.top/ckb/21.jpg',
				title: '创客宝扫码支付介绍',
				id: '6',
				color:'blue',
				detailImgArr: ['http://mczaiyun.top/ckb/22.jpg',
					'http://mczaiyun.top/ckb/23.jpg',
					'http://mczaiyun.top/ckb/24.jpg',
					'http://mczaiyun.top/ckb/25.jpg',
					'http://mczaiyun.top/ckb/26.jpg']
			},
			{
				title: '创客宝入驻商家突飞猛进',
				logo: 'http://mczaiyun.top/ckb/1.jpg',
				id: '3',
				color:'green',
				detailImgArr: ['http://mczaiyun.top/ckb/2.jpg']
			},
			{
				title: '创客宝云铺商城新增蜂鸟订单专属平台红包',
				logo: 'http://mczaiyun.top/ckb/3.jpg',
				id: '1',
				color:'red',
				detailImgArr: ['http://mczaiyun.top/ckb/4.jpg']
			},
			{
				title: '创客宝回馈客户,随机立减百元大奖等你拿',
				logo: 'http://mczaiyun.top/ckb/7.jpg',
				id: '5',
				color:'blue',
				detailImgArr: ['http://mczaiyun.top/ckb/8.jpg']
			},
			{
				title: '祝所有女神节日快乐',
				logo: 'http://mczaiyun.top/ckb/9.jpg',
				id: '2',
				color:'green',
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
