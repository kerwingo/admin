(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-tian-article-admin-pages-opendb-news-favorite-add"],{"0f86":function(t,n,a){"use strict";(function(t){var i=a("4ea4");a("caad"),a("d3b7"),a("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("5530")),u=i(a("f4eb")),r=t.database(),o=(r.command,"opendb-news-favorite");function s(t){var n={};for(var a in u.default)t.includes(a)&&(n[a]=u.default[a]);return n}var c={data:function(){return{formOptions:{},formData:{article_id:""},rules:(0,e.default)({},s(["article_id"]))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(n){t.submitForm(n)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var n=this;r.collection(o).add(t).then((function(t){uni.showToast({title:"新增成功"}),n.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};n.default=c}).call(this,a("a9ff")["default"])},9052:function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return u})),a.d(n,"a",(function(){return i}));var i={uniForms:a("79af").default,uniFormsItem:a("dde8").default,uniEasyinput:a("096a").default},e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},model:{value:t.formData,callback:function(n){t.formData=n},expression:"formData"}},[a("uni-forms-item",{attrs:{name:"article_id",label:""}},[a("uni-easyinput",{attrs:{placeholder:"文章id，参考opendb-news-articles表"},model:{value:t.formData.article_id,callback:function(n){t.$set(t.formData,"article_id",n)},expression:"formData.article_id"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},u=[]},"9c7c":function(t,n,a){"use strict";a.r(n);var i=a("9052"),e=a("f3da");for(var u in e)"default"!==u&&function(t){a.d(n,t,(function(){return e[t]}))}(u);var r,o=a("f0c5"),s=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);n["default"]=s.exports},f3da:function(t,n,a){"use strict";a.r(n);var i=a("0f86"),e=a.n(i);for(var u in i)"default"!==u&&function(t){a.d(n,t,(function(){return i[t]}))}(u);n["default"]=e.a}}]);