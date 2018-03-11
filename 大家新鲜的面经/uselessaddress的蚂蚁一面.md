### 一面
3月7日上午。一个小时的样子，两道编程题+一些很基础的问题
内推的是体验技术部，所以上来先做编程题？

--- 
// 给你一个单向链表头，返回链表最中间的一个节点

思路: 两个指针，一个指针向后移动两个节点，另一个指针向后移动一个节点
当第一个指针到最后时，第二个指针到中间。
当时写的代码如下
```
function get(head) {
  let point1 = head
  let point2 = head
  while(point2 !== null || point2.next !== null){
    point1 = point1.next
    point2 = point2.next.next
  }
  return point1.value
}
```
--- 
// 给你一个数组，最大长度 5000000（4999999），里面每个数的范围 1 ~ 2^31-1
// 其中，里面的数字两两相等 ，只有一个数字是落单的，求落单的数字是多少

比如 1111222 这时候落单的就是2
我想的很简单，直接使用对象判断元素是否存在，存在则删除该元素，不存在则添加该元素
这样最后对象中剩下的一定是那个落单的元素

这是当时现场写的代码
```
function single(arr) {
  let obj = {}
  let ans
  for(let i = 0; i <= arr.length; i++){
  	if(obj[`${arr[i]}-element`]){ //判断元素是否存在在对象中
    	delete obj[`${arr[i]}-element`]  //存在则删除
    } else {
        obj[`${arr[i]}-element`] = arr[i]  //不存在则添加
    }
  }
  for(let element in obj){  //获取最后存在的落单元素
  	ans = obj[element]
  }
  return ans
}

```

面试官提出了两点优化，首先是直接使用Object.keys()返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）

而不是使用上面的for...in
还有一点就是直接用arr[i]做key值，然后用true/false去表示添加/删除

最后问到如何优化到O（1）的空间复杂度
没答上来，面试官说是使用异或运算
 //2^1^3^1^2^3^5=(2^2)^(1^1)^(3^3)^5=0^0^0^5=5 
--- 
this 的绑定方法，简单问了输出啥，怎么显示绑定

```
var obj = {
  propA: 'foo',
  doSth: function() {
    console.log(this.propA);
  }
}

obj.doSth();

var doSth = obj.doSth;
doSth();
```

--- 

浏览器输入url发生了啥

--- 
http方法

---

跨域

---

let 和 var 的区别

--- 
最后我在问了下其部门的情况，也就是体验科技部，说到基本上是造轮子的时间比较多，也就是antd、antv、egg等，业务大多是内部业务