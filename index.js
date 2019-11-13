/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-10-31 11:37:32
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-05 10:47:02
 */
function myNew() {
  var obj = {};
  // Arguments对象有一个callee 属性，可以获取当前函数，这个属性在arguments的第一个位置 ，
  // 所以 [].shift.call(arguments) 将arguments转为数组后调用shift, 拿到第一个元素 callee
  var constructor = [].shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  var result = constructor.apply(obj, arguments);
  return typeof obj === "object" ? result : obj;
}

function myInstanceOf(left, right) {
  var prototype = right.prototype;
  left = left.__proto__;
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === prototype) {
      return true;
    }
    left = left.__proto__;
  }
}

// 实现浅拷贝
function myClone(target) {
  if (typeof target === "object") {
    var result = Array.isArray(target) ? [] : {};
    for (key in target) {
      result[key] = target[key];
    }
    return result;
  }
  return target;
}

// 实现深拷贝
function deepClone(target, map = new WeakMap()) {
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

function debunce(func, wait = 1000, immediate) {
  var timmeoutId = 0;
  return function () {
    var ctx = this;
    var args = arguments;
    if (timmeoutId) {
      clearTimeout(timmeoutId);
    }
    if (immediate) {
      var callNow = !timmeoutId;
      timmeoutId = setTimeout(function () {
        timmeoutId = 0;
      }, wait);
      if (callNow) {
        func.apply(ctx, args);
      }
    } else {
      timmeoutId = setTimeout(function () {
        func.apply(ctx, args);
      }, wait);
    }
  };
}

function throttle(func, wait = 1000) {
  var timmeoutId = 0;
  return function () {
    var ctx = this;
    var args = arguments;
    if (!timmeoutId) {
      timmeoutId = setTimeout(function () {
        timmeoutId = 0;
        func.apply(ctx, args);
      }, wait);
    }
  };
}

function myCall(context) {
  var ctx = context || window;
  ctx.fn = this;
  var args = [...arguments].slice(1);
  var result = ctx.fn(...args);
  delete ctx.fn;
  return result;
}

function myApply(context) {
  var ctx = context || window;
  ctx.fn = this;
  var result;
  if (arguments[1]) {
    result = ctx.fn(...arguments[1]);
  } else {
    result = ctx.fn();
  }
  delete ctx.fn;
  return result;
}

function myBind(context) {
  if (typeof this !== "function") {
    throw new Error("error");
  }
  var ctx = context || window;
  var _this = this;
  var args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(ctx, args.concat(...arguments));
  };
}

// 组合继承
function Parent(value) {
  this.value = value;
}
Parent.prototype.getValue = function () {
  console.log(this.value);
};
function Son(value) {
  Parent.call(this, value);
}
Son.prototype = new Parent();
Son.prototype.constructor = Son;

var son = new Son(1);
son.getValue();
son instanceof Parent;

// 寄生组合继承
function Parent(value) {
  this.value = value;
}
Parent.prototype.getValue = function () {
  console.log(this.value);
};
function Son(value) {
  Parent.call(this, value);
}
Son.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Son,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
var son = new Son(1);
son.getValue();
son instanceof Parent;

// 简易实现promise
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
function MyPromise(fn) {
  var that = this
  that.state = PENDING
  that.value = null
  that.resoledCallbacks = []
  that.rejectedCallbacks = []
  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resoledCallbacks.forEach(cb => cb(that.value))
    }
  }
  function rejected(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.rejectedCallbacks.forEach(cb => cb(that.value))
    }
  }
  try {
    fn(resolve, rejected)
  } catch (error) {
    rejected(error)
  }
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  var that = this
  var state = that.state
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : e => e
  onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e }
  if (state === PENDING) {
    that.resoledCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }
  if (state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (state === rejected) {
    onRejected(that.value)
  }
}

// 同时插入10000条数据不卡顿
setTimeout(() => {
  var total = 10000
  var once = 20
  var times = total / once
  var ul = document.querySelector('ul')
  var countOfRender = 0
  function add() {
    var fragment = document.createDocumentFragment()
    for (var i = 0; i < once; i++) {
      var li = document.createElement('li')
      li.innerText = Math.floor(Math.random() * total)
      fragment.append(li)
    }
    ul.append(fragment)
    countOfRender++
  }
  function loop() {
    if (countOfRender < times) {
      requestAnimationFrame(add)
    }
  }
  loop()
}, 0);
