$(function() {
	// 发送ajax请求，显示数据
	$.ajax({
		url : `${APP.baseUrl}/category/queryTopCategoryPaging`,
		type : 'get',
		data : {
			page : 1,
			pageSize : 10
		},
		success : function(msg) {
			console.log(msg);
			var html = template('categoryfirsttpl', msg)

			$('#categoryfirstbox').html(html);
		}
	})

})