!function(t){function i(e){if(s[e])return s[e].exports;var a=s[e]={exports:{},id:e,loaded:!1};return t[e].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var s={};i.m=t,i.c=s,i.p="",i(0)}([function(t,i,s){t.exports=s(14)},,,,function(t,i){t.exports='<header>\t<ul>\t\t<li class="yo-ico"><a href="goodsList.html">&#xe613;</a></li>\t\t<li class="yo-ico">\t<a href="search.html">&#xe656;</a></li>\t\t<li>\t\t\t<a href="index.html">\t\t\t\t<img src="//resource.underarmour.cn/images/common/logo@2x.jpg"/>\t\t\t</a>\t\t</li>\t\t<li class="yo-ico"><a href="login.html">&#xe606;</a></li>\t\t<li class="yo-ico"><a href="myShoppingCart.html">&#xe600;</a></li>\t</ul></header>'},function(t,i){t.exports='<div>\t<ul>\t\t<li>品牌故事</li>|\t\t<li>客户服务</li>|\t\t<li class="yo-ico">&#xe60b;</li>|\t\t<li class="yo-ico">&#xe60a;</li>|\t\t<li class="yo-ico">&#xe618;</li>\t</ul></div>'},function(t,i){var s={renderBody:function(t){$("body").prepend(t)},render:function(t,i){t.innerHTML=i}};t.exports=s},,,,,,,,function(t,i,s){s(15)},function(t,i,s){var e=s(4),a=s(5),o=s(16),l=s(6);l.renderBody(o),l.render(document.getElementById("header"),e),l.render(document.getElementById("footer"),a);new Swiper(".swiper-container",{loop:!1});$("#tap-reg").tap(function(){console.log(4455),$(this).parent(".swiper-slide").hide().siblings().show()}),$("#tap-log").tap(function(){$(this).parent(".swiper-slide").hide().siblings().show()}),console.log(Swiper.realIndex),$("#gender").tap(function(t){$(t.target).addClass("curt").siblings().removeClass("curt")}),$("#agree-items").tap(function(t){$(t.target).parent().find(".isok").toggle()}),$("#rember .left").tap(function(t){$(t.target).parent().find(".isok").toggle()}),$(".form-input").each(function(){$(this).find("input").blur(function(){var t,i=!1,s=$(this).attr("data-inputType"),e={maillib:[],phonelib:[],pwdlib:[]};switch(console.log(s),s){case"log-user":case"log-pwd":case"log-yzm":break;case"reg-mail":i=(t=/([-a-zA-z0-9]{1,63}\.)+[-a-zA-Z0-9]{1,63}/).test(s),console.log(t.test(s));break;case"reg-phone":i=(t=/^1[34578]\d{9}$/).test(s),console.log(t.test(s));break;case"reg-iyzm":case"reg-pyzm":break;case"reg-pwd":t=/( ([a-zA-Z]+)([0-9]+) ){6-14}/}i?$(this).parent().siblings(".msg-tip").hide():$(this).parent().siblings(".msg-tip").show(),postMessage(e)})})},function(t,i){t.exports='<div class="m-index">  <div id="header"></div>  <section>        <div class="swiper-container">            <div class="swiper-wrapper">                <div class="swiper-slide">                  <form action="" method="post" name="formUser">                    <div class="log-msg">                    \t<h3>会员登录</h3>                    \t<div class="form-box">                    \t\t<div class="form-input">                    \t\t\t<input type="text" placeholder="邮箱/手机" id="mobile" data-inputType="log-user">                    \t\t</div>                    \t\t<span class="msg-tip">请输入有效的用户名或密码</span>                    \t</div>                        <div class="form-box">                            <div class="form-input">                                <input type="text" placeholder="密码" id="pwd"  data-inputType="log-pwd">                            </div>                            <span class="msg-tip">请输入有效的用户名或密码</span>                        </div>                    \t<div class="form-box">                    \t\t<div class="form-input yzm-box">                    \t\t\t<input type="text" placeholder="验证码" id="zphone"  data-inputType="log-yzm">                                <label for="zphone">获取手机验证码</label>                    \t\t</div>                    \t\t<span class="msg-tip">请输入图片验证码</span>                    \t</div>                    \t<div id="rember">                    \t\t<div class="left">                    \t\t\t     <i class="yo-ico">&#xe646;</i>                                <i class="yo-ico isok">&#xe65d;</i>                                <span>记住我</span>                    \t\t</div>                    \t\t<a href="###">忘记密码</a>                    \t</div>                    \t<div class="btn-login">                    \t\t立即登录                    \t</div>                    </div>                  </form>            \t\t<div class="reg-box">            \t\t\t<h3>会员注册</h3>            \t\t\t<p>注册成为UA官网会员即可:</p>            \t\t\t<ul>            \t\t\t\t<li>第一时间获得我们的最新产品和活动资讯</li>            \t\t\t\t<li>享有更全面的售后服务</li>            \t\t\t\t<li>有机会参与我们的会员回馈活动</li>            \t\t\t</ul>            \t\t</div>            \t\t<div id="tap-reg" class="swiper-pagination">立即注册</div>            \t\t<div class="page-bottom">            \t\t\t<div class="i-box">            \t\t\t\t<i class="yo-ico">&#xe64e;</i>&nbsp;&nbsp;            \t\t\t\t<i class="yo-ico">&#xe6f2;</i>            \t\t\t</div>            \t\t</div>                </div>                <div class="swiper-slide">                    <div class="btn-login onon" id="tap-log">                        立即登录                    </div>                    <div class="show-bar"></div>                     <div class="log-msg">                        <h3>会员登录</h3>                          <form action="msg.php" method="post">                            <div class="form-box">                                <div class="form-input">                                    <p>邮箱</p>                                    <input type="text" placeholder="请输入邮箱" id="reg-mail" data-inputType="reg-mail">                                </div>                                <span class="msg-tip">邮箱格式不正确，请重新输入</span>                            </div>                            <div class="form-box">                                <div class="form-input">                                    <p>手机号码</p>                                    <input type="text" placeholder="请输入手机号" id="pwd" data-inputType="log-pwd" data-inputType="reg-phone">                                </div>                                <span class="msg-tip">手机号码格式不正确，请重新输入</span>                            </div>                            <div class="form-box">                                <div class="form-input">                                    <p>图片验证码</p>                                    <input type="text" placeholder="图片验证码" id="zimg" data-inputType="log-iyzm" data-inputType="reg-iyzm">                                    <img src="" alt="">                                    <a href="##">换一张</a>                                </div>                                <span class="msg-tip">请输入图片验证码</span>                            </div>                            <div class="form-box">                                <div class="form-input" style="position: relative;">                                    <p>手机验证码</p>                                    <input type="text" placeholder="手机验证码" id="reg-zphone" data-inputType="log-pyzm" data-inputType="reg-pyzm">                                    <label for="reg-zphone" id="reg-label">获取验证码</label>                                </div>                                <span class="msg-tip">请输入手机验证码</span>                            </div>                            <div class="form-box">                                <div class="form-input">                                    <p>密码</p>                                    <input type="text" placeholder="密码" id="reg-pwd" placeholder="8-16个字符，必须包含英文、数字、下划线中的两种" data-inputType="reg-pwd">                                </div>                                <span class="msg-tip">8-16个字符，必须包含英文、数字、下划线中的两种</span>                            </div>                             <div class="form-box">                                <div class="form-input">                                    <p>性别</p>                                    <div  id="gender">                                      <div class="gender curt" id="man">男</div>                                      <div class="gender" id="woman">女</div>                                    </div>                                </div>                            </div>                            <div id="agree-items">                                <p class="msg-ok">                                     <i class="yo-ico">&#xe646;</i>                                     <i class="yo-ico isok">&#xe65d;</i>                                    <span>我愿意接受来自UA中国官方商城的活动邮件</span>                                </p>                                <p class="msg-ok">                                    <i class="yo-ico">&#xe646;</i>                                     <i class="yo-ico isok">&#xe65d;</i>                                    <span>我已阅读并同意《《<a href="###">网站使用规则</a>》》</span>                                </p>                            </div>                            <div class="btn-login swiper-pagination" id="zhuce">                                立即注册                            </div>                        </form>                    </div>                </div>            </div>        </div>  </section>  <div id="footer"></div></div>'}]);