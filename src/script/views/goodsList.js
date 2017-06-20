var headerTpl = require('../tpls/header.string')
var footerTpl = require('../tpls/footer.string')
var indexTpl = require('../tpls/goodsList.string')
var footer1Tpl = require('../tpls/footer1.string')
var commonUtil = require('../utils/common')

commonUtil.renderBody(indexTpl)
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)

var isShow=true;
var html=template('goodsList',{show:isShow})
$('.section').html(html)
$.ajax({
	url:'/api/search/hfindex/ajaxIndex',
	success:function(res){
		res=res
		var dateSource=res
		setTimeout(function(){
			dateSource['show']=!isShow
			var html=template('goodsList',dateSource)
			$('.section').html(html)
			console.log(dateSource)
		},1000)
	}
})
