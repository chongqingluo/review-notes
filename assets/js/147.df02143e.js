(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{354:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),a("OutboundLink")],1),t._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),a("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),a("p",[t._v("Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/language/scala-basis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scala 编程语言 "),a("OutboundLink")],1)]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#什么是混入"}},[t._v("什么是混入")])]),a("li",[a("a",{attrs:{href:"#示例-1"}},[t._v("示例 1")])]),a("li",[a("a",{attrs:{href:"#示例-2"}},[t._v("示例 2")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"什么是混入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是混入"}},[t._v("#")]),t._v(" 什么是混入")]),t._v(" "),a("p",[t._v("当某个特质被用于组合类时，被称为混入。")]),t._v(" "),a("ul",[a("li",[t._v("一个类只能有一个父类，但是可以有多个混入。")]),t._v(" "),a("li",[t._v("父类和混入可能具有相同的父类。")])]),t._v(" "),a("h2",{attrs:{id:"示例-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[t._v("#")]),t._v(" 示例 1")]),t._v(" "),a("p",[t._v("类 D 有一个父类 B 和一个混入 C，父类 B 和混入 C 具有相同的父类 A。")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m an instance of class B"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" C "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" loudMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toUpperCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" D "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" C\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" D\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I'm an instance of class B")]),t._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loudMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I'M AN INSTANCE OF CLASS B")]),t._v("\n")])])]),a("h2",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例 2")]),t._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象类，具有一个抽象类型 T 和标准的迭代器方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" AbsIterator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" T\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" hasNext"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Boolean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" T\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现类")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" StringIterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" AbsIterator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" T "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Char")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" hasNext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s charAt i\n      i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      ch\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 特质，继承了 AbsIterator，定义了 foreach 方法，只要还有下一个元素，就会将下一个元素作为参数放入 f 函数中")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" RichIterator "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" AbsIterator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" foreach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" T "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Unit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hasNext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RichStringIter 继承了 StringIterator 混入了 RichIterator，使其功能更加灵活")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" RichStringIter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" StringIterator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Scala"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" RichIterator\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" richStringIter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" RichStringIter\n  richStringIter foreach println\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// S")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// l")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);