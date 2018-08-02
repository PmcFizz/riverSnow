var app = getApp()
Page({
	data: {
		id: 1,
		title: ''
	},
	onLoad: function (params) {
		var item = app.getDetailById(params.id)
		this.setData({
			id: item.id,
			title: item.title
		})
	}
})
