/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 13:42:10
 * @LastEditTime: 2019-09-16 13:59:40
 * @LastEditors: Please set LastEditors
 */

// Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数

getJSON('/posts.json').then(function (posts) {
  // ...
}).catch(function (error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
// 上面代码中，getJSON方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；
// 如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。
// 另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获。

p.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
  .then(null, (err) => console.log("rejected:", err));

// 一个栗子
let p = new Promise(function (resolve, reject) {
  throw new Error('error')
})
p.catch(error => {
  console.log(error)
})
// 等价于一下两种写法
// 写法一
const promise = new Promise(function (resolve, reject) {
  try {
    throw new Error('test');
  } catch (e) {
    reject(e);
  }
});
promise.catch(function (error) {
  console.log(error);
});

// 写法二
const promise = new Promise(function (resolve, reject) {
  reject(new Error('test'));
});
promise.catch(function (error) {
  console.log(error);
});

// 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
const promise = new Promise(function (resolve, reject) {
  resolve('ok');
  throw new Error('test');
});
promise
  .then(function (value) { console.log(value) })
  .catch(function (error) { console.log(error) });
// ok

// Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
getJSON('/post/1.json').then(function (post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  // some code
}).catch(function (error) {
  // 处理前面三个Promise产生的错误
});

// 一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
// bad
promise
  .then(function (data) {
    // success
  }, function (err) {
    // error
  });

// good
promise
  .then(function (data) { //cb
    // success
  })
  .catch(function (err) {
    // error
  });

// 一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。
// catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
Promise.resolve()
.catch(function(error) {
  console.log('oh no', error);
})
.then(function() {
  console.log('carry on');
});
// carry on
// 上面的代码因为没有报错，跳过了catch方法，直接执行后面的then方法。此时，要是then方法里面报错，就与前面的catch无关了。
