$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

	
});

// 配置全局的url
var	 APP = {
	baseUrl : 'http://fullstack.net.cn:3000'
}


// 获取的数据转换成json格式的函数
$.fn.serializeToJson = function() {
	var formAry = this.serializeArray();
	var result = {};
	formAry.forEach(function(item,index) {
		result[item.name] = item.value;
	});
	return result;
}


// 获取地址栏中的值
function getUrlParams (name) {

    var search = location.search.slice(1);
    var ary1 = search.split('&');

    for (var i = 0; i < ary1.length; i++) {
        var ary2 = ary1[i].split('=');
        if (ary2[0] == name) {
            return ary2[1];
        }
    }

    return -1;

}