(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1fe6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-stat-card-header[data-v-40421a9a]{display:flex;justify-content:space-between;color:#555;font-size:14px;font-weight:600;padding:10px 0;margin-bottom:15px}.uni-table-scroll[data-v-40421a9a]{min-height:auto}.link-btn-color[data-v-40421a9a]{color:#007aff;cursor:pointer}",""]),t.exports=e},"2cf3":function(t,e,i){"use strict";i.r(e);var n=i("6b17"),a=i("bd30");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9a69");var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"40421a9a",null,!1,n["a"],r);e["default"]=s.exports},"5f37":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.userFeildsMap=e.deviceFeildsMap=void 0;var n=[{value:"今天",contrast:"昨天"},{field:"appid",title:"APPID",tooltip:""},{field:"name",title:"应用名",tooltip:""},{field:"total_devices",title:"总设备数",tooltip:"从添加统计到当前选择时间的总设备数（去重）",value:0,contrast:0},{field:"new_device_count",title:"新增设备",tooltip:"首次访问应用的设备数（以设备为判断标准，去重）",value:0,contrast:0},{field:"active_device_count",title:"活跃设备",tooltip:"访问过应用内任意页面的总设备数（去重）",value:0,contrast:0}];e.deviceFeildsMap=n;var a=[{value:"今天",contrast:"昨天"},{field:"appid",title:"APPID",tooltip:""},{field:"name",title:"应用名",tooltip:""},{field:"total_users",title:"总用户数",tooltip:"从添加统计到当前选择时间的总用户数（去重）",value:0,contrast:0},{field:"new_user_count",title:"新增用户",tooltip:"首次访问应用的用户数（以用户为判断标准，去重）",value:0,contrast:0},{field:"active_user_count",title:"活跃用户",tooltip:"访问过应用内任意页面的总用户数（去重）",value:0,contrast:0}];e.userFeildsMap=a},"6b17":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:i("c960").default,uniNoticeBar:i("fae0").default,uniStatTabs:i("b744").default,uniTable:i("96ea").default,uniTr:i("259c").default,uniTh:i("ff3e").default,uniTd:i("7559").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"fix-top-window"},[i("v-uni-view",{staticClass:"uni-header"},[i("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),i("v-uni-view",{staticClass:"uni-group"},[i("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"})],1)],1),i("v-uni-view",{staticClass:"uni-container"},[t.deviceTableData.length||t.userTableData.length||t.query.platform_id?t._e():i("uni-notice-bar",{staticClass:"mb-m pointer",attrs:{showGetMore:!0,showIcon:!0,text:"暂无数据, 统计相关功能需开通 uni 统计后才能使用, 如未开通, 点击查看具体流程"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("https://uniapp.dcloud.io/uni-stat-v2.html")}}}),i("v-uni-view",{staticClass:"uni-stat--x mb-m"},[i("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}})],1),i("v-uni-view",{staticClass:"uni-stat--x p-m"},[i("v-uni-view",{staticClass:"uni-stat-card-header"},[t._v("设备概览")]),i("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[i("uni-tr",[t._l(t.deviceTableFields,(function(e,n){return[e.title?i("uni-th",{key:n,attrs:{align:"center"}},[t._v(t._s(e.title))]):t._e()]}))],2),t._l(t.deviceTableData,(function(e,n){return i("uni-tr",{key:n},[t._l(t.deviceTableFields,(function(n,a){return["appid"===n.field?i("uni-td",{attrs:{align:"center"}},[e.appid?i("v-uni-view",{staticClass:"link-btn-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/uni-stat/device/overview/overview",e.appid)}}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))]):i("v-uni-view",{staticClass:"link-btn-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/system/app/add")}}},[t._v("需添加此应用的 appid")])],1):i("uni-td",{key:a,attrs:{align:"center"}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))])]}))],2)}))],2)],1),i("v-uni-view",{staticClass:"uni-stat--x p-m"},[i("v-uni-view",{staticClass:"uni-stat-card-header"},[t._v("注册用户概览")]),i("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[i("uni-tr",[t._l(t.userTableFields,(function(e,n){return[e.title?i("uni-th",{key:n,attrs:{align:"center"}},[t._v(t._s(e.title))]):t._e()]}))],2),t._l(t.userTableData,(function(e,n){return i("uni-tr",{key:n},[t._l(t.userTableFields,(function(n,a){return["appid"===n.field?i("uni-td",{attrs:{align:"center"}},[e.appid?i("v-uni-view",{staticClass:"link-btn-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/uni-stat/user/overview/overview",e.appid)}}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))]):i("v-uni-view",{staticClass:"link-btn-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/system/app/add")}}},[t._v("需添加此应用的 appid")])],1):i("uni-td",{key:a,attrs:{align:"center"}},[t._v(t._s(void 0!==e[n.field]?e[n.field]:"-"))])]}))],2)}))],2)],1)],1)],1)},o=[]},9312:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("8fe4").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?i("uni-icons",{staticClass:"uni-noticebar-icon",attrs:{type:"sound",color:t.color,size:"22"}}):t._e(),i("v-uni-view",{ref:"textBox",staticClass:"uni-noticebar__content-wrapper",class:{"uni-noticebar__content-wrapper--scrollable":t.scrollable,"uni-noticebar__content-wrapper--single":!t.scrollable&&(t.single||t.moreText)}},[i("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar__content--scrollable":t.scrollable,"uni-noticebar__content--single":!t.scrollable&&(t.single||t.moreText)},attrs:{id:t.elIdBox}},[i("v-uni-text",{ref:"animationEle",staticClass:"uni-noticebar__content-text",class:{"uni-noticebar__content-text--scrollable":t.scrollable,"uni-noticebar__content-text--single":!t.scrollable&&(t.single||t.showGetMore)},style:{color:t.color,width:t.wrapWidth+"px",animationDuration:t.animationDuration,"-webkit-animationDuration":t.animationDuration,animationPlayState:t.webviewHide?"paused":t.animationPlayState,"-webkit-animationPlayState":t.webviewHide?"paused":t.animationPlayState,animationDelay:t.animationDelay,"-webkit-animationDelay":t.animationDelay},attrs:{id:t.elId}},[t._v(t._s(t.text))])],1)],1),!0===t.showGetMore||"true"===t.showGetMore?i("v-uni-view",{staticClass:"uni-noticebar__more uni-cursor-point",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMore.apply(void 0,arguments)}}},[t.moreText.length>0?i("v-uni-text",{staticClass:"uni-noticebar__more-text",style:{color:t.moreColor}},[t._v(t._s(t.moreText))]):i("uni-icons",{attrs:{type:"right",color:t.moreColor,size:"16"}})],1):t._e(),!0!==t.showClose&&"true"!==t.showClose||!1!==t.showGetMore&&"false"!==t.showGetMore?t._e():i("v-uni-view",{staticClass:"uni-noticebar-close uni-cursor-point"},[i("uni-icons",{attrs:{type:"closeempty",color:t.color,size:"16"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)],1):t._e()},o=[]},"9a69":function(t,e,i){"use strict";var n=i("df05"),a=i.n(n);a.a},acf1:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("99af"),i("4de4"),i("7db0"),i("c975"),i("d81d"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2909")),o=n(i("b85c")),r=i("6470"),l=i("5f37"),s={data:function(){return{query:{platform_id:"",start_time:[(0,r.getTimeOfSomeDayAgo)(1),(new Date).getTime()]},deviceTableData:[],userTableData:[],pageSize:10,pageCurrent:1,total:0,loading:!1}},onReady:function(){this.getApps(this.queryStr,l.deviceFeildsMap,"device"),this.getApps(this.queryStr,l.userFeildsMap,"user")},watch:{query:{deep:!0,handler:function(t){this.getApps(this.queryStr,l.deviceFeildsMap,"device"),this.getApps(this.queryStr,l.userFeildsMap,"user")}}},computed:{queryStr:function(){var t='(dimension == "hour" || dimension == "day")';return(0,r.stringifyQuery)(this.query)+" && "+t},deviceTableFields:function(){return this.tableFieldsMap(l.deviceFeildsMap)},userTableFields:function(){return this.tableFieldsMap(l.userFeildsMap)}},methods:{tableFieldsMap:function(t){var e,i=[],n=[],r=[],l=[],s=(0,o.default)(t);try{for(s.s();!(e=s.n()).done;){var c=e.value;if(c.field)if(c.hasOwnProperty("value")){var u=JSON.parse(JSON.stringify(c)),d=JSON.parse(JSON.stringify(c));"total_users"!==c.field&&"total_devices"!==c.field?(u.title="今日"+c.title,u.field=c.field+"_value",d.title="昨日"+c.title,d.field=c.field+"_contrast",n.push(u),r.push(d)):(u.field=c.field+"_value",l.push(u))}else i.push(c)}}catch(p){s.e(p)}finally{s.f()}return i=[].concat((0,a.default)(i),n,r,l),i},getApps:function(e,i){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"device";this.loading=!0;var l=t.database(),s=l.collection("opendb-app-list").getTemp(),c=l.collection("uni-stat-result").where(e).getTemp();l.collection(c,s).field("".concat((0,r.stringifyField)(i,"","value"),",stat_date,appid,dimension")).groupBy("appid,dimension,stat_date").groupField((0,r.stringifyGroupField)(i,"","value")).orderBy("appid","desc").get().then((function(t){var e=t.result.data;if(n["".concat(a,"TableData")]=[],e.length){var l,s=[],c=[],u=[],d=(0,r.parseDateTime)((0,r.getTimeOfSomeDayAgo)(0),"",""),p=(0,r.parseDateTime)((0,r.getTimeOfSomeDayAgo)(1),"",""),f=(0,o.default)(e);try{for(f.s();!(l=f.n()).done;){var v=l.value,b=v.appid&&v.appid[0]||{},h=b.appid,_=b.name;v.appid=h,v.name=_,s.indexOf(v.appid)<0&&s.push(v.appid),"hour"===v.dimension&&v.stat_date===d&&c.push(v),"day"===v.dimension&&v.stat_date===p&&u.push(v)}}catch(x){f.e(x)}finally{f.f()}for(var m=i.map((function(t){return t.field})).filter(Boolean),g=function(){var t,e=y[w],i={},l=c.find((function(t){return t.appid===e})),s=u.find((function(t){return t.appid===e})),d=(0,o.default)(m);try{for(d.s();!(t=d.n()).done;){var p=t.value;if("appid"===p||"name"===p)i[p]=l&&l[p];else{var f=l&&l[p],v=s&&s[p];i[p+"_value"]=(0,r.format)(f),i[p+"_contrast"]=(0,r.format)(v)}}}catch(x){d.e(x)}finally{d.f()}if(n["".concat(a,"TableData")].push(i),e){l["total_".concat(a,"s")]=0;var b=JSON.parse(JSON.stringify(n.query));b.start_time=[(0,r.getTimeOfSomeDayAgo)(0),(new Date).getTime()],b.appid=e,r.getFieldTotal.call(n,b,"total_".concat(a,"s")).then((function(t){n["".concat(a,"TableData")].find((function(t){return t.appid===e}))["total_".concat(a,"s_value")]=t}))}},w=0,y=s;w<y.length;w++)g()}})).catch((function(t){})).finally((function(){n.loading=!1}))},navTo:function(t,e){t.indexOf("http")>-1?window.open(t):(e&&(t="".concat(t,"?appid=").concat(e)),uni.navigateTo({url:t}))}}};e.default=s}).call(this,i("a9ff")["default"])},bd30:function(t,e,i){"use strict";i.r(e);var n=i("acf1"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},cc7c:function(t,e,i){"use strict";i.r(e);var n=i("dcd9"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d452:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-noticebar[data-v-0518895a]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;padding:10px 12px;margin-bottom:10px}.uni-cursor-point[data-v-0518895a]{cursor:pointer}.uni-noticebar-close[data-v-0518895a]{margin-left:8px;margin-right:5px}.uni-noticebar-icon[data-v-0518895a]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-0518895a]{flex:1;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-0518895a]{line-height:18px}.uni-noticebar__content-wrapper--single[data-v-0518895a],\r\n.uni-noticebar__content-wrapper--scrollable[data-v-0518895a]{flex-direction:row}.uni-noticebar__content-wrapper--scrollable[data-v-0518895a]{position:relative;height:18px}.uni-noticebar__content--scrollable[data-v-0518895a]{flex:1;display:block;overflow:hidden}.uni-noticebar__content--single[data-v-0518895a]{display:flex;flex:none;width:100%;justify-content:center}.uni-noticebar__content-text[data-v-0518895a]{font-size:14px;line-height:18px;word-break:break-all}.uni-noticebar__content-text--single[data-v-0518895a]{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-0518895a]{position:absolute;display:block;height:18px;line-height:18px;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-0518895a 10s 0s linear infinite both;animation:notice-data-v-0518895a 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused}.uni-noticebar__more[data-v-0518895a]{display:inline-flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding-left:5px}.uni-noticebar__more-text[data-v-0518895a]{font-size:14px}@-webkit-keyframes notice-data-v-0518895a{100%{transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-0518895a{100%{transform:translate3d(-100%,0,0)}}',""]),t.exports=e},dbde:function(t,e,i){var n=i("d452");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("61161db7",n,!0,{sourceMap:!1,shadowMode:!1})},dcd9:function(t,e,i){"use strict";i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],i=new Promise((function(e,i){uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(i){t.textWidth=i[0].width,e()}))})),n=new Promise((function(e,i){uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(i){t.boxWidth=i[0].width,e()}))}));e.push(i),e.push(n),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=n},df05:function(t,e,i){var n=i("1fe6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("337b2269",n,!0,{sourceMap:!1,shadowMode:!1})},f884:function(t,e,i){"use strict";var n=i("dbde"),a=i.n(n);a.a},fae0:function(t,e,i){"use strict";i.r(e);var n=i("9312"),a=i("cc7c");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f884");var r,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"0518895a",null,!1,n["a"],r);e["default"]=s.exports}}]);