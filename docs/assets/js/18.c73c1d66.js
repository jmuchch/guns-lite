(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(t,e,i){"use strict";i.r(e);var n=i(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("ul",[i("li",[t._v("guns-admin-vuejs实现国际化了，不好意思guns-admin暂未实现国际化，后续也会考虑实现。")]),t._v(" "),i("li",[t._v("不了解上面两个的区别的同学可以再回顾下这个"),i("router-link",{attrs:{to:"./../base/guns-admin-vuejs.html"}},[t._v("文档")])],1),t._v(" "),i("li",[t._v("guns-admin-vuejs实现国际化的方式参考vue-element-admin的\n"),i("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/i18n.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),i("OutboundLink")],1),t._v(",这里不再赘述,强烈建议你先把文档读了之后再看下面的内容。")])]),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("针对网站资源进行国际园涉及到的国际化资源的管理维护，这里给出一些guns-admin-vuejs的资源分类建议，当然，你也可以根据你的实际情况进行调整。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("如果英文和中文两种语言不够，那么你可以通过下面步骤添加语言支持")]),t._v(" "),t._m(4)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"国际化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#国际化","aria-hidden":"true"}},[this._v("#")]),this._v(" 国际化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"默认约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#默认约定","aria-hidden":"true"}},[this._v("#")]),this._v(" 默认约定")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("src/lang/为国际化资源目录,目前提供了英文（en.js）和中文(zh.js)的两种语言实现。")]),t._v(" "),i("li",[t._v("目前资源语言资源文件中是json配置主要有以下几个节点：\n"),i("ul",[i("li",[t._v("route 左侧菜单资源")]),t._v(" "),i("li",[t._v("navbar 顶部导航栏资源")]),t._v(" "),i("li",[t._v("button 公共的按钮资源，比如：添加、删除、修改、确定、取消之类等等")]),t._v(" "),i("li",[t._v("common 其他公共的资源，比如一些弹出框标题、提示信息、label等等")]),t._v(" "),i("li",[t._v("login 登录页面资源")]),t._v(" "),i("li",[t._v("config 参数管理界面资源")])])]),t._v(" "),i("li",[t._v("目前针对具体的页面资源只做了登录和参数管理两个页面，其他具体业务界面仅针对公共的按钮做了国际化，你可以参考config页面资源进行配置进行进一步配置：/src/views/cfg/")]),t._v(" "),i("li",[t._v("如果你有其他资源在上面对应的节点添加即可，针对每个页面特有的资源以页面名称作为几点进行维护，这样方便记忆和维护，不容易出错。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"添加新的语言支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加新的语言支持","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加新的语言支持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在src/lang/目录下新增对应的资源文件")]),this._v(" "),e("li",[this._v("在src/lang/index.js中import对应的资源文件")]),this._v(" "),e("li",[this._v("在src/lang/index.js中的messages变量中加入新的语言声明")]),this._v(" "),e("li",[this._v("在src/components/LangSelect/index.vue的语言下拉框中增加新的语言选项")])])}],!1,null,null,null);e.default=s.exports}}]);