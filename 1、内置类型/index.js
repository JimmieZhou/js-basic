/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 13:40:20
 * @LastEditTime: 2019-10-31 15:08:26
 * @LastEditors: jimmiezhou
 */

// 总共7种内置类型：6种基本数据类型和对象
// 6种基本数据类型：number、string、boolean、undefined、nulll、symbol
// NaN也为number类型，NaN不等于自身
typeof NaN // number
NaN === NaN // false

// 对象的引用类型，在运用中会涉及到深拷贝和浅拷贝的问题
let obj = {
  a: 1
}
let obj2 = obj
obj2.a = 2
obj.a // 2


function test(person) {
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }
  return person
}
const p1 = {
  name: 'yck',
  age: 25
}
const p2 = test(p1)
console.log(p1) // -> ? 
console.log(p2) // -> ?


