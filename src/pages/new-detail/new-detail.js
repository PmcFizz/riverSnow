var app = getApp()
Page({
	data: {
		map: {
			1: {title: '创客宝云铺商城新增蜂鸟订单专属平台红包', logo: '../../image/ckb/news-3.jpg', id: '1'},
			2: {title: '祝所有女神节日快乐', logo: '../../image/ckb/news-4.jpg', id: '2'},
			3: {title: '创客宝入驻商家突飞猛进', logo: '../../image/ckb/news-5.jpg', id: '3'},
			4: {title: '实体商家免费加入创客宝,轻松实现月入过万', logo: '../../image/ckb/news-6.jpg', id: '4'},
			5: {title: '创客宝回馈客户,随机立减百元大奖等你拿', logo: '../../image/ckb/news-7.jpg', id: '5'}
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
