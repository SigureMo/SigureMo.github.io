(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{528:function(e,t,r){"use strict";r.r(t);var a=r(3),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("虽然网上有很多 MOOC 课程，但是大多不支持下载，在线播放总会出现各种各样的问题")]),e._v(" "),r("ul",[r("li",[e._v("卡顿，看一会加载一会")]),e._v(" "),r("li",[e._v("播放器出问题，明明关闭了还有声音，甚至出现“二重奏”（说的就是你，中国大学 MOOC）")]),e._v(" "),r("li",[e._v("反复看同一个视频，每次都要重新加载")]),e._v(" "),r("li",[e._v("...")])]),e._v(" "),r("p",[e._v("为了克服以上困难，这里介绍一个非常好用的 MOOC 课程下载程序，支持各大主流 MOOC 平台并支持下载各种资源（视频、文档、附件等等）")])]),e._v(" "),r("ul",[r("li",[e._v("预备知识\n"),r("ul",[r("li",[e._v("零基础")])])]),e._v(" "),r("li",[e._v("开发环境\n"),r("ul",[r("li",[r("code",[e._v("python 3.6")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("requests")])]),e._v(" "),r("li",[r("code",[e._v("BeautifulSoup4")])]),e._v(" "),r("li",[r("code",[e._v("lxml")])]),e._v(" "),r("li",[r("code",[e._v("pycryptodome")])])])]),e._v(" "),r("li",[r("code",[e._v("Chrome")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/SigureMo/course-crawler",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目地址"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.sigure.xyz/course-crawler/",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目文档"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"支持的课程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持的课程"}},[e._v("#")]),e._v(" 支持的课程")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.icourse163.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("中国大学 MOOC"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://study.163.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("网易云课堂"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://study.163.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("普通课程"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://mooc.study.163.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MOOC 课程"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://open.163.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("网易公开课"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnmooc.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("好大学在线"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.icourses.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("爱课程"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.icourses.cn/cuoc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频公开课"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.icourses.cn/mooc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("资源共享课"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.xuetangx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("学堂在线"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.livedu.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("北京高校优质课程研究会"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"快速开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[e._v("#")]),e._v(" 快速开始")]),e._v(" "),r("h3",{attrs:{id:"准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),r("p",[e._v("在下载之前，你需要保证你已经安装 "),r("code",[e._v("python3.5")]),e._v(" 及其以上版本，并且安装完成依赖")]),e._v(" "),r("p",[e._v("需要的依赖如下")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("requests")])]),e._v(" "),r("li",[r("code",[e._v("BeautifulSoup4")])]),e._v(" "),r("li",[r("code",[e._v("lxml")])]),e._v(" "),r("li",[r("code",[e._v("pycryptodome")])])]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("pip "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" requests BeautifulSoup4 lxml pycryptodome\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"下载程序源码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载程序源码"}},[e._v("#")]),e._v(" 下载程序源码")]),e._v(" "),r("p",[e._v("前往项目主页下载程序，或者直接点击"),r("a",{attrs:{href:"https://github.com/SigureMo/course-crawler/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),r("OutboundLink")],1),e._v("，之后解压")]),e._v(" "),r("p",[e._v("当然，已经安装 "),r("code",[e._v("git")]),e._v(" 的同学可以直接 "),r("code",[e._v("clone")])]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/SigureMo/course-crawler.git\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"运行程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行程序"}},[e._v("#")]),e._v(" 运行程序")]),e._v(" "),r("p",[e._v("在刚刚下载的项目根目录下打开命令行（“终端”、“命令提示符”、“PowerShell”都行，"),r("code",[e._v("Win10")]),e._v(" 在项目根目录按住 "),r("code",[e._v("shift")]),e._v(" 右键就有相应的选项，后面统称命令行）")]),e._v(" "),r("p",[e._v("在命令行中输入 "),r("code",[e._v("python mooc.py <url>")]),e._v(" ，即可将课程课件下载到当前文件夹")]),e._v(" "),r("p",[e._v("比如，中国大学 MOOC 课程 "),r("code",[e._v("《高等数学（一）》 - 同济大学")])]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("python mooc.py https://www.icourse163.org/course/TONGJI-53004\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("这里的 "),r("code",[e._v("<url>")]),e._v(" 为课程主页的地址，网址的具体要求及课程下载的额外要求详见"),r("a",{attrs:{href:"https://www.sigure.xyz/course-crawler/courses/icourse163.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("分类"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"身份验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#身份验证"}},[e._v("#")]),e._v(" 身份验证")]),e._v(" "),r("p",[e._v("很多课程并不是直接就能下载的，需要验证下你的身份，这大多都可以通过输入 Cookies 解决")]),e._v(" "),r("p",[e._v("当你下载的课程需要输入 Cookies 时，用浏览器打开课程主页，然后按下 "),r("code",[e._v("F12")]),e._v(" 打开开发者工具")]),e._v(" "),r("p",[e._v("切换到 "),r("code",[e._v("Network")]),e._v(" 选项卡，刷新页面，在左侧选择第一个抓到的包，在右侧 "),r("code",[e._v("Headers")]),e._v(" 中找到 "),r("code",[e._v("cookie")]),e._v(" （也可能是 "),r("code",[e._v("Cookie")]),e._v("），复制粘贴到程序命令行中")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/SigureMo/course-crawler/docs/images/get_cookies.png",alt:"get_cookies.png"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("如果你和我一样懒的话，可以直接三击 cookies 快速将整个 cookies 及前面的 "),r("code",[e._v("cookie:")]),e._v(" 一起选中，直接复制粘贴到程序中，也是可以的，反正我是懒得从左上滑到右下啦，所以特意做了这个小“优化”~")])]),e._v(" "),r("h3",{attrs:{id:"等待"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#等待"}},[e._v("#")]),e._v(" 等待 ...")]),e._v(" "),r("p",[e._v("等待程序运行，程序首先会从课程主页获取课件列表及解析所需相关信息，之后逐个课件进行解析下载")]),e._v(" "),r("h3",{attrs:{id:"下载视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载视频"}},[e._v("#")]),e._v(" 下载视频")]),e._v(" "),r("p",[e._v("特别地，由于视频资源相对来说花费时间较多，所以视频资源并不是在解析时直接进行下载，而是解析出 "),r("code",[e._v("url")]),e._v(" 至 "),r("code",[e._v("<course>/Videos/Videos.txt")]),e._v(" ，之后需要你自行使用下载工具进行下载（比如 "),r("code",[e._v("aria2")]),e._v(" ，或者迅雷等）")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("这里的 "),r("code",[e._v("<course>")]),e._v(" 指课程根目录")])]),e._v(" "),r("p",[e._v("下载后将视频移动到 "),r("code",[e._v("<course>/Videos/")]),e._v(" 内，之后运行 "),r("code",[e._v("Rename.bat")]),e._v(" 或者 "),r("code",[e._v("Rename.sh")]),e._v(" 即可修正视频名")]),e._v(" "),r("h3",{attrs:{id:"视频的播放"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视频的播放"}},[e._v("#")]),e._v(" 视频的播放")]),e._v(" "),r("p",[e._v("使用 "),r("code",[e._v("PotPlayer")]),e._v(" 打开 "),r("code",[e._v("Playlist.dpl")]),e._v(" 即可播放视频")]),e._v(" "),r("h2",{attrs:{id:"进阶使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进阶使用"}},[e._v("#")]),e._v(" 进阶使用")]),e._v(" "),r("h3",{attrs:{id:"直接下载视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#直接下载视频"}},[e._v("#")]),e._v(" 直接下载视频")]),e._v(" "),r("p",[e._v("增加参数 "),r("code",[e._v("--download-video")]),e._v(" 即可")]),e._v(" "),r("p",[e._v("示例")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("python mooc.py --download-video https://www.icourse163.org/course/TONGJI-53004\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"修改存储目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改存储目录"}},[e._v("#")]),e._v(" 修改存储目录")]),e._v(" "),r("p",[e._v("使用参数 "),r("code",[e._v("-d")]),e._v(" 指定存储目录，默认存储为当前目录")]),e._v(" "),r("p",[e._v("示例")]),e._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("python mooc.py https://www.icourse163.org/course/TONGJI-53004 -d "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"G:\\MOOCs"')]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("blockquote",[r("p",[e._v("更多参数请参见"),r("a",{attrs:{href:"https://www.sigure.xyz/course-crawler/",target:"_blank",rel:"noopener noreferrer"}},[e._v("项目文档"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"推荐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[e._v("#")]),e._v(" 推荐")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/SigureMo/mooc-dl",target:"_blank",rel:"noopener noreferrer"}},[e._v("mooc-dl"),r("OutboundLink")],1),e._v(" 使用手机端接口的中国大学 MOOC 课件爬虫")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/SigureMo/bilili",target:"_blank",rel:"noopener noreferrer"}},[e._v("bilili"),r("OutboundLink")],1),e._v(" B 站视频爬虫")])])])}),[],!1,null,null,null);t.default=s.exports}}]);