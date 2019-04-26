(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{101:function(t,a,s){"use strict";s.r(a);var e=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"添加菜单和分配权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加菜单和分配权限","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加菜单和分配权限")]),t._v(" "),e("p",[t._v("现在功能已经开发完毕了，但是在页面上并不能使用这个功能；\n因为我没有给当前用不配置参数管理的权限。下面分两步骤启用参数管理功能")]),t._v(" "),e("ul",[e("li",[t._v("在菜单管理中添加参数管理的功能，包括一个菜单项（点击链接进入列表页面）和三个功能项（新增、删除、修改）")]),t._v(" "),e("li",[t._v("在权限管理中给指定的角色配置上述三个菜单")]),t._v(" "),e("li",[t._v("在用户管理中给指定的用户配置指定的角色")])]),t._v(" "),e("h2",{attrs:{id:"添加菜单项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加菜单项","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加菜单项")]),t._v(" "),e("p",[t._v("在菜单管理中添加4条记录,添加过程中要注意一下几点：")]),t._v(" "),e("ul",[e("li",[t._v("父级编号：选中的父级编号决定了当前功能所属哪一个模块，比如“参数管理”这一项的父级编号选择“系统管理”，则“参数管理”这一功能菜单在“系统管理”模块下。")]),t._v(" "),e("li",[t._v("是否是菜单：选择“是”，则菜单会在左侧菜单栏显示，选择“否”，则不会显示在左侧菜单栏。针对按钮功能要选择“否”")]),t._v(" "),e("li",[t._v("请求地址，针对菜单选择“是”的记录，则该地址必须为页面打开的地址，针是否是菜单选择“否”的记录，则该地址必须与页面的判断一致。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('比如“添加系统参数”这一项的请求地址为“cfg/add”, 则页面判断是否有操作权限的的代码为：\n   \n@if(shiro.hasPermission("/cfg/add")){\n<#button name="添加" icon="fa-plus" clickFun="Cfg.openAddCfg()"/>\n@}\n')])])]),e("p",[t._v("添加四条菜单记录：")]),t._v(" "),e("ul",[e("li",[t._v("参数管理")]),t._v(" "),e("li",[t._v("添加系统参数")]),t._v(" "),e("li",[t._v("修改系统参数")]),t._v(" "),e("li",[t._v("删除系统参数")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(81),alt:"menu"}})]),t._v(" "),e("h2",{attrs:{id:"为角色配置菜单项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为角色配置菜单项","aria-hidden":"true"}},[t._v("#")]),t._v(" 为角色配置菜单项")]),t._v(" "),e("p",[e("img",{attrs:{src:s(55),alt:"role"}})]),t._v(" "),e("h2",{attrs:{id:"为用户配置角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为用户配置角色","aria-hidden":"true"}},[t._v("#")]),t._v(" 为用户配置角色")]),t._v(" "),e("p",[t._v("因为默认的admin账户本身已经有超级管理员角色，所以不需要配置了，不过这里依然列出配置步骤：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(82),alt:"account"}})])])}],i=s(0),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);a.default=r.exports},55:function(t,a,s){t.exports=s.p+"assets/img/role.037e352d.jpg"},81:function(t,a,s){t.exports=s.p+"assets/img/menu.ab28f75e.jpg"},82:function(t,a,s){t.exports=s.p+"assets/img/account.7f9d3456.jpg"}}]);