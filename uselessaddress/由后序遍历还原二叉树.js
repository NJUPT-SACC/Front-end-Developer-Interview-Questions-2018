
//二叉搜索树的中序遍历就是从小到大排序的
//所以题目就变为了根据二叉树的中序和后序还原二叉树
//leetcode 106
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function(inorder, postorder) {
  if(inorder.length === 0 || postorder.length === 0){
    return []
  }
  let lastElement = postorder.slice(-1)[0],
  midIndex = inorder.indexOf(lastElement),
  inorderLeft = inorder.slice(0,midIndex),
  inorderRight = inorder.slice(midIndex+1),
  postorderLeft = postorder.slice(0,midIndex),
  postorderRight = postorder.slice(midIndex,-1)

  let midElement = new TreeNode(inorder[midIndex])
  if(inorderLeft.length === 0 && inorderRight.length !== 0){
    midElement.right = buildTree(inorderRight,postorderRight)
    return midElement
  }else if(inorderRight.length === 0 && inorderLeft.length !== 0){
    midElement.left = buildTree(inorderLeft,postorderLeft)
    return midElement
  }else if(inorderLeft.length === 0 && inorderRight.length === 0){
    return midElement
  }
  midElement.left = buildTree(inorderLeft,postorderLeft)
  midElement.right = buildTree(inorderRight,postorderRight)
  return midElement
};

console.log(buildTree([1,2,3,4,5,6,7],[1,3,2,5,7,6,4]))
console.log(buildTree([9,3,15,20,7],[9,15,7,20,3]))
console.log(buildTree([],[]))
console.log(buildTree([2,1],[2,1]))