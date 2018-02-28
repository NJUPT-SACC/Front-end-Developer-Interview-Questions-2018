# 前端面经总结

总结主要分为5个主体：①HTML②CSS③JavaScript④前端工具⑤网络知识。

---

## HTML
1. Doctype的作用
	答：规范HTML以什么方式去解析文档，有标准模式、兼容模式两种。标准模式下，HTML排版与JavaScript以该浏览器支持的最高标准运行。兼容模式下，页面以宽松向后兼容方式显示，模拟老浏览器的行为来防止网站无法工作。
2. HTML5 为什么只需要写 <!DOCTYPE HTML>
	答：HTML5不基于SGML（标准通用标记语言），所以不需要写DTD（文档定义类型）
3. HTML5新增哪些标签？删去了哪些标签？
	答： 太多了不一一列举，详情可百度
①新增的标签有：

		内容标签：header（顶部栏）、nav（导航栏）、article（正文）、section（片段）、footer（底部栏）、main(主体内容)
		媒体标签：audio（音频）、video（视频）
		表单标签： email、date、time、search
		绘图： canvas
	②删去的标签有：

		frame改为iframe；
		可以用CSS代替的标签:basefont、big、font、s、strick、tt、u等；
		只有个别浏览器支持的标签：applet、bgsound、blink、marquee

4. 常见浏览器内核
	答：①浏览器的内核是分为两个部分的，一是渲染引擎，另一个是JS引擎。现在JS引擎比较独立，内核更加倾向于说渲染引擎。②Trident：IE；Gecko：Firefox；Webkit:Safari、原Chrome;Persto: 原Opera ；Blink：现Chrome、Opera	
5. HTML 和 XHTML 有什么区别
	答：XHTML 可以认为是 XML 版本的 HTML，为符合 XML 要求，XHTML 语法上要求更严谨些。体现在：XHTML 要求正确嵌套、所有元素必须关闭、区分大小写、属性值必须要用双引号、用id代替name属性、特殊字符的处理（如<要用&lt;）
6. 为什么通常推荐将 CSS `<link>` 放置在 `<head></head>` 之间，而将 JS `<script>` 放置在 `</body>` 之前？你知道有哪些例外吗？
	答：浏览器渲染顺序是从上至下的，用这种方式渲染的话，在解析js代码之前，页面内容就能出现在浏览器，给用户更好的体验。不知道有哪些例外（延迟加载不知道算不算？）
7. 如何区分HTML与HTML5
	答： 从Doctype、HTML5语义化标签区分
8. 对HTML语义化的理解
	答： ①构造良好的文档结构，在CSS失效时也能以文档方式渲染内容②便于SEO③便于爬虫解析④便于读懂代码，减少维护难度
9. 浏览器是怎么对HTML5的离线储存资源进行管理和加载的
	答： 在线的情况下，浏览器发现HTML头部有manifest属性，它会请求manifest文件，如果是第一次访问，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过并且资源已经离线存储了，那么浏览器就会先使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。 离线的情况下，浏览器就直接使用离线存储的资源。
10.  cookies，sessionStorage 和 localStorage 的区别
	答：①相同点：都是保存在浏览器端，且同源的。②大小：cookies大小为4K以下，sessionStorage、localStorage 可以达到5M或以上③访问浏览器：每次http请求都会携带cookie，而另外两个不会主动发送，仅在本地保存④数据有效期：Cookie由服务器设置过时时间，sessionStorage在浏览器关闭前一直有效，localStorage直到你手动清除。⑤作用域不同：sessionStorage不能在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都共享；Cookie也是在所有同源窗口中共享。
11. iframe有哪些缺点
	答：iframe会阻塞主页面的Onload事件、不利于SEO、iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
12. label的作用是什么？是怎么用的？
	答：定义表单控制间的关系，点击label能自动将焦点转移到对应表单上	
	```
		<label for="example">一个表单label</label>
		<input name="example" />
	```
13. 网页验证码是干嘛的，是为了解决什么安全问题？
	答： 区分是人还是计算机在登录；解决论坛灌水、刷票、恶意爆破密码等问题。
14. 什么是渐进式渲染 (progressive rendering)
	答： 喵喵喵？
15. 页面渲染流程说一下
	答：①解析DOM树②解析CSS树③生成rendom树④根据rendom树绘制
16. <meta>标签各属性作用
 	答： ①charset - 定义编码格式，常用UTF-8②content：定义与 http-equiv （content-type expires refresh set-cookie）或 name （author description keywords generator evised others）属性相关的元信息。

---

## CSS

1. 圣杯布局/双飞翼布局的实现
2. 垂直居中布局如何实现
3. 权重的计算（CSS优先级算法如何计算）
4. box-size的各个值（对盒模型的理解）
5. float有什么影响，如何去除float的影响
6. 描述下BFC
7. class与id的区别
8. 浏览器如何判断一个元素匹配某个CSS选择器（浏览器是怎样解析CSS选择器的）
9. 响应式设计与自适应设计的不同
10. display有哪些值分别有什么作用
11. absolute与relative定位原理
12. 解释下flexbox以及其应用场景
13. 元素横、竖向的百分比设定是相对于什么
14. ::before 和 :after中双冒号和单冒号区别
15. style标签写在body后与body区别
16. 对line-height的理解
17. 什么是媒体查询
18. CSS优化、提高性能的方法有哪些
19. margin和padding分别适合什么场景使用
20. link 和@import 的区别
21. 流式布局与响应式布局的区别
22. 行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？
23. css层叠上下文及顺序
24. css3新特性有哪些？

---

## JavaScript
1. JavaScript基本类型说一下
2. 什么是原型，原形链
3. 怎么看AMD与CommonJS
4. 什么是闭包，如何使用，为什么要使用
5. 以下代码的区别：`function Person(){}`、`var person = Person()`、`var person = new Person()`
6. Javascript创建对象的几种方式
7. JavaScript有几种类型的值？
8. Javascript作用链域的理解
9. This对象的理解
10. eval做什么的
11. 什么是window对象? 什么是document对象?
12. null和underfined的区别
13. 如何判断一个对象是否属于某个类？
14. new操作符具体干了什么
15. 说下对JSON的了解
16. js延迟加载的方式有哪些
17. Ajax 是什么? 如何创建一个Ajax？
18. 同步和异步的区别?
19. `.call` 和 `.apply` 的区别是什么？
20. 说下你知道的改变作用域的方法
21. 什么是变量声明提升
22. 描述下事件冒泡机制
23. "attribute" 和 "property" 的区别是什么
24. documen.write和 innerHTML的区别?
25. DOM操作——怎样添加、移除、移动、复制、创建和查找节点?
26. `==` 和 `===` 有什么不同？
27. 为什么不推荐扩展 JavaScript 内置对象？
28. 对ECMAScript6的了解
29. ECMAScript6 怎么写class么，为什么会出现class这种东西?
30. JavaScript 怎么实现一个类？怎么实例化这个类?
31. 说下深拷贝、浅拷贝的理解

---

## 前端工具

1. 了解bower、npm、yeoman、grunt、gulp么？
2. 一个npm包必要的字段有哪些
3. 说说Git的特点
4. Node.js的适用场景
5. 什么是前端路由?什么时候适合使用前端路由? 前端路由有哪些优点和缺点?
6. 怎么用浏览器的各种工具来调试和debug代码
7. 如何测试前端代码? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么？
8. 前端模板干什么用的，说一下你知道的，并怎么用
9. Webpack的特点
10. 说下你用过的框架的特点（React、Vue、Jquery）
11. React的生命周期
12. React/Vue的virtual dom实现原理
13. Express的特点
14. 什么是雪碧图，适合在什么地方使用
15. 说下对Redux/Flux的理解
16. 说下MVC、MVVM的区别
17. MockServer特点
18. 用过哪些CSS预处理器，说下其特点

---

## 网络知识
1. 部分地区用户反应网站很卡，请问有哪些可能性的原因，以及解决方法
2. 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么
3. 什么是SEO并且怎么优化
4. HTTP status 301 与 302 的区别
5. 罗列出你所知道的所有 HTTP method
6. 什么是CDN，有什么用
7. 什么是跨域，跨域的方法有哪些
8.  XML与Json的区别
9. TCP 3次握手、四次握手策略过程描述一下
10. TCP与UDP的区别
11. 为什么https安全
12. 说一下对websock的理解
13. CSP（内容安全策略是做什么用的）
14. 什么是XSS，如何预防
15. 什么是CSRF，如何预防
16. 什么是注入（SQL）,如何预防
17. 一些常见的web攻击手段有哪些
	答： DDoS、上传文件攻击、重定向攻击、Cookie攻击、Http Heads攻击、CSRF攻击、XSS攻击、散列攻击、SQL攻击、缓冲区溢出攻击
18. 罗列你知道的Http状态码

---

参考资料：
1. [面试的信心来源于过硬的基础](https://segmentfault.com/a/1190000013331105)
2. [前端开发面试题](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions)
3. [前端工作面试问题](https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese)
4. [12个HTML和CSS必须知道的重点难点问题](https://juejin.im/post/5a954add6fb9a06348538c0d)