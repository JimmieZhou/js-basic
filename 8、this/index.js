/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 14:33:31
 * @LastEditTime: 2019-10-30 16:25:25
 * @LastEditors: jimmiezhou
 */

// 普通函数
function foo() {
  console.log(this.a)
}
var a = 1
foo() // 1

const obj = {
  a: 2,
  foo: foo
}
obj.foo() // 2

const c = new foo() // undefined
c.a = 3 // 3

// 箭头函数
function f() {
  return () => {
    return () => {
      console.log(this) // window
    }
  }
}
f()()()

const f1 = () => {
  return this // window
}
f1()
let obj = {
  f1: f1
}
obj.f1() // window


// call，apply，bind改变this的指向
// 对于多次bind的情况
let a = {}
let fn = function () {
  console.log(this)
}
fn.bind().bind(a)() // window
// 可以从上述代码中发现，不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window。