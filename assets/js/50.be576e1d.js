(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{548:function(t,e,s){"use strict";s.r(e);var r=s(2),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("有时候 Git 不小心提交了一些二进制文件，当随着 repo 越来越庞大，二进制文件就会像滚雪球一般越来越多，而且即便删除掉这些二进制文件，仍然会存在于历史之中，为了解决该问题，就需要一些针对二进制文件的处理手段啦～")])]),t._v(" "),s("h2",{attrs:{id:"git-lfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-lfs"}},[t._v("#")]),t._v(" Git LFS")]),t._v(" "),s("p",[t._v("Git LFS 是 github 推出的大文件存储服务，它是让 git 只保存二进制文件的 hash，而二进制文件将会存在 Git LFS 服务器中，当然，这可以有效防止 Git 历史的增长，但……免费只有 1G 空间，而且每月还限 1G 带宽，虽然看起来挺大的，但有一个月我频繁更新博客，CI 频繁地从 LFS 获取图片，结果居然真的差点就用到了 1 个 G 的带宽……之后我就开始另寻他法……")]),t._v(" "),s("h2",{attrs:{id:"定期清理-git-历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定期清理-git-历史"}},[t._v("#")]),t._v(" 定期清理 Git 历史")]),t._v(" "),s("p",[t._v("定期清理的话，虽然麻烦，但也最实用，在使用 LFS 之前我也定期清理过，是使用的 git-filter-branch，但由于嫌麻烦，就改用 LFS 了，至于为什么不用 BFG，因为懒得装 JDK")]),t._v(" "),s("p",[t._v("弃用 LFS 后，我仍然使用 git-filter-branch，不过实在是麻烦，每次清理我需要运行好多命令，比如清理全部 "),s("code",[t._v("*.jpg")]),t._v(" 图片，我需要")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" filter-branch --force --index-filter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git rm --cached --ignore-unmatch -r *.jpg'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--prune-empty --tag-name-filter "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" -- --all\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf .git/refs/original/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog expire --expire"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("now --all\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" gc --prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("now\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" gc --aggressive --prune"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("now\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master --force\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("emmm，就很麻烦")]),t._v(" "),s("p",[t._v("最近，使用 "),s("code",[t._v("git filter-branch")]),t._v(" 会提示 "),s("code",[t._v("warning")]),t._v("，推荐使用 "),s("code",[t._v("git filter-repo")]),t._v("，于是就试着搜了下，这居然是 python 实现的清理器，拥有远比 "),s("code",[t._v("git filter-branch")]),t._v(" 更加方便的使用方法，所以我在尝试了一下下就果断转 "),s("code",[t._v("git filter-repo")]),t._v(" 了")]),t._v(" "),s("p",[t._v("在使用之前需要先使用 pip 安装一下")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" git-filter-repo\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("使用 "),s("code",[t._v("git filter-repo")]),t._v(" 清理全部 "),s("code",[t._v("*.jpg")]),t._v(" 只需要")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" filter-repo --path-glob "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*.jpg'")]),t._v(" --invert-paths\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("不仅命令简单，而且速度超快，只不过不能像 "),s("code",[t._v("git filter-branch")]),t._v(" 一样清楚地了解都清理了哪些文件了")]),t._v(" "),s("p",[t._v("当然，这只是 "),s("code",[t._v("git filter-repo")]),t._v(" 的一个最简单的应用啦，更多使用技巧还是要看文档的～")]),t._v(" "),s("h1",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/newren/git-filter-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-filter-repo GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html#EXAMPLES",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-filter-repo Manual Page"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);