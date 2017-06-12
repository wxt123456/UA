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
	    loop: false ,
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



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">  <div id=\"header\"></div>  <section>   	<div class=\"box1\">		<div class=\"swiper-container\">		    <div class=\"swiper-wrapper\">		        <div class=\"swiper-slide\">Slide 1</div>		        <div class=\"swiper-slide\">Slide 2</div>		        <div class=\"swiper-slide\">Slide 3</div>		    </div>	    <div class=\"swiper-pagination\"></div></div>	</div>	<div class=\"box2\">		<div>			猜你会喜欢		</div>		<ul>					</ul>	</div> 	 <div id=\"footer1\"></div>  </section>  <div id=\"footer\"></div></div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<header>	<ul>		<li class=\"yo-ico\">&#xe613;</li>		<li class=\"yo-ico\">&#xe656;</li>		<li>			<a href=\"\">				<img src=\"//resource.underarmour.cn/images/common/logo@2x.jpg\"/>			</a>		</li>		<li class=\"yo-ico\">&#xe606;</li>		<li class=\"yo-ico\">&#xe600;</li>	</ul></header>"

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