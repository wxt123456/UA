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

	module.exports = "<div></div>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">  <div id=\"header\"></div>  <section>    <div class=\"log-msg\">    	<h3>会员登录</h3>    	<div class=\"form-box\">    		<div class=\"form-input\">    			<input type=\"text\" placeholder=\"邮箱/手机\">    		</div>    		<span class=\"msg-tip\"></span>    	</div>    	<div class=\"form-box\">    		<div class=\"form-input\">    			<input type=\"text\" placeholder=\"密码\">    		</div>    		<span class=\"msg-tip\"></span>    	</div>    	<div id=\"rember\">    		<div class=\"left\">    			<i class=\"yo-ico\"></i>    			<span>记住我</span>    		</div>    		<a href=\"###\">忘记密码</a>    	</div>    	<div class=\"btn-login\">    		立即登录    	</div>    </div>				<div class=\"reg-box\">			<h3>会员注册</h3>			<p>注册成为UA官网会员即可:</p>			<ul>				<li>第一时间获得我们的最新产品和活动资讯</li>				<li>享有更全面的售后服务</li>				<li>有机会参与我们的会员回馈活动</li>			</ul>		</div>		<div id=\"reg-im\">立即注册</div>		<div class=\"page-bottom\">			<div class=\"i-box\">				<i class=\"yo-ico\">&#xe64e;</i>&nbsp;&nbsp;				<i class=\"yo-ico\">&#xe6f2;</i>			</div>		</div>  </section>  <div id=\"footer\"></div></div>"

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