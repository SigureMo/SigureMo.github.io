(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{523:function(t,s,e){"use strict";e.r(s);var i={name:"AboutLayout",computed:{vssue(){return!1!==this.$themeConfig.comments&&!1!==this.$frontmatter.vssue&&(this.vssueTitle||this.vssueId)},vssueTitle(){return this.$frontmatter["vssue-title"]||this.$frontmatter.title||void 0},vssueId(){return this.$frontmatter["vssue-id"]||void 0}}},n=e(2),u=Object(n.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"custom-layout"},[s("div",{staticClass:"main-div"},[s("Content",{staticClass:"content"})],1),this._v(" "),this.vssue?s("div",{staticClass:"main-div",attrs:{id:"post-comments"}},[s("Vssue",{attrs:{title:this.vssueTitle,"issue-id":this.vssueId}})],1):this._e()])}),[],!1,null,null,null);s.default=u.exports}}]);