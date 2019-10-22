/*
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
      let stack = [];
      let res = [];
      while (true) {
         if(root!==null) {
            stack.push(root);
            root = root.left;
         } else {
            if(!stack.length) break;
            root = stack.pop();
            res.push(root.val);
            root= root.right;
         }
      }
      return res;
  
};