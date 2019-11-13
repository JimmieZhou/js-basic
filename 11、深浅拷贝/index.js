/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 10:47:56
 * @LastEditTime: 2019-10-31 13:38:19
 * @LastEditors: jimmiezhou
 */

// 对象的赋值出现的问题（将一个对象赋值给一个变量，相当于是两者引用的同一个引用地址，其中一个改变，另一个就会改变）
let obj = {
  a: 10
};
let obj2 = obj;
obj2.a = 100;
console.log(obj.a); // 100

// 定义：
// 简单来说，有两个对象 A 和 B，B = A，当你修改 A 时，B 的值也跟着发生了变化，这时候就叫浅拷贝。如果不发生变化，就叫深拷贝。
// 浅拷贝：
// 创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。
// 如果属性是基本类型，拷贝的就是基本类型的值，
// 如果属性是引用类型，拷贝的就是内存地址 ，
// 所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

// 深拷贝
// 将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

// 浅拷贝
// 方法一：通过Object.assign实现
let obj3 = {
  name: "hello"
};
let obj4 = Object.assign({}, obj3);
console.log(obj4);

// 方法二：使用spread(...)实现
let obj5 = { ...obj3 };
console.log(obj5);

// 深拷贝
// 方法一：JSON.parse(JSON.stringify(obj))
let obj6 = {
  name: "world",
  obj: {
    info: "haha"
  }
};
let obj7 = JSON.parse(JSON.stringify(obj6));
console.log(obj7);

// 缺点：对象属性有函数，undefined、symbol、对象循环引用无法拷贝
let obj8 = {
  name: undefined,
  age: Symbol(18),
  say: function() {},
  sex: "male"
};
let obj9 = JSON.parse(JSON.stringify(obj8));
console.log(obj9);

// 方法二：使用开源库lodash的deepClone方法

// **************************************************************************************************************

// 手动实现浅拷贝
function clone(target) {
  if (typeof target === "object") {
    var result = Array.isArray(target) ? [] : {};
    for (key in target) {
      result[key] = target[key];
    }
    return result;
  }
  return target;
}

// 1、基础版本的深拷贝，利用递归算法，缺陷：还没有考虑到数组的情况
function deepClone(target) {
  if (typeof target === "object") {
    let cloneTarget = {};
    for (key in target) {
      cloneTarget[key] = deepClone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
// 2、支持数组的深拷贝实现
function deepClone2(target) {
  if (typeof target === "object") {
    let targetClone = Array.isArray(target) ? [] : {};
    for (key in target) {
      targetClone[key] = deepClone2(target[key]);
    }
    return targetClone;
  } else {
    return target;
  }
}
// 3、解决循环引用的问题
// 解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，
// 当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，
// 如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。
function deepClone3(target, map = new WeakMap()) {
  if (typeof target === "object") {
    var result = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, result);
    for (key in target) {
      result[key] = deepClone(target[key], map);
    }
    return result;
  }
  return target;
}
// 注：目前只考虑到了数组和对象的情况
// Object.prototype.toString.call({})
