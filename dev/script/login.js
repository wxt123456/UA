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

	module.exports = __webpack_require__(14);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<header>	<ul>		<li class=\"yo-ico\">&#xe613;</li>		<li class=\"yo-ico\">&#xe656;</li>		<li>			<a href=\"index.html\">				<img src=\"//resource.underarmour.cn/images/common/logo@2x.jpg\"/>			</a>		</li>		<li class=\"yo-ico\">&#xe606;</li>		<li class=\"yo-ico\">&#xe600;</li>	</ul></header>"

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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	__webpack_require__(15)



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(4)
	var footerTpl = __webpack_require__(5)
	var indexTpl = __webpack_require__(16)

	var commonUtil = __webpack_require__(6)

	commonUtil.renderBody(indexTpl)
	commonUtil.render(document.getElementById('header'), headerTpl)
	commonUtil.render(document.getElementById('footer'), footerTpl)



	function get_mobile_code(){
	      $.post(
					'/mock2/sms.php',
					{mobile:jQuery.trim($('#mobile').val())},
					function(msg) {
	          // alert(jQuery.trim(unescape(msg)));
						// if(msg=='提交成功'){
						RemainTime();
						// console.log(msg)
	        }
				);
		};
		var iTime = 59;
		var Account;
		function RemainTime(){
			document.getElementById('zphone').disabled = true;
			var iSecond,sSecond="",sTime="";
			if (iTime >= 0){
				iSecond = parseInt(iTime%60);
				iMinute = parseInt(iTime/60)
				if (iSecond >= 0){
					if(iMinute>0){
						sSecond = iMinute + "分" + iSecond + "秒";
					}else{
						sSecond = iSecond + "秒";
					}
				}
				sTime=sSecond;
				if(iTime==0){
					clearTimeout(Account);
					sTime='获取手机验证码';
					iTime = 59;
					document.getElementById('zphone').disabled = false;
				}else{
					Account = setTimeout("RemainTime()",1000);
					iTime=iTime-1;
				}
			}else{
				sTime='没有倒计时';
			}
			document.getElementById('zphone').value = sTime;
		}




	// swiper
	// 
	var mySwiper4 = new Swiper('.swiper-container',{
		// effect : 'flip'
		// pagination : '.swiper-pagination'
	})
	$('#tap-reg').tap(function(){
		console.log(4455);
		var hideContent = $(this).parent(".swiper-slide");
		hideContent.hide().siblings().show();
	})
	$('#tap-log').tap(function(){
		var hideContent = $(this).parent(".swiper-slide")
		hideContent.hide().siblings().show();
	})


	console.log(Swiper.realIndex);

	$('#gender').tap(function(e){
		$(e.target).addClass('curt').siblings().removeClass('curt');
	});


	$('#agree-items').tap(function(e){
		$(e.target).parent().find('.isok').toggle();
	})

	$('#rember .left').tap(function(e){
		$(e.target).parent().find('.isok').toggle();
	})


	// /*随机生成4位验证码*/
	//  /*step1:将所有字母，数字装入一个数组备用*/
	//  var codes=[];
	//  //数字:48-57;
	//  for(var i=48;i<57;codes.push(i),i++);
	//  /*console.log(codes);*/
	// //大写字母:65-90;
	// for(var i=60;i<90;codes.push(i),i++);
	// //小写字母:97-122;
	// for(var i=97;i<122;codes.push(i),i++);
	// function getCode() {
	//     var arr = [];
	//     for (var i = 0; i < 4; i++) {   //从0-61之间取随机数
	// var index = Math.floor(Math.random() * (61 - 0 + 1) + 0);
	// var char = String.fromCharCode(codes[index]);
	// arr.push(char);
	//     }
	//     return arr.join("")
	// }
	// function trim(str){
	//     var reg=/(^\s+)|(\s+$)/g;
	//     return str.replace(reg,"");
	// }
	// while (true){
	//     var code=getCode();
	//     var input=prompt("输入验证码:"+code);
	//     var reg=/^[a-zA-Z0-9]{4}$/;
	//     if(reg.test(input)) {
	//         if (input.toLowerCase() == code.toLowerCase()) {
	//             document.write("登录成功");
	//             break;
	//         } else {
	//             alert("验证码错误！");
	//         }
	//     }else {
	//         alert("验证码格式错误")
	//     }
	// };



/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">  <div id=\"header\"></div>  <section>        <div class=\"swiper-container\">            <div class=\"swiper-wrapper\">                <div class=\"swiper-slide\">                  <form action=\"\" method=\"post\" name=\"formUser\">                    <div class=\"log-msg\">                    	<h3>会员登录</h3>                    	<div class=\"form-box\">                    		<div class=\"form-input\">                    			<input type=\"text\" placeholder=\"手机\" id=\"mobile\">                    		</div>                    		<span class=\"msg-tip\"></span>                    	</div>                        <div class=\"form-box\">                            <div class=\"form-input\">                                <input type=\"text\" placeholder=\"密码\" id=\"pwd\">                            </div>                            <span class=\"msg-tip\"></span>                        </div>                    	<div class=\"form-box\">                    		<div class=\"form-input yzm-box\">                    			<input type=\"text\" placeholder=\"验证码\" id=\"zphone\">                                <label for=\"zphone\">获取手机验证码</label>                    		</div>                    		<span class=\"msg-tip\"></span>                    	</div>                    	<div id=\"rember\">                    		<div class=\"left\">                    			<i class=\"yo-ico\"></i>                    			<i class=\"yo-ico\">&#xe646;</i>                                <i class=\"yo-ico isok\">&#xe65d;</i>                                <span>记住我</span>                    		</div>                    		<a href=\"###\">忘记密码</a>                    	</div>                    	<div class=\"btn-login\">                    		立即登录                    	</div>                    </div>                  </form>            		<div class=\"reg-box\">            			<h3>会员注册</h3>            			<p>注册成为UA官网会员即可:</p>            			<ul>            				<li>第一时间获得我们的最新产品和活动资讯</li>            				<li>享有更全面的售后服务</li>            				<li>有机会参与我们的会员回馈活动</li>            			</ul>            		</div>            		<div id=\"tap-reg\" class=\"swiper-pagination\">立即注册</div>            		<div class=\"page-bottom\">            			<div class=\"i-box\">            				<i class=\"yo-ico\">&#xe64e;</i>&nbsp;&nbsp;            				<i class=\"yo-ico\">&#xe6f2;</i>            			</div>            		</div>                </div>                                <div class=\"swiper-slide\">                    <div class=\"btn-login onon\" id=\"tap-log\">                        立即登录                    </div>                    <div class=\"show-bar\"></div>                     <div class=\"log-msg\">                        <h3>会员登录</h3>                          <form action=\"msg.php\" method=\"post\">                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>邮箱</p>                                    <input type=\"text\" placeholder=\"手机\" id=\"reg-mobile\">                                </div>                                <span class=\"msg-tip\"></span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>手机号码</p>                                    <input type=\"text\" placeholder=\"密码\" id=\"pwd\">                                </div>                                <span class=\"msg-tip\"></span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>图片验证码</p>                                    <input type=\"text\" placeholder=\"图片验证码\" id=\"zimg\">                                    <img src=\"\" alt=\"\">                                    <a href=\"##\">换一张</a>                                </div>                                <span class=\"msg-tip\"></span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\" style=\"position: relative;\">                                    <p>手机验证码</p>                                    <input type=\"text\" placeholder=\"手机验证码\" id=\"reg-zphone\">                                    <label for=\"reg-zphone\" id=\"reg-label\">获取验证码</label>                                </div>                                <span class=\"msg-tip\"></span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>密码</p>                                    <input type=\"text\" placeholder=\"密码\" id=\"reg-pwd\" placeholder=\"8-16个字符，必须包含英文、数字、下划线中的两种\">                                </div>                                <span class=\"msg-tip\"></span>                            </div>                             <div class=\"form-box\">                                <div class=\"form-input\" id=\"gender\">                                    <p>性别</p>                                    <div class=\"gender curt\" id=\"man\">男</div>                                    <div class=\"gender\" id=\"woman\">女</div>                                </div>                                <span class=\"msg-tip\"></span>                            </div>                            <div id=\"agree-items\">                                <p class=\"msg-ok\">                                     <i class=\"yo-ico\">&#xe646;</i>                                     <i class=\"yo-ico isok\">&#xe65d;</i>                                    <span>我愿意接受来自UA中国官方商城的活动邮件</span>                                </p>                                <p class=\"msg-ok\">                                    <i class=\"yo-ico\">&#xe646;</i>                                     <i class=\"yo-ico isok\">&#xe65d;</i>                                    <span>我已阅读并同意《《<a href=\"###\">网站使用规则</a>》》</span>                                </p>                            </div>                            <div class=\"btn-login swiper-pagination\" id=\"zhuce\">                                立即注册                            </div>                        </form>                    </div>                </div>            </div>        </div>  </section>  <div id=\"footer\"></div></div>"

/***/ })
/******/ ]);