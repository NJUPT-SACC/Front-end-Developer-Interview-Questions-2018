## 单行文本

```
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
```
还需要加width来兼容部分浏览器
white-space:nowrap;表示文本不会还行
text-overflow 属性规定当文本溢出包含元素时发生的事情。
三个属性：
1. clip会直接剪裁文本
2. ellipsis会使用省略符号表示被剪裁的文本
3. string可以指定字符串来表示被修建的文本

## css自动换行

```
word-wrap: break-word;
```
## 多行文本
```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```
适用范围：
因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；
注：
1. -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
2. display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
3. -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。