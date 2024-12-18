

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

// 底部一言
function hitokoto(o) {
    $("#hitokoto").stop().fadeOut((function() {
        $("#hitokoto").html(o.hitokoto), $("#hitokoto").stop().fadeIn()
    }))
}

function getHitokoto() {
    var o = ["a", "b", "c", "d", "e", "i"];
    fetch("https://v1.hitokoto.cn/?encode=json&charset=utf-8&c=" + o[Math.floor(Math.random() * o.length)], {
        cache: "no-cache",
        method: "GET",
        mode: "cors"
    }).then(o => o.json()).then(o => {
        hitokoto(o), setTimeout(getHitokoto, 1e4)
    }).catch(console.error)
}
$(document).ready((function() {
    getHitokoto()
}))

//top
let scrollButton = document.getElementById('scroll-top-button');
let scrollPercentage = 0;

window.addEventListener('scroll', function() {
  scrollPercentage = (window.scrollY / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
  
scrollButton.textContent = '' + Math.round(scrollPercentage) + '%';
});
console.log(`
                    _     _         _     _             
                   | |   (_)       | |   | |            
__      _____ _ __ | |__  _ _ __   | |__ | | ___   __ _ 
\\ \\ /\\ / / _ \\ '_ \\| '_ \\| | '_ \\  | '_ \\| |/ _ \\ / _\` |
 \\ V  V /  __/ | | | |_) | | | | | | |_) | | (_) | (_| |
  \\_/\\_/ \\___|_| |_|_.__/|_|_| |_| |_.__/|_|\\___/ \\__, |
                                                   __/ |
                                                  |___/
`);

  // snow
function snow() {
    var snowContainer = document.getElementById('snow_container');
    var snowButtonIcon = document.querySelector('#snowButton i');
    var isSnowEnabled = localStorage.getItem('isSnowEnabled') !== 'false';

    if (isSnowEnabled) {
        activateSnow();
    }

    function activateSnow() {
        snowContainer.classList.add('show');
        snowContainer.innerHTML = `
            <div class="snow_slice snow_1">
                <div class="snow_drifter drift_1"></div>
            </div>
            <div class="snow_slice snow_2">
                <div class="snow_drifter drift_2"></div>
            </div>
            <div class="snow_slice snow_3">
                <div class="snow_drifter drift_3"></div>
            </div>
            <div class="snow_slice snow_4">
                <div class="snow_drifter drift_4"></div>
            </div>
        `;

        if (snowButtonIcon) {
            snowButtonIcon.classList.add('on-kg');
        }
    }

    function deactivateSnow() {
        snowContainer.innerHTML = '';
        snowContainer.classList.remove('show');

        if (snowButtonIcon) {
            snowButtonIcon.classList.remove('on-kg');
        }
    }

    var snowButton = document.getElementById('snowButton');
    snowButton.addEventListener('click', function (event) {
        event.preventDefault();
        isSnowEnabled = !isSnowEnabled;
        localStorage.setItem('isSnowEnabled', isSnowEnabled);
        if (isSnowEnabled) {
            activateSnow();
        } else {
            deactivateSnow();
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    snow();
});

  function frost() {
    var frostElement = document.getElementById('frost');
    var frostButtonElement = document.getElementById('frostButton');
    if (frostElement && frostButtonElement) {
      frostElement.classList.toggle('show');
      if (frostElement.classList.contains('show')) {
        frostButtonElement.querySelector('i').classList.add('on-kg');
      } else {
        frostButtonElement.querySelector('i').classList.remove('on-kg');
      }
    }
  }
  var frostButton = document.getElementById('frostButton');
  frostButton.addEventListener('click', function(event) {
    event.preventDefault();
    frost();
  });

  function lights() {
    var frostElement = document.getElementById('lights');
    var lightsButtonElement = document.getElementById('lightsButton');
    if (frostElement && lightsButtonElement) {
      frostElement.classList.toggle('show');
      if (frostElement.classList.contains('show')) {
        lightsButtonElement.querySelector('i').classList.add('on-kg');
      } else {
        lightsButtonElement.querySelector('i').classList.remove('on-kg');
      }
    }
  }

  var lightsButton = document.getElementById('lightsButton');
  lightsButton.addEventListener('click', function(event) {
    event.preventDefault();
    lights();
  });

/*read过渡*/
function getreadbook() {
    var readbookValue = localStorage.getItem('readbook');
    var loadingBox = document.getElementById('loading-box');
    if (readbookValue === 'true') {
        loadingBox.classList.add('loaded');
        localStorage.setItem('readbook', 'false');
    } else {
        loadingBox.innerHTML = '';
    }
}
document.addEventListener('DOMContentLoaded', getreadbook);

/*read*/
var toggleButton = document.getElementById('toggleButton');
var jsFiles = [
    'https:////lib.baomitu.com/meting/2.0.1/Meting.min.js',
    'https://cloud.zzzwb.com:60443/blog/js/zidingyi/live2d/autoload.js',
    'https://lib.baomitu.com/aplayer/1.10.1/APlayer.min.js',
    'https://cloud.zzzwb.com:60443/blog/js/zidingyi/xiantiao.js'
];
var loadJsFiles = localStorage.getItem('loadJsFiles') !== 'false';

function updateJsFiles() {
    if (loadJsFiles) {
        toggleButton.querySelector('i').classList.remove('on-kg');
        jsFiles.forEach(function (url) {
            loadScript(url, 'zdy-js');
        });
    } else {
        toggleButton.querySelector('i').classList.add('on-kg');

        jsFiles.forEach(function (url) {
            removeScript(url);
        });

        removeElement('meting-js');
        removeElement('canvas');
        removeElement('.aplayer');
        removeElement('.hp_special_experience');
        removeElement('#color-toggle-btn');
        removeElement('#waifu');

        var videoBg = document.getElementById('videobg');
        var htmlTag = document.documentElement;
        htmlTag.setAttribute('data-user-color-scheme', loadJsFiles ? 'light' : 'dark');
        videoBg.style.display = 'none';
    }
}
function removeScript(url) {
    var scripts = document.querySelectorAll('[src="' + url + '"]');
    scripts.forEach(function (script) {
        script.remove();
    });
}
function removeElement(tagName) {
    var elements = document.querySelectorAll(tagName);
    elements.forEach(function (element) {
        element.remove();
    });
}

function toggleJsFiles() {
    loadJsFiles = !loadJsFiles;
    localStorage.setItem('loadJsFiles', loadJsFiles);
    localStorage.setItem('readbook', 'true');
    updateJsFiles();
    location.reload(true);
}

function loadScript(url, targetTagName) {
    var script = document.createElement('script');
    script.src = url;
    var targetTag = document.querySelector(targetTagName);

    if (targetTag) {
        targetTag.appendChild(script);
    } else {
        document.body.appendChild(script);
    }
}

toggleButton.addEventListener('click', toggleJsFiles);
updateJsFiles();

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