(function(t){function e(e){for(var o,r,i=e[0],l=e[1],c=e[2],m=0,p=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},n={app:0},a=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"027e":function(t,e,s){},"0c09":function(t,e,s){"use strict";s("71b1")},2813:function(t,e,s){t.exports=s.p+"music.mp3"},"32b7":function(t,e,s){"use strict";s("027e")},"42d9":function(t,e,s){"use strict";s("a22a")},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app",style:t.size},[e("div",{staticClass:"rect drop"},[e("Decorate"),e("div",{staticClass:"screen"},[e("div",{staticClass:"panel"},[e("Matrix",{attrs:{cur:t.cur}}),e("Logo",{attrs:{cur:!!t.cur}}),e("div",{staticClass:"state"},[e("Point",{attrs:{cur:!!t.cur,max:t.max}}),e("p",[t._v(t._s(t.tipmsg))]),e("Numbercom",{attrs:{number:t.cur?t.clearLines:t.startLines}}),e("p",[t._v(t._s(t.i18n.level))]),e("Numbercom",{attrs:{number:t.cur?t.speedRun:t.speedStart,length:1}}),e("p",[t._v(t._s(t.i18n.next))]),e("Next",{attrs:{nextshape:t.next}}),e("div",{staticClass:"bottom"},[e("Music"),e("Pause"),e("Numbercom",{attrs:{time:!0}})],1)],1)],1)])],1),e("Keyboard",{attrs:{filling:t.filling}}),e("Guide")],1)},a=[],r=s("2f62"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"decorate"},[e("div",{staticClass:"topBorder"},t._l(t.spans,(function(t,s){return e("span",{key:s,staticClass:"mr",class:t})})),0),e("h1",[t._v(t._s(t.i18n.title[t.lan]))]),t._e(),t._l(t.views,(function(s,o){return[e("div",{staticClass:"view",class:s.class},[t._l(s.view,(function(s,o){return[t._l(s,(function(t,s){return["em"==t?e("em"):"b"==t?e("b",{staticClass:"c"}):"div"==t?e("div",{staticClass:"clear"}):e("p")]}))]}))],2)]}))],2)},l=[],c=(s("14d9"),s("b7ef"),s("cb11"));const u={I:[[1,1,1,1]],L:[[0,0,1],[1,1,1]],J:[[1,0,0],[1,1,1]],Z:[[1,1,0],[0,1,1]],S:[[0,1,1],[1,1,0]],O:[[1,1],[1,1]],T:[[0,1,0],[1,1,1]]},m={I:[[-1,1],[1,-1]],L:[[0,0]],J:[[0,0]],Z:[[0,0]],S:[[0,0]],O:[[0,0]],T:[[0,0],[1,0],[-1,1],[0,-1]]},p=Object.keys(u),d=[800,650,500,370,250,160],h=[50,60,70,80,90,100],f=[1,1,1,1,1,1,1,1,1,1],b=[0,0,0,0,0,0,0,0,0,0],v=(()=>{const t=[];for(let e=0;e<20;e++)t.push(b.slice());return t})(),x=[100,300,700,1500],y="REACT_TETRIS",g=(()=>{let t=localStorage.getItem(y);if(!t)return!1;try{window.btoa&&(t=atob(t)),t=decodeURIComponent(t),t=JSON.parse(t)}catch(e){return(window.console||window.console.error)&&window.console.error("读取记录错误:",e),!1}return t})(),w=999999,k=function(){const t=["transform","webkitTransform","msTransform","mozTransform","oTransform"],e=document.body;return t.filter(t=>void 0!==e.style[t])[0]}(),S=20,T=t=>{const e=new RegExp(`\\?(?:.+&)?${t}=(.*?)(?:&.*)?$`),s=window.location.toString().match(e);return s?decodeURI(s[1]):""},C=(()=>{let t=T("lan").toLowerCase();return t=-1===c.lan.indexOf(t)?c.default:t,t})();document.title=c.data.title[C]+" - Wenbin\'s blog";var _={blockShape:u,origin:m,blockType:p,speeds:d,delays:h,fillLine:f,blankLine:b,blankMatrix:v,clearPoints:x,StorageKey:y,lastRecord:g,maxPoint:w,eachLines:S,transform:k,lan:C,i18n:c.data},L={name:"Decorate",data(){return{i18n:_.i18n,lan:_.lan,spans:"lllllrrrrr".split("").map((t,e)=>0==e||5==e?t+" w40":t),views:[{class:"",view:[["b","div","b","b","div","em","b","p"],["em","b","div","b","b","div","em","b","p"],["b","b","b","b","p"],["b","div","b","b","div","b","p"],["b","b","div","b","div","b","p"],["em","b","div","em","b","div","em","b","div","em","b"]]},{class:"l",view:[["em","b","div","b","b","div","b","p"],["b","div","b","b","div","b","p"],["b","b","b","b","p"],["em","b","div","b","b","div","em","b","p"],["b","b","div","em","b","div","em","b","p"],["b","div","b","div","b","div","b"]]}]}}},R=L,I=(s("42d9"),s("2877")),O=Object(I["a"])(R,i,l,!1,null,"41d67e17",null),M=O.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"matrix"},t._l(t.matrix2,(function(s,o){return e("p",{key:o},t._l(s,(function(t,s){return e("b",{key:s,class:{c:1===t,d:2===t,h:3===t}})})),0)})),0)},P=[];let{blockType:j,StorageKey:B}=_;const A=(()=>{let t=["hidden","webkitHidden","mozHidden","msHidden"];return t=t.filter(t=>t in document),t.length>0&&t[0]})(),N=(()=>!!A&&A.replace(/hidden/i,"visibilitychange"))(),D=()=>!A||!document[A],z={getNextType(){const t=j.length;return j[Math.floor(Math.random()*t)]},want(t,e){const s=t.xy,o=t.shape,n=o[0].length;return o.every((t,o)=>t.every((t,a)=>s[1]<0?(console.log("auto 左"),!1):s[1]+n>10?(console.log("auto 右"),!1):s[0]+o<0?(console.log("auto 上"),!0):s[0]+o>=20?(console.log("auto 下"),!1):!t||!e[s[0]+o][s[1]+a]))},isClear(t){const e=[];return t.forEach((t,s)=>{t.every(t=>!!t)&&e.push(s)}),0!==e.length&&e},isOver(t){return t[0].some(t=>!!t)},subscribeRecord(t){t.subscribe(()=>{let e=t.getState().toJS();e.lock||(e=JSON.stringify(e),e=encodeURIComponent(e),window.btoa&&(e=btoa(e)),localStorage.setItem(B,e))})},isMobile(){const t=navigator.userAgent,e=/Android (\d+\.\d+)/.test(t),s=t.indexOf("iPhone")>-1,o=t.indexOf("iPod")>-1,n=t.indexOf("iPad")>-1,a=t.indexOf("NokiaN")>-1;return e||s||o||n||a},visibilityChangeEvent:N,isFocus:D};var H=z,$=(s("3c65"),{state:!1,pause(t,e){t.pause=e}});let q=s("2813");const J=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext,Q={data:!!J&&-1!==location.protocol.indexOf("http")},G={};(()=>{if(!Q.data)return;const t=q,e=new J,s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType="arraybuffer",s.onload=()=>{e.decodeAudioData(s.response,t=>{const s=()=>{const s=e.createBufferSource();return s.buffer=t,s.connect(e.destination),s};G.killStart=()=>{G.start=()=>{}},G.start=()=>{G.killStart(),console.log("播放音乐",Tt.state.music),Tt.state.music&&s().start(0,3.7202,3.6224)},G.clear=()=>{Tt.state.music&&s().start(0,0,.7675)},G.fall=()=>{Tt.music&&s().start(0,1.2558,.3546)},G.gameover=()=>{Tt.state.music&&s().start(0,8.1276,1.1437)},G.rotate=()=>{Tt.state.music&&s().start(0,2.2471,.0807)},G.move=()=>{Tt.state.music&&s().start(0,2.9088,.1437)}},e=>{window.console&&window.console.error&&(window.console.error(`音频: ${t} 读取错误`,e),Q.data=!1)})},s.send()})();var U={hasWebAudioAPI:Q,music:G};let{hasWebAudioAPI:K}=U,W=!0;K.data||(W=!1);var Z={state:W,music(t,e){K.data||(t.music=!1),t.music=e}};let{blankMatrix:F}=_;var V={state:F,matrix(t,e){t.matrix=e}};let{getNextType:X}=H;var Y={state:X(),next(t,e){t.next=e}},tt={state:null,moveBlock(t,e){t.cur=e}},et={state:0,startLines(t,e){t.startLines=e}};let{maxPoint:st}=_,ot=0;ot<0?ot=0:ot>st&&(ot=st);var nt={state:ot,max(t,e){t.max=e>999999?999999:e}};let{maxPoint:at}=_,rt=0;rt<0?rt=0:rt>at&&(rt=at);var it={state:rt,points(t,e){t.points=e>at?at:e}},lt={state:1,speedStart(t,e){t.speedStart=e}},ct={state:1,speedRun(t,e){t.speedRun=e}},ut={state:!1,lock(t,e){t.lock=e}},mt={state:0,clearLines(t,e){t.clearLines=e}},pt={state:!1,reset(t,e){console.log("reset",e),t.reset=e}},dt={state:!1,drop(t,e){t.drop=e}},ht={state:{drop:!1,down:!1,left:!1,right:!1,rotate:!1,reset:!1,music:!1,pause:!1},mutations:{drop(t,e){t.drop=e},down(t,e){console.log("down",e),t.down=e},left(t,e){t.left=e},right(t,e){t.right=e},rotate(t,e){t.rotate=e},"key-reset":function(t,e){t.reset=e},"key-music":function(t,e){t.music=e},"key-pause":function(t,e){t.pause=e}}};let{isFocus:ft}=H;var bt={state:ft(),focus(t,e){t.focus=e}};let{i18n:vt,lan:xt}=_,yt="right",gt=[{name:"rotate",color:"blue",size:"s1",positionType:yt,label:vt.rotation[xt],arrow:"translate(0, 63px)",position:!0},{name:"down",color:"blue",size:"s1",positionType:yt,label:vt.down[xt],arrow:"translate(0,-71px) rotate(180deg)",position:!1},{name:"left",color:"blue",size:"s1",positionType:yt,label:vt.left[xt],arrow:"translate(60px, -12px) rotate(270deg)",position:!1},{name:"right",color:"blue",size:"s1",positionType:yt,label:vt.right[xt],arrow:"translate(-60px, -12px) rotate(90deg)",position:!1},{name:"drop",color:"blue",size:"s0",positionType:yt,label:vt.drop[xt]+" (SPACE)",arrow:"",position:!1},{name:"reset",color:"red",size:"s2",positionType:yt,label:vt.reset[xt]+"(R)",arrow:"",position:!1},{name:"music",color:"green",size:"s2",positionType:yt,label:vt.sound[xt]+"(S)",arrow:"",position:!1},{name:"pause",color:"green",size:"s2",positionType:yt,label:vt.pause[xt]+"(P)",arrow:"",position:!1},{name:"exchange",color:"green",size:"s2",positionType:yt,label:vt.exchange[xt]+"(E)",arrow:"",position:!1},{name:"helper",color:"green",size:"s2",positionType:yt,label:vt.help[xt]+"(H)",arrow:"",position:!1}],wt={right:{rotate:{top:0,left:374},down:{top:180,left:374},left:{top:90,left:284},right:{top:90,left:464},drop:{top:100,left:52},reset:{top:0,left:210},music:{top:0,left:130},pause:{top:0,left:50},exchange:{top:-60,left:540},helper:{top:-60,left:-10}},left:{rotate:{top:0,left:95},down:{top:180,left:95},left:{top:90,left:5},right:{top:90,left:185},drop:{top:100,left:380},reset:{top:0,left:480},music:{top:0,left:400},pause:{top:0,left:320},exchange:{top:-60,left:540},helper:{top:-60,left:-10}}};function kt(t){return t.forEach(t=>{let e="right"==t.positionType?"left":"right";t.top=wt[e][t.name].top,t.left=wt[e][t.name].left,t.positionType=e}),t}var St={state:kt(gt),buttons(t){t.buttons=kt(t.buttons)}};o["a"].use(r["a"]);var Tt=new r["a"].Store({state:{pause:$.state,music:Z.state,matrix:V.state,next:Y.state,cur:tt.state,startLines:et.state,max:nt.state,points:it.state,speedStart:lt.state,speedRun:ct.state,lock:ut.state,clearLines:mt.state,reset:pt.state,drop:dt.state,focus:bt.state,buttons:St.state,help:!0},mutations:{pause:$.pause,music:Z.music,matrix:V.matrix,next:Y.next,moveBlock:tt.moveBlock,startLines:et.startLines,max:nt.max,points:it.points,speedStart:lt.speedStart,speedRun:ct.speedRun,lock:ut.lock,clearLines:mt.clearLines,reset:pt.reset,drop:dt.drop,focus:bt.focus,buttons:St.buttons,help(t,e){return t.help=e}},actions:{},modules:{keyboard:ht}});let{blockShape:Ct,origin:_t}=_;class Lt{constructor(t){if(this.type=t.type,t.rotateIndex?this.rotateIndex=t.rotateIndex:this.rotateIndex=0,t.timeStamp?this.timeStamp=t.timeStamp:this.timeStamp=Date.now(),t.shape?this.shape=t.shape:this.shape=Ct[t.type].map(t=>t.slice()),t.xy)this.xy=t.xy;else switch(t.type){case"I":this.xy=[0,3];break;case"L":this.xy=[-1,4];break;case"J":this.xy=[-1,4];break;case"Z":this.xy=[-1,4];break;case"S":this.xy=[-1,4];break;case"O":this.xy=[-1,4];break;case"T":this.xy=[-1,4];break;default:break}}rotateShape(t){if(t.length<=0)return[];if(t[0]&&t[0].length<=0)return[];for(var e=t[0].length,s=t.length,o=new Array(e).fill(0).map((function(t){return new Array(s).fill(0)})),n=0;n<e;n++)for(var a=0;a<s;a++)o[n][a]=t[a][e-n-1];return o}rotate(){const t=this.shape;let e=this.rotateShape(t);const s=[this.xy[0]+_t[this.type][this.rotateIndex][0],this.xy[1]+_t[this.type][this.rotateIndex][1]],o=this.rotateIndex+1>=_t[this.type].length?0:this.rotateIndex+1;return{shape:e,type:this.type,xy:s,rotateIndex:o,timeStamp:this.timeStamp}}fall(t=1){return{shape:this.shape,type:this.type,xy:[this.xy[0]+t,this.xy[1]],rotateIndex:this.rotateIndex,timeStamp:Date.now()}}right(){return{shape:this.shape,type:this.type,xy:[this.xy[0],this.xy[1]+1],rotateIndex:this.rotateIndex,timeStamp:this.timeStamp}}left(){return{shape:this.shape,type:this.type,xy:[this.xy[0],this.xy[1]-1],rotateIndex:this.rotateIndex,timeStamp:this.timeStamp}}}var Rt=Lt;let{want:It,isClear:Ot,isOver:Mt,getNextType:Et}=H,{speeds:Pt,blankLine:jt,blankMatrix:Bt,clearPoints:At,eachLines:Nt}=_,{music:Dt}=U;const zt=t=>{const e=(t,e)=>{const s=parseInt((e-t+1)*Math.random()+t,10),o=[];for(let n=0;n<s;n++)o.push(1);for(let n=0,a=10-s;n<a;n++){const t=parseInt((o.length+1)*Math.random(),10);o.splice(t,0,0)}return o};let s=[];for(let o=0;o<t;o++)o<=2?s.push(e(5,8)):o<=6?s.push(e(4,9)):s.push(e(3,9));for(let o=0,n=20-t;o<n;o++)s.unshift(jt.slice());return s},Ht={fallInterval:null,start:()=>{Dt.start&&Dt.start(),console.log("start1","开始游戏");const t=Tt.state;Ht.dispatchPoints(0),console.log("1111",t.speedStart),Tt.commit("speedRun",t.speedStart);const e=t.startLines,s=zt(e);console.log("start1","startMatrix",s),Tt.commit("matrix",s),console.log("start1","nexttype",t.next),Tt.commit("moveBlock",new Rt({type:t.next})),Tt.commit("next",Et()),Ht.auto()},auto:t=>{const e=t<0?0:t;let s=Tt.state,o=s.cur;const n=()=>{s=Tt.state,o=s.cur;const t=o.fall();if(It(t,s.matrix))Tt.commit("moveBlock",!0===t.reset?null:new Rt(t)),Ht.fallInterval=setTimeout(n,Pt[s.speedRun-1]);else{let t=s.matrix.map(t=>t.slice());const e=o&&o.shape,n=o&&o.xy;e.forEach((e,s)=>e.forEach((e,o)=>{if(e&&n[0]+s>=0){let e=t[n[0]+s];e[n[1]+o]=1,t[n[0]+s]=e}})),Ht.nextAround(t)}};clearTimeout(Ht.fallInterval),Ht.fallInterval=setTimeout(n,void 0===e?Pt[s.speedRun-1]:e)},nextAround:(t,e)=>{clearTimeout(Ht.fallInterval),Tt.commit("lock",!0),Tt.commit("matrix",t),"function"===typeof e&&e();const s=Tt.state.points+10+2*(Tt.state.speedRun-1);if(Ht.dispatchPoints(s),!Ot(t))return Mt(t)?(Dt.gameover&&Dt.gameover(),void Ht.overStart()):void setTimeout(()=>{Tt.commit("lock",!1),Tt.commit("moveBlock",new Rt({type:Tt.state.next})),Tt.commit("next",Et()),Ht.auto()},100);Dt.clear&&Dt.clear()},focus:t=>{if(Tt.commit("focus",t),!t)return void clearTimeout(Ht.fallInterval);const e=Tt.state;!e.cur||e.reset||e.pause||Ht.auto()},pause:t=>{Tt.commit("pause",t),t?clearTimeout(Ht.fallInterval):Ht.auto()},clearLines:(t,e)=>{const s=Tt.state;let o=t;e.forEach(t=>{o.splice(t,1),o.unshift(jt.slice())}),Tt.commit("matrix",o),Tt.commit("moveBlock",new Rt({type:s.next})),Tt.commit("next",Et()),Ht.auto(),Tt.commit("lock",!1);const n=s.clearLines+e.length;Tt.commit("clearLines",n);const a=Tt.state.points+At[e.length-1];console.log("得分",a),Ht.dispatchPoints(a);const r=Math.floor(n/Nt);let i=s.speedStart+r;i=i>6?6:i,Tt.commit("speedRun",i)},overStart:()=>{console.log("restart","overStart"),clearTimeout(Ht.fallInterval),Tt.commit("lock",!0),Tt.commit("reset",!0),Tt.commit("pause",!1)},overEnd:()=>{Tt.commit("matrix",Bt),Tt.commit("moveBlock",null),Tt.commit("reset",!1),Tt.commit("lock",!1),Tt.commit("clearLines",0)},dispatchPoints:t=>{Tt.commit("points",t),t>0&&t>Tt.state.max&&Tt.commit("max",t)}};var $t=Ht;let qt=function(){},{isClear:Jt}=H,{fillLine:Qt,blankLine:Gt}=_;const Ut=setTimeout;var Kt={name:"Matrix",props:{cur:{type:Object}},data(){return{clearLines:!1,animateColor:2,overState:null,matrix2:[]}},created(){this.matrix2=this.cloneMatrix(this.matrix)},computed:{...Object(r["b"])({matrix:t=>t.matrix,reset:t=>(qt("reset",t.reset),t.reset),help:t=>t.help})},watch:{reset(t,e){t&&this.over()},matrix(t,e){const s=Jt(t);s&&!this.reset&&this.clearAnimate(s)},cur(t,e){this.matrix2=this.cloneMatrix(this.getResult())}},methods:{cloneMatrix(t){return t=t||[],t.map(t=>t.slice())},clearAnimate(t){const e=t=>{Ut(()=>{this.animateColor=0,this.matrix2=this.cloneMatrix(this.getResult()),Ut(()=>{this.animateColor=2,this.matrix2=this.cloneMatrix(this.getResult()),"function"===typeof t&&t()},100)},100)};e(()=>{e(()=>{e(()=>{Ut(()=>{$t.clearLines(this.matrix,t)},100)})})})},over(){let t=this.cloneMatrix(this.getResult());const e=e=>{if(e<=19)t.splice(19-e,1,Qt.slice());else{if(!(e>=20&&e<=39))return void $t.overEnd();t.splice(e-20,1,Gt.slice())}this.matrix2=t};for(let s=0;s<=40;s++)Ut(e.bind(null,s),40*(s+1));this.matrix2=t},clearLineColor(t,e){const s=this.animateColor;return t.forEach(t=>{let o=[s,s,s,s,s,s,s,s,s,s];e.splice(t,1,o)}),e},getResult(){const t=this.cur,e=t&&t.shape,s=t&&t.xy;let o=this.cloneMatrix(this.matrix);const n=Jt(this.matrix);if(n)return this.clearLineColor(n,o);if(e){if(this.help){let t=e.length,n=s[0],l=s.slice();for(var a=n+1;a<=20-t;a++){var r=[a,s[1]],i=!0;for(let s=t-1;s>=0;s--){let t=e[s];t.forEach((t,e)=>{let n=o[r[0]+s];1==t&&1==n[r[1]+e]&&(i=!1)})}if(!i){l[0]=a-1;break}l[0]=a}l.toString()!==s.toString()&&e.forEach((function(t,e){t.forEach((function(t,s){let n=o[l[0]+e];1==t&&(n[l[1]+s]=3)}))}))}e.forEach((function(t,e){t.forEach((function(t,a){if(t&&s[0]+e>=0){let t,r=o[s[0]+e];t=1!==r[s[1]+a]||n?1:2,r[s[1]+a]=t,o[s[0]+e]=r}}))}))}return o}}},Wt=Kt,Zt=(s("eb6a"),Object(I["a"])(Wt,E,P,!1,null,"2fd7b3d6",null)),Ft=Zt.exports,Vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo",style:{display:t.display}},[e("div",{staticClass:"bg dragon",class:t.style}),e("p",{domProps:{innerHTML:t._s(t.title)}})])},Xt=[];let{i18n:Yt,lan:te}=_,ee=null;var se={name:"Logo",props:{cur:{type:Boolean}},data(){return{i18n:Yt,lan:te,style:"r1",display:"none"}},watch:{reset(t,e){this.animate()},cur(t,e){console.log("logo",t),t&&this.animate()}},beforeCreate(){},beforeMount(){},computed:{title(){return this.i18n.titleCenter[this.lan]},...Object(r["b"])({reset:t=>t.reset})},methods:{animate(){if(clearTimeout(ee),this.style="r1",this.display="none",this.cur||this.reset)return void(this.display="none");let t="r",e=0;const s=(t,e)=>{t&&(ee=setTimeout(t,e))},o=(t,e)=>{let o=0;const n=e%2===0?e+1:e,a=()=>{s(()=>{this.display=o%2===0?"block":"none",o++,t&&o===n?t():a()},150)};a()},n=(e,o,n)=>{s(()=>{this.style=t+2,s(()=>{this.style=t+1,e&&e()},n)},o)},a=o=>{s(()=>{this.style=t+4,s(()=>{this.style=t+3,e++,10!==e&&20!==e&&30!==e||(t="r"===t?"l":"r"),e<40?a(o):(this.style=t+1,o&&s(o,4e3))},100)},100)},r=()=>{e=0,n(()=>{n(()=>{n(()=>{this.style=t+2,a(r)},150,150)},150,150)},1e3,1500)};o(()=>{r()},5)}}},oe=se,ne=(s("8af1"),Object(I["a"])(oe,Vt,Xt,!1,null,"71f61fff",null)),ae=ne.exports,re=function(){var t=this,e=t._self._c;return e("div",[e("p",[t._v(t._s(t.label))]),e("Numbercom",{attrs:{number:t.number}})],1)},ie=[],le=function(){var t=this,e=t._self._c;return e("div",{staticClass:"number"},t._l(t.renderdata,(function(t,s){return e("span",{key:s,staticClass:"bg",class:"s_"+t})})),0)},ce=[];const ue=t=>t<10?("0"+t).split(""):(""+t).split("");let me=null;var pe={name:"Number",props:{number:{type:Number},length:{type:Number,default:6},time:{type:Boolean,default:!1}},data(){return{time_count:!1,renderdata:[]}},created(){this.time&&this.setTime()},beforeMount(){if(!this.time)return this.setScore();this.setclock()},beforeUnmount(){this.time&&clearTimeout(me)},methods:{setclock(){let t=()=>{me=setTimeout(()=>{this.setTime(),t()},1e3)};t()},getTime(){let t=new Date,e=ue(t.getHours()),s=ue(t.getMinutes()),o=t.getSeconds()%2,n=e.concat(o?"d":"d_c",s);return n},setTime(){this.renderdata=this.getTime()},setScore(){let t=(""+this.number).split("");for(let e=0,s=this.length-t.length;e<s;e++)t.unshift("n");this.renderdata=t}},watch:{number(t,e){this.setScore()}}},de=pe,he=(s("7a22"),Object(I["a"])(de,le,ce,!1,null,"0901f51a",null)),fe=he.exports;let{i18n:be,lan:ve}=_;const xe=be.point[ve],ye=be.highestScore[ve],ge=be.lastRound[ve];let we=null;var ke={name:"Point",components:{Numbercom:fe},props:{cur:{type:Boolean},max:{type:Number,required:!0}},data(){return{label:"",number:0}},computed:{...Object(r["b"])({point:t=>t.points})},beforeMount(){this.changeHandler()},watch:{point(t,e){this.changeHandler()}},methods:{changeHandler(){if(clearInterval(we),this.cur)this.label=this.point>=this.max?ye:xe,this.number=this.point;else{const t=()=>{this.label=ge,this.number=this.point,we=setTimeout(()=>{this.label=ye,this.number=this.max,we=setTimeout(t,3e3)},3e3)};0!==this.point?t():(this.label=ye,this.number=this.max)}}}},Se=ke,Te=Object(I["a"])(Se,re,ie,!1,null,"b7d14b76",null),Ce=Te.exports,_e=function(){var t=this,e=t._self._c;return e("div",{staticClass:"next"},t._l(t.block,(function(s,o){return e("div",{key:o},t._l(s,(function(t,s){return e("b",{key:s,class:[t?"c":""]})})),0)})),0)},Le=[];let{blockShape:Re}=_;const Ie={I:[1,0],L:[0,0],J:[0,0],Z:[0,0],S:[0,0],O:[0,1],T:[0,0]},Oe=[[0,0,0,0],[0,0,0,0]];var Me={name:"Next",data(){return{block:Oe}},props:{nextshape:{type:String}},beforeMount(){this.build(this.nextshape)},watch:{nextshape(t){this.build(t)}},methods:{build(t){const e=Re[t],s=Oe.map(t=>[...t]);e.forEach((e,o)=>{e.forEach((e,n)=>{e&&(s[o+Ie[t][0]][n+Ie[t][1]]=1)})}),this.block=s}}},Ee=Me,Pe=(s("735a"),Object(I["a"])(Ee,_e,Le,!1,null,"0cbd8196",null)),je=Pe.exports,Be=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg music",class:{c:!t.music}})},Ae=[],Ne={name:"Music",computed:{...Object(r["b"])({music:t=>t.music})}},De=Ne,ze=(s("0c09"),Object(I["a"])(De,Be,Ae,!1,null,"ee1a9fbc",null)),He=ze.exports,$e=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg pause",class:{c:t.showPause}})},qe=[];let Je=null;var Qe={name:"Pause",props:{},data(){return{showPause:!1}},computed:{...Object(r["b"])({pause:t=>{let e=t.pause;return e}})},created(){},beforeMount(){},mounted(){this.setShake(this.pause)},beforeUnmount(){},watch:{pause(t){this.setShake(t)}},methods:{setShake(t){console.log("setShake",t),t&&!Je&&(Je=setInterval(()=>{this.showPause=!this.showPause},250)),!t&&Je&&(clearInterval(Je),this.showPause=!1,Je=null)}}},Ge=Qe,Ue=(s("7592"),Object(I["a"])(Ge,$e,qe,!1,null,"03d174d9",null)),Ke=Ue.exports,We=function(){var t=this,e=t._self._c;return e("div",{staticClass:"keyboard",style:{marginTop:20+t.filling}},t._l(t.buttons,(function(s,o){return e("Button",{key:s.name,attrs:{name:s.name,color:s.color,size:s.size,top:s.top,left:s.left,label:s.label,arrow:s.arrow,position:s.position,active:t.keyboard[s.name]},on:{mousedown:t.mousedown,mouseup:t.mouseup,mouseout:t.mouseout,touchstart:t.touchstart,touchend:t.touchend}})})),1)},Ze=[],Fe=function(){var t=this,e=t._self._c;return e("div",{staticClass:"button",class:[t.color,t.size],style:{top:t.top+"px",left:t.left+"px"}},[e("i",{ref:"i",class:{active:t.active},on:{mousedown:t.mousedown,mouseup:t.mouseup,mouseout:t.mouseout,touchstart:t.touchstart,touchend:t.touchend}}),"s1"===t.size?e("em",{style:{transform:t.arrow+" scale(1,2)"}}):t._e(),e("span",{class:{position:t.position}},[t._v(t._s(t.label))])])},Ve=[];let{transform:Xe}=_;var Ye={name:"Button",props:{name:{type:String,require:!0},color:{type:String,require:!0},size:{type:String,require:!0},top:{type:Number,require:!0},left:{type:Number,require:!0},label:{type:String,require:!0},position:{type:Boolean},arrow:{type:String},active:{type:Boolean,require:!0}},data(){return{}},created(){},beforeMount(){},mounted(){},beforeUnmount(){},watch:{},methods:{mousedown(){this.$emit("mousedown",this.name)},mouseup(){this.$emit("mouseup",this.name)},mouseout(){this.$emit("mouseout",this.name)},touchstart(){this.$emit("touchstart",this.name)},touchend(){this.$emit("touchend",this.name)}}},ts=Ye,es=(s("75ae"),Object(I["a"])(ts,Fe,Ve,!1,null,"609f4b9d",null)),ss=es.exports;const os={},ns=t=>{const e=Object.keys(os);if(e.forEach(t=>{clearTimeout(os[t]),os[t]=null}),!t.callback)return;const s=()=>{clearTimeout(os[t.key])};if(t.callback(s),!0===t.once)return;let o=t.begin||100;const n=t.interval||50,a=()=>{os[t.key]=setTimeout(()=>{o=null,a(),t.callback(s)},o||n)};a()},as=t=>{clearTimeout(os[t.key]),os[t.key]=null,t.callback&&t.callback()},rs=()=>{const t=Object.keys(os);t.forEach(t=>{clearTimeout(os[t]),os[t]=null})};var is={down:ns,up:as,clearAll:rs};let{want:ls}=H,{music:cs}=U,{speeds:us,delays:ms}=_;const ps=t=>{t.commit("left",!0),is.down({key:"left",begin:200,interval:100,callback:()=>{const e=t.state;if(e.lock)return;cs.move&&cs.move();const s=e.cur;if(null!==s){if(e.pause)return void $t.pause(!1);const o=s.left(),n=ms[e.speedRun-1];let a;ls(o,e.matrix)?(o.timeStamp+=parseInt(n,10),t.commit("moveBlock",!0===o.reset?null:new Rt(o)),a=o.timeStamp):(s.timeStamp+=parseInt(parseInt(n,10)/1.5,10),t.commit("moveBlock",!0===s.reset?null:new Rt(s)),a=s.timeStamp);const r=us[e.speedRun-1]-(Date.now()-a);$t.auto(r)}else{let s=e.speedStart;s=s-1<1?6:s-1,t.commit("speedStart",s)}}})},ds=t=>{t.commit("left",!1),is.up({key:"left"})};var hs={down:ps,up:ds};let{want:fs}=H,{speeds:bs,delays:vs}=_,{music:xs}=U;const ys=t=>{t.commit("right",!0),is.down({key:"right",begin:200,interval:100,callback:()=>{const e=t.state;if(e.lock)return;xs.move&&xs.move();const s=e.cur;if(null!==s){if(e.pause)return void $t.pause(!1);const o=s.right(),n=vs[e.speedRun-1];let a;fs(o,e.matrix)?(o.timeStamp+=parseInt(n,10),t.commit("moveBlock",!0===o.reset?null:new Rt(o)),a=o.timeStamp):(s.timeStamp+=parseInt(parseInt(n,10)/1.5,10),t.commit("moveBlock",!0===s.reset?null:new Rt(s)),a=s.timeStamp);const r=bs[e.speedRun-1]-(Date.now()-a);$t.auto(r)}else{let s=e.speedStart;s=s+1>6?1:s+1,t.commit("speedStart",s)}}})},gs=t=>{t.commit("right",!1),is.up({key:"right"})};var ws={down:ys,up:gs};let{want:ks}=H,{music:Ss}=U;const Ts=t=>{t.commit("down",!0),null!==t.state.cur?is.down({key:"down",begin:40,interval:40,callback:e=>{const s=t.state;if(s.lock)return;Ss.move&&Ss.move();const o=s.cur;if(null===o)return;if(s.pause)return void $t.pause(!1);const n=o.fall();if(ks(n,s.matrix))t.commit("moveBlock",!0===n.reset?null:new Rt(n)),$t.auto();else{let t=s.matrix;const n=o.shape,a=o.xy;n.forEach((e,s)=>e.forEach((e,o)=>{if(e&&a[0]+s>=0){let e=t[a[0]+s];e[a[1]+o]=1,t[a[0]+s]=e}})),$t.nextAround(t,e)}}}):is.down({key:"down",begin:200,interval:100,callback:()=>{const e=t.state;if(e.lock)return;if(e.cur)return;Ss.move&&Ss.move();let s=e.startLines;s=s-1<0?10:s-1,t.commit("startLines",s)}})},Cs=t=>{t.commit("down",!1),is.up({key:"down"})};var _s={down:Ts,up:Cs};let{want:Ls}=H,{music:Rs}=U;const Is=t=>{t.commit("rotate",!0),null!==t.state.cur?is.down({key:"rotate",once:!0,callback:()=>{const e=t.state;if(e.lock)return;e.pause&&$t.pause(!1);const s=e.cur;if(null===s)return;Rs.rotate&&Rs.rotate();const o=s.rotate();Ls(o,e.matrix)&&t.commit("moveBlock",!0===o.reset?null:new Rt(o))}}):is.down({key:"rotate",begin:200,interval:100,callback:()=>{if(t.state.lock)return;Rs.move&&Rs.move();const e=t.state,s=e.cur;if(s)return;let o=e.startLines;o=o+1>10?0:o+1,t.commit("startLines",o)}})},Os=t=>{t.commit("rotate",!1),is.up({key:"rotate"})};var Ms={down:Is,up:Os};let{want:Es}=H,{music:Ps}=U;const js=t=>{t.commit("drop",!0),is.down({key:"space",once:!0,callback:()=>{const e=t.state;if(e.lock)return;const s=e.cur;if(null!==s){if(e.pause)return void $t.pause(!1);Ps.fall&&Ps.fall();let o=0,n=s.fall(o),a=e.matrix.map(t=>t.slice());while(Es(n,a))n=s.fall(o),o++;n=s.fall(o-2),t.commit("moveBlock",!0===n.reset?null:new Rt(n));const r=n.shape,i=n.xy;r.forEach((t,e)=>t.forEach((t,s)=>{if(t&&i[0]+e>=0){let t=a[i[0]+e];t[i[1]+s]=1,a[i[0]+e]=t}})),t.commit("drop",!0),setTimeout(()=>{t.commit("drop",!1)},100),$t.nextAround(a)}else $t.start()}})},Bs=t=>{t.commit("drop",!1),is.up({key:"space"})};var As={down:js,up:Bs};const Ns=t=>{t.commit("key-music",!0),t.state.lock||is.down({key:"s",once:!0,callback:()=>{t.state.lock||t.commit("music",!t.state.music)}})},Ds=t=>{t.commit("key-music",!1),is.up({key:"s"})};var zs={down:Ns,up:Ds};const Hs=t=>{if(t.commit("key-reset",!0),t.state.lock)return;console.log("restart",t.state.cur,t.state.reset,t.state.lock);let e=function(){};e=null!==t.state.cur?function(){$t.overStart()}:function(){t.state.lock||$t.start()},is.down({key:"r",once:!0,callback:()=>{e&&e()}})},$s=t=>{t.commit("key-reset",!1),is.up({key:"r"})};var qs={down:Hs,up:$s};const Js=t=>{t.commit("key-pause",!0),is.down({key:"p",once:!0,callback:()=>{const e=t.state;if(e.lock)return;const s=e.cur,o=e.pause;null!==s?$t.pause(!o):$t.start()}})},Qs=t=>{t.commit("key-pause",!1),is.up({key:"p"})};var Gs={down:Js,up:Qs},Us={left:hs,down:_s,rotate:Ms,right:ws,drop:As,reset:qs,pause:Gs,music:zs};const Ks={},Ws={};var Zs={name:"Keyboard",components:{Button:ss},props:{filling:{type:Number,require:!0}},data(){return{}},computed:{...Object(r["b"])({keyboard:t=>t.keyboard,buttons:t=>t.buttons})},beforeCreate(){document.addEventListener("touchstart",t=>{t.preventDefault&&t.preventDefault()},{capture:!0,passive:!1}),document.addEventListener("touchend",t=>{t.preventDefault&&t.preventDefault()},!0),document.addEventListener("gesturestart",t=>{t.preventDefault&&event.preventDefault()}),document.addEventListener("mousedown",t=>{t.preventDefault&&t.preventDefault()},!0)},methods:{exchangePosition(){this.$store.commit("buttons")},openHelper(){let t=this.$store.state.help;this.$store.commit("help",!t)},mousedown(t){return"exchange"===t?this.exchangePosition():"helper"===t?this.openHelper():void(!0!==Ks[t]&&(Us[t].down(this.$store),Ws[t]=!0))},mouseup(t){"exchange"!==t&&"helper"!==t&&(!0!==Ks[t]?(Us[t].up(this.$store),Ws[t]=!1):Ks[t]=!1)},mouseout(t){"exchange"!==t&&"helper"!==t&&!0===Ws[t]&&Us[t].up(this.$store)},touchstart(t){return"exchange"===t?this.exchangePosition():"helper"===t?this.openHelper():(Ks[t]=!0,void Us[t].down(this.$store))},touchend(t){"exchange"!==t&&"helper"!==t&&Us[t].up(this.$store)}}},Fs=Zs,Vs=(s("ecd1"),Object(I["a"])(Fs,We,Ze,!1,null,"4253c25c",null)),Xs=Vs.exports,Ys=function(){var t=this,e=t._self._c;return t.isMobile?t._e():e("div",{style:{display:t.isMobile?"none":"block"}},[e("div",{staticClass:"guide right"},[e("div",{staticClass:"up"},[e("em",{style:{[t.transform]:"translate(0,-3px) scale(1,2)"}})]),e("div",{staticClass:"left"},[e("em",{style:{[t.transform]:"translate(-7px,3px) rotate(-90deg) scale(1,2)"}})]),e("div",{staticClass:"down"},[e("em",{style:{[t.transform]:"translate(0,9px) rotate(180deg) scale(1,2)"}})]),e("div",{staticClass:"right"},[e("em",{style:{[t.transform]:"translate(7px,3px)rotate(90deg) scale(1,2)"}})])]),t._m(0),t.QRCode?e("div",{staticClass:"guide qr"},[e("img",{attrs:{src:t.QRCode,alt:t.i18n.QRCode}})]):t._e()])},to=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"guide left"},[e("div",{staticClass:"space"},[t._v("SPACE")])])}],eo=s("d055"),so=s.n(eo);let{isMobile:oo}=H,{transform:no,i18n:ao,lan:ro}=_;var io={name:"Guide",props:{},data(){return{isMobile:oo(),QRCode:"",transform:no,i18n:{QRCode:ao.QRCode[ro]}}},created(){console.log("isMobile",this.isMobile),this.isMobile||so.a.toDataURL(location.href,{margin:1}).then(t=>{this.QRCode=t})},beforeMount(){},mounted(){},beforeUnmount(){},watch:{},methods:{}},lo=io,co=(s("32b7"),Object(I["a"])(lo,Ys,to,!1,null,"39ea26ba",null)),uo=co.exports;let{transform:mo,lastRecord:po,speeds:ho,i18n:fo,lan:bo}=_;var vo={name:"App",components:{Decorate:M,Matrix:Ft,Logo:ae,Point:Ce,Numbercom:fe,Next:je,Music:He,Pause:Ke,Keyboard:Xs,Guide:uo},props:{drop:{require:!0,type:Boolean,default:!0}},data(){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight,i18n:{level:fo.level[bo],next:fo.next[bo]},filling:0}},computed:{tipmsg(){return this.cur?fo.cleans[bo]:fo.startLine[bo]},size(){let t,e=this.filling,s=this.w,o=this.h,n=o/s,a={};return n<1.5?t=o/960:(t=s/640,e=(o-960*t)/t/3,a={paddingTop:Math.floor(e)+42,paddingBottom:Math.floor(e),marginTop:Math.floor(-480-1.5*e)}),a[mo]=`scale(${t})`,a},...Object(r["b"])({matrix:t=>t.matrix,cur:t=>t.cur,points:t=>t.points,max:t=>t.max,clearLines:t=>t.clearLines,startLines:t=>t.startLines,speedRun:t=>t.speedRun,speedStart:t=>t.speedStart,next:t=>t.next})},beforeCreate(){},created(){},beforeMount(){window.addEventListener("resize",this.resize.bind(this),!0)},mounted(){if(po){if(po.cur&&!po.pause){const t=this.speedRun;let e=ho[t-1]/2;e=t<ho[ho.length-1]?ho[ho.length-1]:t,$t.auto(e)}po.cur||$t.overStart()}else $t.overStart()},methods:{resize(){this.w=document.documentElement.clientWidth,this.h=document.documentElement.clientHeight}}},xo=vo,yo=(s("b214"),Object(I["a"])(xo,n,a,!1,null,null,null)),go=yo.exports;s("ca62");const wo={37:"left",38:"rotate",39:"right",40:"down",32:"drop",83:"music",82:"reset",80:"pause",72:"helper",69:"exchange"};let ko;const So=Object.keys(wo).map(t=>parseInt(t,10)),To=t=>{if(!0===t.metaKey||-1===So.indexOf(t.keyCode))return;const e=wo[t.keyCode];return"exchange"===e?Tt.commit("buttons"):"helper"===e?Tt.commit("help",!Tt.state.help):void(e!==ko&&(ko=e,console.log(e),Us[e].down(Tt)))},Co=t=>{if(!0===t.metaKey||-1===So.indexOf(t.keyCode))return;const e=wo[t.keyCode];"exchange"!==e&&"helper"!==e&&(e===ko&&(ko=""),Us[e].up(Tt))};document.addEventListener("keydown",To,!0),document.addEventListener("keyup",Co,!0),o["a"].config.productionTip=!1,new o["a"]({store:Tt,render:t=>t(go)}).$mount("#app")},"592e":function(t,e,s){},"71b1":function(t,e,s){},"735a":function(t,e,s){"use strict";s("b981")},7592:function(t,e,s){"use strict";s("91fb")},"75ae":function(t,e,s){"use strict";s("ea15")},7719:function(t,e,s){},"7a22":function(t,e,s){"use strict";s("aa0a")},"8af1":function(t,e,s){"use strict";s("7719")},"91fb":function(t,e,s){},a22a:function(t,e,s){},aa0a:function(t,e,s){},b19d:function(t,e,s){},b214:function(t,e,s){"use strict";s("c7fe")},b981:function(t,e,s){},c7fe:function(t,e,s){},ca62:function(t,e,s){},cb11:function(t){t.exports=JSON.parse('{"lan":["cn","en","fr","fa"],"default":"cn","data":{"title":{"cn":"俄罗斯方块","en":"T E T R I S","fr":"T E T R I S","fa":"خانه سازی"},"github":{"cn":"GitHub","en":"GitHub","fr":"GitHub","fa":"گیت‌هاب"},"linkTitle":{"cn":"查看源代码","en":"View data source","fr":"Afficher la source des données","fa":"مشاهده سورس پروژه"},"QRCode":{"cn":"二维码","en":"QR code","fr":"QR code","fa":"کیوآر کد"},"titleCenter":{"cn":"俄罗斯方块<br />TETRIS","en":"TETRIS","fr":"TETRIS","fa":"خانه سازی"},"point":{"cn":"得分","en":"Point","fr":"Score","fa":"امتیاز"},"highestScore":{"cn":"最高分","en":"Max","fr":"Max","fa":"حداکثر"},"lastRound":{"cn":"上轮得分","en":"Last Round","fr":"Dernier Tour","fa":"آخرین دور"},"cleans":{"cn":"消除行","en":"Cleans","fr":"Lignes","fa":"پاک کرد"},"level":{"cn":"级别","en":"Level","fr":"Difficulté","fa":"سطح"},"startLine":{"cn":"起始行","en":"Start Line","fr":"Ligne Départ","fa":"خط شروع"},"next":{"cn":"下一个","en":"Next","fr":"Prochain","fa":"بعدی"},"pause":{"cn":"暂停","en":"Pause","fr":"Pause","fa":"مکث"},"sound":{"cn":"音效","en":"Sound","fr":"Sonore","fa":"صدا"},"reset":{"cn":"重玩","en":"Reset","fr":"Réinitialiser","fa":"ریست"},"rotation":{"cn":"旋转","en":"Rotation","fr":"Rotation","fa":"چرخش"},"left":{"cn":"左移","en":"Left","fr":"Gauche","fa":"چپ"},"right":{"cn":"右移","en":"Right","fr":"Droite","fa":"راست"},"down":{"cn":"下移","en":"Down","fr":"Bas","fa":"پایین"},"drop":{"cn":"掉落","en":"Drop","fr":"Tomber","fa":"سقوط"},"exchange":{"cn":"换位","en":"Exchange","fr":"Échange","fa":" مبادلة"},"help":{"cn":"辅助线","en":"help","fr":"help","fa":"help"}}}')},ea15:function(t,e,s){},eb6a:function(t,e,s){"use strict";s("b19d")},ecd1:function(t,e,s){"use strict";s("592e")}});