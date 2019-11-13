/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 17:20:12
 * @LastEditTime: 2019-10-31 11:08:48
 * @LastEditors: jimmiezhou
 */

// call,apply,bind
// 相同：都是更改this的指向
// 不同：call和apply基本类似，唯一不同就是传参不一样，call的参数是参数列表，apply是数组。并且两者都会执行函数
// bind不会执行函数，执行结果会返回一个函数

// call的实现
Function.prototype.myCall = function(context) {
  var context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
};

// apply的实现
Function.prototype.myApply = function(context) {
  var context = context || window;
  context.fn = this;
  var result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

// bind的实现
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  var _this = this;
  var args = [...arguments].slice(1);
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};

// 调用
function Person(...args) {
  console.log(...args, this.value);
}
var obj = {
  value: 28
};
Person.myCall(obj, "zjy");
Person.myApply(obj, ["zjy"]);
Person.myBind(obj, "zjy")();
