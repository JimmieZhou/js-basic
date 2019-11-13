/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 11:04:55
 * @LastEditTime: 2019-09-16 17:10:14
 * @LastEditors: Please set LastEditors
 */

// 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
// 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
// Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

// Promise对象有以下两个特点。
// （1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
// 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
// （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，
// 只有两种可能：从pending变为fulfilled和从pending变为rejected。
// 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

// Promise也有一些缺点。
// 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
// 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
// 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

// 基本用法
const promise = new Promise(function (resolve, reject) {
  if (/* 异步操作成功 */ true) {
    resolve(value);
  } else {
    reject(error);
  }
});
promise.then(function (value) {
  // success
}, function (error) {
  // failure
});

// 一个简单的栗子
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}
timeout(100).then(value => {
  console.log(value)
})

// promise创建后就会立即执行
let promise = new Promise(function (resolve, reject) {
  console.log('promise')
  resolve()
})
promise.then(function () {
  console.log('then')
})
console.log('hi')
// promise
// hi
// then

// 一个加载图片的栗子
function loadImg(url) {
  return new Promise(function (resolve, reject) {
    const img = new Image()
    img.src = url
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject(new Error())
    }
  })
}

// 如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。
// reject函数的参数通常是Error对象的实例，表示抛出的错误；
// resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例
let p1 = new Promise(function (resolve, reject) {
})
let p2 = new Promise(function (resolve, reject) {
  resolve(p1)
})
// 这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。
// 如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；
// 如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('fail'))
  }, 3000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(p1)
  }, 1000)
})
p2.then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
// Error: fail

// resolve或reject并不会终结 Promise 的参数函数的执行
new Promise((resolve,reject)=>{
  resolve(1)
  console.log(2)
}).then(value=>{
  console.log(value)
})
// 2
// 1
// 上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来

// 一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。
// 所以，最好在它们前面加上return语句，这样就不会有意外。
new Promise((resolve,reject)=>{
  return resolve(1)
}).then(value=>{
  console.log(value)
  console.log(2)
})