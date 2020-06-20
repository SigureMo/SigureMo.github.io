(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{531:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("虽然 Linux 上的包管理器很方便，但是没有 root 权限时还是很头疼的，这就需要我们自己寻找软件源码自行编译咯~")]),s._v(" "),e("p",[s._v("下面以安装 "),e("code",[s._v("node-v12.16.1")]),s._v(" 为例")])]),s._v(" "),e("h2",{attrs:{id:"_1-初始化环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化环境"}},[s._v("#")]),s._v(" 1 初始化环境")]),s._v(" "),e("p",[s._v("emmmm，因为我们要安装很多软件的嘛，那么首先考虑好把软件都安装到哪里，比如这里就安装在用户目录下的 "),e("code",[s._v("software")]),s._v(" 下")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/software\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-获取源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取源码"}},[s._v("#")]),s._v(" 2 获取源码")]),s._v(" "),e("p",[s._v("自己去找需要的源码啦，用 "),e("code",[s._v("wget")]),s._v(" 下载下来并且解压")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nodejs.org/dist/v12.16.1/node-v12.16.1.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf node-v12.16.1.tar.gz -C node-v12.16.1/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_3-配置安装目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置安装目录"}},[s._v("#")]),s._v(" 3 配置安装目录")]),s._v(" "),e("p",[s._v("进入刚刚解压好的目录下，配置下安装到哪里")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" node-v12.16.1/\n./configure --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/software/node/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_4-编译安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-编译安装"}},[s._v("#")]),s._v(" 4 编译安装")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_5-配置环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置环境变量"}},[s._v("#")]),s._v(" 5 配置环境变量")]),s._v(" "),e("p",[s._v("编辑 "),e("code",[s._v(".bashrc")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加以下内容")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('export PATH="/home/username/software/node/bin:$PATH"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("并重新 "),e("code",[s._v("source")]),s._v(" 一下")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_21280629/article/details/84962505",target:"_blank",rel:"noopener noreferrer"}},[s._v("linux 为某个用户安装程序"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);