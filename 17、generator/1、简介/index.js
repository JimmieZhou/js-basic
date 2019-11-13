/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 15:34:18
 * @LastEditTime: 2019-09-17 10:00:58
 * @LastEditors: Please set LastEditors
 */

// Generator函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
// Generator 函数除了状态机，还是一个遍历器对象生成函数。
// 返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
// 形式上，Generator 函数是一个普通函数，但是有两个特征。
// 一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
// 上面代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），
// 即该函数有三个状态：hello，world 和 return 语句（结束执行）。

hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }

// 总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。
// 以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
// value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。



