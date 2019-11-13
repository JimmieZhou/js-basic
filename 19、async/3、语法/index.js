/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 10:19:10
 * @LastEditTime: 2019-09-17 10:28:18
 * @LastEditors: Please set LastEditors
 */

//  返回Promise对象
// async函数内部return语句返回的值，会成为then方法回调函数的参数。
const f = async () => {
  return 'hello world'
}
f().then((v) => {
  console.log(v)
})
// "hello world"

// async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
const f = async () => {
  throw new Error('出错了')
}
f().then(v =>
  console.log(v)
  , e =>
    console.log(e)
)
// "hello world"

