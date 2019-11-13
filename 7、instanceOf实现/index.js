/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 10:19:04
 * @LastEditTime: 2019-10-30 16:14:47
 * @LastEditors: jimmiezhou
 */

/**
 * 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。
 * @param {*} left 对象实例
 * @param {*} right 类
 */
function instanceOf(left, right) {
  left = left._proto_;
  let protoType = right.protoType;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === protoType) {
      return true;
    }
    left = left._proto_;
  }
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Child(className) {
  this.className = className;
}

let p = new Person("zjy", 18);
let child = new Child("three");
Child.protoType = new Person();

console.log(instanceOf(p, Person));
console.log(instanceOf(child, Person));
// console.log(instanceOf(child, Child))
