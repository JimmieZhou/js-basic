/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 15:40:52
 * @LastEditTime: 2019-09-16 15:49:06
 * @LastEditors: Please set LastEditors
 */
// yield表达式本身没有返回值，或者说总是返回undefined。
// next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

function* f() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    if (reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }
