(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{304:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("博客的部署往往只需要一行命令，但却需要花费我几分钟在本地的构建时间，完成博客内容后本应该放松放松心情，这几分钟的等待显得尤为惹人生厌")]),s._v(" "),a("p",[s._v("那么如何解决这个问题呐？当然是自动化部署啦，这样我们每次只需要将写完的博客 Push 到 GitHub 上，就可以触发相应的 CI 以完成博客的自动部署咯，所以这里就介绍如何使用 GitHub Action 来自动化部署博客")])]),s._v(" "),a("h2",{attrs:{id:"github-action-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-action-的使用"}},[s._v("#")]),s._v(" GitHub Action 的使用")]),s._v(" "),a("p",[s._v("关于自动化部署，起初我接触的是 Travis CI，配置起来非常简单～")]),s._v(" "),a("p",[s._v("后来 GitHub Action 完全开放，我就完全转 GitHub Action 这个自定义更加方便的 CI 系统了，起初我的自动化部署脚本也是自己写的 Shell 脚本，因为那时候相关的部署 Action 尚不完善，不支持直接 Push 到根地址，不过前段时间支持了之后我就放弃自己写的脚本咯 (๑˃◡˂๑)")]),s._v(" "),a("p",[s._v("GitHub Action 的使用方法也非常简单～只需要在项目根目录新建 "),a("code",[s._v(".github/workflows/")]),s._v(" 文件夹，再在其中新建相应的 YAML 配置文件即可，比如 "),a("code",[s._v("hello-github-action.yml")]),s._v("，名字随意啦，只是为了区分而已～")]),s._v(" "),a("p",[s._v("文件内写入相应的内容")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# action 名字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Hello GitHub Action\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 触发条件，比如 push pull_request 等")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行环境")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 各步的任务")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Hello GitHub Action\n           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" echo 'Hello GitHub Action'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("这样我们就完成了一个简单的 GitHub Action，它会在我们每次 push 到 main 分支时触发，之后就会打印 "),a("code",[s._v("Hello GitHub Action")]),s._v("，虽然看不见……")]),s._v(" "),a("h2",{attrs:{id:"自动化部署到-github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署到-github-pages"}},[s._v("#")]),s._v(" 自动化部署到 GitHub Pages")]),s._v(" "),a("p",[s._v("我们对上面的配置稍作修改，目标就是在源仓库 Push 时触发，此时将博客源码构建成静态文件，并将它们 Push 到 GitHub Pages 仓库即可")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" VuePress Deploy\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用某个 Repo")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout 🛎️\n           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建静态文件")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install and Build 🔧\n           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n              npm install yarn\n              yarn\n              yarn docs:build")]),s._v("\n\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署到 GitHub Pages")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy 🚀\n           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peaceiris/actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v3\n           "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("personal_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.PERSONAL_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("publish_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external_repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" SigureMo/SigureMo.github.io\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("publish_branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" main\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nyakku.moe\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github-actions[bot]'")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user_email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github-actions[bot]@users.noreply.github.com'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("这里第一步是使用你的源代码 repo，其中 uses 是指使用了某个现成的 Action，比如这个 "),a("code",[s._v("actions/checkout")]),s._v(" 就是 "),a("a",{attrs:{href:"https://github.com/actions/checkout",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("github.com/actions/checkout")]),a("OutboundLink")],1),s._v(" 的 "),a("code",[s._v("v2")]),s._v(" 版本，如果需要 submodule 或者 lfs 可以通过 "),a("code",[s._v("with")]),s._v(" 选项来修改参数")]),s._v(" "),a("p",[s._v("第二步是将博客源码构建成静态文件，不同工具的构建方法自然不同，我这里是以 VuePress 作为示例")]),s._v(" "),a("p",[s._v("第三步就是将构建好的静态文件 Push 到目标的 GitHub Pages 对应的 Repo 了，这里使用的是 "),a("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("peaceiris/actions-gh-pages")]),a("OutboundLink")],1),s._v("，如果你只需要部署到当前 Repo 的 "),a("code",[s._v("gh-pages")]),s._v(" 分支上的话，你只需要配置以下内容即可")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy 🚀\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peaceiris/actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v3\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("publish_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里的 "),a("code",[s._v("secrets.GITHUB_TOKEN")]),s._v(" 不需要配置，GitHub 会自动提供")]),s._v(" "),a("p",[s._v("但是如果你和我一样想部署到 "),a("code",[s._v("<username>.github.io")]),s._v(" 的话，就需要稍微改动一下啦，该 Action 提供了非常丰富的参数以供配置")]),s._v(" "),a("p",[s._v("由于目标 Repo 和目标分支都变了，就需要分别设置下 "),a("code",[s._v("external_repository")]),s._v(" 和 "),a("code",[s._v("publish_branch")]),s._v(" 这两个参数咯")]),s._v(" "),a("p",[s._v("另外，由于 Push 到外部 Repo 的话 "),a("code",[s._v("GITHUB_TOKEN")]),s._v(" 的权限不足，因此需要提供其它的验证方式，比如 "),a("code",[s._v("personal_token")]),s._v(" 和 "),a("code",[s._v("deploy_key")]),s._v("，这里提一下 "),a("code",[s._v("personal_token")]),s._v(" 的生成与配置方式，该方法相比于后者也更方便一些")]),s._v(" "),a("p",[s._v("依次进入"),a("code",[s._v("个人 Settings -> Developer settings -> Personal access tokens")]),s._v(" 点击 "),a("code",[s._v("Generate new token")]),s._v("，随便填写个名字，然后下面勾选 "),a("code",[s._v("repo")]),s._v("（权限） 后确认 "),a("code",[s._v("Generate token")])]),s._v(" "),a("p",[s._v("由于生成的 token 只能看一次，请确定复制后再关闭页面")]),s._v(" "),a("p",[s._v("之后依次进入 "),a("code",[s._v("源 repo -> Settings -> Secrets")]),s._v("，点击 "),a("code",[s._v("New secret")]),s._v("，Name 字段填写 "),a("code",[s._v("PERSONAL_TOKEN")]),s._v("，Value 字段粘贴刚刚生成的 token 即可")]),s._v(" "),a("p",[s._v("这样，该 action 在 "),a("code",[s._v("secrets.PERSONAL_TOKEN")]),s._v(" 处就可以获得刚刚生成的拥有读写 repo 权限的 token，然后传入该 action 的 "),a("code",[s._v("personal_token")]),s._v(" 参数，进而完成整个部署过程")]),s._v(" "),a("p",[s._v("这样就完成了权限的配置啦，该 Action 还提供了很多比较实用的参数，比如 "),a("code",[s._v("cname")]),s._v("，更多详情去看它的文档吧")]),s._v(" "),a("p",[s._v("完成这些，就可以重新 push 一下源代码 repo 试一下啦，还可以在源 repo 的 Actions 中可以看到相关进度")]),s._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[s._v("#")]),s._v(" References")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("actions-gh-pages"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);