### 阿里一面
3.7
- 自我介绍
- 项目介绍和难点（balabala说了一大堆）
- 根据我项目中说到的一些点，问了一些node和操作系统
    - 操作系统问了线程和进程的区别、进程的调度算法、进程间如何通信
    - node问了下为什么项目中用了多进程（cluster.fork）
- 算法题：已知一棵二叉搜索树的后序遍历，还原一棵树
    - 面试官又问了如何找出左右子树。我说从数组根的节点往左搜，搜到第一个比根小的数字，那个就是左节点了。面试官说较好的是用二分查找。

```javascript
    function find(arr) {
  //二分 arr要查找的数组 des目标值
  // 这里的二分，就是不停地分到一个 因为是二叉搜索树，所以左半部分数组是比目标值小，右半部分比目标值大
  let left = 0,
    right = arr.length - 2,
    des = arr.slice(-1)[0];
    if (des < arr[0]){
        return 0
    }
    if (des > arr.slice(-2,-1)[0]){
        return arr.length - 1
    }
  while (right > left + 1) {
    let index = Math.floor((left + right) / 2);
    if (arr[index] < des) {
      left = index;
    } else {
      right = index;
    }

  }
  return right;
}
function reconstruct(arr) {
    node = {
    value: arr.slice(-1)[0]
  };
  const index = find(arr);
  let leftlength = arr.slice(0, index).length,rightlength=arr.slice(index, -1).length;
    node.left =  leftlength > 0 ?reconstruct(arr.slice(0, index)):null
    node.right = rightlength>0?reconstruct(arr.slice(index, -1)):null
  return node;
}
```

### CVTE笔试
28道不定项选择题+2道编程题
- 选择题大多考基础，有的考得比较细。
- 大题
    - 字符串校验，大概有几个条件1、全是字母或者数字2、至少含有字母或者数字3、6-16位。正则熟的话直接正则写可以了 ```/^([a-zA-Z0-9]){6,16}$/.test(str) && /[a-zA-Z]/.test(str) && /\d/.test(str)```
    - curry函数```var a = function(a,b,c,d){};var b = curry(a); b(1)(2)(3)(4)```，基本上是实现这样的效果
    代码：

```javascript
    function curry(f, length, store_args = []) {
    //length用来存剩下几个参数没输进去
    length = length || f.length;
    return (...args) => {
        store_args.push(...args)
        return length - args.length > 0
        ? curry(f, length - args.length, store_args)
        : f(...store_args);
    };
    }

    const a = (a, b, c, d) =>{
        console.log(a,b,c,d)
    };
    const b = curry(a);
    b(1)(2)(3)(4);
```