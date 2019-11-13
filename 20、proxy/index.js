/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 10:00:09
 * @LastEditTime: 2019-09-16 10:37:09
 * @LastEditors: Please set LastEditors
 */

// Proxy 是 ES6 中新增的功能，可以用来自定义对象中的操作
let p = new Proxy(target, handler);
// `target` 代表需要添加代理的对象
// `handler` 用来自定义对象中的操作

//  Proxy是ES6中新增的方法，用来自定义对象的操作
// 语法：
let proxy = new Proxy(target, handler)
// target：操作的目标对象
// handler：是一个对象，用来自定义操作对象的行为

// 栗子1
let proxy1 = new Proxy({}, {
  set(target, property, value, receiver) {
    console.log(`setting ${property}`)
    return Reflect.set(target, property, value, receiver)
  },
  get(target, property, receiver) {
    console.log(`getting ${property}`)
    return Reflect.get(target, property, receiver)
  }
})
obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2

// 栗子2
let proxy2 = new Proxy({}, {
  get(target, property, receiver) {
    // target：被操作的目标对象
    // property：被操作的目标对象的属性
    console.log(target, property, receiver)
    return 5
  }
})
proxy2.name // 5
proxy2.age // 5

// 栗子3，实现一个数据绑定和监听
let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}
let obj = {
  a: 1
}
let value
let proxy3 = onWatch(obj, (v) => {
  value = v
}, (target, property) => {
  console.log(`get ${property} = ${target[property]}`)
})
proxy3.a = 2
proxy3.a
