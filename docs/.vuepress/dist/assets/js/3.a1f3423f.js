(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{194:function(e,o,a){},195:function(e,o,a){},235:function(e,o,a){"use strict";var t=a(194);a.n(t).a},236:function(e,o,a){"use strict";var t=a(195);a.n(t).a},241:function(e,o,a){"use strict";a.r(o);var t={name:"demo-box",props:{codesandbox:{type:String,default:""}},data:function(){return{activeCode:!1}}},s=(a(235),a(236),a(14)),d=Object(s.a)(t,(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"demo-box"},[a("header",{staticClass:"demo-box__header"},[a("div",{staticClass:"demo-box__tabs"},[a("div",{staticClass:"demo-box__tab",class:{"demo-box__tab--active":e.activeCode},on:{click:function(o){e.activeCode=!e.activeCode}}},[a("i",{class:"db-icon db-icon-code"}),e._v(" 查看代码\n      ")]),e._v(" "),e.codesandbox?a("div",{staticClass:"demo-box__tab demo-box__link demo-box__link--codesandbox"},[a("a",{attrs:{target:"_blank",href:e.codesandbox}},[a("i",{class:"db-icon db-icon-codesandbox"}),e._v(" Code Sandbox\n        ")])]):e._e()])]),e._v(" "),a("div",{staticClass:"demo-box__content"},[e.$slots.demo?a("div",{directives:[{name:"show",rawName:"v-show",value:!e.activeCode,expression:"!activeCode"}],key:"demo",ref:"demo",staticClass:"demo-box__demo"},[e._t("demo")],2):e._e(),e._v(" "),e.$slots.code?a("div",{directives:[{name:"show",rawName:"v-show",value:e.activeCode,expression:"activeCode"}],key:"code",ref:"code",staticClass:"demo-box__code"},[e._t("code")],2):e._e()])])}),[],!1,null,null,null);o.default=d.exports}}]);