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


	var headerTpl = __webpack_require__(3)
	var footerTpl = __webpack_require__(4)
	var indexTpl = __webpack_require__(5)

	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(indexTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('footer'), footerTpl)


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<header>	<ul>		<li class=\"yo-ico\">&#xe613;</li>		<li class=\"yo-ico\">&#xe656;</li>		<li>			<a href=\"\">				<img src=\"//resource.underarmour.cn/images/common/logo@2x.jpg\"/>			</a>		</li>		<li class=\"yo-ico\">&#xe606;</li>		<li class=\"yo-ico\">&#xe600;</li>	</ul></header>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<div>	<ul>		<li>品牌故事</li>|		<li>客户服务</li>|		<li class=\"yo-ico\">&#xe60b;</li>|		<li class=\"yo-ico\">&#xe60a;</li>|		<li class=\"yo-ico\">&#xe618;</li>	</ul></div>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">  <div id=\"header\"></div>  <section>   	<div class=\"lunbo\">		<div class=\"swiper-container\">		    <div class=\"swiper-wrapper\">		        <div class=\"swiper-slide\">		        	<img src=\"https://resource.underarmour.cn/resources/images/BannerPic/homepage/KV/KV-Threadborne-20170516/kv08-mob.jpg\" alt=\"\" />		       		<div class=\"scroll\">		       			<h3>以全力以赴之势 带来不凡的穿着体验</h3>		       			<h4>铸就UA THREADBORNE SLINGFLEX非凡的舒适鞋面</h4>		       		</div>		       		<div class=\"scroll-btn\">		       			<a href=\"###\">立即购买</a>		       		</div>		        </div>		        <div class=\"swiper-slide\">		        	<img src=\"https://resource.underarmour.cn/resources/images/BannerPic/homepage/KV/KV-seasonal-lookbook-lifestyle-20170518/z09mob.jpg\" alt=\"\" />		       		<div class=\"scroll\">		       			<h3>UA CLOSE UP</h3>		       			<h4>本季热门潮流，凸显时尚个性，成为瞩目焦点</h4>		       		</div>		       		<div class=\"scroll-btn\">		       			<a href=\"###\">立即购买</a>		       			<a href=\"###\">了解更多</a>		       					       		</div>		        </div>		        <div class=\"swiper-slide\">		        	<img src=\"https://resource.underarmour.cn/resources/images/BannerPic/homepage/KV/KV-Threadborne-20170516/kv08-mob.jpg\" alt=\"\" />		       		<div class=\"scroll\">		       			<h3>UA革新再创</h3>		       			<h4>更佳材质 更赞体感</h4>		       		</div>		       		<div class=\"scroll-btn\">		       			<a href=\"###\">立即购买</a>		       					       		</div>		        </div>		    </div>		    <!-- 如果需要分页器 -->		    <div class=\"swiper-pagination\"></div>		</div>		   	</div>   	<article class=\"box-content\">		<div class=\"new-product\">			<p>UA春夏装备全新上市</p>			<h3>				<span>我们潜心改良装备&nbsp;&nbsp;&nbsp;让你专注提升表现</span>			</h3>			<div class=\"product-btn\">				<a href=\"#\">男子新品</a>				<a href=\"#\">女子新品</a>				<a href=\"#\">男童新品</a>				<a href=\"#\">女童新品</a>			</div>		</div>	</article>	<ul class=\"floor-box\">		<li class=\"floor\">			<div class=\"img\">				<img src=\"https://resource.underarmour.cn/resources/images/BannerPic/homepage/HP-2-1-20170605.jpg\" alt=\"\">			</div>			<h3>健身利器 贴身伴侣</h3>			<p>THREADBORNE ¾ UTILITY T恤</p>			<span>立即购买</span>		</li>				<li class=\"floor\">			<div class=\"img\">				<img src=\"https://resource.underarmour.cn/resources/images/BannerPic/homepage/HP-2-2_20170420.jpg\" alt=\"\">			</div>			<h3>在训练中 打造全新的自己</h3>			<p>女子训练装备</p>			<span>立即购买</span>		</li>		<li class=\"floor\">			<div class=\"img\">				<img src=\"https://resource.underarmour.cn/resources/images/BannerPic/homepage/banner/CURRY3ZERO-20170523/banner-3gm-20170523.jpg\" alt=\"\">			</div>			<h3>CURRY 3ZERO篮球鞋</h3>			<span>了解更多</span>		</li>	</ul>  </section>  <div id=\"footer\"></div></div>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var common = {
	  renderBody: function (tpl) {
	    var body = document.body
	    body.innerHTML = tpl + body.innerHTML
	  },
	  render: function (obj, tpl) {
	    obj.innerHTML = tpl
	  }
	}

	module.exports = common



/***/ })
/******/ ]);