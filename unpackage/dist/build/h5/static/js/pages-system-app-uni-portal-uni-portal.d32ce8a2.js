(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-app-uni-portal-uni-portal"],{"0acb":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.strong[data-v-0fd7c4c2]{padding:%?10?%;display:inline-block;color:#c7254e}.a-label[data-v-0fd7c4c2]{text-decoration:none;color:#0366d6;font-weight:700;padding:%?10?%}.text-separated[data-v-0fd7c4c2]{line-height:2em;color:#2c3e50}.tip[data-v-0fd7c4c2]{display:flex;flex-direction:column;align-items:flex-start;background-color:#f3f5f7;color:#2c3e50;padding:10px;font-size:%?32?%;border-color:#409eff;border-left-width:8px;border-left-style:solid}.tip uni-text[data-v-0fd7c4c2]{margin-right:15px}.tip .custom-button[data-v-0fd7c4c2]{margin-left:0}',""]),t.exports=n},"40a1":function(t,n,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(t,n){var a=document.createElement("a");a.download=n,a.style.display="none";var e=new Blob([t]);a.href=URL.createObjectURL(e),document.body.appendChild(a),a.click(),document.body.removeChild(a)},i={data:function(){return{id:""}},onLoad:function(t){var n=t.id;this.id=n},methods:{publish:function(){this.id?this.$request("createPublishHtml",{id:this.id},{functionName:"uni-portal",showModal:!1}).then((function(t){"download"in document.createElement("a")?e(t.body,"index.html"):uni.showToast({icon:"error",title:"浏览器不支持",duration:800})})).catch((function(t){uni.showModal({content:t.errMsg,showCancel:!1})})):uni.showModal({content:"页面出错，请返回重进",showCancel:!1,success:function(t){uni.redirectTo({url:"/pages/system/app/list"})}})}}};n.default=i},"6d78":function(t,n,a){"use strict";a.r(n);var e=a("40a1"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},"6df7":function(t,n,a){"use strict";var e=a("b2e7"),i=a.n(e);i.a},7517:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"uni-container"},[a("h3",{staticClass:"text-separated",staticStyle:{padding:"0 0 20rpx 0"}},[t._v("步骤1：了解“统一发布页”")]),a("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[a("v-uni-view",{staticClass:"text-separated"},[a("v-uni-text",{staticClass:"strong"},[t._v("uni-portal")]),a("v-uni-text",[t._v("是 uni-app 提供的一套开箱即用的“统一发布页”。")])],1),a("v-uni-view",{staticClass:"text-separated"},[a("v-uni-text",{staticClass:"strong"},[t._v("uni-portal")]),a("v-uni-text",[t._v("可作为面向用户的统一业务名片，在一个页面集中展现：App下载地址、小程序二维码、H5访问链接等信息。")])],1),a("v-uni-view",{staticClass:"text-separated"},[a("v-uni-text",{staticStyle:{"font-size":"16px"}},[t._v("uni-app 官方示例的发布页就是基于"),a("v-uni-text",{staticClass:"strong"},[t._v("uni-portal")]),t._v("制作的，"),a("a",{staticClass:"a-label",attrs:{href:"https://hellouniapp.dcloud.net.cn/portal",target:"_blank"}},[t._v("点击体验")])],1)],1)],1),a("h3",{staticClass:"text-separated",staticStyle:{padding:"40rpx 0 20rpx 0"}},[t._v("步骤2：获取“统一发布页”")]),a("v-uni-view",{staticClass:"flex text-separated",staticStyle:{"margin-top":"20rpx"}},[a("v-uni-text",[a("v-uni-view",{staticClass:"strong"},[t._v("uni-portal")]),t._v("可根据「应用管理」中所填写的应用信息，一键生成发布页：")],1),a("v-uni-button",{staticClass:"custom-button",staticStyle:{margin:"0"},attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.publish.apply(void 0,arguments)}}},[t._v("生成并下载发布页")])],1),a("h3",{staticClass:"text-separated",staticStyle:{padding:"40rpx 0 20rpx 0"}},[t._v("步骤3：上传“统一发布页”")]),a("v-uni-view",{staticStyle:{"margin-top":"20rpx"}},[a("v-uni-view",{staticClass:"text-separated"},[a("v-uni-text",[t._v("步骤2下载的“统一发布页”，是一个静态HTML页面，你可以直接在本地浏览器中打开访问。")])],1),a("v-uni-view",{staticClass:"text-separated"},[a("v-uni-text",[t._v("为了让用户访问到这个“统一发布页”，你需要将该静态HTML文件上传到你的服务器中；推荐使用"),a("a",{staticClass:"a-label",staticStyle:{padding:"5px"},attrs:{href:"https://uniapp.dcloud.io/uniCloud/hosting",target:"_blank"}},[t._v("前端网页托管")]),t._v("，因为前端网页托管具备使用更简单、价格更便宜、访问更快等优点。")])],1)],1)],1)},r=[]},ad1e:function(t,n,a){"use strict";a.r(n);var e=a("7517"),i=a("6d78");for(var r in i)"default"!==r&&function(t){a.d(n,t,(function(){return i[t]}))}(r);a("6df7");var s,o=a("f0c5"),c=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"0fd7c4c2",null,!1,e["a"],s);n["default"]=c.exports},b2e7:function(t,n,a){var e=a("0acb");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("0410effa",e,!0,{sourceMap:!1,shadowMode:!1})}}]);