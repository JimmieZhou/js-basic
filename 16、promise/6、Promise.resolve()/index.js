/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 14:25:32
 * @LastEditTime: 2019-09-16 14:35:23
 * @LastEditors: Please set LastEditors
 */

// 作用：将现有的对象转为Promise对象
const jsPromise = Promise.resolve($.ajax('/whatever.json'));

// Promise.resolve方法的参数分成四种情况。
// （1）参数是一个 Promise 实例
// 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

// （2）参数是一个thenable对象
let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value);  // 42
});
// 上面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出 42

// （3）参数不是具有then方法的对象，或根本就不是对象
// 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。
const p = Promise.resolve('Hello');
p.then(function (s){
  console.log(s)
});
// Hello

// （4）不带有任何参数
// Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
const p = Promise.resolve();
p.then(function () {
  // ...
});
