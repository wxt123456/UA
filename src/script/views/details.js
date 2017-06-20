
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
var arr=[	"https://resource.underarmour.cn/resources/nprdimg/2017/3/7/14888529261176581_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2016/11/18/14794682542275904_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/4/27/14932614638097041_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/5/5/14939687083365821_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/1/19/14848067645503516_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2016/12/2/14806612683146856_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/3/13/14893839787674952_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/1/5/14835956490181178_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2016/8/17/14714189096212618_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/2/21/14876599646837988_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2016/8/15/14712486183631785_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2016/12/2/14806611962054456_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/1/16/14845292313166286_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/1/18/14847091109381238_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/4/6/1491446963599231_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2016/8/16/14713281049535449_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/4/13/1492076145913529_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/5/9/1494297035208292_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2017/4/7/14915555471708358_320X384.png",
			"https://resource.underarmour.cn/resources/nprdimg/2016/8/18/14714857751625954_320X384.png"
]
$('#color li').on('click',function(){
	$('.box1 .img1')[0].src=arr[Math.round(Math.random()*20)]
	$('.box1 .img2')[0].src=arr[Math.round(Math.random()*20)]
	$('.box1 .img3')[0].src=arr[Math.round(Math.random()*20)]
	$('.box1 .img4')[0].src=arr[Math.round(Math.random()*20)]
	$('.box1 .img5')[0].src=arr[Math.round(Math.random()*20)]
})

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
