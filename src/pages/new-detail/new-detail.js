var app = getApp()
Page({
	data: {
		content: '',
		title: ''
	},
	onLoad: function (params) {
		var item = app.getDetailById(params.id)
		this.setData({
			content: item.content,
			title: item.title
		})
	}
})
