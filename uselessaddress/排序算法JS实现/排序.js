//冒泡排序
//将第一个元素和第二个元素比较，如果第一个元素大于第二个元素则交换
//接下来是第二个第三个，直到最后一个元素，接下来对剩下的n-1个元素进行上述操作
//O(n^2)复杂度，稳定
function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        let mid = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = mid
      }
    }
  }
  return arr
}

//选择排序，每趟选出当前最大的元素放在右边
//O(n^2)复杂度，不稳定
function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let maxElementIndex =  arr.indexOf(Math.max(...arr.slice(0,arr.length-i)))
    arr[arr.length-i-1] = [arr[maxElementIndex],arr[maxElementIndex] = arr[arr.length-i-1]][0]  // a = [b,b=a][0]
  }
  return arr
}

//归并排序，时间复杂度O(nlogn)
function merge(left,right) {
  let res = []
  while(left.length && right.length){
    if(left[0]>right[0]) { 
      res.push(right.shift())
    } else {
      res.push(left.shift())
    }
  }
  while(left.length){
    res.push(left.shift())
  }
  while(right.length){
    res.push(right.shift())
  }
  return res
}

function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  let middle = Math.floor(arr.length / 2),
      left = arr.slice(0,middle),
      right = arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}

//快速排序,时间复杂度O(nlogn)
function quickSort(arr) {
  if(arr.length<=1)return arr
  let left = [],
      right = []
  for(let i=1;i<arr.length;i++){
    if(arr[i]> arr[0]){ //基准元素选为第一个元素
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left),arr[0],...quickSort(right)]
}

let arr = [1,3,4,2,6,7,8,9,5,0] //从小到大排序
console.log('bubbleSort:'+bubbleSort(arr))

arr = [1,3,4,2,6,7,8,9,5,0] //从小到大排序
console.log('selectionSort:'+selectionSort(arr))

arr = [1,3,4,2,6,7,8,9,5,0] //从小到大排序
console.log('mergeSort: '+mergeSort(arr))

arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48] //从小到大排序
console.log('quickSort: '+quickSort(arr))