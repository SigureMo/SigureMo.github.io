(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{550:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("虽然说 TensorFlow2.x 比 1.x 易用了很多，但杂乱的 API 还是让人抓狂，特别是 Keras 中有着多种多样的模型实现方式（最简单的 Sequential、最灵活的 Functional、最规整的 SubClass）以及训练方式（fit 和自己写训练循环），fit 过于封装，有时候想加点东西都挺麻烦，而自己写循环又怕效率较低，也可能会忽略点什么，果不其然，最近又发现了训练状态的设置问题，于是它差点又把我推向了 Pytorch 的怀抱")])]),t._v(" "),a("h2",{attrs:{id:"为什么要设定训练状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要设定训练状态"}},[t._v("#")]),t._v(" 为什么要设定训练状态")]),t._v(" "),a("p",[t._v("由于某些层在训练时会使用与测试时不一致的行为（主要指 BN 层与 Dropout 层），所以自己写训练 Loop 时候需要设定一下训练状态，但要如何改变这个状态？？？嗯由于 TensorFlow 文档基本都用的 fit 方式，所以……基本没有看到与状态设定有关的 API")]),t._v(" "),a("p",[t._v("之后我看到了 [1] 这篇文章才了解到训练状态的指定方式，但原文中涵盖不太全面，我稍微进一步进行了测试（由于基本不用 fit 方式，而且 fit 方式也没这方面的问题，所以仅针对自写循环方式进行测试）")]),t._v(" "),a("h2",{attrs:{id:"三种模型定义方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三种模型定义方式"}},[t._v("#")]),t._v(" 三种模型定义方式")]),t._v(" "),a("p",[t._v("对于三种模型定义方式，并没有什么不同，并不需要修改 SubClass 的定义方式")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sequential")]),t._v("\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sequential"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conv2D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchNormalization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Functional")]),t._v("\ninputs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inputs\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conv2D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchNormalization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\noutputs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outputs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("outputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SubClass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conv2D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchNormalization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        output "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" output\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("p",[t._v("模型在训练时候需要指定 "),a("code",[t._v("training=True")]),t._v("（默认值是 "),a("code",[t._v("None")]),t._v("）")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" training"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这样，训练时 BN 才能更新 "),a("code",[t._v("moving_mean")]),t._v(" 和 "),a("code",[t._v("moving_variance")]),t._v("，相应地，如果是 Dropout，这样才会 dropout 掉部分 neurons")]),t._v(" "),a("h2",{attrs:{id:"tf-keras-backend-set-learning-phase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tf-keras-backend-set-learning-phase"}},[t._v("#")]),t._v(" tf.keras.backend.set_learning_phase")]),t._v(" "),a("p",[t._v("那么，另外一种改变状态的方式 "),a("code",[t._v("tf.keras.backend.set_learning_phase")]),t._v(" 是否有效呢？经过测试也是可以的，但是要注意一个问题，当在 "),a("code",[t._v("model")]),t._v(" 中指定训练状态时，会忽略掉这个设置")]),t._v(" "),a("p",[t._v("也就是说即便之前指定了 "),a("code",[t._v("tf.keras.backend.set_learning_phase(True)")]),t._v("，但使用了 "),a("code",[t._v("model(data, training=False)")]),t._v(" 的话，实际执行的仍然是非训练状态")]),t._v(" "),a("p",[t._v("也就是说，当 "),a("code",[t._v("training")]),t._v(" 没有指定（"),a("code",[t._v("None")]),t._v("）的时候，会使用 "),a("code",[t._v("tf.keras.backend.set_learning_phase")]),t._v(" 的值，而指定后则忽略 "),a("code",[t._v("tf.keras.backend.set_learning_phase")]),t._v(" 的值")]),t._v(" "),a("h2",{attrs:{id:"所以要怎么训练？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所以要怎么训练？"}},[t._v("#")]),t._v(" 所以要怎么训练？")]),t._v(" "),a("p",[t._v("还是有两种方式耶，喜欢哪种就用哪种吧")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# training")]),t._v("\ntf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_learning_phase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# testing")]),t._v("\ntf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_learning_phase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# training")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" training"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# testing")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("由于后者更方便一些，所以我一般选用后者")]),t._v(" "),a("h1",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/64310188",target:"_blank",rel:"noopener noreferrer"}},[t._v("TensorFlow 2.0+Keras 防坑指南"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);