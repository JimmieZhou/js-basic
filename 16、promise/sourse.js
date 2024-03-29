/*
 * @Descripttion: promise简易实现
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-10-31 11:29:17
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-04 11:04:41
 */
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  // 定义相关变量
  var that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
  // 定义resolve方法
  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.forEach(cb => cb(that.value))
    }
  }
  // 定义rejected
  function rejected(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.forEach(cb => cb(that.value))
    }
  }
  // 执行fn
  try {
    fn(resolve, rejected)
  } catch (error) {
    rejected(error)
  }
}

// 实现promise实例then方法
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  var that = this
  var state = that.state
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : e => e
  onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }
  if (state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (state === REJECTED) {
    onRejected(that.value)
  }
}
