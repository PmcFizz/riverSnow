//获取应用实例
var app = getApp()
Page({
	data: {
		newsArr: [
			{title: '创客宝云铺商城新增蜂鸟订单专属平台红包', logo: 'http://i2.bvimg.com/649796/2e5e331aab07f7e3.jpg', id: '1'},
			{title: '祝所有女神节日快乐', logo: 'http://i2.bvimg.com/649796/e11401a0e3ab989b.jpg', id: '2'},
			{title: '创客宝入驻商家突飞猛进', logo: 'http://i2.bvimg.com/649796/792c5ad474c49308.jpg', id: '3'},
			{title: '实体商家免费加入创客宝,轻松实现月入过万', logo: 'http://i2.bvimg.com/649796/3618fa9647fe512e.jpg', id: '4'},
			{title: '创客宝回馈客户,随机立减百元大奖等你拿', logo: 'http://i2.bvimg.com/649796/a8ca6bc1fb01c84f.jpg', id: '5'}
		]
	},
	onLoad: function () {

	},
	goHref: function (even) {
		wx.navigateTo({url: '/pages/new-detail/new-detail?id=' + even.currentTarget.dataset.id})
	}

})
