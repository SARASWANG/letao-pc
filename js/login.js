$(function() {
	// 单击登录按钮事件
	$('#loginBtn').on('click', function() {
		// 获取表单数据
		var result = $('#loginForm').serializeToJson();
		console.log(result);

		// 验证用户名是否为空
		if(!$.trim(result.username)) {
			alert('请输入用户名');
			return
		}

		// 验证密码是否为空
		if(!$.trim(result.password)) {
			alert('请输入密码');
			return
		}

		// 验证通过后，发送ajax请求
		$.ajax({
			url : APP.baseUrl + '/employee/employeeLogin',
			type : 'post',
			data : result,
			success : function(msg) {
				if (msg.success) {
					location.href = 'user.html';
				}
				else {
					alert('登录失败');
				}
			}
		})

	})
})

console.log(`${APP.baseUrl}/employee/employeeLogin`)