(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-uni-stat-channel-channel~pages-uni-stat-device-activity-activity~pages-uni-s~1de35d0f"],{"0072":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uniTooltip:n("7702").default,uniIcons:n("405d").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-stat--tab-x"},[t.label?n("v-uni-view",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),n("v-uni-view",{staticClass:"uni-stat--tab"},[t.renderTabs.length?t._l(t.renderTabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"uni-stat--tab-item",class:[a===t.currentTab?"uni-stat--tab-item-"+t.type+"-active":"","uni-stat--tab-item-"+t.type,e.disabled?"uni-stat--tab-item-disabled":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.change(e,a)}}},[n("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.name)),e.tooltip?n("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1)})):n("v-uni-view",{staticClass:"uni-stat--tab-item uni-stat--tab-item-disabled",class:["uni-stat--tab-item-"+t.type]},[t._v(t._s(t.placeholder))])],2)],1)},r=[]},"028c":function(t,e,n){"use strict";n.r(e);var a=n("723e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"0454":function(t,e,n){"use strict";n.r(e);var a=n("600b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"45a0":function(t,e,n){var a=n("dc80");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d91dd020",a,!0,{sourceMap:!1,shadowMode:!1})},"52a9":function(t,e,n){"use strict";var a=n("45a0"),i=n.n(a);i.a},"600b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-tooltip",data:function(){return{}},props:{content:{type:String,default:""},placement:{type:String,default:"bottom"}}};e.default=a},"723e":function(t,e,n){"use strict";(function(t){n("4de4"),n("c975"),n("d81d"),n("4e82"),n("a9e3"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uni-stat-tabs",data:function(){return{currentTab:0,renderTabs:[]}},props:{type:{type:String,default:"line"},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},current:{type:[String,Number],default:0},mode:{type:String,default:""},today:{type:Boolean,default:!1},yesterday:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1},all:{type:Boolean,default:!0},label:{type:String,default:""},placeholder:{type:String,default:"暂无选项"},tabs:{type:Array,default:function(){return[]}}},created:function(){this.last="".concat(this.mode.replace("-","_"),"_last_data")},mounted:function(){this.init()},watch:{current:function(t){this.currentTab=t},tabs:{immediate:!1,handler:function(t){this.init()}},renderTabs:function(t){var e=this.current;this.mode&&t.length&&e>=0&&this.$nextTick((function(){var t=this.renderTabs[e];this.change(t,e)}))}},methods:{init:function(){if(this.mode.indexOf("platform")>-1)this.renderTabs=uni.getStorageSync(this.last),this.getPlatform();else if("date"===this.mode){var t=[{_id:7,name:"最近七天"},{_id:30,name:"最近30天"},{_id:90,name:"最近90天"}];this.yesterday&&t.unshift({_id:1,name:"昨天"}),this.today&&t.unshift({_id:0,name:"今天"}),this.renderTabs=t}else this.renderTabs=this.tabs},change:function(t,e){if(!t.disabled){var n=t._id,a=t.name;this.currentTab=e,this.emit(n,e,a,t)}},emit:function(t,e,n,a){this.$emit("change",t,e,n,a),this.$emit("input",t,e,n),this.$emit("update:modelValue",t,e,n)},getPlatform:function(){var e=this,n=t.database();n.collection("uni-stat-app-platforms").get().then((function(t){var n=t.result.data;if(n=n.filter((function(t){return!t.hasOwnProperty("enable")||t.enable})),n.sort((function(t,e){return t.order-e.order})),"platform-channel"===e.mode){n=n.filter((function(t){return/^android|ios$/.test(t.code)}));var a=n.map((function(t){return'platform_id == "'.concat(t._id,'"')})).join(" || ");a="(".concat(a,")"),e.setAllItem(n,a)}else if("platform-scene"===e.mode){n=n.filter((function(t){return/mp-/.test(t.code)}));var i=n.map((function(t){return'platform_id == "'.concat(t._id,'"')})).join(" || ");i="(".concat(i,")"),e.setAllItem(n,i)}else e.setAllItem(n);uni.setStorageSync(e.last,n),e.renderTabs=n}))},setAllItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"全部";this.all&&t.unshift({name:n,_id:e})}}};e.default=a}).call(this,n("a9ff")["default"])},7702:function(t,e,n){"use strict";n.r(e);var a=n("fa66"),i=n("0454");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("52a9");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"52248b2c",null,!1,a["a"],o);e["default"]=c.exports},8314:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-44fc9d49]{width:160px;white-space:normal}.uni-label-text[data-v-44fc9d49]{font-size:14px;font-weight:700;color:#555;margin-top:17px;margin-bottom:17px;margin-right:5px}.uni-stat--tab-x[data-v-44fc9d49]{display:flex;margin:0 15px;white-space:nowrap}.uni-stat--tab[data-v-44fc9d49]{display:flex;flex-wrap:wrap}.uni-stat--tab-item[data-v-44fc9d49]{white-space:nowrap;font-size:14px;color:#666;text-align:center;cursor:pointer;box-sizing:border-box;margin:15px 0}.uni-stat--tab-item-disabled[data-v-44fc9d49]{cursor:unset;opacity:.4}.uni-stat--tab-item-line[data-v-44fc9d49]{margin-right:30px;padding:2px 0;border-bottom:1px solid transparent}.uni-stat--tab-item-line[data-v-44fc9d49]:last-child{margin-right:0}.uni-stat--tab-item-line-active[data-v-44fc9d49]{color:#2979ff;border-bottom:1px solid #2979ff}.uni-stat--tab-item-boldLine[data-v-44fc9d49]{box-sizing:border-box;margin-right:30px;padding:2px 0;border-bottom:2px solid transparent}.uni-stat--tab-item-boldLine[data-v-44fc9d49]:last-child{margin-right:0}.uni-stat--tab-item-boldLine-active[data-v-44fc9d49]{box-sizing:border-box;color:#2979ff;border-bottom:2px solid #2979ff}.uni-stat--tab-item-box[data-v-44fc9d49]{padding:5px 15px;border:1px solid #dcdfe6}.uni-stat--tab-item-box[data-v-44fc9d49]:not(:last-child){border-right-color:transparent}.uni-stat--tab-item-box-active[data-v-44fc9d49]{box-sizing:border-box;border:1px solid #2979ff!important}@media screen and (max-width:500px){.hide-on-phone[data-v-44fc9d49]{display:none}.uni-stat--tab[data-v-44fc9d49]{flex-wrap:unset;overflow-x:auto!important}[data-v-44fc9d49]::-webkit-scrollbar{display:none}}',""]),t.exports=e},b520:function(t,e,n){"use strict";n.r(e);var a=n("0072"),i=n("028c");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("fece");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"44fc9d49",null,!1,a["a"],o);e["default"]=c.exports},d778:function(t,e,n){var a=n("8314");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1f307226",a,!0,{sourceMap:!1,shadowMode:!1})},dc80:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-tooltip[data-v-52248b2c]{position:relative;cursor:pointer}.uni-tooltip-popup[data-v-52248b2c]{z-index:1;display:none;position:absolute;left:0;background-color:#333;border-radius:8px;color:#fff;font-size:12px;text-align:left;line-height:16px;padding:12px}.uni-tooltip:hover .uni-tooltip-popup[data-v-52248b2c]{display:block}",""]),t.exports=e},fa66:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-tooltip"},[t._t("default"),t.content||t.$slots.content?n("v-uni-view",{staticClass:"uni-tooltip-popup"},[t._t("content",[t._v(t._s(t.content))])],2):t._e()],2)},r=[]},fe56:function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("159b"),n("ddb0"),n("2b3d"),Object.defineProperty(e,"__esModule",{value:!0}),e.stringifyQuery=o,e.stringifyField=c,e.stringifyGroupField=s,e.mapfields=u,e.getTimeOfSomeDayAgo=h,e.division=l,e.format=d,e.formatDate=f,e.parseDateTime=p,e.maxDeltaDay=m,e.debounce=g,e.fileToUrl=x,e.getFieldTotal=b,e.getAllDateCN=_,e.createUniStatQuery=w;var i=a(n("3835")),r=a(n("b85c"));function o(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=[],i=Object.keys(t),r=t.start_time;i.forEach((function(i){if("time_range"!==i&&-1===n.indexOf(i)){var o=t[i];o&&("string"===typeof o&&o.indexOf(i)>-1?a.push(o):("string"===typeof o&&(o='"'.concat(o,'"')),Array.isArray(o)?2===o.length&&i.indexOf("time")>-1?a.push("".concat(i," >= ").concat(o[0]," && ").concat(i," <= ").concat(o[1])):(o=o.map((function(t){return"".concat(i,' == "').concat(t,'"')})).join(" || "),o&&a.push("(".concat(o,")"))):e&&"dimension"===i?m(r)?a.push('dimension == "hour"'):o&&'"hour"'!==o?a.push("".concat(i," == ").concat(o)):a.push('dimension == "day"'):a.push("".concat(i," == ").concat(o))))}}));var o=a.join(" && ");return o||{}}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"value",u=[],c=n;t=JSON.parse(JSON.stringify(t));var s,f=JSON.parse(JSON.stringify(e)),p=(0,r.default)(t);try{for(p.s();!(s=p.n()).done;){var v=s.value,h=v.field,m=v.computed,b=v.formatter,g=v.disable,y=v.fix;if(!g){n=c||v;var x=n.hasOwnProperty(o),_=a+h;if(e){var w=e[_];if(m){var T=m.split("/"),D=(0,i.default)(T,2),O=D[0],S=D[1];O=Number(f[a+O]),S=Number(f[a+S]);var j=d(l(O,S),b,y);x&&h===n.field?n[o]=j:n[h]=j}else if(w){var M=d(w,b,y);x?n.field===h&&(n[o]=M):n[h]=M}}x&&u.push(n)}}}catch(F){p.e(F)}finally{p.f()}return u}function c(t,e,n){e&&(t=t.filter((function(t){return t.field===e}))),n&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(n)})));var a=t.map((function(t){var e=[];return t.computed?e=t.computed.split("/"):e.push(t.field),e=e.map((function(e){return-1===t.stat?e:"".concat(e," as ").concat("temp_"+e)})),e.join()}));return a.join()}function s(t,e,n){e&&(t=t.filter((function(t){return t.field===e}))),n&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(n)})));var a=t.map((function(t){var e=t.stat,n=[];return t.computed?n=t.computed.split("/"):n.push(t.field),n=n.map((function(t){if(-1!==e)return"".concat(e||"sum","(").concat("temp_"+t,") as ").concat(t)})),n.filter(Boolean).join()})).filter(Boolean).join();return a}function l(t,e){return e?t/e:0}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2?arguments[2]:void 0;if("number"!==typeof t)return t;if("%"===e)return t*=100,String(t).indexOf(".")>-1&&(t=t.toFixed(2)),t=t?t+e:t,t;if("%%"===e)return t=Number(t),t.toFixed(2)+"%";if("-"===e)return f(t,"day");if(":"===e){var a,i,r;t=Math.ceil(t),a=i=r=0;var o=3600,u=60;if(t>=o){a=Math.floor(t/o);var c=t%o;c>=u?(i=Math.floor(c/u),r=c%u):r=c}else o>=t&&t>=u?(i=Math.floor(t/u),r=t%u):r=t;var s=[a,i,r].map((function(t){return t<10?"0"+t:t}));return s.join(e)}return","===e?t.toLocaleString():(String(t).indexOf(".")>-1&&(t=Math.abs(t)>1?t.toFixed(n||0):t.toFixed(n||2)),t)}function f(t,e){var n=new Date(t);if("hour"===e){var a=n.getHours();return a=a<10?"0"+a:a,"".concat(a,":00 ~ ").concat(a,":59")}if("week"===e){var i=n.getDate()-n.getDay()+1,r=i+6,o=new Date(n.setDate(i));o=p(o);var u=new Date(n.setDate(r));return u=p(u),"".concat(o," ~ ").concat(u)}if("month"===e){var c=new Date(n.getFullYear(),n.getMonth(),1);c=p(c);var s=new Date(n.getFullYear(),n.getMonth()+1,0);return s=p(s),"".concat(c," ~ ").concat(s)}return p(n)}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",a=t;"object"!==typeof a&&(a=new Date(a));var i=a.getFullYear(),r=a.getMonth()+1,o=a.getDate(),u=a.getHours(),c=a.getMinutes(),s=a.getSeconds(),l=[i,v(r),v(o)].join(n),d=[v(u),v(c),v(s)].join(":");return"dateTime"===e?l+" "+d:l}function v(t){return t<10?"0"+t:t}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=new Date(e),a=864e5,i=[n.getFullYear(),n.getMonth()+1,n.getDate()].join("/");i+=" 00:00:00";var r=new Date(i).getTime()-a*t;return r}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!t.length)return!0;var n=864e5,a=(0,i.default)(t,2),r=a[0],o=a[1],u=o-r<n*e;return u}function b(){var e,n=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"total_devices";"object"===typeof a&&(a=o(a,!1,["uni_platform"]));var r=t.database();return r.collection("uni-stat-result").where(a).field("".concat(i," as temp_").concat(i,", start_time")).groupBy("start_time").groupField("sum(temp_".concat(i,") as ").concat(i)).orderBy("start_time","desc").get().then((function(t){var a=t.result.data;return e=a.length&&a[0][i],e=d(e),n.panelData&&n.panelData.forEach((function(t){t.field===i&&(t.value=e)})),Promise.resolve(e)}))}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=null;return function(){for(var a=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){t.apply(a,r)}),e)}}var y={};function x(t){for(var e in y)if(y.hasOwnProperty(e)){var n=y[e];if(n===t)return e}var a=(window.URL||window.webkitURL).createObjectURL(t);return y[a]=t,a}function _(t,e){var n=[],a=0;while(e.getTime()-t.getTime()>=0)n[a]=t.getTime(),t.setDate(t.getDate()+1),a+=1;return n}function w(t){return Object.assign({},t,{type:"native_app",create_env:"uni-stat"})}}).call(this,n("a9ff")["default"])},fece:function(t,e,n){"use strict";var a=n("d778"),i=n.n(a);i.a}}]);