(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-tian-article-admin-pages-opendb-news-favorite-edit"],{2168:function(t,n,a){"use strict";(function(t){var i=a("4ea4");a("caad"),a("d3b7"),a("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("5530")),o=i(a("5a6e")),u=t.database(),r=(u.command,"opendb-news-favorite");function s(t){var n={};for(var a in o.default)t.includes(a)&&(n[a]=o.default[a]);return n}var c={data:function(){return{formData:{article_id:""},formOptions:{},rules:(0,e.default)({},s(["article_id"]))}},onLoad:function(t){var n=t.id;this.formDataId=n,this.getDetail(n)},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(n){t.submitForm(n)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var n=this;u.collection(r).doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),n.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var n=this;uni.showLoading({mask:!0}),u.collection(r).doc(t).get().then((function(t){var a=t.result.data[0];a&&(n.formData=a)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};n.default=c}).call(this,a("a9ff")["default"])},"5e3b":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return i}));var i={uniForms:a("c62a").default,uniFormsItem:a("dcd6").default,uniEasyinput:a("a6e4").default},e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{validateTrigger:"bind"},model:{value:t.formData,callback:function(n){t.formData=n},expression:"formData"}},[a("uni-forms-item",{attrs:{name:"article_id",label:""}},[a("uni-easyinput",{attrs:{placeholder:"文章id，参考opendb-news-articles表"},model:{value:t.formData.article_id,callback:function(n){t.$set(t.formData,"article_id",n)},expression:"formData.article_id"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},o=[]},"863f":function(t,n,a){"use strict";a.r(n);var i=a("2168"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);n["default"]=e.a},e841:function(t,n,a){"use strict";a.r(n);var i=a("5e3b"),e=a("863f");for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);var u,r=a("f0c5"),s=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=s.exports}}]);