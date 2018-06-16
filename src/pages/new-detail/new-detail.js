var app = getApp()
Page({
	data: {
		map: {
			1: {title: '创客宝云铺商城新增蜂鸟订单专属平台红包', logo: 'http://i2.bvimg.com/649796/2e5e331aab07f7e3.jpg', id: '1'},
			2: {title: '祝所有女神节日快乐', logo: 'http://i2.bvimg.com/649796/e11401a0e3ab989b.jpg', id: '2'},
			3: {title: '创客宝入驻商家突飞猛进', logo: 'http://i2.bvimg.com/649796/792c5ad474c49308.jpg', id: '3'},
			4: {title: '实体商家免费加入创客宝,轻松实现月入过万', logo: 'http://i2.bvimg.com/649796/3618fa9647fe512e.jpg', id: '4'},
			5: {title: '创客宝回馈客户,随机立减百元大奖等你拿', logo: 'http://i2.bvimg.com/649796/a8ca6bc1fb01c84f.jpg', id: '5'},

			101: {title: '支付收益一多码付', logo: 'http://i2.bvimg.com/649796/48bb7e7f62cd6cc7.jpg', id: '101'},
			102: {title: '大数据中心,轻松锁客', logo: 'http://i2.bvimg.com/649796/9b2321b38534a662.jpg', id: '102'},
			103: {title: '创客宝,让零售更智慧', logo: 'http://i2.bvimg.com/649796/f228df888f30efa3.jpg', id: '103'},
			104: {title: '决战新零售的四要素', logo: 'http://i2.bvimg.com/649796/25eb46043ea06863.jpg', id: '104'},
			105: {title: '创客宝多码付全线启动', logo: 'http://i2.bvimg.com/649796/72a4d659fde343c4.jpg', id: '105'}
		},
		newsImg: '',
		title: ''
	},
	onLoad: function (params) {
		this.setData({
			newsImg: this.data.map[params.id].logo,
			title: this.data.map[params.id].title
		})
	}
})
