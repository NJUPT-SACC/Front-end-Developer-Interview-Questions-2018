# 前端面经总结

总结主要分为5个主体：①HTML②CSS③JavaScript④前端工具⑤网络知识。

---

## HTML
1. Doctype的作用
2. HTML5 为什么只需要写 <!DOCTYPE HTML>
3. HTML5新增哪些标签？删去了哪些标签？
4. 常见浏览器内核
5. HTML 和 XHTML 有什么区别
6. 为什么通常推荐将 CSS `<link>` 放置在 `<head></head>` 之间，而将 JS `<script>` 放置在 `</body>` 之前？你知道有哪些例外吗？
7. 如何区分HTML与HTML5
8. 对HTML语义化的理解
9. 浏览器是怎么对HTML5的离线储存资源进行管理和加载的
10.  cookies，sessionStorage 和 localStorage 的区别
11. iframe有那些缺点
12. label的作用是什么？是怎么用的？
13. 网页验证码是干嘛的，是为了解决什么安全问题？
14. 什么是渐进式渲染 (progressive rendering)
15. 页面渲染流程说一下
16. <meta>标签各属性作用
 

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