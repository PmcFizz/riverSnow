//获取应用实例
var app = getApp()
Page({
	data: {
		newsArr: [
			{title: '创客宝入驻商家突飞猛进', logo: 'http://i2.bvimg.com/649796/f8b21c027df0a0c8.png', id: '3'},
			{title: '创客宝云铺商城新增蜂鸟订单专属平台红包', logo: 'http://i2.bvimg.com/649796/529498f8ac94a9ea.png', id: '1'},
			{title: '实体商家免费加入创客宝,轻松实现月入过万', logo: 'http://i2.bvimg.com/649796/a89c1236a325059d.png', id: '4'},
			{title: '创客宝回馈客户,随机立减百元大奖等你拿', logo: 'http://i2.bvimg.com/649796/c9e44468856d94b3.png', id: '5'},
			{title: '祝所有女神节日快乐', logo: 'http://i2.bvimg.com/649796/6f027d1cb7f45548.png', id: '2'},
		]
	},
	onLoad: function () {

	},
	goHref: function (even) {
		wx.navigateTo({url: '/pages/new-detail/new-detail?id=' + even.currentTarget.dataset.id})
	}

})
