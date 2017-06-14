var indexTpl=require('../tpls/search.string')
var commonUtil=require('../utils/common')


commonUtil.renderBody(indexTpl)

var data = {};
data.list = [];
$('#search-input').blur(function(){
	data.list.unshift($(this).val());
	$('.history2').html(template('historyTel', data));
	window.location.href="goodsList.html";
})

$('#failback').click(function(){
	window.location.href="index.html"
});

$('#hot-content').click(function(){
	window.location.href="list.html"
});
