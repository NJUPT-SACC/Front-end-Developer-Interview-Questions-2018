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

	答：浏览器渲染顺序是从上至下的，用这种方式渲染的话，在解析js代码之前，页面内容就能出现在浏览器，给用户更好的体验。当JS放在head部分中时，可以保证该脚本（一般是库）在其他代码调用之前被加载。
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

	答：通过暂时只渲染第一屏主体内容, 而下方或者更详细数据在客户端抓取后才渲染来。就是说, 服务端渲染一部分, 客户端加载一部分, 从而提升渲染性能。
15. 页面渲染流程说一下

	答：①解析HTML文档②构建DOM树③下载资源（CSS、JS等）④构建CSS树⑤构建rendom树并渲染⑥执行JS（注：这些操作没有严格的先后顺序）
16. <meta>标签各属性作用

 	答： ①charset - 定义编码格式，常用UTF-8②content：定义与 http-equiv （content-type expires refresh set-cookie）或 name （author description keywords generator evised others）属性相关的元信息。

---

## CSS

1. 圣杯布局/双飞翼布局的实现

	答：看示例，外加一种flex布局
2. 垂直居中布局如何实现

	答：看示例
3. 权重的计算（CSS优先级算法如何计算）

	答：标签为1，类名为10，id为100，内联样式为1000，如 div .test1 #555 = 1 + 10 +100 = 111。如果加上！import，权重为最高。
4. box-sizing的各个值（对盒模型的理解）

	答：①content-box: 修改width/height的时候只修改content的width/height②padding-box: 修改width/height的时候修改content+padding的width/height③border-box:修改width/height的时候修改content+padding+border的width/height④inherit：从父元素里继承box-sizing
5. float有什么影响，如何去除float的影响

	答：影响：造成父元素的高度塌陷，背景不能显示完全，边框不能撑开，margin值不能正常显示。最常用的方法有：.clear::after{display:table;content:'';clear:both;overflow:hidden} .clear{*zoom:1}
6. 描述下BFC

	答：块级格式化上下文，BFC子元素不会影响外部元素，可以把BFC看成一个盒子，盒子里的东西不能影响外面的东西。触发BFC的条件：满足以下任意一项即可：①body根元素②float不为None③position：absolute/fixed④overflow:不为visible⑤display:inline-block/table-cells/flex等；它的作用是：①不会被浮动元素遮盖②包裹浮动元素③避免父子元素margin合并
7. class与id的区别

	答：①权重不同②class一般用于多个元素重复使用的样式、id用于一个元素的样式
8. 浏览器如何判断一个元素匹配某个CSS选择器（浏览器是怎样解析CSS选择器的）

	答：从右往左匹配，如果在匹配过程中遇到不同的，就放弃该次匹配，如要匹配body .main .example
	```
	<body>
		<div class="main"><span class="example"></span></div> /* ① */
		<div class="mainAnother"><span class="example"></span></div>  /* ② * /
	</body>
	```
	①会先找到.example 然后找到其父元素.main,再到body，发现无错误，所以应用该样式②会先找到.example 然后找到其父元素.mainAnother,发现不匹配，放弃该次匹配
9. <s>响应式设计与自适应设计的不同</s>
10. display有哪些值分别有什么作用

	答：inherit：继承父类；block 块级；inline-block 内联块状；table ;表格；none 隐藏；flex 弹性盒子布局。
11. absolute与relative定位原理

	答： absolute相对离自己最近的第一个定位不为static的父元素定位，relative相对原位置（文档流定位）。
12. 解释下flexbox以及其应用场景

	答： 弹性盒子布局适用于响应式设计，不适用于移动端，整体网页
13. 元素横、竖向的百分比设定是相对于什么

	答： ①相对于父元素的width：width，left，right，padding，margin；
②相对于父元素的height：height，top，bottom，padding，margin；③相对于继承字号：font-size;④line-height:相对于父元素高度
14. ::before 和 :after中双冒号和单冒号区别

	答：①双冒号是伪元素②单冒号是伪类
15. style标签写在body后与body区别

	答： body前先渲染，body后后渲染
16. 对line-height的理解

	答： ①line-height通过line-boxes实现，line-boxes的高度取决于它的包裹元素的最高高度，因此line-height也是具有高度的。在某些情形下可以用line-height代替height。②vertical-align的百分比是基于line-height来计算的。③非阅读站推荐设置行高为20px，阅读站推荐设置为1.5/1.6（by张鑫旭）
17. 什么是媒体查询

	答： ①@media only screen and (max-width:设定宽度){xxx} 小于该设定宽度时应用设定的样式 ②@media only screen and (min-width:设定宽度){xxx} 大于该设定宽度时应用设定的样式
18. CSS优化、提高性能的方法有哪些

	答： ① 代码压缩 ② 避免CSS表达式 ③ 少用import ④ 渲染性能优化
19. margin和padding分别适合什么场景使用

	答： 外边距margin改变元素与元素之间的间距，padding改变的是元素内容与元素框之间的间距，所以称为补白、内边距。
20. link 和@import 的区别

	答： ①link 是HTML的标签，兼容性比@import强（@import在IE5以下不兼容）②加载顺序：@import的内容会等到页面全部被下载完再被加载
21. 流式布局与响应式布局的区别

	答： ①流式布局在CSS2时代就有，主要是靠百分比进行排版，可以在不同分辨率下显示相同的版式②响应式布局主要应该媒体查询，可以在不同的分辨率下对元素重新设定样式（不仅仅是尺寸），可以在不同屏幕下显示不同的版式。
22. 行内元素有哪些？块级元素有哪些？ 空(void)元素有哪些？

	答：①行内：input、image、span、a、b、select、strong②块级：div、p、h1-h4...、ul、ol、li、dt、dd、dl③空元素：br、hr、link、meta
23. css层叠上下文及顺序

	答：元素按层叠顺序展示谁能覆盖在表面，七阶顺序：①层叠上下文的background/border②负的z-index③block块状水平盒子④float浮动盒子⑤inline/inline-block水平盒子⑥z-index:auto/0 ⑦正z-index
24. css3新特性有哪些？

	答：选择器、圆角（border-radius）、多列布局（multi-column layout）、阴影和反射（Shadow\Reflect）、文字特效（text-shadow）、文字渲染（text-decoration）、线性渐变（gradient）、旋转（transform）、缩放（transfrom）、定位（translate）、动画（animation）

25. 块级元素与水平元素的区别

	答：块级元素：①独占一行②未设置高度时，高度会自动扩展以包裹处于**常规流**中的子元素③如果没有设宽度，会自动填充满父元素④可以使用margin/padding⑤vertical-align无效
			水平元素：①水平方向上根据direction布局②不会独占一行（除非宽度超出）③受white-space控制换行规则④宽高对非替换行内元素无效（如img）,宽由其内容决定，高由line-height决定，非替换元素则由height,width,margin,padding等确定⑤浮动或决定定位时会转为block⑥vertical-align有效


----

## JavaScript
1. JavaScript基本类型说一下
	
	答：ES6之前为5种基本类型：String，Number，Boolean，NULL，Undefined,ES6之后加多一种Symbol（独一无二的值）
2. 什么是原型，原型链

	答：①原型是构造函数的一个实例（ new XXX() ）的__proto__,XXX.prototype就是原型对象，在默认情况下，所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype属性所在的函数（XXX），原型对象的用途是为每个实例对象存储共享的方法和属性。②原型指针__proto__，该指针指向上一层的原型对象，而上一层的原型对象的结构依然类似，这样利用__proto__一直指到Object的原型对象，而原型对象Object.prototype.__proto__ = null表示原型链的最顶端，这样就构成了原型链，同时也解释了为什么所有的javascript对象都具有Object的基本方法。
3. 怎么看AMD与CommonJS

	答：①相同：两者都是为了实现模块化编程而出现的②：区别：CommenJS适用于**服务器端**（如Node.js）同步加载不同模块文件。AMD：异步模块定义，适用于**浏览器端**的一种模块加载方式（js中最典型的异步例子就是ajax）目前，主要有两个Javascript库实现了AMD规范：[require.js](http://requirejs.org/)和[curl.js](https://github.com/cujojs/curl)。
4. 什么是闭包，如何使用，为什么要使用

	答：在一个函数内部**返回（return）**一个函数，该函数能访问其函数内部变量。使用闭包是为了读取其函数内部的变量，另一个是让变量常驻内存中，不让它被垃圾回收机制回收。由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用，否则会造成网页的性能问题，且在IE下容易造成内存泄露。
5. 以下代码的区别：`function Person(){}`、`var person = function()`、`var person = new Person()`

	答：①第一种为函数声明，由于函数和变量提升的行为，它的函数声明与赋值（{}里面的内容）都会被提前,即函数声明过程在整个程序执行之前的预处理就完成了，所以只要处于同一个作用域，就可以访问到，即使在定义之前调用它也可以。②第二种为函数表达式，它与第一种的区别是，它只提升函数声明（即person），匿名函数只有在被调用时才被初始化。③是创建一个Person对象的实例给person
6. Javascript创建对象的几种方式

	答：

	① Object构造函数创建
	```
		var Person = new Object();
		Person.name = 'Dcison'
	```

	② 使用对象字面量表示法
	```
		var Person = {
			name = 'Dcison',
			age = 10
		}
	```

	③ 工厂模式
	```
		var factory = function(name,age){
			var Person = new Object()
			Person.name = name
			Person.age = age
			return Person
		}
		var peson = factory('Dcison',10)
	```

	④ 构造函数
	```
		var Person = function(name,age){
			this.name = name
			this.age = age
		}
		var person = new Person( 'Dcison',10)
	```
	⑤ 原型构造
	```
		var Person(){}
		Person.prototype.name = 'Dcison'
		Person.prototype.age= 10
		var person = new Person()
	```
	⑥ 组合构造（构造+原型）目前在 ECMAScript中使用最广泛、认同度最高的一种创建自定义类型的方法
	```
		var Person = function (name,age){
			this.name = name
			this.age = age
		}	
		Person.prototype = {
			constructor: Person,
			country: 'china'
		}
		person1 = new Person ('dcison',10)
		person2 = new Pesron('MZI',11)
		person1.country == person2.country //true
	```
7. JavaScript有几种类型的值？

	答：6种基本类型：String、Number、Undefined、Boolean、Null、Symbol，基本类型保存在栈中，一种复杂类型：Object，保存在堆中。
8. Javascript作用链域的理解
	
	答：①函数作用域：函数内的区域，就是这个函数的作用域，变量和函数在这个区域都可以访问操作。最外层函数外的区域叫全局作用域，函数内的区域叫局部作用域。②变量作用域：变量所在的区域，就是这个变量的作用域，变量在这个区域内可以被访问操作。在全局作用域上定义的变量叫全局变量，在函数内定义的变量叫局部变量。③全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。 当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找， 直至全局作用域，这种组织形式就是作用域链。
9. This对象的理解

	答：①this 默认绑定全局对象②一个对象下含一个函数的时候，我们称函数的this被隐式绑定到这个对象里，且在一串对象属性链中，this绑定的是最内层的对象③可以通过call，apply，bind显示绑定;④new，this指向new出来的对象。总结：this总是指向函数的直接调用者（而非间接调用者）；如果有new关键字，this指向new出来的那个对象；在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；
10. eval做什么的
	
	答：它的功能是把对应的字符串解析成JS代码并运行。不推荐使用，非常耗性能。
11. 什么是window对象? 什么是document对象?

	答：window对象指浏览器打开的窗口，document对象是HTML文档的一个只读引用，是window对象的一个属性。
12. null和underfined的区别

	答：①null指空的对象，表示是一个没有任何属性和方法的对象，undefined指未定义值，表示此处应该有一个值，但是还没有定义。②undefined不是有效的json值，null是③type null 是Object ，type undefiend 是 undefined ④Number(null) 是0，Number（undefined） 是NaN。
13. 如何判断一个对象是否属于某个类？

	答：①实例 instanceof  类名② 实例.__proto__ == 类名.prototype ③ 实例.__proto__.constructor == 类名
14. new操作符具体干了什么

	答：①创建一个新对象 ②将构造函数的作用域指向新对象（所以this指向了该对象）③执行构造函数中的代码（赋予新对象属性）④返回该对象
15. 说下对JSON的了解

	答：json(javascript object notation)全称是javascript对象表示法，它是一种数据交换的文本格式，而不是一种编程语言，目的是取代繁琐笨重的XML格式。它与JS对象字面量表示法的区别是，json的键名也必须加引号，字符串必须使用双引号表示，不能使用单引号。数值必须以十进制表示，且不能使用NaN和Infinity。
16. js延迟加载的方式有哪些

	答：①setTimeout②在<script>元素中设置 `defer` 属性，等于告诉浏览器立即下载，但延迟执行③动态创建<script>标签插入js④把js代码放body最后
17. Ajax 是什么? 如何创建一个Ajax？

	答：①Ajax全称是Asynchronous JavaScript and XML(异步的JavaScript与XML)，它是一种无需重新加载整个页面的情况的下更新部分页面内容的技术。所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果我们可以再来处理这个事。②var xmlhttp = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP') //IE6、7
18. 同步和异步的区别?

	答：JavaScript是单线程。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务，于是就有一个概念——任务队列。而任务分为两种，同步任务，异步任务。同步任务指在主线程上排队执行的任务，只有等前一个任务完成后，才能执行当前的任务。异步任务不进入主线程，而进入任务队列，只有等主线程的任务处理完毕才处理在任务队列上的任务，该任务才进入主线程执行。
19. `.call` 和 `.apply` 的区别是什么？

	答： 他们都是用于改变作用域，第一个传的参数都是要改变的作用域，他们的区别在于第二个参数，call传递给函数的参数必须逐个例举出来，apply传递参数数组。
20. 说下你知道的改变作用域的方法

	答：call，apply，箭头函数，new
21. 什么是变量声明提升

	答： JavaScript 中，变量及函数声明都将被提升到函数的最顶部。即JavaScript 中，变量可以在使用后声明。
22. 描述下事件冒泡机制

	答：事件从触发的元素开始逐级向上传递，直到document。与它区别的是事件捕获，事件从document出发，逐级向下传递，直到触发事件的元素，它用意在于在时间到达预定目标之前捕获它。我们通常用事件冒泡，很少有人使用事件捕获模型。
23. "attribute" 和 "property" 的区别是什么

	答：attribute（译为特性）是HTML标签上的特性，它的值只能够是字符串；property（译为属性）是DOM中的属性，是JavaScript里的对象；property能够从attribute中同步的内容，而attribute不会同步property上的值，即说明attribute和property之间的数据绑定是单向的（attribute->property），更改property和attribute上的任意值，都会将更新反映到HTML页面中。
24. documen.write和 innerHTML的区别?

	答：①write是DOM方法,向文档写入HTML表达式或JavaScript代码，可列出多个参数，参数被顺序添加到文档中 ；innerHTML是DOM属性,设置或返回调用元素开始结束标签之间的HTML元素②两者都可向页面输出内容,innerHTML比document.write更灵活，且document.write会触发重排。③通过document.write插入<script>元素会自动执行其中的脚本；大多数浏览器中，通过innerHTML插入<script>元素并不会执行其中的脚本。
25. DOM操作——怎样添加、移除、移动、复制、创建和查找节点?

	答：①添加节点：document.appendChild()②移除：document.removeChild()③移动：目标节点的父节点.append(要移动的节点)④复制：复制节点.cloneNode(boolean) true为深拷贝（该节点的所有后代节点也拷贝），否则为浅拷贝（仅拷贝该节点）⑤创建：document.createElement(要创建的节点元素)，document.createTextNode()创建一个文本节点，createDocumentFragment()创建一个新的空白的文档片段⑥查找节点：document.getElementsByClassName('查找元素的class')，document.getElementsByTagName('标签名称')，document.getElementById('查找元素的id')，document.querySelector('查找元素的CSS标签')
26. `==` 和 `===` 有什么不同？
	
	答：==是弱比较，会在比较时进行类型转换，===是严格比较，在比较时不进行类型转换。
27. 为什么不推荐扩展 JavaScript 内置对象？

	答： 因为可能某天浏览器或JS就实现了该对象，会造成冲突，对以前用过该对象的项目造成较大成本的维护影响。且扩展之后容易造成冲突（如果他人也扩展），这很容易造成混乱。
28. 对ECMAScript6的了解

	答：es6是一个新的标准，它包含了许多新的语言特性和库，是JS最实质性的一次升级。比如’箭头函数’、’字符串模板’、’generators(生成器)’、’async/await’、’解构赋值’、’class’，块级作用域let等等，还有就是引入module模块的概念。
29. ECMAScript6 怎么写class，为什么会出现class这种东西?

	答：ES6的class其实是一个语法糖，与ES5有点类似

	```
	class Person(){
			constructor(name,age){
				this.name = name
				this.age = age
			}
			sayHello = ()=>{
				return `Hello I'm ${this.name},I'm ${this.age} years old.`
			}
	}
	var person = new Person('dcison',10)
	```
	不知道，存在即必然吧？或者是C++等工程师不习惯？
30. JavaScript 怎么实现一个类？怎么实例化这个类?

	答：请看js第六题，六种方法
31. 说下深拷贝、浅拷贝的理解
	
	答：JS 中的浅拷贝与深拷贝，只针对复杂数据类型（`Object`，`Array`）的复制问题。浅拷贝是拷贝引用，拷贝后的引用都是指向同一个对象的实例，彼此之间的操作会互相影响（赋值就是一种浅拷贝）。深拷贝在堆中重新分配内存，并且把源对象_所有属性_都进行新建拷贝，以保证深拷贝的对象的引用图不包含任何原有对象或对象图上的任何对象，即拷贝后的对象与原来的对象是完全隔离，互不影响。（如Object.assign(),JSON.parse(),JSON.stringify()）
32. ES6中箭头函数跟普通函数的区别

	答：①不需要function关键字②可以忽略return关键字③继承上下文的this关键字

33. JS 继承方式有哪些：

	答：

	①原型链继承
	```
		function Super(){
			this.name = 'ssss'
		}
		function Child(){}
		Child.prototype = new Super()
		var instance = new Child()
	```
	问题：原型链继承的问题，修改实例引用的属性时，其他相应的实例引用属性也会改变
	②构造函数继承
	```
		function Super(){
			this.name = 'sss'
		}
		Super.prototype.sayName = function(){
			console.log(this.name)	
		}
		function Child(){
			Super.call(this)
		}
		var instance = new Child()
	```
	问题：无法继承原型链上的方法，属性（即案例里的instance不能使用sayName）
	③组合继承（构造+原型链）
	```
		function Super(){
			this.name = "sss"
		}
		Super.prototype.sayName = function (){
			console.log(this.name)
		}
		function Child = {
			Super.call(this)
		}
		Child.prototype = new Super()
		var instance = new Child()
	```
	问题：组合式继承中，父类的构造函数将被调用两次
	④寄生式继承
	```
		function SuperFactory(obj){
			var tmp = Object(obj)
			tmp.sayName = function(){
				console.log(this.name)
			}
			return tmp
		}
		var person = {
			name: 'sss'
		}
		var instance = SuperFactory(person)
	```
	问题：无法做到函数的复用
	⑤寄生组合式继承
	```
		function SuperFactory(child,sup){ //用于继承
			var tmp = Object.create(sup.prototype) //创建对象副本
			tmp.constructor = sup //弥补重写原型失去的默认constructor属性
			child.prototype = tmp
		}
		function Super(name){  
			this.name = name
			this.friends = ['小红','小强']
		}
		 Super.prototype.sayName = function(){
			return this.name
		 }
		function Child(name){
			Super.call(this,name)
		}		
		SuperFactory(Child,Super)
		var a = new Child('喵')
		var b = new Child('汪')
		a.friends.append('汪汪汪')
		console.log(a.friends,b.friends)
		//[ '小红', '小强', '汪汪汪' ] [ '小红', '小强' ]
		console.log(a.sayName(),b.name())
		//喵 汪
	```
	寄生组合式继承解决了组合式继承调用两次超类构造函数的问题
	⑥ES6继承
	ES6子类继承父类，必须在constructor函数的第一行调用super();之后才能使用关键字this，这是因为子类中没有自己的this对象，而是继承父类的this对象，然后才能为这个this添加相应的属性和方法。
	```
		class Super{
			constructor(name){
				this.name = name	
			}
		}
		class child extends Super{
			constructor(){
				super()
			}
		}
	```
34. 对属性描述符的了解

	答：属性描述符对象有4个属性：①configurable：可配置性，控制着其描述的属性的修改，表示能否修改属性的特性，能否把属性修改为访问器属性，或者能否通过delete删除属性从而重新定义属性。默认值为true。②enumerable：可枚举性，表示能否通过for-in遍历得到属性。默认值为true。③writable：可写性，表示能否修改属性的值。默认值为true。④ value：数据属性，表示属性的值。默认值为undefined。


35. 什么是内存泄露，怎么解决该问题

	答：内存泄露是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。常见原因：①循环引用②自动类型装箱转换（IE比较常见）③某些DOM。操作常见解决方法：①显示类型转换②避免循环引用③使用'垃圾箱'。


---

## 前端工具

1. 了解bower、npm、yeoman、grunt、gulp么？

	答：bower/npm 是包管理工具，现在热门的还有yarn；grunt、gulp是前端工具，结合插件，合并，压缩，编译Sass/Less等。yeoman不会再用了吧
2. <s>一个npm包必要的字段有哪些</s>

3. 说说Git的特点

	答：①版本库本地化，支持离线提交，相对独立不影响协同开发。②更少的仓库污染③把内容按元数据方式存储，完整克隆版本库④支持快速切换分支，并发合并性能好⑤分布式版本库，无单点故障，内容完整性好
4. Node.js的适用场景

	答：①高并发②I/O密集
5. 什么是前端路由?什么时候适合使用前端路由? 前端路由有哪些优点和缺点?

	答：②前端路由更多用在单页应用上, 也就是SPA, 因为单页应用, 基本上都是前后端分离的, 后端自然也就不会给前端提供路由。③从性能和用户体验的层面来比较的话，后端路由每次访问一个新页面的时候都要向服务器发送请求，然后服务器再响应请求，这个过程肯定会有延迟。而前端路由则不会，会提升用户体验。（优点）但是使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存。（缺点）
6. 怎么用浏览器的各种工具来调试和debug代码

	答：浏览器开发工具，包括react插件，redux插件等。
7. 如何测试前端代码? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么？

	答：Mockserver。。。
8. 前端模板干什么用的，说一下你知道的，并怎么用

	答：模板可以大大节省代码量来重复生成结构相同的HTML，前端模板有mustache等。。。
9.  说一下你对Webpack的了解

	答：webpack是一款模块加载兼打包工具，它可以将js、jsx、coffee、样式sass、less，图片等作为模块来使用和处理。以commonJS的形式来书写脚本，对AMD、CMD的支持也很全面，方便旧项目的迁移。能被模块化的不止是JS了。能替代部分grunt/gulp的工作，例如打包，压缩混淆，图片转base64等。扩展性强，插件机制完善，支持React热拔插。
10. 说下你用过的框架的特点（React、Vue、Jquery）


	答：React声明式设计， Virtual DOM树，单向数据流，组件化编码，客户端与服务器渲染。

11. React的生命周期

	答：

	1）初始化中：①getDefaultProps 获取组件属性的默认值②getInitialState()定义初始状态，这两部前不允许使用this.state 和 setState③componentWillMount（）只在初始化时调用一次，可以使用setState方法，并立即更新state④render（）开始渲染，不能在这里使用setState()，否则会无限循环，如果Render中包含其他的子组件，那么子组件的生命周期才开始进行。⑤componentDidmount(),所有组件都加载完毕（包括子组件），可以操作Dom。
	
	2）props发生改变：①componentWillReceiveProps（），比较旧props与新props，然后进行setstate(),如果父组件发生了该方法，子组件也会触发②shouldComponentUpdate(),接受了新的props或state后触发，可以通过返回true或false来控制后面的生命周期是否触发③componentWillUpdate（），在接收到新props，state或shouldComponent返回true后触发，不能在其中使用setstate()④重新render⑤componentDidupdate（）全部组件更新完后触发。

	3） state更新：porps更新的②-④步

	4）使用Redux的情况：基本不需要透过生命周期去做setState这样的状态管理了，基本都是用props来传递来重新渲染，仅需要注意在哪个生命周期时候触发action，比如需要进行ajax请求时候一般都是在componentDidMount和componentWillReceiveProps时候进行，在reducer中处理完，然后在通过props传入组件执行组件的更新周期。
12. React/Vue的virtual dom实现原理

	答：Virtual DOM 本质是在JS与DOM之间做了一个缓存，JS只操作这个缓存（Virtual DOM），最后的时候才写入DOM中。Virtual DOM的步骤：①用Js对象结构表示DOM结构，然后用这个结构构建真正的DOM树，插入到文档中。②当状态变更时，重新构造一棵新的对象树，新旧树对比，记录两棵树的差异。③把差异应用到步骤①构建的DOM树上，视图就更新了。
13. Express的特点

	答：①提供丰富的HTTP快捷方法和任意排列组合的Connect中间件②在node已有的特性上二次开发，扩展web所需功能。
14. 什么是雪碧图，适合在什么地方使用

	答：雪碧图是一种CSS图片合成技术，它是将各种小图片合成一张大图，然后通过background-position和元素尺寸调节需要显示的背景图案。适合在兼容不支持 data URI 的浏览器时适合用。具有①减少HTTP请求数，极大地提高页面加载速度②增加图片信息重复度，提高压缩比，减少图片大小③ 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现等优点。缺点是：图片维护麻烦，修改其中一个可能需要重新布局整个图片。
15. 说下对Redux/Flux的理解

	答：flux 和 redux做的事，是为了保证每一个动作（状态的更改）都能映射到确切的状态，在尤其是逻辑非常庞杂的时候维护和控制单向数据流，相当于一个数据状态容器。数据流向是 action -> reducer -> store -> view - >action ->循环。
16. 说下MVC、MVVM的区别

	答：MVC中的M（Model）指数据的缓存，V（View）指渲染的视图，也负责接收用户的交互操作，C（Controler）指用户与网络之间的交互的handler。MVVM中分为M（Model） V （View）VM （ViewMode），MVVM中M与V无联系，他们通过VM进行交互，即VM与M交互是双向的，即视图的数据变化会同时修改数据源，也会立即作用到View上。也就是用数据“绑定”的形式让数据更新的事件让其自动地双向同步。
17. MockServer特点

	答： Mock Server是一种通过接口文档进行测试，将接口与数据进行分离，通过条件和结果数据进行用户行为的模拟。

18. 用过哪些CSS预处理器，说下其特点

	答：用过Less。它支持变量，混合（类似函数定义一个属性集合），嵌套等等功能，让CSS像编程语言一样，使得对CSS的管理更加容易，重复的代码量可以减少。

19. MongoDB如何优化

	答：①造出慢语句②使用explain分析③创建索引提高查询性能④使用稀疏索引来减少空间占用⑤读写分离


20. React组件的优化

	答：①使用上线构建（Production Build）：会移除脚本中不必要的警告和报错，减少文件体积。	② 避免重绘 （Avoid Reconciliation）：重写 shouldComponentUpdate 函数，手动控制是否应该调用 render 函数进行重绘③尽可能的使用 Immutable Data（ The Power Of Not Mutating Data）：尽可能的不修改数据，而是重新赋值数据。这样的话，在检测数据对象是否发生修改方面会非常快，只需要检测对象引用即可，而不用挨个的检测对象属性的更改④在渲染组件的时候尽可能的添加key ，这样Virtual DOM在对比时就会更容易发现哪里，哪里是修改元素，哪里是新插入的元素。

21. React中调用setState发生了什么

	答：①React将传入的参数与组件当前的状态合并，触发调和过程②调和过程后，React以相对高效的方式（相对遍历）根据新的状态构建React元素树（virtual dom）并且着手重新渲染整个UI③新旧元素树（virtual dom）比较差异地方，按需渲染。

22. 什么情况下在React优先用Class Component而不是Function Component？

	答：在组件需要包含内部状态或者用到生命周期函数的时候用Class Component，其余时用Function Component。

23. React中的refs有什么作用，key又有什么作用？
	
	答：React用来提供我们安全访问dom元素或者某个组件实例的句柄。key用于React追踪哪些元素被修改、添加、移除的辅助操作。

24.  React中createElement与cloneElement有什么不同

	答： createElement是JSX编译之后使用的创建React Element的函数，而cloneElement则是用于复制某个元素并传入新的props。

25. 简述下React中的事件处理逻辑

	答：React 会将浏览器原生事件封装为合成事件传入设置的事件处理器中。这里的合成事件提供了与原生事件相同的接口，不过它们屏蔽了底层浏览器的细节差异，保证了行为的一致性。React 以单一事件监听器的方式将所有的事件发送到顶层进行处理，这样在更新 DOM 的时候就不需要考虑如何去处理附着在 DOM 上的事件监听器，打到优化性能的目的。


---

## 网络知识
1. 部分地区用户反应网站很卡，请问有哪些可能性的原因，以及解决方法

	答：分为两种网络问题，①客户网络问题，客户带宽小，下载资源速度慢②服务器网络问题，有以下几种可能：服务器受到DDoS等攻击，服务器超载等。还有局部网络问题，如北方网络访问南方网络③解决方法：服务器开启Gzip，代码压缩，使用CDN加速网络访问。
2. 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么

	答：百度一堆，[我的回答](http://dcison.top/2018/02/27/从输入网址到页面显示/)
3. 什么是SEO并且怎么优化

	答：SEO（Search Engine Optimization）搜索引擎优化，是一种利用搜索引擎的搜索规则来提高网站在有关搜索引擎内的自然排名的方式。优化：①网址要有合理的URL规划②网页Title设置③meta标签设置④图片alt⑤最好不要使用iframe⑥语义化标签设置合理
4. HTTP status 301 与 302 的区别

	答：301是永久性跳转，302为临时性跳转。
5. 罗列出你所知道的所有 HTTP method

	答：

	100 continue：初始请求已连接，客户应请求剩余的其他部分；
	
	101  Switching Protocols：服务器将遵循客户请求切换协议；
	
	200 OK：一切正常；
	
	201 Created：服务器已成功创建文档；
	
	202 Accepted：已接受请求，但处理未完成；
	
	301 Moved Permanently：永久性跳转；
	
	302 Found：临时性跳转；
	
	303 See Other：类似301/302，但重定向的目标必须用get请求，即使原来是post；
	
	304 Not Modified：客户端缓存的文档发出一个请求，服务器告诉客户端，缓存没有改动可以继续使用；
	
	400 Bad Request: 请求出现语法错误；

	403 Forbidden：资源不可用（一般为权限问题）；
	
	404 Not Found：资源找不到；
	
	500 Internal Server Error ：服务器发生不可预料的情况，不能完成客户的请求；
	
	501 Not Implemented：服务器不支持实现请求所需功能。
6. 什么是CDN，有什么用

	答：CDN（Content Delivery Network）内容分发网络，目的是解决因分布、带宽、服务器性能带来的访问延迟问题，适用于站点加速、点播、直播等场景。使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度和成功率。
7. 什么是跨域，跨域的方法有哪些

	答：①首先得说同源策略，浏览器最重要的一个安全策略，同源指的是同域名，同端口，同协议。浏览器在执行JS脚本时，会检查这个脚本属于哪个页面，如果不是同源页面，就不会被执行。跨域简单来说就是绕过同源策略。②方法：
	1） JSONP：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的`json`数据作为参数传入。缺点是只支持GET请求，不能很容易确定JSONP请求状态，容易受到CSRF攻击。
	2） CORS（跨域资源共享）：通过设置`Access-Control-Allow-Origin`来进行的。如果浏览器检测到相应的设置，就可以允许`Ajax`进行跨域的访问。
	3） 图片ping或script标签跨域：图片ping常用于跟踪用户点击页面或动态广告曝光次数。 script标签可以得到从其他来源数据，这也是JSONP依赖的根据。缺点是只能发起GET请求。
	4） window.name + iframe: 每个iframe都有包裹它的window，而这个window是top window的子窗口。contentWindow属性返回`<iframe>`元素的Window对象。可以使用这个Window对象来访问iframe的文档及其内部DOM。
	5）window.postMessage()：HTML5新特性，可以用来向其他所有的 window 对象发送消息。注意的是必须要保证所有的脚本执行完才发送 MessageEvent，如果在函数执行的过程中调用了它，就会让后面的函数超时无法执行。
	6） 修改document.domain跨子域：在根域范围内，允许把domain属性的值设置为它的上一级域。
	7） WebSocket：是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯。
	8） 代理：利用服务器端作一个代理跳板解决，如
DomainA客户端（浏览器） -> DomainA服务器 -> DomainB服务器 -> DomainA客户端（浏览器）
8.  XML与JSON的区别

	答：①数据体积方面：JSON相对于XML更小，传递速度更快②数据交互方面：JSON与JS更容易交互，更容易解析③数据描述方面：相对而言，XML描述的比JSON详细④速度方面：JSON速度远远快于XML
9. TCP 3次握手、四次挥手策略过程描述一下

	答：
	①3次握手：
	1）客户端：在吗（发送SYN包到服务器）
	2）服务器端： 在的（接受SYN包，并返回一个SYN + ACK包）
	3）客户端：好，那我们来聊天吧（接受服务器端返回的包，并发送一个ACK包）
	②4次挥手：
	1）客户端：我们分手吧（发送一个FIN给服务器端，关闭了客户端到服务器端的数据传送）
	2）服务器端：好 （收到FIN，并返回ACK）
	3）服务器端：分吧（关闭服务器到客户端的通道，发送一个FIN包）
	4）客户端：再见了！（收到服务器端FIN，发送一个ACK确认）
10. TCP与UDP的区别
	
	答：①TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议，即在正式收发数据前，必须和对方建立可靠的连接。②UDP（User Datagram Protocol 用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境。
11. 为什么https安全

	答：它利用SSL/TLS协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性。
12. 说一下对websock的理解

	答：WebSocket是Web应用程序的传输协议，它提供了双向的，按序到达的数据流。他是一个Html5协议，WebSocket的连接是持久的，他通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。
13. CSP（内容安全策略是做什么用的）

	答：主要解决XSS攻击带来的问题，通过设置脚本来源白名单来防御XXS，浏览器只执行和渲染来自白名单的资源，而不是盲目信任服务器提供的所有内容。
14. 什么是XSS，如何预防

	答：XSS晇站脚本注入，它指的是恶意攻击者往Web页面里插入恶意代码。当用户浏览该页之时，嵌入当中Web里面的代码会被运行，从而达到恶意攻击用户的特殊目的。XSS分为三类：分为反射型XSS，存储型XSS，DOMXSS。预防方法有：①关键字过滤，数据进行转义，尽可能减少直接输出HTML内容②对data的URL内容进行正则匹配。
15. 什么是CSRF，如何预防

	答：CSRF全称晇站请求伪造，攻击者盗用用户身份，以用户身份完成恶意攻击，如以用户名义发送邮件，向银行请求付款账单等。攻击原理是当用户访问正常站点A后（A返回了Cookie），在未退出A站同时打开了恶意站点B，B利用A站点的Cookie以你的名义向A站点发起非法请求。预防方法：①漏洞页面添加验证码，手机短信等等验证手段②使用一次性Token③检测请求的访问来源，验证Refer④临时Cookie⑤session标记随机生成。
16. 什么是注入（SQL）,如何预防

	答：简单来说就是利于SQL语句对数据库进行非法查询，更新等操作。预防方法：①参数化查询预处理②转义敏感字符③屏蔽出错信息（阻止攻击者知道结果）
17. 一些常见的web攻击手段有哪些
	答： DDoS、上传文件攻击、重定向攻击、Cookie攻击、Http Heads攻击、CSRF攻击、XSS攻击、散列攻击、SQL攻击、缓冲区溢出攻击。
18. 说下你对HTTP2.0的了解
	

	答：①HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。②HTTP2.0使用HPACK算法对header的数据进行压缩，这样数据体积小了，会转成二进制传输，所以在网络上传输就会更快。③当我们对支持HTTP2.0的web server请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取。适合浏览器加载静态资源。
19. 什么是DDoS，如何防御

	答：DDoS全称分布式拒绝服务攻击，原理是将多个计算机联合作为攻击平台，对一个或多个目标发起服务请求（其实是攻击），使目标站点无法正常工作。DDoS防御的方法：①利用网络设备设施保护网络资源，如：扩充带宽硬抗，使用硬件防火墙等②合理的网络架构布局提高网络负载能力③CDN流量清洗④分布式集群防御⑤过滤不使用的端口，限制特定流量。

20. 负载均衡了解多少
	答：①HTTP重定向，②DNS负载均衡，③反向代理④IP负载均衡⑤直接路由⑥IP隧道

	答：①HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。②6HTTP2.0使用HPACK算法对header的数据进行压缩，这样数据体积小了，在网络上传输就会更快。③当我们对支持HTTP2.0的web server请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取。适合浏览器加载静态资源。
19. 什么是DDoS，如何防御

	答：DDoS全称分布式拒绝服务攻击，原理是将多个计算机联合作为攻击平台，对一个或多个目标发起服务请求（其实是攻击），使目标站点无法正常工作。DDoS防御的方法：①利用网络设备设施保护网络资源，如：扩充带宽硬抗，使用硬件防火墙等②合理的网络架构布局提高网络负载能力③CDN流量清洗④分布式集群防御⑤过滤不使用的端口，限制特定流量。


---

## 自用：关于微信小程序

1.  怎么封装小程序的数据请求？

	答：①将所有的接口放在同一的js文件中并导出②在app.js中创建封装请求数据的方法③在子页面调用封装的方法请求。

2. 有哪些参数传值的方法？

	答：①给WXML元素添加data-*属性，通过e.currentTarget.dataset获取②元素添加id，通过e.currentTarget.id获取id的值获取③在URL设定参数，通过navigator后onload获取。

3. 使用过哪些方法提升小程序的应用速度？

	答：①提高页面加载速度（使用cdn库等等）②减少默认data的大小③组件化方案④进行分包加载，让用户在需要时才加载

4. 小程序生命周期

	答：①onLoad:页面加载：一个页面只会调用一次②onshow:页面显示：每次打开页面都会调用一次③onReady: 页面初次渲染完成：一个页面只会调用一次，此时可以进行视图层的交互。④onHide：页面隐藏：当使用navigatorTo或底部tab切换时发生⑤onUnload:页面卸载：当redirectTo或navigateBack的时候调用。⑥初始化完成：onLaunch，仅在初始化发生一次。

5. 微信小程序前后台区别

	答：当用户点击左上角关闭，或者按了设备 Home 键离开微信，小程序并没有直接销毁，而是进入了后台；当再次进入微信或再次打开小程序，又会从后台进入前台。需要注意的是：只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。
