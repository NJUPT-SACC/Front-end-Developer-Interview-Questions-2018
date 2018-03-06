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

	答： 喵喵喵？
15. 页面渲染流程说一下

	答：①解析DOM树②解析CSS树③生成rendom树④根据rendom树绘制
16. <meta>标签各属性作用

 	答： ①charset - 定义编码格式，常用UTF-8②content：定义与 http-equiv （content-type expires refresh set-cookie）或 name （author description keywords generator evised others）属性相关的元信息。

---

## CSS

1. 圣杯布局/双飞翼布局的实现

	答：看示例
2. 垂直居中布局如何实现

	答：看示例
3. 权重的计算（CSS优先级算法如何计算）

	答：标签为1，类名为10，id为100，内联样式为1000，如 div .test1 #555 = 1 + 10 +100 = 111。如果加上！import，权重为最高。
4. box-sizing的各个值（对盒模型的理解）

	答：①content-box: 修改width/height的时候只修改content的width/height②padding-box: 修改width/height的时候修改content+padding的width/height③border-box:修改width/height的时候修改content+padding+border的width/height④inherit：从父元素里继承box-sizing
5. float有什么影响，如何去除float的影响

	答：最常用的.clear::after{display:table;content:'';clear:both;*zoom:1}
6. 描述下BFC

	答：块级格式化上下文，BFC子元素不会影响外部元素，可以把BFC看成一个盒子，盒子里的东西不能影响外面的东西。触发BFC的条件：满足以下任意一项即可：①body根元素②float不为None③position：absolute/fixed④overflow:hidden/auto/scoll⑤display:inline-block/table-cells/flex
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

---

## JavaScript
1. JavaScript基本类型说一下
	
	答：ES6之前为5种基本类型：String，Number，Boolean，NULL，Undefined,ES6之后加多一种Symbol（独一无二的值）
2. 什么是原型，原型链

	答：①原型是构造函数的一个实例（ new XXX() ）,XXX.prototype就是原型对象，在默认情况下，所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype属性所在的函数（XXX），原型对象的用途是为每个实例对象存储共享的方法和属性。②原型链指针__proto__，该指针指向上一层的原型对象，而上一层的原型对象的结构依然类似，这样利用__proto__一直指到Object的原型对象，而原型对象Object.prototype.__proto__ = null表示原型链的最顶端，这样就构成了原型链，同时也解释了为什么所有的javascript对象都具有Object的基本方法。
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
	
	答：①函数作用域：函数内的区域，就是这个函数的作用域，变量和函数在这个区域都可以访问操作。最外层函数外的区域叫全局作用域，函数内的区域叫局部作用域。②变量作用域：变量所在的区域，就是这个变量的作用域，变量在这个区域内可以被访问操作。在全局作用域上定义的变量叫全局变量，在函数内定义的变量叫局部变量。③全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。 当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找， 直至全局函数，这种组织形式就是作用域链。
9. This对象的理解

	答：this总是指向函数的直接调用者（而非间接调用者）；如果有new关键字，this指向new出来的那个对象；在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；
10. eval做什么的
	
	答：它的功能是把对应的字符串解析成JS代码并运行。不推荐使用，非常耗性能
11. 什么是window对象? 什么是document对象?

	答：window对象指浏览器打开的窗口，document对象是HTML文档的一个只读引用，是window对象的一个属性。
12. null和underfined的区别

	答：①null指空的对象，表示是一个没有任何属性和方法的对象，undefined指未定义值，表示此处应该有一个值，但是还没有定义。②undefined不是有效的json值，null是③type null 是Object ，type undefiend 是 undefined ④Number(null) 是0，Number（undefined） 是NaN。
13. 如何判断一个对象是否属于某个类？

	答：①实例 instanceof  类名② 实例.__proto__ == 类名.prototype ③ 实例.__proto__.constructor == 类名
14. new操作符具体干了什么

	答：①创建一个新对象 ②将构造函数的作用域指向新对象（所以this指向了该对象）③执行构造函数中的代码（赋予新对象属性）④返回该对象
15. 说下对JSON的了解

	答：json(javascript object notation)全称是javascript对象表示法，它是一种数据交换的文本格式，而不是一种编程语言，用于读取结构化数据。2001年由Douglas Crockford提出，目的是取代繁琐笨重的XML格式。它与JS对象表示法的区别是，json的键名也必须加引号，字符串必须使用双引号表示，不能使用单引号。数值必须以十进制表示，且不能使用NaN和Infinity。
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
	存在即必然吧？
30. JavaScript 怎么实现一个类？怎么实例化这个类?

	答：请看js第六题，六种方法
31. 说下深拷贝、浅拷贝的理解
	
	答：JS 中的浅拷贝与深拷贝，只针对复杂数据类型（`Object`，`Array`）的复制问题。浅拷贝是拷贝引用，拷贝后的引用都是指向同一个对象的实例，彼此之间的操作会互相影响（赋值就是一种浅拷贝）。深拷贝在堆中重新分配内存，并且把源对象_所有属性_都进行新建拷贝，以保证深拷贝的对象的引用图不包含任何原有对象或对象图上的任何对象，即拷贝后的对象与原来的对象是完全隔离，互不影响。（如Object.assign(),JSON.parse(),JSON.stringify()）

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