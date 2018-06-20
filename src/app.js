//app.js
App({
	serverHost: 'https://www.easy-mock.com/mock/5b2857a7397321317275c87b/api', // 服务器Host
	onLaunch: function () {},
	// 全局数据
	globalData: {
		userInfo: null,
		newsList: [
			// 新闻
			{
				title: '创客宝入驻商家突飞猛进',
				logo: 'http://i2.bvimg.com/649796/f8b21c027df0a0c8.png',
				id: '3',
				detailImgArr: ['http://i2.bvimg.com/649796/792c5ad474c49308.jpg']
			},
			{
				title: '创客宝云铺商城新增蜂鸟订单专属平台红包',
				logo: 'http://i2.bvimg.com/649796/529498f8ac94a9ea.png',
				id: '1',
				detailImgArr: ['http://i2.bvimg.com/649796/2e5e331aab07f7e3.jpg']
			},
			{
				title: '实体商家免费加入创客宝,轻松实现月入过万',
				logo: 'http://i2.bvimg.com/649796/a89c1236a325059d.png',
				id: '4',
				detailImgArr: ['http://i2.bvimg.com/649796/3618fa9647fe512e.jpg']
			},
			{
				title: '创客宝回馈客户,随机立减百元大奖等你拿',
				logo: 'http://i2.bvimg.com/649796/c9e44468856d94b3.png',
				id: '5',
				detailImgArr: ['http://i2.bvimg.com/649796/a8ca6bc1fb01c84f.jpg']
			},
			{
				title: '祝所有女神节日快乐',
				logo: 'http://i2.bvimg.com/649796/6f027d1cb7f45548.png',
				id: '2',
				detailImgArr: ['http://i2.bvimg.com/649796/e11401a0e3ab989b.jpg']
			},
		],
		// 案例
		exampleList: [
			{
				logo: 'http://i2.bvimg.com/649796/42b8382fb5e8211a.png',
				title: '支付收益一多码付',
				id: 101,
				detailImgArr: ['http://i2.bvimg.com/649796/48bb7e7f62cd6cc7.jpg']
			},
			{
				logo: 'http://i2.bvimg.com/649796/0aa922b25a24e1ad.png',
				title: '大数据中心,轻松锁客',
				id: 102,
				detailImgArr: ['http://i2.bvimg.com/649796/9b2321b38534a662.jpg']
			},
			{
				logo: 'http://i2.bvimg.com/649796/b55002be74b794ca.png',
				title: '创客宝,让零售更智慧',
				id: 103,
				detailImgArr: ['http://i2.bvimg.com/649796/f228df888f30efa3.jpg']
			},
			{
				logo: 'http://i2.bvimg.com/649796/45028c9a8830156c.png',
				title: '决战新零售的四要素',
				id: 104,
				detailImgArr: ['http://i2.bvimg.com/649796/25eb46043ea06863.jpg']
			},
			{
				logo: 'http://i2.bvimg.com/649796/10e02b8dd126cfb3.png',
				title: '创客宝多码付全线启动',
				id: 105,
				detailImgArr: ['http://i2.bvimg.com/649796/72a4d659fde343c4.jpg']
			},
			{
				logo: 'http://i4.bvimg.com/649796/95aef107c08d44ea.png',
				title: '创客宝扫码支付介绍',
				id: 106,
				detailImgArr: ['http://i4.bvimg.com/649796/009e2431a561ba6e.jpg',
					'http://i4.bvimg.com/649796/7b217a0b79c86359.jpg',
					'http://i4.bvimg.com/649796/d688784e826fce36.jpg',
					'http://i4.bvimg.com/649796/e55695f5d34b9e31.jpg',
					'http://i4.bvimg.com/649796/4230cc57f7b4efc0.jpg']
			}]
	},
	// 根据新闻和案例id获取详情
	getDetailById: function (id) {
		var newsArr = this.globalData.newsList
		var exampleArr = this.globalData.exampleList
		for (var i = 0; i < newsArr.length; i++) {
			if (newsArr[i].id === id) {
				return newsArr[i]
				break
			}
		}
		for (var j = 0; j < exampleArr.length; j++) {
			if (exampleArr[i].id === id) {
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
