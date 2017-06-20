
var indexTpl=require('../tpls/myShoppingCart.string')
var headerTpl=require('../tpls/header.string')
var footerTpl=require('../tpls/footer.string')
var commonUtil=require('../utils/common')


commonUtil.renderBody(indexTpl)
commonUtil.render(document.getElementById("header"),headerTpl)
commonUtil.render(document.getElementById("footer"),footerTpl)

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