(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{241:function(t,n,s){},244:function(t,n,s){"use strict";var a=s(7),e={name:"IconTag",functional:!0,props:{name:{type:String,required:!0},icon:{type:String,required:!0},size:{type:String,default:"1x"}},render:(t,{props:{name:n,icon:s,size:e}})=>t("span",{class:"post-tag",attrs:{title:n}},[t(a.a,{class:"post-tag-icon",attrs:{name:s,size:e}}),t("span",{class:"post-tag-name"},[n])])},i=(s(245),s(2)),o=Object(i.a)(e,void 0,void 0,!1,null,null,null);n.a=o.exports},245:function(t,n,s){"use strict";s(241)},509:function(t,n,s){"use strict";s.r(n);var a={name:"Tags",components:{IconTag:s(244).a}},e=s(2),i=Object(e.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tags"},[n("div",{staticClass:"main-div"},[n("h2",[this._v(this._s(this.$themeConfig.lang.tags))]),this._v(" "),this._l(this.$tags.list,(function(t){return n("RouterLink",{key:t.name,attrs:{to:t.path}},[n("IconTag",{attrs:{icon:"tag",name:t.name}})],1)}))],2)])}),[],!1,null,null,null);n.default=i.exports}}]);