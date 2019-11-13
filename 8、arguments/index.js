/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 15:30:12
 * @LastEditTime: 2019-09-06 15:45:49
 * @LastEditors: Please set LastEditors
 */

/**
 * arguments：函数内部的本地变量
 * 属性包括：
 * callee — 指向当前函数的引用
 * length — 实际传递的参数个数
 * properties-indexes (字符串类型的整数) 属性的值就是函数的参数值(按参数列表从左到右排列)。 
 * properties-indexes内部元素的个数等于arguments.length. properties-indexes 的值和实际传递进来的参数之间是共享的。
 */

/**
 * arguments.callee
 */
function n(i) {
  return i < 2 ? 1 : i * arguments.callee(i - 1)
  // 完全等价于
  // return i < 2 ? 1 : i * n(i - 1)
}

/**
 * arguments.length
 */
function getParamNum(a, b, c) {
  return arguments.length
}
getParamNum(1, 2) // 2

/**
 * arguments[]
 */
function setValue(a, b, c, d) {
  arguments[2] = 10
  console.log(c) // 10
  console.log(d) // undefined
}
setValue(1, 2, 3)