var headerTpl = require('../tpls/header.string')
var footerTpl = require('../tpls/footer.string')
var indexTpl = require('../tpls/index.string')

var commonUtil = require('../utils/common')

commonUtil.renderBody(indexTpl)
commonUtil.render(document.getElementById('header'), headerTpl)
commonUtil.render(document.getElementById('footer'), footerTpl)


$('#myTemplate').tap(function(e){
	console.log($(e.target));
	$(e.target).next().toggle();
})


var myswiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false ,
    autoplay:2500,
    speed:2500,
    freeMode : true,
    // 如果需要分页器
    pagination: '.swiper-pagination'
})
