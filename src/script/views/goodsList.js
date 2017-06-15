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
	url:'/api/specific/ajaxproductlist/productlist/?p=3&id=2&cat=724&sport_gender=39&order=entity_id&dir=desc',
	success:function(res){
		res=JSON.parse(res)
		var dateSource=res
		setTimeout(function(){
			dateSource['show']=!isShow
			var html=template('goodsList',dateSource)
			$('.section').html(html)
		},1000)
	}
})
