var app = getApp()
Page({
	data: {
		newsImg: [],
		title: '',
		id: ''
	},
	onLoad: function (params) {
		var item = app.getDetailById(params.id)
		this.setData({
			newsImg: item.detailImgArr,
			title: item.title,
			id: params.id
		})
	}
})
