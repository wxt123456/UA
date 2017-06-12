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
