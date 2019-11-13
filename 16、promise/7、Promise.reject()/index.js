/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 14:36:21
 * @LastEditTime: 2019-09-16 14:37:37
 * @LastEditors: Please set LastEditors
 */

// Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了