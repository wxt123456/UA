/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(2)



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/



	var indexTpl=__webpack_require__(3)
	var headerTpl=__webpack_require__(4)
	var footerTpl=__webpack_require__(5)
	var commonUtil=__webpack_require__(6)
	var footer1Tpl = __webpack_require__(7)

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



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">  <div id=\"header\"></div>  <section>   	<div class=\"box1\">			<div class=\"swiper-container\">			    <div class=\"swiper-wrapper\">			        <div class=\"swiper-slide\"><img class=\"img1\" src=\"//resource.underarmour.cn/resources/nprdimg/2017/4/7/14915555471708358_750X800.png\"/></div>			        <div class=\"swiper-slide\"><img class=\"img2\" src=\"//resource.underarmour.cn/resources/nprdimg/2017/4/7/1491555555888169_750X800.png\"/></div>			        <div class=\"swiper-slide\"><img class=\"img3\" src=\"//resource.underarmour.cn/resources/nprdimg/2017/4/7/14915555526861189_750X800.png\"/></div>			        <div class=\"swiper-slide\"><img class=\"img4\" src=\"//resource.underarmour.cn/resources/nprdimg/2017/4/7/14915555495811255_750X800.png\"/></div>			        <div class=\"swiper-slide\"><img class=\"img5\" src=\"//resource.underarmour.cn/resources/nprdimg/2017/4/7/14915555443712434_750X800.png\"/></div>			    </div>		    <div class=\"swiper-pagination\"></div>			</div>			<div class=\"goods\">				<header>					<p>男士UA Curry 3篮球鞋</p>					<span>￥1299.00</span>				</header>					<ol id=\"color\">						<li><span></span></li>						<li><span></span></li>						<li><span></span></li>						<li><span></span></li>						<li><span></span></li>						<li><span></span></li>						<li><span></span></li>						<li><span></span></li>						<li><span></span></li>					</ol>				<footer>					<div class=\"left\">						<p>颜色：小岛蓝（458）</p>						<p>STYLE#1269279</p>					</div>					<div class=\"right\">						<p><span class=\"yo-ico\">&#xe6f2;</span>分享</p>					</div>				</footer>				<aside>					下单后30分钟内未付款，订单将自动取消，请您尽快完成支付！				</aside>			</div>		</div>		<div class=\"box2\">			<div>				猜你会喜欢			</div>			<ul>							</ul>		</div> 	 <div id=\"footer1\"></div>  </section>  <div id=\"footer\"></div></div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<header>	<ul>		<li class=\"yo-ico\"><a href=\"goodsList.html\">&#xe613;</a></li>		<li class=\"yo-ico\">	<a href=\"search.html\">&#xe656;</a></li>		<li>			<a href=\"index.html\">				<img src=\"//resource.underarmour.cn/images/common/logo@2x.jpg\"/>			</a>		</li>		<li class=\"yo-ico\"><a href=\"login.html\">&#xe606;</a></li>		<li class=\"yo-ico\"><a href=\"myShoppingCart.html\">&#xe600;</a></li>	</ul></header>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div>	<ul>		<li>品牌故事</li>|		<li>客户服务</li>|		<li class=\"yo-ico\">&#xe60b;</li>|		<li class=\"yo-ico\">&#xe60a;</li>|		<li class=\"yo-ico\">&#xe618;</li>	</ul></div>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var common = {
	  renderBody: function (tpl) {
	    $('body').prepend(tpl)
	  },
	  render: function (obj, tpl) {
	    obj.innerHTML = tpl
	  }
	}

	module.exports = common



/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "<div>	<header>		<p class=\"yo-ico\">&#xe64e;</p>		<p class=\"yo-ico\">&#xe6f2;</p>	</header>	<footer>		<input type=\"text\" placeholder=\"输入邮箱订阅UA最新电子资讯\"/>		<button>订阅</button>	</footer></div>"

/***/ })
/******/ ]);