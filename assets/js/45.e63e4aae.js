(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{546:function(a,s,e){"use strict";e.r(s);var t=e(2),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("虽然接触 Linux 挺久了，但主要还是作为备用系统来用，主要原因不好看……虽然用过一段时间 deepin，但是有很多细节上有 bug，体验并不是很好")]),a._v(" "),e("p",[a._v("前段时间了解到了 Manjaro 这个 Linux 发行版，可以非常方便地安装软件，所以决定尝试一下下～")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" ██████████████████  ████████     sigure@sigure-li\n ██████████████████  ████████     OS: Manjaro 19.0.2 Kyria\n ██████████████████  ████████     Kernel: x86_64 Linux 5.4.28-1-MANJARO\n ██████████████████  ████████     Uptime: 41m\n ████████            ████████     Packages: 1270\n ████████  ████████  ████████     Shell: zsh 5.8\n ████████  ████████  ████████     Resolution: 1920x1080\n ████████  ████████  ████████     DE: KDE 5.68.0 / Plasma 5.18.3\n ████████  ████████  ████████     WM: KWin\n ████████  ████████  ████████     GTK Theme: Breath [GTK2/3]\n ████████  ████████  ████████     Icon Theme: McMojave-circle-dark\n ████████  ████████  ████████     Disk: 700G / 1.1T (68%)\n ████████  ████████  ████████     CPU: Intel Core i5-4200H @ 4x 3.4GHz [57.0°C]\n ████████  ████████  ████████     GPU: GeForce GTX 950M\n                                  RAM: 3126MiB / 7853MiB\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br")])]),e("h2",{attrs:{id:"manjaro-的安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manjaro-的安装"}},[a._v("#")]),a._v(" Manjaro 的安装")]),a._v(" "),e("p",[a._v("首先在"),e("a",{attrs:{href:"https://manjaro.org/get-manjaro/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网下载"),e("OutboundLink")],1),a._v("镜像，我选择的桌面环境是 KDE。使用 Rufus 以 DD 模式写入，然后就可以用 U 盘启动啦。")]),a._v(" "),e("p",[a._v("U 盘启动后会有时区、键盘、驱动的配置，之后的 Boot 不是配置项，在选择它之前先修改下前几项")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tz = Asia/Shanghai\nkeytable = us\ndriver = non-free\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("由于深度学习的显卡加速需要闭源驱动，这里直接选 non-free 就好")]),a._v(" "),e("p",[a._v("之后会进入桌面环境，会有些配置选项，这些简单配置下就好，其中分区需要注意一下，最好手动分区一下")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("/")]),a._v(" 15-20GB 根目录，由于包含 "),e("code",[a._v("/usr")]),a._v(" 所以会有安装的各种软件，不能太小")]),a._v(" "),e("li",[e("code",[a._v("/boot")]),a._v(" 512MB")]),a._v(" "),e("li",[e("code",[a._v("/var")]),a._v(" 8-12GB，主要是缓存，读写频繁")]),a._v(" "),e("li",[e("code",[a._v("swap")]),a._v(" 4GB，交换分区")]),a._v(" "),e("li",[e("code",[a._v("/home")]),a._v(" 剩余全部")])]),a._v(" "),e("p",[a._v("再之后直接安装就好啦～静待片刻，Manjaro 之旅就正式开始啦～")]),a._v(" "),e("h2",{attrs:{id:"换源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#换源"}},[a._v("#")]),a._v(" 换源")]),a._v(" "),e("p",[a._v("二话不说，先换个源")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman-mirrors -i -c China -m rank   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新镜像排名")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -Syy                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新数据源")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("添加 "),e("code",[a._v("archlinuxcn")]),a._v(" 镜像，在 "),e("code",[a._v("/etc/pacman.conf")]),a._v(" 中添加以下内容")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[archlinuxcn]\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("blockquote",[e("p",[a._v("更多镜像见 "),e("a",{attrs:{href:"https://github.com/archlinuxcn/mirrorlist-repo",target:"_blank",rel:"noopener noreferrer"}},[a._v("mirrorlist-repo"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"安装软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[a._v("#")]),a._v(" 安装软件")]),a._v(" "),e("h3",{attrs:{id:"使用-pacman-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-pacman-安装"}},[a._v("#")]),a._v(" 使用 pacman 安装")]),a._v(" "),e("p",[e("code",[a._v("pacman")]),a._v(" 是 Manjaro 下的软件包管理器，有点类似于 Ubuntu 下的 "),e("code",[a._v("apt")]),a._v("，只不过参数稍稍不一样，安装软件需要这样")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_names"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"使用-yay-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-yay-安装"}},[a._v("#")]),a._v(" 使用 yay 安装")]),a._v(" "),e("p",[e("code",[a._v("yay")]),a._v(" 是 AUR 仓库的包管理器，那么什么是 AUR 呢？AUR 是 Arch 的社区维护软件仓库，而不是官方的，所以如果 "),e("code",[a._v("pacman")]),a._v(" 有下不到的软件可以使用 "),e("code",[a._v("yay")]),a._v(" 试一下")]),a._v(" "),e("p",[a._v("用 "),e("code",[a._v("yay")]),a._v(" 之前先开启 AUR，软件包管理器 -> 首选项 -> 高级 -> AUR -> 启用 AUR 支持")]),a._v(" "),e("p",[a._v("之后需要安装 "),e("code",[a._v("yay")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S yay\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("然后就可以使用 "),e("code",[a._v("yay")]),a._v(" 愉快地安装各种软件啦")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yay -S "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"安装-deb-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-deb-包"}},[a._v("#")]),a._v(" 安装 deb 包")]),a._v(" "),e("p",[a._v("有些软件只提供 debian 系的包，但我们可以使用 debtap 将其转换为 Arch package（debtap 是 DEB To Arch (Linux) Package 的缩写），然后再进行安装")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装 debtap")]),a._v("\nyay -S debtap\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新 debtap")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" debtap -u\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用 debtap 进行转换（Licence 可以填 GPL）")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" debtap "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".deb\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用 pacman 安装")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -U "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".tar.xz\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("h3",{attrs:{id:"一些常用软件及安装方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些常用软件及安装方式"}},[a._v("#")]),a._v(" 一些常用软件及安装方式")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("vim")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo pacman -S vim\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("Sunpinyin")]),a._v(" "),e("p",[a._v("听说 Linux 版搜狗输入法有点问题，之前在 Deepin 下确实遇到些 Bug，所以就不选了，这里用 "),e("code",[a._v("Sunpinyin")]),a._v(" 配合 "),e("code",[a._v("Cloudpinyin")]),a._v("，在那之前需要先安装输入法管理器 "),e("code",[a._v("fcitx")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo pacman -S fcitx-im\nsudo pacman -S fcitx-configtool\nsudo pacman -S fcitx-sunpinyin\nsudo pacman -S fcitx-cloudpinyin\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("并将以下内容添加到 "),e("code",[a._v("/etc/profile")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('export GTK_IM_MODULE=fcitx\nexport QT_IM_MODULE=fcitx\nexport XMODIFIERS="@im=fcitx"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("之后在 fcitx 将 "),e("code",[a._v("Sunpinyin")]),a._v(" 调整为第二输入法并移除多余输入法即可")])]),a._v(" "),e("li",[e("p",[a._v("chrome")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo pacman -S google-chrome\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("网易云音乐")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yay -S netease-cloud-music\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("vscode")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S visual-studio-code-bin\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("WPS")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yay -S wps-office\nyay -S ttf-wps-fonts\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])]),a._v(" "),e("h2",{attrs:{id:"美化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#美化"}},[a._v("#")]),a._v(" 美化")]),a._v(" "),e("h3",{attrs:{id:"shell-美化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-美化"}},[a._v("#")]),a._v(" Shell 美化")]),a._v(" "),e("p",[a._v("zsh 相对于 bash 拥有更强的功能，而且也更加美观")]),a._v(" "),e("p",[a._v("参考 "),e("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("os-my-zsh")]),a._v(" 官网"),e("OutboundLink")],1),a._v("，输入下面的命令就可以美化优化 zsh 了")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("然后编辑 "),e("code",[a._v("~/.zshrc")]),a._v("，修改下主题就能拥有更加美观的 zsh 了（暂时使用的是 "),e("code",[a._v("agnoster")]),a._v("）")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("有些主题在 VSCode 里不能正确显示，需要修改下 Terminal 的字体，我改成了 "),e("code",[a._v("Menlo for Powerline")]),a._v("，之后重启一下就好了")])]),a._v(" "),e("h3",{attrs:{id:"dock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dock"}},[a._v("#")]),a._v(" Dock")]),a._v(" "),e("p",[a._v("首先安装一个 "),e("code",[a._v("Dock")])]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pacman -S latte-dock\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("略作配置即可")]),a._v(" "),e("p",[a._v("现在底部的面板就有点多余了，移到上面去～然后将无用的部件也都去掉")]),a._v(" "),e("h3",{attrs:{id:"主题更换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题更换"}},[a._v("#")]),a._v(" 主题更换")]),a._v(" "),e("p",[a._v("KDE 的主题更换都超简单，直接在设置里就能完成")]),a._v(" "),e("p",[a._v("设置 -> 系统设置 -> 外观 -> 全局主题")]),a._v(" "),e("p",[a._v("在这里不仅可以修改主题，还可以在主题库中搜索主题哦，更重要的是，不止全局主题可以，鼠标样式、图标样式等等都可以在丰富的库中寻找资源，一键即可美化系统～")]),a._v(" "),e("h2",{attrs:{id:"一些小问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些小问题"}},[a._v("#")]),a._v(" 一些小问题")]),a._v(" "),e("h3",{attrs:{id:"双系统时间差问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双系统时间差问题"}},[a._v("#")]),a._v(" 双系统时间差问题")]),a._v(" "),e("p",[a._v("由于 Windows 与 Linux 显示时间的方式不太一样，所以每次切换系统总是需要改一下时间，如果让这两个系统任意一个妥协使用对方的计时标准即可，这里因为 Manjaro 操作方便，就在 Manjaro 修改了")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" timedatectl set-local-rtc "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"卡在开机界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卡在开机界面"}},[a._v("#")]),a._v(" 卡在开机界面")]),a._v(" "),e("p",[a._v("emmmm，刚折腾一天把所有基本该折腾的折腾完了，我突然想把 Krunner 给卸了，然后居然把整个 KDE 给卸了，结果再开机我就卡在登陆界面了")]),a._v(" "),e("p",[a._v("为了能够重新安装 KDE，首先需要进入终端，在卡住的界面按 "),e("code",[a._v("Alt+Ctrl+F4")]),a._v(" 进入 tty4，然后输入用户名和密码登陆")]),a._v(" "),e("p",[a._v("为了能够联网下载，需要使用 "),e("code",[a._v("ifconfig")]),a._v(" 开启无线网卡，但如果 "),e("code",[a._v("ifconfig")]),a._v(" 也没有安装怎么办……一种解决方法是通过数据线将 Android 手机与电脑相连接，在手机上开启 USB 共享网络即可")]),a._v(" "),e("p",[a._v("之后重装 KDE 并重启就又看到了熟悉的开机界面了")]),a._v(" "),e("h1",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" References")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5c6d0a1051882561ad329255",target:"_blank",rel:"noopener noreferrer"}},[a._v("Manjaro 美化与调优"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.bilibili.com/video/BV1pJ411N75i",target:"_blank",rel:"noopener noreferrer"}},[a._v("Manjaro-Kde 美化"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/83335242",target:"_blank",rel:"noopener noreferrer"}},[a._v("manjaro 安装 deb 包"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.itdaan.com/blog/2017/12/02/2be8e9eaf332561e7ed94c35ba57e757.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("如何解决 Windows 和 Manjaro 双系统时间差 8 小时的问题"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://ywnz.com/linuxaz/3504.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装 Manjaro Linux 的详细步骤"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/comixH/p/12232252.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("记 manjaro 图形驱动删除后的一次补救"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/lj402159806/article/details/80218360",target:"_blank",rel:"noopener noreferrer"}},[a._v("manjaro 安装分区以及配置方案"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);