(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{513:function(e,t,v){"use strict";v.r(t);var _=v(3),i=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("前段时间装了 SSD 后使用软件直接迁移的系统，之后出现了很多问题（比如经常莫名其妙音频服务未运行），所以昨晚一回到家就把硬盘通过局域网备份到另外一台电脑上，开始重装（emmm 我是想把 HHD 的混乱分区也弄一下的）。")]),e._v(" "),v("p",[e._v("做完系统 U 盘并设为启动盘后就进入了熟悉的界面啦，但是这次选择分区不顺利呀，“Windows 无法安装到 GPT 分区形式磁盘”，这要怎么办呀？搜了下，了解到了 diskpart 这个小工具。下面就介绍下简单的使用方法啦")])]),e._v(" "),v("h2",{attrs:{id:"如何使用？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何使用？"}},[e._v("#")]),e._v(" 如何使用？")]),e._v(" "),v("ol",[v("li",[e._v("在那一步按住“shift + F10”，便出现了 CMD 命令行")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("diskpart")]),e._v("，进入 diskpart")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("list disk")]),e._v("，列出所有硬盘，这些是物理上的啦")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("select disk <DiskNum>")]),e._v("，选择上面那些硬盘中的一个，选中那个需要格式化的就好")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("clean")]),e._v("，删除磁盘分区")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("convert mbr")]),e._v("，将当前磁盘分区设置为 Mbr 形式")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("create partition primary size=<Size>")]),e._v("，创建主分区大小（MB）")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("format fs=ntfs quick")]),e._v("，格式化磁盘为 ntfs")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("exit")]),e._v("，退出 diskpart")]),e._v(" "),v("li",[e._v("输入"),v("code",[e._v("exit")]),e._v("，退出 cmd")])]),e._v(" "),v("h2",{attrs:{id:"关于-4k-对齐"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于-4k-对齐"}},[e._v("#")]),e._v(" 关于 4K 对齐")]),e._v(" "),v("p",[e._v("emmm，上面都摘自 Reference，因为之前稍稍了解到 4K 对齐，所以我对这个还是有执念的，经过一番搜索，发现只需要加"),v("code",[e._v("align=4096")]),e._v("参数就好，而且 size 参数也可以省略的，也就是，Step7 使用"),v("code",[e._v("create partition primary align=4096")]),e._v("替换")]),e._v(" "),v("p",[e._v("剩下的不用说啦，一步一步照着做就好啦，但是后来我把备份往回迁移时候局域网没弄好，用 U 盘传的时候把 U 盘废掉了，低格都救不了了 o(╥﹏╥)o")]),e._v(" "),v("h1",{attrs:{id:"reference"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),v("ol",[v("li",[v("a",{attrs:{href:"https://jingyan.baidu.com/article/08b6a591c82df414a8092224.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows 无法安装到 GPT 分区形式磁盘，怎么办？"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);