var headerTpl = require('../tpls/header.string')
var footerTpl = require('../tpls/footer.string')
var indexTpl = require('../tpls/login.string')

var commonUtil = require('../utils/common')

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
