(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-comparison-comparison"],{1210:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-charts-box1[data-v-063df97f]{padding:10px;height:420px}',""]),t.exports=e},"60f2":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("c960").default,uniDataSelect:a("3c1a").default,uniDatetimePicker:a("0ef1").default,qiunDataCharts:a("67ff").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group hide-on-phone"},[a("v-uni-view",{staticClass:"uni-sub-title"},[t._v("多个指标在不同平台数据的占比，可以直观看出各个平台引流的效果")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex mb-m"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text",orderby:"text asc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"ml-m label-text hide-on-phone"},[t._v("日期选择:")]),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":!!t.query.start_time},attrs:{type:"date",returnType:"timestamp",clearIcon:!1},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1)],1),a("v-uni-view",{staticClass:"dispaly-grid"},t._l(t.chartsData,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-stat--x uni-charts-box1"},[a("v-uni-view",{staticClass:"label-text",staticStyle:{margin:"5px 0 20px 0"}},[t._v(t._s(t.chartsData[n].title))]),a("qiun-data-charts",{attrs:{type:"ring",chartData:t.chartsData[n],echartsH5:!0,echartsApp:!0}})],1)})),1)],1)],1)},r=[]},6470:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("99af"),a("4de4"),a("4160"),a("c975"),a("d81d"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("2b3d"),Object.defineProperty(e,"__esModule",{value:!0}),e.stringifyQuery=o,e.stringifyField=u,e.stringifyGroupField=s,e.mapfields=c,e.getTimeOfSomeDayAgo=h,e.division=l,e.format=d,e.formatDate=f,e.parseDateTime=v,e.maxDeltaDay=m,e.debounce=y,e.fileToUrl=b,e.getFieldTotal=g,e.getAllDateCN=w,e.createUniStatQuery=D;var i=n(a("3835")),r=n(a("b85c"));function o(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=[],i=Object.keys(t),r=t.start_time;i.forEach((function(i){if("time_range"!==i&&-1===a.indexOf(i)){var o=t[i];o&&("string"===typeof o&&o.indexOf(i)>-1?n.push(o):("string"===typeof o&&(o='"'.concat(o,'"')),Array.isArray(o)?2===o.length&&i.indexOf("time")>-1?n.push("".concat(i," >= ").concat(o[0]," && ").concat(i," <= ").concat(o[1])):(o=o.map((function(t){return"".concat(i,' == "').concat(t,'"')})).join(" || "),o&&n.push("(".concat(o,")"))):e&&"dimension"===i?m(r)?n.push('dimension == "hour"'):o&&'"hour"'!==o?n.push("".concat(i," == ").concat(o)):n.push('dimension == "day"'):n.push("".concat(i," == ").concat(o))))}}));var o=n.join(" && ");return o||{}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"value",c=[],u=a;t=JSON.parse(JSON.stringify(t));var s,f=JSON.parse(JSON.stringify(e)),v=(0,r.default)(t);try{for(v.s();!(s=v.n()).done;){var p=s.value,h=p.field,m=p.computed,g=p.formatter,y=p.disable,_=p.fix;if(!y){a=u||p;var b=a.hasOwnProperty(o),w=n+h;if(e){var D=e[w];if(m){var x=m.split("/"),O=(0,i.default)(x,2),C=O[0],S=O[1];C=Number(f[n+C]),S=Number(f[n+S]);var j=d(l(C,S),g,_);b&&h===a.field?a[o]=j:a[h]=j}else if(D){var q=d(D,g,_);b?a.field===h&&(a[o]=q):a[h]=q}}b&&c.push(a)}}}catch(T){v.e(T)}finally{v.f()}return c}function u(t,e,a){e&&(t=t.filter((function(t){return t.field===e}))),a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=[];return t.computed?e=t.computed.split("/"):e.push(t.field),e=e.map((function(e){return-1===t.stat?e:"".concat(e," as ").concat("temp_"+e)})),e.join()}));return n.join()}function s(t,e,a){e&&(t=t.filter((function(t){return t.field===e}))),a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=t.stat,a=[];return t.computed?a=t.computed.split("/"):a.push(t.field),a=a.map((function(t){if(-1!==e)return"".concat(e||"sum","(").concat("temp_"+t,") as ").concat(t)})),a.filter(Boolean).join()})).filter(Boolean).join();return n}function l(t,e){return e?t/e:0}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=arguments.length>2?arguments[2]:void 0;if("number"!==typeof t)return t;if("%"===e)return t*=100,String(t).indexOf(".")>-1&&(t=t.toFixed(2)),t=t?t+e:t,t;if("%%"===e)return t=Number(t),t.toFixed(2)+"%";if("-"===e)return f(t,"day");if(":"===e){var n,i,r;t=Math.ceil(t),n=i=r=0;var o=3600,c=60;if(t>=o){n=Math.floor(t/o);var u=t%o;u>=c?(i=Math.floor(u/c),r=u%c):r=u}else o>=t&&t>=c?(i=Math.floor(t/c),r=t%c):r=t;var s=[n,i,r].map((function(t){return t<10?"0"+t:t}));return s.join(e)}return","===e?t.toLocaleString():(String(t).indexOf(".")>-1&&(t=Math.abs(t)>1?t.toFixed(a||0):t.toFixed(a||2)),t)}function f(t,e){var a=new Date(t);if("hour"===e){var n=a.getHours();return n=n<10?"0"+n:n,"".concat(n,":00 ~ ").concat(n,":59")}if("week"===e){var i=a.getDate()-a.getDay()+1,r=i+6,o=new Date(a.setDate(i));o=v(o);var c=new Date(a.setDate(r));return c=v(c),"".concat(o," ~ ").concat(c)}if("month"===e){var u=new Date(a.getFullYear(),a.getMonth(),1);u=v(u);var s=new Date(a.getFullYear(),a.getMonth()+1,0);return s=v(s),"".concat(u," ~ ").concat(s)}return v(a)}function v(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",n=t;"object"!==typeof n&&(n=new Date(n));var i=n.getFullYear(),r=n.getMonth()+1,o=n.getDate(),c=n.getHours(),u=n.getMinutes(),s=n.getSeconds(),l=[i,p(r),p(o)].join(a),d=[p(c),p(u),p(s)].join(":");return"dateTime"===e?l+" "+d:l}function p(t){return t<10?"0"+t:t}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),a=new Date(e),n=864e5,i=[a.getFullYear(),a.getMonth()+1,a.getDate()].join("/");i+=" 00:00:00";var r=new Date(i).getTime()-n*t;return r}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!t.length)return!0;var a=864e5,n=(0,i.default)(t,2),r=n[0],o=n[1],c=o-r<a*e;return c}function g(){var e,a=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"total_devices";"object"===typeof n&&(n=o(n,!1,["uni_platform"]));var r=t.database();return r.collection("uni-stat-result").where(n).field("".concat(i," as temp_").concat(i,", start_time")).groupBy("start_time").groupField("sum(temp_".concat(i,") as ").concat(i)).orderBy("start_time","desc").get().then((function(t){var n=t.result.data;return e=n.length&&n[0][i],e=d(e),a.panelData&&a.panelData.forEach((function(t){t.field===i&&(t.value=e)})),Promise.resolve(e)}))}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];a&&clearTimeout(a),a=setTimeout((function(){t.apply(n,r)}),e)}}var _={};function b(t){for(var e in _)if(_.hasOwnProperty(e)){var a=_[e];if(a===t)return e}var n=(window.URL||window.webkitURL).createObjectURL(t);return _[n]=t,n}function w(t,e){var a=[],n=0;while(e.getTime()-t.getTime()>=0)a[n]=t.getTime(),t.setDate(t.getDate()+1),n+=1;return a}function D(t){return Object.assign({},t,{type:"native_app",create_env:"uni-stat"})}}).call(this,a("a9ff")["default"])},7849:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("99af"),a("4160"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("b85c")),r=n(a("2909")),o=a("6470"),c={data:function(){return{query:{dimension:"day",appid:"",version_id:"",start_time:(0,o.getTimeOfSomeDayAgo)(0)},platforms:[],dayChartsData:[],monChartsData:[]}},created:function(){var t=this;this.debounceGet=(0,o.debounce)((function(){t.getChartData(t.query),t.getRangeCountData(t.query,"month")}))},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}}},computed:{chartsData:function(){return[].concat((0,r.default)(this.dayChartsData),(0,r.default)(this.monChartsData))},versionQuery:function(){var t=this.query.appid,e=(0,o.stringifyQuery)({appid:t});return e}},methods:{getChartData:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day";e=JSON.parse(JSON.stringify(e));var i=(0,o.getTimeOfSomeDayAgo)(0);if(e.start_time>=i){var r=(new Date).getTime();e.start_time=[i,r],e=(0,o.stringifyQuery)(e,!0)}else e=(0,o.stringifyQuery)(e);var c=t.database();c.collection("uni-stat-result").where(e).field("active_device_count,new_device_count,total_devices,platform_id").groupBy("platform_id").groupField("sum(active_device_count) as ".concat(n,"_active_device_count, sum(new_device_count) as ").concat(n,"_new_device_count, max(total_devices) as ").concat(n,"_total_devices")).get().then((function(t){var e=t.result.data;a.initChartOption(e,"dayChartsData")}))},getRangeCountData:function(e,a){var n=this;e=(0,o.stringifyQuery)(e);var i=t.database();i.collection("uni-stat-result").where(e).field("active_device_count, new_device_count, platform_id, ".concat(a,'(add(new Date(0),start_time), "Asia/Shanghai") as ').concat(a,',year(add(new Date(0),start_time), "Asia/Shanghai") as year')).groupBy("year, ".concat(a?a+",":"","platform_id")).groupField("sum(active_device_count) as ".concat(a,"_active_device_count, sum(new_device_count) as ").concat(a,"_new_device_count")).orderBy("year asc, ".concat(a," asc")).get().then((function(t){var e=t.result.data;n.initChartOption(e,"monChartsData","month")}))},initChartOption:function(e,a){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day",o=t.database();o.collection("uni-stat-app-platforms").get().then((function(t){var o=[{field:"".concat(r,"_new_device_count"),title:"".concat("day"===r?"日":"月","新增设备对比"),series:[{data:[]}]},{field:"".concat(r,"_active_device_count"),title:"".concat("day"===r?"日":"月","活跃设备对比"),series:[{data:[]}]}];"day"===r&&o.unshift({field:"day_total_devices",title:"总设备数对比",series:[{data:[]}]}),n[a]=o;var c=t.result.data,u={};c.forEach((function(t){u[t._id]=t.name}));var s,l=(0,i.default)(n[a]);try{for(l.s();!(s=l.n()).done;){var d,f=s.value,v=f.series[0].data,p=JSON.parse(JSON.stringify(u)),h=(0,i.default)(e);try{for(h.s();!(d=h.n()).done;){var m=d.value;for(var g in m)if(f.field===g){var y=m.platform_id,_={name:p[y],value:m[g]};v.push(_),delete p[y]}}}catch(D){h.e(D)}finally{h.f()}for(var b in p){var w={name:p[b],value:0};v.push(w)}}}catch(D){l.e(D)}finally{l.f()}}))}}};e.default=c}).call(this,a("a9ff")["default"])},"82cf":function(t,e,a){var n=a("1210");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0214633b",n,!0,{sourceMap:!1,shadowMode:!1})},b25e:function(t,e,a){"use strict";a.r(e);var n=a("7849"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b7a0:function(t,e,a){"use strict";var n=a("82cf"),i=a.n(n);i.a},cca76:function(t,e,a){"use strict";a.r(e);var n=a("60f2"),i=a("b25e");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("b7a0");var o,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"063df97f",null,!1,n["a"],o);e["default"]=u.exports}}]);