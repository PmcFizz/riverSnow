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
				content: ' 深圳市天美汇餐饮管理有限公司位于深圳市天美汇餐饮管理有限公司。\n' +
				'                        \n' +
				'\t\t\t\t\t\t深圳市天美汇餐饮管理有限公司成立于2011年，公司人数11-50人公司位于深圳市天美汇餐饮管理有限公司，深圳市天美汇餐饮管理有限公司自成立以来一直从事酒水饮料、茶饮、天美汇休闲饮品业务，多年来受到同行企业的一致好评，深圳市天美汇餐饮管理有限公司旗下品牌天美汇休闲饮品隆重招商。\n' +
				'\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t天美汇休闲饮品市场分析： 随着我国居民生活水平的提高和消费观念的变化，消费者对健康、天然意识的不断提高，国内饮品市场对品种的需求也在发生变化。人们在去到一个时尚饮品店，不仅对饮品要求健康新鲜美味，还要求店铺的饮品种类多种多样，可以根据自己的心情、喜好来随意选择满意的产品。 天美汇休闲饮品加盟，公司有独特的技术或原料，能帮助你在市场竞争中占据更加有利的地位! 没创过业、没有自己经营过店面能开奶茶店吗?没问题!天美汇休闲饮品加盟项目总部全程指导教学，从技术培训到后期的开店经营，饮品的更新，价位的调整等专业运营老师指导，简化开店的步骤，您及时是没有任何经验，也能运营起属于自己的奶茶店!\n' +
				'\t\t\t\t\t\t\n'
			},
			{
				title: '深圳市天美汇餐饮管理有限公司怎么样？',
				logo: 'http://mczaiyun.top/ckb/1.jpg',
				id: '3',
				content: ' 深圳市天美汇餐饮管理有限公司是一家餐饮连锁有限公司，旗下有“天美汇”和“栗香果园”两大品牌，目前在深圳及广州各大商场和步行街设有多家专卖店及专柜。“天美汇”品牌主要经营：奶茶、果饮等时尚休闲饮料专卖店连锁，“栗香果园”品牌主要经营：特色干果等休闲食品的专卖连锁。公司在发展过程中，不断加强品牌的打造与升级，提高产品品质和服务质量，并不断挖掘新项目，经过多年努力，现已在深圳及广州各大商业旺区拥有三十多家连锁专卖店，凭借着精准的市场定位及技术不断更新，在餐饮领域迅速崛起。深圳市天美汇餐饮管理有限公司是一家充满生机和活力的企业。我们遵循“组织系统化，决策科学化，管理规范化，效率标准化”的经营方针，我们坚信：坚持以市场为导向，以创新为动力，以质量求生存，以发展求壮大，天美汇一定会赢得更美好的明天!\n' +
				'                        \n' +
				'\t\t\t\t\t\t深圳市天美汇餐饮管理有限公司成立于2011年，注册资金是1万-3万元，营业额为人民币10万元/年以下。'
			},
			{
				title: '深圳市天美汇餐饮管理有限公司联系方式',
				logo: 'http://mczaiyun.top/ckb/3.jpg',
				id: '1',
				content: '深圳市天美汇餐饮管理有限公司是一家餐饮连锁有限公司，旗下有“天美汇”和“栗香果园”两大品牌，目前在深圳及广州各大商场和步行街设有多家专卖店及专柜。“天美汇”品牌主要经营：奶茶、果饮等时尚休闲饮料专卖店连锁，“栗香果园”品牌主要经营：特色干果等休闲食品的专卖连锁。公司在发展过程中，不断加强品牌的打造与升级，提高产品品质和服务质量，并不断挖掘新项目，经过多年努力，现已在深圳及广州各大商业旺区拥有三十多家连锁专卖店，凭借着精准的市场定位及技术不断更新，在餐饮领域迅速崛起。深圳市天美汇餐饮管理有限公司是一家充满生机和活力的企业。我们遵循“组织系统化，决策科学化，管理规范化，效率标准化”的经营方针，我们坚信：坚持以市场为导向，以创新为动力，以质量求生存，以发展求壮大，天美汇一定会赢得更美好的明天!\n' +
				'                        \n' +
				'\t\t\t\t\t\t联系人：资料待更新电话：未知手机：未知传真：资料待更新邮编：资料待更新地址：深圳市天美汇餐饮管理有限公司'
			},
			{
				title: '深圳市天美汇餐饮管理有限公司黄页',
				logo: 'http://mczaiyun.top/ckb/5.jpg',
				id: '4',
				content: '\t公司名称\n\r' +
				'\t\t\t\t\t\t\t\t深圳市天美汇餐饮管理有限公司\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t企业类型\n' +
				'\t\t\t\t\t\t\t\t个体经营\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t主营产品\n' +
				'\t\t\t\t\t\t\t\t酒水饮料、茶饮、天美汇休闲饮品\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t税务登记号\n' +
				'\t\t\t\t\t\t\t\t781809140190152\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t营业执照号\n' +
				'\t\t\t\t\t\t\t\t286440785140722\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t注册资金\n' +
				'\t\t\t\t\t\t\t\t1万-3万元\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t公司注册年份\n' +
				'\t\t\t\t\t\t\t\t2011年\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t注册地\n' +
				'\t\t\t\t\t\t\t\t资料待更新\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t法人\n' +
				'\t\t\t\t\t\t\t\t资料待更新\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t年营业额\n' +
				'\t\t\t\t\t\t\t\t人民币10万元/年以下\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t公司人数\n' +
				'\t\t\t\t\t\t\t\t11-50人\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t联系人\n' +
				'\t\t\t\t\t\t\t\t资料待更新\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t手机\n' +
				'\t\t\t\t\t\t\t\t未知\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t电话\n' +
				'\t\t\t\t\t\t\t\t未知\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t传真\n' +
				'\t\t\t\t\t\t\t\t资料待更新\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\tE-mail\n' +
				'\t\t\t\t\t\t\t\t资料待更新\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t地址\n' +
				'\t\t\t\t\t\t\t\t深圳市天美汇餐饮管理有限公司\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t邮编\n' +
				'\t\t\t\t\t\t\t\t资料待更新\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\n' +
				'\t\t\t\t\t\t\t\t公司主页\n' +
				'\t\t\t\t\t\t\t\thttp://com1270783.shop.hao315.tv'
			},
			{
				title: '深圳市天美汇餐饮管理有限公司官方网站',
				logo: 'http://mczaiyun.top/ckb/7.jpg',
				id: '5',
				content: '深圳市天美汇餐饮管理有限公司是一家餐饮连锁有限公司，旗下有“天美汇”和“栗香果园”两大品牌，目前在深圳及广州各大商场和步行街设有多家专卖店及专柜。“天美汇”品牌主要经营：奶茶、果饮等时尚休闲饮料专卖店连锁，“栗香果园”品牌主要经营：特色干果等休闲食品的专卖连锁。公司在发展过程中，不断加强品牌的打造与升级，提高产品品质和服务质量，并不断挖掘新项目，经过多年努力，现已在深圳及广州各大商业旺区拥有三十多家连锁专卖店，凭借着精准的市场定位及技术不断更新，在餐饮领域迅速崛起。深圳市天美汇餐饮管理有限公司是一家充满生机和活力的企业。我们遵循“组织系统化，决策科学化，管理规范化，效率标准化”的经营方针，我们坚信：坚持以市场为导向，以创新为动力，以质量求生存，以发展求壮大，天美汇一定会赢得更美好的明天!\n' +
				'                        \n' +
				'                        官方网址是http://com1270783.shop.hao315.tv/'
			}
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
