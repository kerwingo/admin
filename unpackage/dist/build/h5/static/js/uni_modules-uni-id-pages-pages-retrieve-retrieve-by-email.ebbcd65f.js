(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-retrieve-retrieve-by-email"],{"02d1":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniPopup:a("9e7c").default,uniCaptcha:a("65eb").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uni-popup",{ref:"popup",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"popup-captcha"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),a("uni-captcha",{attrs:{focus:t.focus,scene:t.scene},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),a("v-uni-view",{staticClass:"button-box"},[a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"btn confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},o=[]},"0587":function(t,e,a){"use strict";a.r(e);var n=a("02d1"),i=a("2524");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("9b7f");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"409f9516",null,!1,n["a"],r);e["default"]=s.exports},"0a33":function(t,e,a){var n=a("f632");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("385fb339",n,!0,{sourceMap:!1,shadowMode:!1})},1618:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("8fe4").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"captcha-box"},[a("v-uni-view",{staticClass:"captcha-img-box"},[t.loging?a("uni-icons",{staticClass:"loding",attrs:{size:"20px",color:"#BBB",type:"spinner-cycle"}}):t._e(),a("v-uni-image",{staticClass:"captcha-img",class:{opacity:t.loging},attrs:{src:t.captchaBase64,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImageCaptcha.apply(void 0,arguments)}}})],1),a("v-uni-input",{staticClass:"captcha",attrs:{focus:t.focusCaptchaInput,type:"text",inputBorder:!1,maxlength:"4",placeholder:"请输入验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusCaptchaInput=!1}},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)},o=[]},"1e24":function(t,e,a){"use strict";a.r(e);var n=a("b59a"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},2491:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniCaptcha:a("65eb").default,uniEasyinput:a("a6e4").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-captcha",{ref:"captcha",attrs:{focus:t.focusCaptchaInput,scene:"send-email-code"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),a("v-uni-view",{staticClass:"box"},[a("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusEmailCodeInput,type:"number",inputBorder:!1,maxlength:"6",placeholder:"请输入邮箱验证码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusEmailCodeInput=!1}},model:{value:t.modelValue,callback:function(e){t.modelValue=e},expression:"modelValue"}}),a("v-uni-view",{staticClass:"short-code-btn",attrs:{"hover-class":"hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"inner-text",class:0==t.reverseNumber?"inner-text-active":""},[t._v(t._s(t.innerText))])],1)],1)],1)},o=[]},2524:function(t,e,a){"use strict";a.r(e);var n=a("de5a"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"2c79":function(t,e,a){var n=a("7f28");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1b864c8c",n,!0,{sourceMap:!1,shadowMode:!1})},"318e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-55accb43]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-55accb43]{padding:0 %?60?%}.login-logo[data-v-55accb43]{display:none}@media screen and (min-width:690px){.uni-content[data-v-55accb43]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-55accb43]{display:flex;justify-content:center}.login-logo uni-image[data-v-55accb43]{width:60px;height:60px}.register-back[data-v-55accb43]{display:none}uni-button[data-v-55accb43]{padding-bottom:1px}}.uni-content uni-view[data-v-55accb43]{box-sizing:border-box}.title[data-v-55accb43]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-55accb43]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-55accb43]  .uni-easyinput__content,\r\n.input-box[data-v-55accb43]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-55accb43]{color:#04498c;cursor:pointer}.uni-content[data-v-55accb43]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-55accb43]{text-align:center;height:40px;line-height:40px;margin:15px 0 0 0;color:#fff!important;border-radius:5px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-55accb43]{height:auto!important}@media screen and (max-width:690px){.uni-content[data-v-55accb43]{margin-top:15px}}@media screen and (min-width:690px){.uni-content[data-v-55accb43]{padding:30px 40px 40px;max-height:650px}.link-box[data-v-55accb43]{display:flex;flex-direction:row;justify-content:space-between;margin-top:10px}.link[data-v-55accb43]{font-size:12px}}',""]),t.exports=e},4482:function(t,e,a){var n=a("318e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("508560a6",n,!0,{sourceMap:!1,shadowMode:!1})},"5ae4":function(t,e,a){"use strict";var n=a("ad08"),i=a.n(n);i.a},"627b":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniMatchMedia:a("a5e8").default,uniForms:a("c62a").default,uniFormsItem:a("dcd6").default,uniEasyinput:a("a6e4").default,uniIdPagesEmailForm:a("7aac").default,uniPopupCaptcha:a("0587").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-content"},[a("uni-match-media",{attrs:{"min-width":690}},[a("v-uni-view",{staticClass:"login-logo"},[a("v-uni-image",{attrs:{src:t.logo}})],1),a("v-uni-text",{staticClass:"title title-box"},[t._v("通过邮箱验证码找回密码")])],1),a("uni-forms",{ref:"form",attrs:{value:t.formData,"err-show-type":"toast"}},[a("uni-forms-item",{attrs:{name:"email"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusEmail,disabled:t.lock,inputBorder:!1,placeholder:"请输入邮箱"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusEmail=!1}},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),a("uni-forms-item",{attrs:{name:"code"}},[a("uni-id-pages-email-form",{ref:"shortCode",attrs:{email:t.formData.email,type:"reset-pwd-by-email"},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}})],1),a("uni-forms-item",{attrs:{name:"password"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusPassword,type:"password",inputBorder:!1,placeholder:"请输入新密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword=!1}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),a("uni-forms-item",{attrs:{name:"password2"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusPassword2,type:"password",inputBorder:!1,placeholder:"请再次输入新密码"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword2=!1}},model:{value:t.formData.password2,callback:function(e){t.$set(t.formData,"password2",e)},expression:"formData.password2"}})],1),a("v-uni-button",{staticClass:"uni-btn send-btn-box",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("uni-match-media",{attrs:{"min-width":690}},[a("v-uni-view",{staticClass:"link-box"},[a("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.retrieveByPhone.apply(void 0,arguments)}}},[t._v("通过手机验证码找回密码")]),a("v-uni-view"),a("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backLogin.apply(void 0,arguments)}}},[t._v("返回登录")])],1)],1)],1),a("uni-popup-captcha",{ref:"popup",attrs:{scene:"reset-pwd-by-sms"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},model:{value:t.formData.captcha,callback:function(e){t.$set(t.formData,"captcha",e)},expression:"formData.captcha"}})],1)},o=[]},"65eb":function(t,e,a){"use strict";a.r(e);var n=a("1618"),i=a("1e24");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("6908");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"67fed0b2",null,!1,n["a"],r);e["default"]=s.exports},6908:function(t,e,a){"use strict";var n=a("2c79"),i=a.n(n);i.a},"7a9b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-eaa76a80]{position:relative;margin-top:10px}.short-code-btn[data-v-eaa76a80]{padding:0;position:absolute;top:0;right:8px;width:%?260?%;max-width:130px;height:44px;display:flex;justify-content:center;align-items:center}.inner-text[data-v-eaa76a80]{font-size:14px;color:#aaa}.inner-text-active[data-v-eaa76a80]{color:#04498c}.captcha[data-v-eaa76a80]{width:%?350?%}.input-box[data-v-eaa76a80]{margin:0;padding:4px;background-color:#f8f8f8;font-size:14px}.box[data-v-eaa76a80]  .content-clear-icon{margin-right:100px}.box[data-v-eaa76a80]{display:flex;flex-direction:row}',""]),t.exports=e},"7aac":function(t,e,a){"use strict";a.r(e);var n=a("2491"),i=a("a586");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("5ae4");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"eaa76a80",null,!1,n["a"],r);e["default"]=s.exports},"7f28":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.captcha-box[data-v-67fed0b2]{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;flex:1}.captcha-img-box[data-v-67fed0b2],\r\n.captcha[data-v-67fed0b2]{height:44px;line-height:44px}.captcha-img-box[data-v-67fed0b2]{position:relative;background-color:#fefae7}.captcha[data-v-67fed0b2]{background-color:#f8f8f8;font-size:14px;flex:1;padding:0 %?20?%;margin-left:%?20?%;box-sizing:border-box}.captcha-img-box[data-v-67fed0b2],\r\n.captcha-img[data-v-67fed0b2],\r\n.loding[data-v-67fed0b2]{height:44px!important;width:100px}.captcha-img[data-v-67fed0b2]{cursor:pointer}.loding[data-v-67fed0b2]{z-index:9;color:#bbb;position:absolute;text-align:center;line-height:45px;-webkit-animation:rotate-data-v-67fed0b2 1s linear infinite;animation:rotate-data-v-67fed0b2 1s linear infinite}.opacity[data-v-67fed0b2]{opacity:.5}@-webkit-keyframes rotate-data-v-67fed0b2{from{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotate-data-v-67fed0b2{from{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),t.exports=e},"9b7f":function(t,e,a){"use strict";var n=a("0a33"),i=a.n(n);i.a},"9ebe":function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("d3b7"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),o=n(a("ea61")),r=n(a("573f")),c=t.importObject("uni-id-co",{errorOptions:{type:"toast"}}),s={mixins:[o.default],data:function(){return{lock:!1,focusEmail:!0,focusPassword:!1,focusPassword2:!1,formData:{email:"",code:"",password:"",password2:"",captcha:""},rules:(0,i.default)({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]}},r.default.getPwdRules()),logo:"/static/logo.png"}},computed:{isEmail:function(){var t=/@/,e=t.test(this.formData.email);return e},isPwd:function(){var t=/^.{6,20}$/,e=t.test(this.formData.password);return e},isCode:function(){var t=/^\d{6}$/,e=t.test(this.formData.code);return e}},onLoad:function(t){t&&t.emailNumber&&(this.formData.email=t.emailNumber,t.lock&&(this.lock=t.lock,this.focusEmail=!0))},onReady:function(){this.formData.email&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow:function(){var t=this;document.onkeydown=function(e){var a=e||window.event;a&&13==a.keyCode&&t.submit()}},methods:{submit:function(){var t=this;this.$refs.form.validate().then((function(e){var a=t.formData,n=a.email,i=a.password,o=a.captcha,r=a.code;c.resetPwdByEmail({email:n,code:r,password:i,captcha:o}).then((function(t){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:function(t){}})})).catch((function(e){"uni-id-captcha-required"==e.errCode&&t.$refs.popup.open()})).finally((function(e){t.formData.captcha=""}))})).catch((function(e){var a=e[0].key;if("code"==a)return t.$refs.shortCode.focusSmsCodeInput=!0;a=a.replace(a[0],a[0].toUpperCase()),t["focus"+a]=!0}))},retrieveByPhone:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve"})},backLogin:function(){uni.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}};e.default=s}).call(this,a("a9ff")["default"])},a586:function(t,e,a){"use strict";a.r(e);var n=a("ce25"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},ad08:function(t,e,a){var n=a("7a9b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("2984baba",n,!0,{sourceMap:!1,shadowMode:!1})},b59a:function(t,e,a){"use strict";(function(t){a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},focus:{type:Boolean,default:function(){return!1}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},data:function(){return{focusCaptchaInput:!1,captchaBase64:"",loging:!1}},watch:{scene:{handler:function(t){t?this.getImageCaptcha(this.focus):uni.showToast({title:"scene不能为空",icon:"none"})},immediate:!0}},methods:{getImageCaptcha:function(){var e=this,a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loging=!0,a&&(this.val="",this.focusCaptchaInput=!0);var n=t.importObject("uni-captcha-co",{customUI:!0});n.getImageCaptcha({scene:this.scene}).then((function(t){e.captchaBase64=t.captchaBase64})).catch((function(t){uni.showToast({title:t.message,icon:"none"})})).finally((function(t){e.loging=!1}))}}};e.default=n}).call(this,a("a9ff")["default"])},c19e:function(t,e,a){"use strict";var n=a("4482"),i=a.n(n);i.a},ce25:function(t,e,a){"use strict";(function(t){function n(t,e){var a;return e=e||500,function(){var n=this,i=arguments;a&&clearTimeout(a);var o=!a;a=setTimeout((function(){a=null}),e),o&&t.apply(n,i)}}a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-email-code-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},email:{type:[String],default:""},type:{type:String,default:function(){return"register"}},focusCaptchaInput:{type:Boolean,default:function(){return!1}}},data:function(){return{captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusEmailCodeInput:!1}},watch:{captcha:function(t,e){4==t.length&&4!=e.length&&this.start()},modelValue:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}},computed:{innerText:function(){return 0==this.reverseNumber?"获取邮箱验证码":"重新发送("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{getImageCaptcha:function(t){this.$refs.captcha.getImageCaptcha(t)},initClick:function(){var t=this;this.start=n((function(){0==t.reverseNumber&&t.sendMsg()}))},sendMsg:function(){var e=this;if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,uni.showToast({title:"请先输入图形验证码",icon:"none"});if(!this.email)return uni.showToast({title:"请输入邮箱",icon:"none"});var a=/@/;if(!a.test(this.email))return uni.showToast({title:"邮箱格式错误",icon:"none"});var n=t.importObject("uni-id-co",{customUI:!0});n.sendEmailCode({email:this.email,scene:this.type,captcha:this.captcha}).then((function(t){uni.showToast({title:"邮箱验证码发送成功",icon:"none"}),e.reverseNumber=Number(e.count),e.getCode()})).catch((function(t){"uni-id-invalid-mail-template"==t.code?(e.modelValue="123456",uni.showToast({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3})):(e.getImageCaptcha(),e.captcha="",uni.showToast({title:t.message,icon:"none"}))}))},getCode:function(){var t=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){t.getCode()}),1e3)}}};e.default=i}).call(this,a("a9ff")["default"])},da20:function(t,e,a){"use strict";a.r(e);var n=a("627b"),i=a("f4a8");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("c19e");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"55accb43",null,!1,n["a"],r);e["default"]=s.exports},de5a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{focus:!1}},props:{modelValue:String,value:String,scene:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},methods:{open:function(){this.focus=!0,this.val="",this.$refs.popup.open()},close:function(){this.focus=!1,this.$refs.popup.close()},confirm:function(){if(!this.val||this.val.length<4)return uni.showToast({title:"请填写验证码",icon:"none"});this.close(),this.$emit("confirm")}}};e.default=n},f4a8:function(t,e,a){"use strict";a.r(e);var n=a("9ebe"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},f632:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-409f9516]{display:flex;flex-direction:column}.popup-captcha[data-v-409f9516]{display:flex;max-width:600px;width:%?600?%;padding-bottom:0;background-color:#fff;border-radius:10px;flex-direction:column;position:relative}.popup-captcha .content[data-v-409f9516]{padding:1.3em .8em}.popup-captcha .title[data-v-409f9516]{text-align:center;word-wrap:break-word;word-break:break-all;white-space:pre-wrap;font-weight:400;font-size:18px;overflow:hidden;text-overflow:ellipsis;color:#111;margin-bottom:15px}.button-box[data-v-409f9516]{height:44px;border-top:solid 1px #eee;flex-direction:row;align-items:center;justify-content:space-around}.button-box[data-v-409f9516], .btn[data-v-409f9516]{height:44px;line-height:44px}.button-box .btn[data-v-409f9516]{flex:1;margin:1px;text-align:center}.button-box .confirm[data-v-409f9516]{color:#007aff;border-left:solid 1px #eee}',""]),t.exports=e}}]);