
var indexTpl=require('../tpls/details.string')
var headerTpl=require('../tpls/header.string')
var footerTpl=require('../tpls/footer.string')
var commonUtil=require('../utils/common')
var footer1Tpl = require('../tpls/footer1.string')

commonUtil.renderBody(indexTpl)
commonUtil.render(document.getElementById("header"),headerTpl)
commonUtil.render(document.getElementById("footer"),footerTpl)
commonUtil.render(document.getElementById('footer1'), footer1Tpl)


var myswiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true ,
    autoplay:2500,
    speed:2500,
    freeMode : true,
    pagination: '.swiper-pagination'
})         


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
