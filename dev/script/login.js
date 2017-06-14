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
	  loop: false
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


	// 表单验证
	// 添加blur事件
	$('.form-input').each(function() {
	  $(this).find('input').blur(function(){
	    var flag = false;
	    var iMsg = $(this).attr('data-inputType');
	    var reg;
	    var loguser;
	    var logpwd;

	    var data ={
	      maillib : [],
	      phonelib : [],
	      pwdlib : []
	    }

	    console.log(iMsg);

	    switch (iMsg) {
	        case 'log-user':

	          break;
	        case 'log-pwd':

	          break;
	        case 'log-yzm':

	          break;
	        case 'reg-mail':
	            reg = /([-a-zA-z0-9]{1,63}\.)+[-a-zA-Z0-9]{1,63}/;
	            flag = reg.test(iMsg);
	            console.log(reg.test(iMsg));
	            break;
	        case 'reg-phone':

	        	reg = /^1[34578]\d{9}$/;
	            flag = reg.test(iMsg);
	            console.log(reg.test(iMsg));
	          break;
	        case 'reg-iyzm':

	          break;
	        case 'reg-pyzm':

	          break;
	        case 'reg-pwd':
	        	reg = /( ([a-zA-Z]+)([0-9]+) ){6-14}/;
	            break;

	      }



	      if(flag){
	        $(this).parent().siblings('.msg-tip').hide();
	      } else {
	        $(this).parent().siblings('.msg-tip').show();
	      }


	      postMessage(data)

	  })
	})

	// 将账号密码存到webworker



/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">  <div id=\"header\"></div>  <section>        <div class=\"swiper-container\">            <div class=\"swiper-wrapper\">                <div class=\"swiper-slide\">                  <form action=\"\" method=\"post\" name=\"formUser\">                    <div class=\"log-msg\">                    	<h3>会员登录</h3>                    	<div class=\"form-box\">                    		<div class=\"form-input\">                    			<input type=\"text\" placeholder=\"邮箱/手机\" id=\"mobile\" data-inputType=\"log-user\">                    		</div>                    		<span class=\"msg-tip\">请输入有效的用户名或密码</span>                    	</div>                        <div class=\"form-box\">                            <div class=\"form-input\">                                <input type=\"text\" placeholder=\"密码\" id=\"pwd\"  data-inputType=\"log-pwd\">                            </div>                            <span class=\"msg-tip\">请输入有效的用户名或密码</span>                        </div>                    	<div class=\"form-box\">                    		<div class=\"form-input yzm-box\">                    			<input type=\"text\" placeholder=\"验证码\" id=\"zphone\"  data-inputType=\"log-yzm\">                                <label for=\"zphone\">获取手机验证码</label>                    		</div>                    		<span class=\"msg-tip\">请输入图片验证码</span>                    	</div>                    	<div id=\"rember\">                    		<div class=\"left\">                    			     <i class=\"yo-ico\">&#xe646;</i>                                <i class=\"yo-ico isok\">&#xe65d;</i>                                <span>记住我</span>                    		</div>                    		<a href=\"###\">忘记密码</a>                    	</div>                    	<div class=\"btn-login\">                    		立即登录                    	</div>                    </div>                  </form>            		<div class=\"reg-box\">            			<h3>会员注册</h3>            			<p>注册成为UA官网会员即可:</p>            			<ul>            				<li>第一时间获得我们的最新产品和活动资讯</li>            				<li>享有更全面的售后服务</li>            				<li>有机会参与我们的会员回馈活动</li>            			</ul>            		</div>            		<div id=\"tap-reg\" class=\"swiper-pagination\">立即注册</div>            		<div class=\"page-bottom\">            			<div class=\"i-box\">            				<i class=\"yo-ico\">&#xe64e;</i>&nbsp;&nbsp;            				<i class=\"yo-ico\">&#xe6f2;</i>            			</div>            		</div>                </div>                <div class=\"swiper-slide\">                    <div class=\"btn-login onon\" id=\"tap-log\">                        立即登录                    </div>                    <div class=\"show-bar\"></div>                     <div class=\"log-msg\">                        <h3>会员登录</h3>                          <form action=\"msg.php\" method=\"post\">                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>邮箱</p>                                    <input type=\"text\" placeholder=\"请输入邮箱\" id=\"reg-mail\" data-inputType=\"reg-mail\">                                </div>                                <span class=\"msg-tip\">邮箱格式不正确，请重新输入</span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>手机号码</p>                                    <input type=\"text\" placeholder=\"请输入手机号\" id=\"pwd\" data-inputType=\"log-pwd\" data-inputType=\"reg-phone\">                                </div>                                <span class=\"msg-tip\">手机号码格式不正确，请重新输入</span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>图片验证码</p>                                    <input type=\"text\" placeholder=\"图片验证码\" id=\"zimg\" data-inputType=\"log-iyzm\" data-inputType=\"reg-iyzm\">                                    <img src=\"\" alt=\"\">                                    <a href=\"##\">换一张</a>                                </div>                                <span class=\"msg-tip\">请输入图片验证码</span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\" style=\"position: relative;\">                                    <p>手机验证码</p>                                    <input type=\"text\" placeholder=\"手机验证码\" id=\"reg-zphone\" data-inputType=\"log-pyzm\" data-inputType=\"reg-pyzm\">                                    <label for=\"reg-zphone\" id=\"reg-label\">获取验证码</label>                                </div>                                <span class=\"msg-tip\">请输入手机验证码</span>                            </div>                            <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>密码</p>                                    <input type=\"text\" placeholder=\"密码\" id=\"reg-pwd\" placeholder=\"8-16个字符，必须包含英文、数字、下划线中的两种\" data-inputType=\"reg-pwd\">                                </div>                                <span class=\"msg-tip\">8-16个字符，必须包含英文、数字、下划线中的两种</span>                            </div>                             <div class=\"form-box\">                                <div class=\"form-input\">                                    <p>性别</p>                                    <div  id=\"gender\">                                      <div class=\"gender curt\" id=\"man\">男</div>                                      <div class=\"gender\" id=\"woman\">女</div>                                    </div>                                </div>                            </div>                            <div id=\"agree-items\">                                <p class=\"msg-ok\">                                     <i class=\"yo-ico\">&#xe646;</i>                                     <i class=\"yo-ico isok\">&#xe65d;</i>                                    <span>我愿意接受来自UA中国官方商城的活动邮件</span>                                </p>                                <p class=\"msg-ok\">                                    <i class=\"yo-ico\">&#xe646;</i>                                     <i class=\"yo-ico isok\">&#xe65d;</i>                                    <span>我已阅读并同意《《<a href=\"###\">网站使用规则</a>》》</span>                                </p>                            </div>                            <div class=\"btn-login swiper-pagination\" id=\"zhuce\">                                立即注册                            </div>                        </form>                    </div>                </div>            </div>        </div>  </section>  <div id=\"footer\"></div></div>"

/***/ })
/******/ ]);