(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-add"],{"2f92":function(a,t,e){"use strict";(function(a){var n=e("4ea4");e("caad"),e("c975"),e("d81d"),e("a9e3"),e("d3b7"),e("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(e("5530")),r=e("e5d8"),o=a.database();o.command;function l(a){var t={};for(var e in r.validator)a.includes(e)&&(t[e]=r.validator[e]);return t}var s={data:function(){return{formData:{username:"",nickname:"",password:"",role:[],authorizedApp:[],tags:[],mobile:"",email:"",status:!0},rules:(0,i.default)((0,i.default)({},l(["username","password","role","mobile","email"])),{},{status:{rules:[{format:"bool"}]}}),roles:[]}},onLoad:function(){this.loadroles()},methods:{gotoAppList:function(){uni.navigateTo({url:"../app/list"})},gotoTagList:function(){uni.navigateTo({url:"../tag/list"})},gotoTagAdd:function(){var a=this;uni.navigateTo({url:"../tag/add",events:{refreshCheckboxData:function(){a.$refs.checkbox.loadData()}}})},submitForm:function(){this.$refs.form.submit()},submit:function(a){var t=this,e=a.detail,n=e.value,i=e.errors;i||(uni.showLoading({title:"提交中...",mask:!0}),"boolean"===typeof n.status&&(n.status=Number(!n.status)),this.$request("addUser",n).then((function(){uni.showToast({title:"新增成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(a){uni.showModal({content:a.message||"请求服务失败",showCancel:!1})})).finally((function(a){uni.hideLoading()})))},loadroles:function(){var a=this;o.collection("uni-id-roles").limit(500).get().then((function(t){var e=[];a.roles=t.result.data.map((function(a){return e.push(a.role_id),{value:a.role_id,text:a.role_name}})),-1===e.indexOf("admin")&&a.roles.unshift({value:"admin",text:"超级管理员"})})).catch((function(a){uni.showModal({title:"提示",content:a.message,showCancel:!1})}))}}};t.default=s}).call(this,e("a9ff")["default"])},4383:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,"[data-v-95d46a0a] .uni-forms-item__label{width:90px!important}",""]),a.exports=t},d723:function(a,t,e){"use strict";e.r(t);var n=e("2f92"),i=e.n(n);for(var r in n)"default"!==r&&function(a){e.d(t,a,(function(){return n[a]}))}(r);t["default"]=i.a},de25:function(a,t,e){"use strict";var n=e("ec17"),i=e.n(n);i.a},e063:function(a,t,e){"use strict";e.r(t);var n=e("f3ca"),i=e("d723");for(var r in i)"default"!==r&&function(a){e.d(t,a,(function(){return i[a]}))}(r);e("de25");var o,l=e("f0c5"),s=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"95d46a0a",null,!1,n["a"],o);t["default"]=s.exports},e5d8:function(a,t,e){"use strict";var n=e("4ea4");e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=s,t.enumConverter=t.validator=void 0;var i=n(e("3835")),r=n(e("b85c")),o={username:{rules:[{required:!0},{format:"string"},{minLength:2}],label:"用户名"},password:{rules:[{required:!0},{format:"password"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"},last_login_date:{rules:[{format:"timestamp"}]}};t.validator=o;var l={status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}};function s(a,t){var e={};for(var n in a){var o=a[n],l=o.type,s=o.value;switch(l){case"search":"string"===typeof s&&s.length&&(e[n]=new RegExp(s));break;case"select":if(s.length){var u,c=[],f=(0,r.default)(s);try{for(f.s();!(u=f.n()).done;){var d=u.value;c.push(t.eq(d))}}catch(y){f.e(y)}finally{f.f()}e[n]=t.or(c)}break;case"range":if(s.length){var m=s[0],p=s[1];e[n]=t.and([t.gte(m),t.lte(p)])}break;case"date":if(s.length){var v=(0,i.default)(s,2),b=v[0],h=v[1],g=new Date(b),x=new Date(h);e[n]=t.and([t.gte(g),t.lte(x)])}break;case"timestamp":if(s.length){var k=(0,i.default)(s,2),D=k[0],w=k[1];e[n]=t.and([t.gte(D),t.lte(w)])}break}}return e}t.enumConverter=l},ec17:function(a,t,e){var n=e("4383");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=e("4f06").default;i("48c9dc39",n,!0,{sourceMap:!1,shadowMode:!1})},f3ca:function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return n}));var n={uniForms:e("c62a").default,uniFormsItem:e("dcd6").default,uniEasyinput:e("a6e4").default,uniDataCheckbox:e("b4f8").default},i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:a.rules,validateTrigger:"bind"},on:{submit:function(t){arguments[0]=t=a.$handleEvent(t),a.submit.apply(void 0,arguments)}},model:{value:a.formData,callback:function(t){a.formData=t},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"username",label:"用户名",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户名"},model:{value:a.formData.username,callback:function(t){a.$set(a.formData,"username",t)},expression:"formData.username"}})],1),e("uni-forms-item",{attrs:{name:"nickname",label:"用户昵称",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户昵称"},model:{value:a.formData.nickname,callback:function(t){a.$set(a.formData,"nickname",t)},expression:"formData.nickname"}})],1),e("uni-forms-item",{attrs:{name:"password",label:"初始密码",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入初始密码"},model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"role",label:"角色列表"}},[e("uni-data-checkbox",{attrs:{multiple:!0,localdata:a.roles},model:{value:a.formData.role,callback:function(t){a.$set(a.formData,"role",t)},expression:"formData.role"}})],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"tags",label:"用户标签",labelWidth:"100"}},[e("uni-data-checkbox",{ref:"checkbox",attrs:{multiple:!0,collection:"uni-id-tag",field:"tagid as value, name as text"},model:{value:a.formData.tags,callback:function(t){a.$set(a.formData,"tags",t)},expression:"formData.tags"}}),e("span",{staticClass:"link-btn",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.gotoTagAdd.apply(void 0,arguments)}}},[a._v("新增")]),e("span",{staticClass:"link-btn",staticStyle:{"margin-left":"10px"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.gotoTagList.apply(void 0,arguments)}}},[a._v("管理")])],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"authorizedApp",label:"可登录应用",labelWidth:"100"}},[e("uni-data-checkbox",{attrs:{multiple:!0,collection:"opendb-app-list",field:"appid as value, name as text"},model:{value:a.formData.authorizedApp,callback:function(t){a.$set(a.formData,"authorizedApp",t)},expression:"formData.authorizedApp"}}),e("span",{staticClass:"link-btn",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.gotoAppList.apply(void 0,arguments)}}},[a._v("管理")])],1),e("uni-forms-item",{attrs:{name:"mobile",label:"手机号",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入手机号"},model:{value:a.formData.mobile,callback:function(t){a.$set(a.formData,"mobile",t)},expression:"formData.mobile"}})],1),e("uni-forms-item",{attrs:{name:"email",label:"邮箱",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入邮箱"},model:{value:a.formData.email,callback:function(t){a.$set(a.formData,"email",t)},expression:"formData.email"}})],1),e("uni-forms-item",{attrs:{name:"status",label:"是否启用"}},[e("v-uni-switch",{attrs:{checked:a.formData.status},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.binddata("status",t.detail.value)}}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.submitForm.apply(void 0,arguments)}}},[a._v(a._s(a.$t("common.button.submit")))]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[a._v(a._s(a.$t("common.button.back")))])],1)],1)],1)],1)},r=[]}}]);