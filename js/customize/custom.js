

// var backgroundImageUrls = [
    // "https://img.xjh.me/random_img.php",
    // "https://www.dmoe.cc" //     樱花：https://www.dmoe.cc

//   夏沫：https://cdn.seovx.com
//   搏天：https://api.btstu.cn/doc/sjbz.php
//   姬长信：https://github.com/insoxin/API
//   保罗：https://api.paugram.com
//   岁月小筑：https://img.xjh.me
//   东方Project：https://img.paulzzh.com
// https://www.loliapi.com/acg/
// https://hefollo.com/apis.php?type=电脑端-动漫图片
// https://t.alcy.cc/moe
// https://3650000.xyz/
// https://pic.re/images

    // "url('/2023/09/12/2.jpg')",
    // "url('/2023/09/12/3.jpg')"
//   ];






//花花特效
//onload=function(){var click_cnt=0,$html=document.getElementsByTagName("html")[0],$body=document.getElementsByTagName("body")[0];$html.onclick=function(e){var $elem=document.createElement("b");$elem.style.color="#FFC0CB",$elem.style.zIndex=9999,$elem.style.position="absolute",$elem.style.select="none";var x=e.pageX,y=e.pageY;switch($elem.style.left=x-10+"px",$elem.style.top=y-20+"px",clearInterval(anim),++click_cnt){case 10:$elem.innerText="OωO";break;case 20:$elem.innerText="(๑•́ ∀ •̀๑)";break;case 30:$elem.innerText="(๑•́ ₃ •̀๑)";break;case 40:$elem.innerText="(๑•̀_•́๑)";break;case 50:$elem.innerText="（￣へ￣）";break;case 60:$elem.innerText="(╯°口°)╯(┴—┴";break;case 70:$elem.innerText="૮( ᵒ̌皿ᵒ̌ )ა";break;case 80:$elem.innerText="╮(｡>口<｡)╭";break;case 90:$elem.innerText="( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";break;case 100:case 101:case 102:case 103:case 104:case 105:$elem.innerText="(ꐦ°᷄д°᷅)";break;default:$elem.innerText="🌸"}$elem.style.fontSize=10*Math.random()+8+"px";var increase=0,anim;setTimeout((function(){anim=setInterval((function(){150==++increase&&(clearInterval(anim),$body.removeChild($elem)),$elem.style.top=y-20-increase+"px",$elem.style.opacity=(150-increase)/120}),8)}),70),$body.appendChild($elem)}};

//社会主义核心价值观
var a_idx = 0; jQuery(document).ready(function($) { $("body").click(function(e) { var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"); var $i = $("<span/>").text(a[a_idx]); a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY; let scrolly = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop; y = y - scrolly; $i.css({ "z-index": 999, "top": y - 20, "left": x, "position": "fixed", "font-weight": "bold", "color": "#ff6651" /*随机颜色写法："rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"*/ }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() { $i.remove(); });  }); });

//引入小心心特效
//!function (e, t, a) {function r() {for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");requestAnimationFrame(r)}function n() {var t = "function" == typeof e.onclick && e.onclick;e.onclick = function (e) {t && t(), o(e)}}function o(e) {var a = t.createElement("div");a.className = "heart", s.push({el: a,x: e.clientX - 5,y: e.clientY - 5,scale: 1,alpha: 1,color: c()}), t.body.appendChild(a)}function i(e) {var a = t.createElement("style");a.type = "text/css";try {a.appendChild(t.createTextNode(e))} catch (t) {a.styleSheet.cssText = e}t.getElementsByTagName("head")[0].appendChild(a)}function c() {return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"}var s = [];e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {setTimeout(e, 1e3 / 60)}, i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), n(), r()}(window, document);


//引入打赏功能
const rewardBtn = document.getElementById('rewardBtn');
const rewardImgContainer = document.getElementById('rewardImgContainer');

if(rewardBtn){
	rewardBtn.onclick = () => {
		rewardImgContainer.style.display = (rewardImgContainer.style.display === 'none' || rewardImgContainer.style.display === '') ? 'inline-flex' : 'none'
		setTimeout(() => {
			rewardImgContainer.style.opacity = (rewardImgContainer.style.opacity === '0' || rewardImgContainer.style.opacity === '') ? '1' : '0'
		}, 10);
	}
}


// 浏览器标题
//var OriginTitle = document.title;
//var titleTime;
//document.addEventListener('visibilitychange', function() {
//	if (document.hidden) {
//		$('[rel="icon"]').attr('href', "/img/favicon.ico");
//		document.title = '不要走！再看看嘛(o°ω°o)';
//		clearTimeout(titleTime);
//	} else {
//		$('[rel="icon"]').attr('href', "/img/favicon.ico");
//		document.title = '你回来啦(≖ᴗ≖)✧';
//		titleTime = setTimeout(function() {
//			document.title = OriginTitle;
//		}, 2000);
//	}
//});
//
// 背景图
//var backgroundImageUrls = [
//  "url('https://z1.ax1x.com/2023/10/11/pPzRbo4.jpg')",
//  "url('https://z1.ax1x.com/2023/09/12/pP216Vx.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvJts.png')",
//  "url('https://z1.ax1x.com/2023/10/12/piSv10g.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSv37Q.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvlnS.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvMX8.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvGkj.png')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvu1P.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvefI.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvnpt.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvK6f.jpg')",
//  "url('https://z1.ax1x.com/2023/09/12/pP21sq1.jpg')"
//];

//var randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
//var bodyElement = document.querySelector("body");
//bodyElement.style.backgroundImage = backgroundImageUrls[randomIndex];




//网站运行统计
!(function() {
  /** 计时起始时间 **/
  var start = new Date("2024/12/1 00:00:00");

  function update() {
    var now = new Date();
    now.setTime(now.getTime()+250);
    days = (now - start) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if(String(hnum).length === 1 ){
      hnum = "0" + hnum;
    }
    minutes = (now - start) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if(String(mnum).length === 1 ){
      mnum = "0" + mnum;
    }
    seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if(String(snum).length === 1 ){
      snum = "0" + snum;
    }
    document.getElementById("timeDate").innerHTML = "本站勉强运行&nbsp"+dnum+"&nbsp天";
    document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
  }

  update();
  setInterval(update, 1000);
})();