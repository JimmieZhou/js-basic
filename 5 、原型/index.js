/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 17:52:58
 * @LastEditTime: 2019-10-30 16:01:00
 * @LastEditors: jimmiezhou
 */

// 每个函数都有 prototype 属性，除了 Function.prototype.bind()，该属性指向原型。

// 每个对象都有 __proto__ 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 [[prototype]]，
// 但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 _proto_ 来访问。

// 对象可以通过 __proto__ 来寻找不属于该对象的属性，__proto__ 将对象连接起来组成了原型链。
function foo(){
    console.log('foo')
}
foo.prototype === new foo().__proto__ // true