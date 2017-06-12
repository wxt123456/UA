
var indexTpl=require('../tpls/myShoppingCart.string')
var headerTpl=require('../tpls/header.string')
var footerTpl=require('../tpls/footer.string')
var commonUtil=require('../utils/common')


commonUtil.renderBody(indexTpl)
commonUtil.render(document.getElementById("header"),headerTpl)
commonUtil.render(document.getElementById("footer"),footerTpl)

$.ajax({
	url:'/api/specific/ajaxproductlist/productlist/?p=3&id=2&cat=724&sport_gender=39&order=entity_id&dir=desc',
	success:function(res){
		var str=''
		res=JSON.parse(res)
		var dateSource=res.info
		for(var i=0;i<dateSource.length;i++){
			str+='	<li>\
						<img src="'+dateSource[i].img+'" />\
						<article>'+dateSource[i].colors+'</article>\
						<p>'+dateSource[i].name+'</p>\
						<span>'+dateSource[i].price+'</span>\
					</li>'
		}
			$('.m-index section ul').html(str)
	}
})
