/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 14:05:19
 * @LastEditTime: 2019-09-16 17:53:23
 * @LastEditors: Please set LastEditors
 */

// Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
const p = Promise.all([p1, p2, p3]);
// p的状态由p1、p2、p3决定，分成两种情况。
// （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
// （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

// 生成一个Promise对象的数组
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});
Promise.all(promises).then(function (posts) {
  // ...
}).catch(function (reason) {
  // ...
});
// 上面代码中，promises是包含 6 个 Promise 实例的数组，只有这 6 个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。

const databasePromise = connectDatabase();
const booksPromise = databasePromise
  .then(findAllBooks);
const userPromise = databasePromise
  .then(getCurrentUser);
Promise.all([
  booksPromise,
  userPromise
])
.then(([books, user]) => pickTopRecommendations(books, user));
// 上面代码中，booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommendations这个回调函数。
// 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
.then(result => result)
.catch(e => e);
const p2 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
.then(result => result)
.catch(e => e);
Promise.all([p1, p2])
.then(result => console.log(result))
.catch(e => console.log(e));
// ["hello", Error: 报错了]