(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{332:function(a,t,e){"use strict";e.r(t);var r=e(0),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("blockquote",[e("p",[a._v("专栏原创出处："),e("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源笔记文件 "),e("OutboundLink")],1),a._v(" ，"),e("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-jvm",target:"_blank",rel:"noopener noreferrer"}},[a._v("github-源码 "),e("OutboundLink")],1),a._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),a._v(" "),e("p",[a._v("Java JVM-虚拟机专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),e("a",{attrs:{href:"https://review-notes.top/language/java-jvm/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java JVM-虚拟机 "),e("OutboundLink")],1)]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#排查过程"}},[a._v("排查过程")])]),e("li",[e("a",{attrs:{href:"#扩展"}},[a._v("扩展")])]),e("li",[e("a",{attrs:{href:"#说明"}},[a._v("说明")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"排查过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排查过程"}},[a._v("#")]),a._v(" 排查过程")]),a._v(" "),e("ul",[e("li",[a._v("执行 "),e("code",[a._v("top")]),a._v(" 命令，定位高 CPU 占用的 PID")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  PID USER  PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+     COMMAND\n10834 hdfs  20   0 6125996   3.4g   6800 S  107.0  5.4    343:35.01  /usr/java/jdk1.8...\n")])])]),e("ul",[e("li",[a._v("执行 "),e("code",[a._v("ps -mp PID -o THREAD,tid,time")]),a._v(" 命令查看线程耗时情况")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ps -mp 10834 -o THREAD,tid,time\nUSER     %CPU PRI SCNT WCHAN  USER SYSTEM   TID     TIME\nhdfs      0.2   -    - -         -      -     - 05:43:35\nhdfs      0.0  19    - futex_    -      - 11013 00:47:47 --以该线程长耗时为例分析\nhdfs      0.0  19    - futex_    -      - 11014 00:01:21\nhdfs      0.0  19    - futex_    -      - 11035 00:00:07\nhdfs      0.0  19    - futex_    -      - 11037 00:20:04\nhdfs      0.0  19    - ep_pol    -      - 11401 00:04:52\nhdfs      0.0  19    - ep_pol    -      - 11402 00:04:31\nhdfs      0.0  19    - futex_    -      - 11403 00:21:01\n")])])]),e("ul",[e("li",[a._v("执行 "),e("code",[a._v('printf "%x\\n" TID')]),a._v(" 将 tid 转换为十六进制")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('printf "%x\\n" 11013\n2b05\n')])])]),e("ul",[e("li",[a._v("执行 "),e("code",[a._v("jstack PID |grep TID -A 30")]),a._v(" 定位具体线程")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('jstack 10834 |grep 2b05 -A 30\n"C1 CompilerThread0" #7 daemon prio=9 os_prio=31 cpu=398.45ms elapsed=1607.13s tid=0x00007fd03c809800 nid=0x3d03 waiting on condition  [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n   No compile task\n--\n"生产者-3" #14 prio=5 os_prio=31 cpu=375.00ms elapsed=1606.74s tid=0x00007fd03b8bd800 nid=0x6403 waiting on condition  [0x0000700009200000]\n   java.lang.Thread.State: TIMED_WAITING (sleeping)\n\tat java.lang.Thread.sleep(java.base@11.0.2/Native Method)\n\tat io.gourd.java.concurrency.app.pc.CarFactory$Producer.run(CarFactory.java:45)\n\tat java.lang.Thread.run(java.base@11.0.2/Thread.java:834)\n\n"生产者-4" #15 prio=5 os_prio=31 cpu=375.46ms elapsed=1606.74s tid=0x00007fd03b931000 nid=0xa203 waiting on condition  [0x0000700009303000]\n   java.lang.Thread.State: TIMED_WAITING (sleeping)\n\tat java.lang.Thread.sleep(java.base@11.0.2/Native Method)\n\tat io.gourd.java.concurrency.app.pc.CarFactory$Producer.run(CarFactory.java:45)\n\tat java.lang.Thread.run(java.base@11.0.2/Thread.java:834)\n')])])]),e("h2",{attrs:{id:"扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[a._v("#")]),a._v(" 扩展")]),a._v(" "),e("p",[a._v("根据实际线程情况定位相关代码，如果定位到 GC 相关线程引起高 CPU 问题，可使用 "),e("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103887785",target:"_blank",rel:"noopener noreferrer"}},[a._v("jstat"),e("OutboundLink")],1),a._v(" 相关命令观察 GC 情况"),e("br"),a._v("\n例如： "),e("code",[a._v("jstat -gcutil -t -h 5 PID 500 10")])]),a._v(" "),e("h2",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[a._v("#")]),a._v(" 说明")]),a._v(" "),e("blockquote",[e("p",[a._v("更多 JDK 相关命令详细用法可参考  "),e("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103887785",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java JVM JDK13 诊断命令处理工具 jps,jstat,jinfo,jmap,jstack,jcmd"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("高内存占用分析可参考本专栏《故障诊断-高内存占用》。")]),a._v(" "),e("p",[a._v("实际生产过程中我们可以使用 dump 文件进行分析，或者使用一些可视化故障处理工具")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.oracle.com/javase/9/tools/jhsdb.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("jhsdb"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://openjdk.java.net/tools/svc/jconsole/",target:"_blank",rel:"noopener noreferrer"}},[a._v("jconsole"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javaseproducts/mission-control/java-mission-control-1998576.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java Mission Control"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.ej-technologies.com/products/jprofiler/overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jprofiler"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);