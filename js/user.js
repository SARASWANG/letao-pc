


$(function() {
	// 后端的数据显示在页面中
	$.ajax({
		type: 'get',
		url: `${APP.baseUrl}/user/queryUser`,
		data: {
			page: 1,
			pageSize: 100
		},
		success: function (response) {
			console.log(response);
			// 拼接数据
			var html = template('usertpl', response);
			// 渲染数据
			$('#usermessbox').append(html);


			// 事件委托，点击btn时，改变状态
			$('#usermessbox').on('click','.btnstatus', function() {

				// 获取当前按钮的状态
				var	status = $(this).data('isdelete');

				// 获取当前按钮的id值
				var id = $(this).data('id');


				// 更改状态，发送ajax请求
				$.ajax({
					url : `${APP.baseUrl}/user/updateUser`,
					type : 'post',
					data : {
						id: id,
						isDelete : status == 1 ? 0 : 1,
					},
					success : function(msg) {
						if (msg.success) {
							location.reload();
						}else {
							alert(msg.message);
						}
					}

				})

			})
		}
	});
})