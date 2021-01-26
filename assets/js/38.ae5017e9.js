(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{473:function(a,s,e){"use strict";e.r(s);var t=e(2),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("本地设备的配置大大限制了炼丹的效率，如果有一个合适的服务器的话，如何配置能最方便地进行炼丹呢？")])]),a._v(" "),e("h2",{attrs:{id:"_1-什么是-jupyterlab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-jupyterlab"}},[a._v("#")]),a._v(" 1 什么是 JupyterLab？")]),a._v(" "),e("p",[a._v("什么工具更适合在云端炼丹呢？基于在本地使用 VS-Code 的流畅体验，我最初尝试的便是 VS-Code 的 Remote-SSH 扩展，经过一段时间的体验之后，发现 VS-Code 的远程连接很不稳定（也可能是 VPN 不稳定的原因），而且对 Jupyter 支持并不是很好。而直接使用 Jupyter Notebook 的话，多个文件以及终端之间的切换与管理又非常不方便。JupyterLab 刚好结合了两者的优点，将多 Tab 标签页、终端以及 Jupyter 集成起来，最重要的是它还支持丰富的扩展~")]),a._v(" "),e("h2",{attrs:{id:"_2-如何使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何使用"}},[a._v("#")]),a._v(" 2 如何使用")]),a._v(" "),e("h3",{attrs:{id:"_2-1-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装"}},[a._v("#")]),a._v(" 2.1 安装")]),a._v(" "),e("p",[a._v("直接使用 pip 就可以安装啦~")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("pip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" jupyterlab\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-2-基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-基本配置"}},[a._v("#")]),a._v(" 2.2 基本配置")]),a._v(" "),e("p",[a._v("为了安全考虑，先配置下密码，这里使用 Ipython 生成密钥")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("ipython\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("执行命令生成密钥")]),a._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" notebook"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("auth "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" passwd\npasswd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("之后按照提示输入密码即可，将最终的输出序列（"),e("code",[a._v("sha1:????????")]),a._v("） copy 下来")]),a._v(" "),e("p",[a._v("下面首先生成配置文件")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jupyter lab --generate-config\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("修改配置文件")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" ~/.jupyter/jupyter_notebook_config.py\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("添加以下配置信息")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 将 IP 设置为 *，意味允许任何 IP 访问\nc.NotebookApp.ip = '*'\n# 这里的密码就是前面生成的那一串序列\nc.NotebookApp.password = 'sha1:????????'\n# 服务器上没有浏览器供 Jupyter 打开\nc.NotebookApp.open_browser = False\n# 监听端口设置为 8888 或其他自己喜欢的端口\nc.NotebookApp.port = 8888\n# 允许远程访问\nc.NotebookApp.allow_remote_access = True\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("p",[a._v("接下来就可以运行啦~")]),a._v(" "),e("h3",{attrs:{id:"_2-3-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-使用"}},[a._v("#")]),a._v(" 2.3 使用")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("jupyter lab --ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("此时输入刚刚的密码，在本地浏览器输入 "),e("code",[a._v("http://<服务器IP>:8888")]),a._v(" 即可打开 JupyterLab，不过打开可能需要花点时间，要稍稍等待一下~")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("如果需要长期练一颗丹的话，可以使用 "),e("code",[a._v("nohup")]),a._v(" 命令防止退出终端后也自动终止，另外配合 "),e("code",[a._v("&")]),a._v(" 可以将其转为后台运行")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" jupyter lab --ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nohup jupyter lab --ip=0.0.0.0 >/dev/null 2>log & # 只输出错误信息到日志文件")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# nohup jupyter lab --ip=0.0.0.0 >/dev/null 2>&1 & # 什么信息也不要")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("关于 "),e("code",[a._v("nohup")]),a._v(" 的更多使用方法可见 Ref3")])]),a._v(" "),e("h3",{attrs:{id:"_2-4-环境切换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-环境切换"}},[a._v("#")]),a._v(" 2.4 环境切换")]),a._v(" "),e("p",[a._v("如何在 JupyterLab 轻松地切换环境呢？总不能每个环境都安装配置一遍 JupyterLab 吧？这个很简单，只需要安装 "),e("code",[a._v("nb_conda_kernels")]),a._v(" 就好了")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nb_conda_kernels\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-丰富的扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-丰富的扩展"}},[a._v("#")]),a._v(" 3 丰富的扩展")]),a._v(" "),e("p",[a._v("暂未深入体验，可参见 Ref4")]),a._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" References")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://tf.wiki/zh/appendix/jupyterlab.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("部署自己的交互式 Python 开发环境 JupyterLab"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/ratels/p/11387740.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JupyterLab 远程访问配置方法（CentOS7）"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.jb51.net/article/169783.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux nohup 实现后台运行程序及查看（nohup 与 &）"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/101070029",target:"_blank",rel:"noopener noreferrer"}},[a._v("15 个好用到爆炸的 Jupyter Lab 插件"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/crisschan/article/details/72967027",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nohup 过大的清理"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/fengzhongluoleidehua/article/details/84614736",target:"_blank",rel:"noopener noreferrer"}},[a._v("多个 conda 环境共享 jupyter notebook(notebook 添加 conda 环境)"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);