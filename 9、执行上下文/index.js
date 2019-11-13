/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 15:07:20
 * @LastEditTime: 2019-09-12 15:20:31
 * @LastEditors: Please set LastEditors
 */

// 全局上下文
// 函数上下文
// eval上下文

b() // call b
console.log(a) // undefined

var a = 'Hello world'

function b() {
  console.log('call b')
}
// 因为函数和变量提升
// 在生成执行上下文时，会有两个阶段。第一个阶段是创建的阶段（具体步骤是创建 VO），
// JS 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，
// 变量只声明并且赋值为 undefined，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。

// 在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升
b() // call b second

function b() {
  console.log('call b fist')
}
function b() {
  console.log('call b second')
}
var b = 'Hello world'