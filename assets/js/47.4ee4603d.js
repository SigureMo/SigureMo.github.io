(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{548:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("早在一年多以前我就喜欢上了 "),a("code",[s._v("hexo-theme-sagiri")]),s._v(" 这个主题（效果可以参见 "),a("a",{attrs:{href:"https://diygod.me/",target:"_blank",rel:"noopener noreferrer"}},[s._v("diygod.me"),a("OutboundLink")],1),s._v("），不过当时还什么都不懂啦，不会用 GitHub ，更不知道这居然是静态博客做出来的效果（如果当时知道那么简单的话，我也许现在用的就是 hexo 了 😂）")]),s._v(" "),a("p",[s._v("前些日子因为机缘巧合发现了 "),a("code",[s._v("sagiri")]),s._v(" 中的彩带背景的开源实现，原来其出自若干年前尤大的个人主页背景，之后我试着简单阅读 "),a("code",[s._v("vuepress-plugin-nest")]),s._v(" 插件源码，照喵画虎地摹了个 "),a("code",[s._v("vuepress-plugin-ribbon")]),s._v(" 插件，居然真的成功了！这使我萌生了把 "),a("code",[s._v("sagiri")]),s._v(" 中一些小组件作为 Vuepress 插件实现的想法，之后的几天……")]),s._v(" "),a("p",[s._v("废话说太多了，还是说说怎么用吧 😂")])]),s._v(" "),a("ul",[a("li",[s._v("预备知识\n"),a("ul",[a("li",[s._v("会简单配置 Vuepress ，不会的话请先行阅读 "),a("RouterLink",{attrs:{to:"/_posts/build_blog_by_vuepress.html"}},[s._v("使用 Vuepress 搭建个人静态 Blog")])],1)])]),s._v(" "),a("li",[s._v("开发环境\n"),a("ul",[a("li",[a("code",[s._v("nodejs 8+")]),s._v(" 及 "),a("code",[s._v("npm")]),s._v(" or "),a("code",[s._v("yarn")])])])]),s._v(" "),a("li",[s._v("文档 "),a("a",{attrs:{href:"https://moefyit.github.io/moefy-vuepress/",target:"_blank",rel:"noopener noreferrer"}},[s._v("moefy vuepress"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"在背景添加一条彩带"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在背景添加一条彩带"}},[s._v("#")]),s._v(" 在背景添加一条彩带")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-ribbon",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-ribbon"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("只需要简单的配置就可以在你的 Vuepress 中添加一条背景彩带~")]),s._v(" "),a("p",[s._v("首先使用 yarn 安装~")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-plugin-ribbon -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后在 "),a("code",[s._v("config.js")]),s._v(" 中添加以下配置~")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ribbon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 彩带的宽度，默认为 90")]),s._v("\n            opacity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 彩带的不透明度，默认为 0.3")]),s._v("\n            zIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 彩带的 z-index 属性，默认值为 -1")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("然后再次 "),a("code",[s._v("dev")]),s._v(" 你就可以发现你的背景多一条彩带啦~")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("如果你的彩带会把博客文字覆盖掉，请先尝试调整 "),a("code",[s._v("z-index")]),s._v(" 属性，如果无论如何调整都不能有合适的效果，请使用 CSS 为你的主题添加样式覆盖，最简单的方法就是为不想显示彩带的位置添加背景，因为博客主题样式大多不一致，这里就不贴具体修改方式了")])]),s._v(" "),a("h2",{attrs:{id:"添加一个动态的标题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加一个动态的标题"}},[s._v("#")]),s._v(" 添加一个动态的标题")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-dynamic-title",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-dynamic-title"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("如果你现在使用的是 PC 端的话，试着切换浏览器到其它标签页~")]),s._v(" "),a("p",[s._v("唔，欢迎回来，你应该已经看到效果了~这就是 "),a("code",[s._v("dynamic-title")]),s._v(" 的效果~")]),s._v(" "),a("p",[s._v("想要把它装到你的 Vuepress 的话，就 yarn 一下吧~")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-plugin-dynamic-title -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置稍微有点麻烦，需要提供图标以及相应的文字，不提供时默认是不显示图标的，图标放在 "),a("code",[s._v(".vuepress/public/")]),s._v(" 下就好")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dynamic-title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            showIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/favicon.ico"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            showText"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(/≧▽≦/)咦！又好了！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            hideIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/failure.ico"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            hideText"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(●—●)喔哟，崩溃啦！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            recoverTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"增加鼠标点击动效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加鼠标点击动效"}},[s._v("#")]),s._v(" 增加鼠标点击动效")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-cursor-effects",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-cursor-effects"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("只需要简单的安装就可以在你的 Vuepress 添加鼠标点击后散落彩色粒子的效果~")]),s._v(" "),a("p",[s._v("插件名是 "),a("code",[s._v("vuepress-plugin-cursor-effects")]),s._v("，安装方法应该不用说了吧，配置也很简单，按照下面配置就好")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cursor-effects"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 粒子大小")]),s._v("\n            shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"star"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 粒子形状（可选 'star' 和 'circle'）")]),s._v("\n            zIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("999999999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"修改你的鼠标为更可爱的样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改你的鼠标为更可爱的样式"}},[s._v("#")]),s._v(" 修改你的鼠标为更可爱的样式")]),s._v(" "),a("p",[s._v("这个就不用插件实现了，自己配置下 "),a("code",[s._v("style/index.styl")]),s._v(" 就可以了")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("cursor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("url('/cursor.ico')")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("找一个你喜欢的鼠标指针放在 "),a("code",[s._v("public")]),s._v(" 下就好，当然图片名也记得修改")]),s._v(" "),a("h2",{attrs:{id:"使用悬挂喵作为返回顶部按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用悬挂喵作为返回顶部按钮"}},[s._v("#")]),s._v(" 使用悬挂喵作为返回顶部按钮")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-go-top",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-go-top"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("相信你看到这个位置应该已经能看到它啦，点一下就可以返回顶部哦~")]),s._v(" "),a("p",[s._v("安装方法就不必说了，由于没什么配置项，直接像下面这样就行")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go-top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("值得注意的是，由于猫猫在窄屏设备上很容易遮挡内容，因此设计了两个响应式变化点，当屏幕变窄时会依次显示“猫猫” -> 显示“猫爪爪” -> 不显示，具体的响应式变化点你可以在 "),a("code",[s._v(".vuepress/styles/palette.styl")]),s._v(" 中自行修改")]),s._v(" "),a("div",{staticClass:"language-stylus line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示猫猫")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MQWide")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1440")]),s._v("px")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示猫爪爪")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-declaration"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MQMobile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("768")]),s._v("px")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 啥都不显示")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"添加一个萌萌哒看板娘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加一个萌萌哒看板娘"}},[s._v("#")]),s._v(" 添加一个萌萌哒看板娘")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/yanjun0501/vuepress-plugin-live2d",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-live2d"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/yanjun0501/vuepress-plugin-live2d",target:"_blank",rel:"noopener noreferrer"}},[s._v("Author 聆歌"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-live2d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         modelName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型名称，可传入一个字符串或者数组")]),s._v("\n         mobileShow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否在移动设备上显示")]),s._v("\n         position"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"right"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 显示在左下角还是右下角")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("配置详情请在"),a("a",{attrs:{href:"https://github.com/yanjun0501/vuepress-plugin-live2d",target:"_blank",rel:"noopener noreferrer"}},[s._v("项目主页"),a("OutboundLink")],1),s._v("查看")]),s._v(" "),a("p",[s._v("感谢聆歌提供本插件，感觉效果不错的可以给他一个 Star 哟~")]),s._v(" "),a("h2",{attrs:{id:"添加一个漂亮的音乐播放器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加一个漂亮的音乐播放器"}},[s._v("#")]),s._v(" 添加一个漂亮的音乐播放器")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/moefyit/vuepress-plugin-meting",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-meting"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("这个插件是利用 Meting 接口来获取音乐资源，传入 Vue-APlayer，解决 APlayer 的音源问题，当然如果你有合适的音源也可以直接用 Vue-APlayer 哒~")]),s._v(" "),a("p",[s._v("如果你想添加一个全局的吸底播放器，直接在 "),a("code",[s._v("config.js")]),s._v(" 中配置即可")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"meting"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         meting"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"netease"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 音乐源")]),s._v("\n            type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"playlist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 资源类型")]),s._v("\n            mid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2539599584"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 资源 id")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         aplayer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            lrcType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("另外，它也支持在任何页面单独引入播放器，当然你需要首先在 "),a("code",[s._v("config.js")]),s._v(" 启用它（但不必填写配置项，配置项只与全局吸底播放器有关，不配置便不会出现该播放器）")]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- my-music.md --\x3e")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Meting")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("netease"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("playlist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("mid")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("2539599584"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":lrc-type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 这样就可以在 my-music.html 页面单独引入一个播放器咯～ --\x3e")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),a("p",[s._v("再次感谢 "),a("a",{attrs:{href:"https://github.com/DIYgod",target:"_blank",rel:"noopener noreferrer"}},[s._v("DIYGod"),a("OutboundLink")],1),s._v("~")])])}),[],!1,null,null,null);t.default=e.exports}}]);