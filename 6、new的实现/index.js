/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 10:08:55
 * @LastEditTime: 2019-10-30 16:09:53
 * @LastEditors: jimmiezhou
 */

//（1）新生成了一个对象
//（2）链接到原型
//（3）绑定 this
//（4）返回新对象

function create() {
  // 1、创建一个新对象
  let obj = {};
  // 2、链接到原型
  let constructor = [].shift.call(arguments); // 获取构造函数
  obj.__proto__ = constructor.prototype;
  // 3、绑定this
  let result = constructor.apply(obj, arguments);
  // 4、返回这个对象
  return typeof result === "object" ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person = create(Person, "zjy", "18");
console.log(person.name, person.age);

// 对于new来说，还需要了解优先级
function Foo() {
  return this;
}
Foo.getName = function() {
  console.log("1");
};
Foo.prototype.getName = function() {
  console.log("2");
};

new Foo.getName(); // -> 1
new Foo().getName(); // -> 2
// 相当于：new Foo()的优先级大
new (Foo.getName())(new Foo()).getName();
