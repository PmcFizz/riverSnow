//index.js
//获取应用实例
var app = getApp()
Page({
	data: {
		newsArr: [
			{logo: 'http://i2.bvimg.com/649796/42b8382fb5e8211a.png', title: '支付收益一多码付', id: 101},
			{logo: 'http://i2.bvimg.com/649796/0aa922b25a24e1ad.png', title: '大数据中心,轻松锁客', id: 102},
			{logo: 'http://i2.bvimg.com/649796/b55002be74b794ca.png', title: '创客宝,让零售更智慧', id: 103},
			{logo: 'http://i2.bvimg.com/649796/45028c9a8830156c.png', title: '决战新零售的四要素', id: 104},
			{logo: 'http://i2.bvimg.com/649796/10e02b8dd126cfb3.png', title: '创客宝多码付全线启动', id: 105},
			{logo: 'http://i4.bvimg.com/649796/95aef107c08d44ea.png', title: '创客宝扫码支付介绍', id: 106},
		],
	},
	onLoad: function () {},
	getExampleList: function () {
		var _self = this
		app.getExampleList({}, function (res) {
			if (res.code === 0) {
				_self.setData({newsArr: res.data})
			}
		})
	},
	goHref: function (even) {
		wx.navigateTo({url: '/pages/new-detail/new-detail?id=' + even.currentTarget.dataset.id})
	}

})
