(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{527:function(t,s,a){"use strict";a.r(s);var r=a(4),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("JS 具有自动垃圾回收机制，垃圾收集器会按照固定的时间间隔运行")]),t._v(" "),a("h2",{attrs:{id:"_1-标记清除-常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-标记清除-常用"}},[t._v("#")]),t._v(" 1.标记清除（常用）")]),t._v(" "),a("p",[t._v("当变量进入执行环境时，就标记这个变量为**“进入环境”"),a("strong",[t._v("，从逻辑上讲，永远不能释放进入环境的变量所占用的内存空间，因为当执行流进入相应的环境，就有可能会用到它们。当变量离开环境时，就标记这个变量为")]),t._v("“离开环境”**。")]),t._v(" "),a("p",[t._v("垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记，然后它会去掉环境中的变量以及被环境中的变量引用的标记，而在此之后再次被加上标记的变量将被视为准备删除的变量，因为环境中的变量已经无法访问这些变量了，最后垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收它们所占用的内存空间。")]),t._v(" "),a("h2",{attrs:{id:"_2-引用计数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引用计数"}},[t._v("#")]),t._v(" 2.引用计数")]),t._v(" "),a("p",[t._v("声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是1，同一个值被赋给另一个变量，这个引用类型值的引用次数加1，当包含这个引用类型值的变量被赋值成另一个值时，这个引用类型值的引用次数减1，当引用次数变成0时，说明无法再访问这个值了，当垃圾收集器下一次运行时，它就会释放那些引用次数为0的值所占用的内存空间（循环引用会释放不掉内存，造成内存泄漏）")])])}),[],!1,null,null,null);s.default=e.exports}}]);