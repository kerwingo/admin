(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-retention-retention"],{1297:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},"14ac":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("405d").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===t.showPageSize||"true"===t.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:t.pageSizeIndex,range:t.pageSizeRange},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[t._v(t._s(t.pageSizeRange[t.pageSizeIndex])+" "+t._s(t.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):t._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[t._v("共 "+t._s(t.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===t.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===t.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[t._v(t._s(t.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[t._v("/"+t._s(t.maxPage||0))]),t._l(t.paper,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":e===t.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=t.$handleEvent(n),t.selectPage(e,i)}}},[n("v-uni-text",[t._v(t._s(e))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:t.currentIndex>=t.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":t.currentIndex===t.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[t._v(t._s(t.nextPageText))])]],2)],1)},r=[]},"1a32":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},"2d92":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("99af"),n("4de4"),n("4160"),n("d81d"),n("d3b7"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("b85c")),r=n("fe56"),o=i(n("9760")),u={data:function(){return{query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:0,tableData:[],chartData:{},field:"new_device",fields:[{_id:"new_device",name:"新增留存",tooltip:"指定时间新增（即首次访问应用）用户，在之后的第N天，再次访问应用的用户数占比"},{_id:"active_device",name:"活跃留存",tooltip:"指定时间活跃（即访问应用）用户，在之后的第N天，再次访问应用的用户数占比"}],key:1,channelData:[]}},computed:{fieldsMap:function(){var t="active_device"===this.field?"活跃用户":"新增用户",e=[{title:t,field:"".concat(this.field,"_count"),stat:0}];return(0,o.default)(e)},fieldName:function(){var t=this,e="";return this.fields.forEach((function(n){n._id===t.field&&(e=n.name)})),e},keyName:function(){var t=this;return this.keys.forEach((function(e){if(e._id===t.key)return e.name}))},keys:function(){var t=[1,2,3,4,5,6,7,14,30];return t.map((function(t){return{_id:t,name:"".concat(t,"天后")}}))},channelQuery:function(){var t=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,n=t.uni_platform,i=(0,r.stringifyQuery)({appid:e,uni_platform:n});return i}},created:function(){var t=this;this.debounceGet=(0,r.debounce)((function(){return t.getAllData(t.query)})),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.options.pageCurrent=1,this.debounceGet()}},key:function(){this.debounceGet()},field:function(){this.debounceGet()}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,n,i){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(t,e){this.currentDateTab=e;var n=(0,r.getTimeOfSomeDayAgo)(t),i=(0,r.getTimeOfSomeDayAgo)(0)-1;this.query.start_time=[n,i]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getTabelData(this.query)},changePageSize:function(t){this.options.pageSize=t,this.options.pageCurrent=1,this.getTabelData(this.query)},stringifyField:function(t,e,n){var i=this;e&&(t=t.filter((function(t){return t.field===e}))),n&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(n)})));var a=t.map((function(t){return-1===t.stat?t.field:0===t.stat?"".concat(t.field," as ").concat("temp_"+t.field):"retention.".concat(i.field,".").concat(t.field,".device_count as ").concat("temp_"+t.field)})).join();return a},createStr:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"device_count",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=e||[1,2,3,4,5,6,7,14,30],r="d",o=this.fields.map((function(t){return t._id}));n=n||o;var u=a.map((function(e){return n.map((function(n){return"retention.".concat(n,".").concat(r+"_"+e,".").concat(t," as ").concat(r+"_"+e)}))}));i&&u.push(i);var c=u.join();return c},getAllData:function(t){this.getChartData(t,this.key,this.keyName),this.getTabelData(t)},getChartData:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.key;this.options.pageCurrent;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);this.createStr("device_count",[i],[this.field]);var o=t.database();o.collection("uni-stat-result").where(e).field("".concat(this.stringifyField(this.fieldsMap,"d_".concat(i)),", start_time")).groupBy("start_time").groupField((0,r.stringifyGroupField)(this.fieldsMap,"d_".concat(i))).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e,o=t.result,u=(o.count,o.data),c={categories:[],series:[{name:"".concat(i,"天后").concat(n.fieldName),data:[]}]},s=(0,a.default)(u);try{for(s.s();!(e=s.n()).done;){var l=e.value,d=(0,r.formatDate)(l.start_time,"day"),p=l["d_".concat(i)];c.series[0].data.push(p),c.categories.push(d)}}catch(f){s.e(f)}finally{s.f()}n.chartData=c})).catch((function(t){})).finally((function(){n.loading=!1}))},getTabelData:function(e){var n=this,i=this.options.pageCurrent;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);var o=this.field+"_count";this.createStr("user_rate","",[this.field],o);this.loading=!0;var u=t.database();u.collection("uni-stat-result").where(e).field(this.stringifyField(this.fieldsMap)).groupBy("start_time").groupField((0,r.stringifyGroupField)(this.fieldsMap)).orderBy("start_time","desc").skip((i-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(t){var e,i=t.result,o=i.count,u=i.data,c=(0,a.default)(u);try{for(c.s();!(e=c.n()).done;){var s=e.value;(0,r.mapfields)(n.fieldsMap,s,s)}}catch(l){c.e(l)}finally{c.f()}n.options.total=o,n.tableData=[],n.tableData=u})).catch((function(t){})).finally((function(){n.loading=!1}))},getChannelData:function(e,n){var i=this;this.query.channel_id="";var a=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),n=n||this.query.platform_id,n&&(r.platform_id=n);var o=a.collection("uni-stat-app-platforms").field("_id, name").getTemp(),u=a.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();a.collection(u,o).orderBy("platform_id","asc").get().then((function(t){var e,n=t.result.data,a=[];if(n.length>0)for(var r in n)e=n[r].channel_name?n[r].channel_name:"默认",n[r].platform_id.length>0&&(e=n[r].platform_id[0].name+"-"+e),a.push({value:n[r]._id,text:e});i.channelData=a})).catch((function(t){})).finally((function(){}))}}};e.default=u}).call(this,n("a9ff")["default"])},4961:function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("a9e3"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("37dc"),r=i(n("92cf")),o=(0,a.initVueI18n)(r.default),u=o.t,c={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||u("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||u("uni-pagination.prevText")},nextPageText:function(){return this.nextText||u("uni-pagination.nextText")},maxPage:function(){var t=1,e=Number(this.total),n=Number(this.pageSize);return e&&n&&(t=Math.ceil(e/n)),t},paper:function(){for(var t=this.currentIndex,e=this.pagerCount,n=this.total,i=this.pageSize,a=[],r=[],o=Math.ceil(n/i),u=0;u<o;u++)a.push(u+1);r.push(1);var c=a[a.length-(e+1)/2];return a.forEach((function(n,i){(e+1)/2>=t?n<e+1&&n>1&&r.push(n):t+2<=c?n>t-(e+1)/2&&n<t+(e+1)/2&&r.push(n):(n>t-(e+1)/2||o-e<n)&&n<a[a.length-1]&&r.push(n)})),o>e?((e+1)/2>=t?r[r.length-1]="...":t+2<=c?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(e+1)/2>=t||t+2<=c||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler:function(t,e){this.currentIndex=t<1?1:t}},value:{immediate:!0,handler:function(t){1===Number(this.current)&&(this.currentIndex=t<1?1:t)}},pageSizeIndex:function(t){this.$emit("pageSizeChange",this.pageSizeRange[t])}},methods:{pickerChange:function(t){this.pageSizeIndex=t.detail.value,this.pickerClick()},pickerClick:function(){var t=document.querySelector("body");if(t){var e="uni-pagination-picker-show";this.pickerShow=!this.pickerShow,this.pickerShow?t.classList.add(e):setTimeout((function(){return t.classList.remove(e)}),300)}},selectPage:function(t,e){if(parseInt(t))this.currentIndex=t,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(e<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(e>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:t,current:this.currentIndex})}}};e.default=c},"5d5f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uniStatBreadcrumb:n("242c").default,uniDataSelect:n("a791").default,uniStatTabs:n("b520").default,uniDatetimePicker:n("ca47").default,qiunDataCharts:n("1ca0").default,uniIcons:n("405d").default,uniTable:n("3ab9").default,uniTr:n("131d").default,uniTh:n("ad1e").default,uniTd:n("4c44").default,uniPagination:n("6953").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("设备留存趋势分析")])],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-stat--x flex"},[n("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAppid.apply(void 0,arguments)}},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),n("uni-data-select",{attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text",orderby:"text asc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),n("v-uni-view",{staticClass:"flex"},[n("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date",yesterday:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),n("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1)],1),n("v-uni-view",{staticClass:"uni-stat--x"},[n("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?n("uni-data-select",{attrs:{localdata:t.channelData,label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),n("v-uni-view",{staticClass:"uni-stat--x mb-m",staticStyle:{"padding-top":"0"}},[n("v-uni-view",{staticClass:"mb-m line-bottom"},[n("uni-stat-tabs",{staticStyle:{"line-height":"40px","margin-bottom":"-17px"},attrs:{type:"boldLine",tabs:t.fields,tooltip:!0},model:{value:t.field,callback:function(e){t.field=e},expression:"field"}})],1),n("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.keys},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}),n("v-uni-view",{staticClass:"p-m"},[n("v-uni-view",{staticClass:"uni-charts-box"},[n("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,echartsH5:!0,echartsApp:!0,tooltipFormat:"tooltipCustom"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-stat--x p-m"},[n("v-uni-view",{staticClass:"uni-tips mb-s flex"},[n("uni-icons",{attrs:{type:"info"}}),t._v("表格中显示为空，表示留存为 0 或无数据")],1),n("uni-table",{attrs:{loading:t.loading,stripe:!0,emptyText:t.$t("common.empty")}},[n("uni-tr",{staticStyle:{"background-color":"#eee"}},[t._l(t.fieldsMap,(function(e,i){return[e.title?n("uni-th",{key:i,attrs:{align:"center"}},[t._v(t._s(e.title))]):t._e()]}))],2),t._l(t.tableData,(function(e,i){return n("uni-tr",{key:i},[t._l(t.fieldsMap,(function(i,a){return[i.title?n("uni-td",{key:a,class:/[d|w|m]_\d/.test(i.field)&&[e[i.field]?"uni-stat-table-bg":""],attrs:{align:"center"}},[t._v(t._s(e[i.field]?e[i.field]:""))]):t._e()]}))],2)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":t.options.pageSize,current:t.options.pageCurrent,total:t.options.total},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},"665e":function(t,e,n){"use strict";var i=n("f8e1"),a=n.n(i);a.a},6953:function(t,e,n){"use strict";n.r(e);var i=n("14ac"),a=n("caf97");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("b684");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"28de2840",null,!1,i["a"],o);e["default"]=c.exports},"6a6d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),t.exports=e},"6cf1":function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"768e":function(t,e,n){var i=n("6a6d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8c2ddea2",i,!0,{sourceMap:!1,shadowMode:!1})},"7aba":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-09830f72]{display:flex;flex-wrap:wrap;align-items:center}.label-text[data-v-09830f72]{font-size:14px;color:#666;margin:auto 0;margin-right:5px}.line-bottom[data-v-09830f72]{border-bottom:2px solid #eee}.uni-stat-table-bg[data-v-09830f72]{background-color:#4e82d9;color:#fff}',""]),t.exports=e},"7dde":function(t,e,n){"use strict";n.r(e);var i=n("2d92"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"83c5":function(t,e,n){"use strict";n.r(e);var i=n("5d5f"),a=n("7dde");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("665e");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"09830f72",null,!1,i["a"],o);e["default"]=c.exports},"92cf":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d5d5")),r=i(n("6cf1")),o=i(n("1a32")),u=i(n("be2d")),c=i(n("1297")),s={en:a.default,es:r.default,fr:o.default,"zh-Hans":u.default,"zh-Hant":c.default};e.default=s},9760:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909"));function r(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{title:"新增设备",field:"new_device_count",stat:0}],n=[{title:"日期",field:"start_time",tooltip:"",formatter:"-",stat:-1}];e&&(t=n).push.apply(t,(0,a.default)(e));var i=[1,2,3,4,5,6,7,14,30],r=i.map((function(t){return{title:"".concat(t,"天后"),field:"d_".concat(t),computed:"d_".concat(t,"/").concat(e[0].field),formatter:"%",tooltip:""}}));return n=n.concat(r),n}var o=r;e.default=o},b684:function(t,e,n){"use strict";var i=n("768e"),a=n.n(i);a.a},be2d:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},caf97:function(t,e,n){"use strict";n.r(e);var i=n("4961"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d5d5:function(t){t.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},f8e1:function(t,e,n){var i=n("7aba");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("57245cd2",i,!0,{sourceMap:!1,shadowMode:!1})}}]);