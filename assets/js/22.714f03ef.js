(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{268:function(t,a,s){t.exports=s.p+"assets/img/maxout-01.7d261fdc.png"},269:function(t,a,s){t.exports=s.p+"assets/img/maxout-02.dae9fe0f.png"},270:function(t,a,s){t.exports=s.p+"assets/img/maxout-03.01bbd534.png"},312:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("Maxout 是 Goodfellow 在 2013 年提出的一个新的激活函数，相比于其它的激活函数，Maxout 本身是需要参数的，参数可以通过网络的反向传播得到学习，相应地，它比其它激活函数有着更好的性能，理论上可以拟合任意凸函数，进而使得网络取得更好的性能")])]),t._v(" "),n("ul",[n("li",[t._v("预备知识\n"),n("ul",[n("li",[t._v("基本全连接与卷积网络连接方式")]),t._v(" "),n("li",[n("code",[t._v("TensorFlow V2")]),t._v(" 的基本使用")])])]),t._v(" "),n("li",[t._v("开发环境\n"),n("ul",[n("li",[n("code",[t._v("python 3.6")])])])])]),t._v(" "),n("h2",{attrs:{id:"_1-什么是-maxout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-maxout"}},[t._v("#")]),t._v(" 1 什么是 Maxout")]),t._v(" "),n("p",[t._v("Maxout 可以说是一个激活函数，但与其他激活函数所不同的是，它本身是拥有参数的，正因为此，它可以拟合任意的凸函数，那么它是如何实现的呢？")]),t._v(" "),n("p",[t._v("首先我们弄清一个问题，"),n("strong",[t._v("卷积层在通道阶上和全连接层并没有任何区别")]),t._v("，只是额外在图像的两个阶增加了卷积核的稀疏连接，但这往往是很小的（"),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mn",[t._v("3")]),n("mo",[t._v("×")]),n("mn",[t._v("3")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3 \\times 3")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord"},[t._v("3")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("×")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),n("span",{staticClass:"mord"},[t._v("3")])])])])]),t._v(" ，"),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mn",[t._v("5")]),n("mo",[t._v("×")]),n("mn",[t._v("5")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("5 \\times 5")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord"},[t._v("5")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("×")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),n("span",{staticClass:"mord"},[t._v("5")])])])])]),t._v(" 这样），所以说我们只考虑卷积网络的最后一个阶的话，它与全连接并无区别，这里就直接使用全连接网络作为例子，当然，卷积网络也是适用的")],1),t._v(" "),n("p",[t._v("我们网络前层进行 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("W")]),n("mi",[t._v("X")]),n("mo",[t._v("+")]),n("mi",[t._v("b")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("WX + b")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.76666em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("W")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.07847em"}},[t._v("X")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("+")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("b")])])])])]),t._v(" 的线性变换后，是需要增加激活函数进行非线性变换的，但是具体怎么选择激活函数呢？我们可不可以让网络自己学习这个呢？")],1),t._v(" "),n("p",{attrs:{align:"center"}},[n("img",{attrs:{src:s(268),alt:"maxout-01.png",width:"400"}})]),t._v(" "),n("p",[t._v("上图便是最基本的 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("M")]),n("mi",[t._v("a")]),n("mi",[t._v("x")]),n("mi",[t._v("o")]),n("mi",[t._v("u")]),n("mi",[t._v("t")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Maxout")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mord mathdefault"},[t._v("a")]),n("span",{staticClass:"mord mathdefault"},[t._v("x")]),n("span",{staticClass:"mord mathdefault"},[t._v("o")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault"},[t._v("t")])])])])]),t._v(" 连接示意图，前面与普通的全连接并无区别，之后每两个单元“连接”到一个单元上，当然，这里不是真的连接，因为该条线上并不涉及参数，那么如何从两个单元得到一个单元的值呢？其实只需要比较两个单元的值即可，大的值便可以通过~也便是 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("M")]),n("mi",[t._v("a")]),n("mi",[t._v("x")]),n("mtext"),n("mi",[t._v("O")]),n("mi",[t._v("u")]),n("mi",[t._v("t")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Max\\ Out")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mord mathdefault"},[t._v("a")]),n("span",{staticClass:"mord mathdefault"},[t._v("x")]),n("span",{staticClass:"mspace"},[t._v(" ")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault"},[t._v("t")])])])])])],1),t._v(" "),n("p",{attrs:{align:"center"}},[n("img",{attrs:{src:s(269),alt:"maxout-02.png",width:"400"}})]),t._v(" "),n("p",[t._v("结果便如上图所示，每两个单元中较大的值会被激活")]),t._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":s(270),loading:"lazy"}})]),t._v(" "),n("p",[t._v("我们知道每个单元都是前层特征的线性组合，那么比如上图中第一个单元学习到了 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("y")]),n("mo",[t._v("=")]),n("mn",[t._v("0")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y = 0")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),n("span",{staticClass:"mrel"},[t._v("=")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),n("span",{staticClass:"mord"},[t._v("0")])])])])]),t._v(" ，而第二个单元学习到了 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("y")]),n("mo",[t._v("=")]),n("mi",[t._v("x")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y = x")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),n("span",{staticClass:"mrel"},[t._v("=")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("x")])])])])]),t._v(" ，那么这两个单元学习到的激活函数便是 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("R")]),n("mi",[t._v("e")]),n("mi",[t._v("L")]),n("mi",[t._v("U")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("ReLU")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),n("span",{staticClass:"mord mathdefault"},[t._v("e")]),n("span",{staticClass:"mord mathdefault"},[t._v("L")]),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")])])])])]),t._v(" 激活函数")],1),t._v(" "),n("p",[t._v("更一般地，我们使每 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])])]),t._v(" （前面的例子 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("k")]),n("mo",[t._v("=")]),n("mn",[t._v("2")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k = 2")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),n("span",{staticClass:"mrel"},[t._v("=")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),n("span",{staticClass:"mord"},[t._v("2")])])])])]),t._v("）个单元“连接”到一个单元上，那么 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("M")]),n("mi",[t._v("a")]),n("mi",[t._v("x")]),n("mi",[t._v("o")]),n("mi",[t._v("u")]),n("mi",[t._v("t")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Maxout")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mord mathdefault"},[t._v("a")]),n("span",{staticClass:"mord mathdefault"},[t._v("x")]),n("span",{staticClass:"mord mathdefault"},[t._v("o")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault"},[t._v("t")])])])])]),t._v(" 可以学习到更多段的分段函数作为激活函数，当 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])])]),t._v(" 足够大时，理论上可以拟合任何凸函数")],1),t._v(" "),n("h2",{attrs:{id:"_2-如何实现-maxout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何实现-maxout"}},[t._v("#")]),t._v(" 2 如何实现 Maxout")]),t._v(" "),n("p",[t._v("一种很直觉的方法就是，我们先将原本的 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("m")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("m")])])])])]),t._v(" 个参数改为 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("m")]),n("mo",[t._v("×")]),n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m \\times k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("m")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("×")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])])]),t._v(" 个参数，之后每组挑取最大的，但是这样的话，就需要预先用一个矩阵对原先的参数进行线性变换，增加了实现的复杂性")],1),t._v(" "),n("p",[t._v("我们反过来想，如果前一层的输出已经是 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("m")]),n("mo",[t._v("×")]),n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m \\times k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("m")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("×")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])])]),t._v(" 个参数了呢？很简单。我们 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("M")]),n("mi",[t._v("a")]),n("mi",[t._v("x")]),n("mi",[t._v("o")]),n("mi",[t._v("u")]),n("mi",[t._v("t")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Maxout")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mord mathdefault"},[t._v("a")]),n("span",{staticClass:"mord mathdefault"},[t._v("x")]),n("span",{staticClass:"mord mathdefault"},[t._v("o")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault"},[t._v("t")])])])])]),t._v(" 只需要分组并每个组选一个最大值就好了嘛~这里参考 TensorFlow1.13 版本的 "),n("code",[t._v("tf.contrib.layers.maxout")]),t._v(" ，使用 TensorFlow V2 的 "),n("code",[t._v("tf.keras.layers.Layer")]),t._v(" API 重写了下")],1),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Maxout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Layer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" units"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("units "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" units\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axis "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axis\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" axis "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axis "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" input_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_channels "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" input_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_channels "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("units "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_shape "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" input_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("axis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("units\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_shape "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num_channels "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("units"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inputs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reduce_max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out_shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" axis"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x.shape = (..., d)")]),t._v("\nx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conv2d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kernel_size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strides"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" padding"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x.shape = (..., m*k)")]),t._v("\nx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Maxout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_units"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x.shape = (..., m)")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br")])]),n("p",[t._v("这种实现方式可以让我们像加一个激活函数一样把 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("M")]),n("mi",[t._v("a")]),n("mi",[t._v("x")]),n("mi",[t._v("o")]),n("mi",[t._v("u")]),n("mi",[t._v("t")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Maxout")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mord mathdefault"},[t._v("a")]),n("span",{staticClass:"mord mathdefault"},[t._v("x")]),n("span",{staticClass:"mord mathdefault"},[t._v("o")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault"},[t._v("t")])])])])]),t._v(" 加到网络中，但是值得注意的是，这样的 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("M")]),n("mi",[t._v("a")]),n("mi",[t._v("x")]),n("mi",[t._v("o")]),n("mi",[t._v("u")]),n("mi",[t._v("t")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Maxout")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),n("span",{staticClass:"mord mathdefault"},[t._v("a")]),n("span",{staticClass:"mord mathdefault"},[t._v("x")]),n("span",{staticClass:"mord mathdefault"},[t._v("o")]),n("span",{staticClass:"mord mathdefault"},[t._v("u")]),n("span",{staticClass:"mord mathdefault"},[t._v("t")])])])])]),t._v(" 实现会将 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("m")]),n("mo",[t._v("×")]),n("mi",[t._v("k")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m \\times k")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("m")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),n("span",{staticClass:"mbin"},[t._v("×")]),n("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])])]),t._v(" 个单元减少为 "),n("eq",[n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[n("semantics",[n("mrow",[n("mi",[t._v("m")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"base"},[n("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),n("span",{staticClass:"mord mathdefault"},[t._v("m")])])])])]),t._v(" 个")],1),t._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://tensorflow.google.cn/api_docs/python/tf/contrib/layers/maxout?hl=en",target:"_blank",rel:"noopener noreferrer"}},[t._v("TensorFlow 文档 Maxout"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://arxiv.org/abs/1302.4389",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paper: Maxout Networks"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/710fd5d6d640",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maxout 激活函数原理及实现"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);