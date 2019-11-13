
// AMD 是由 RequireJS 提出的
define(['./a', './b'], function(a, b) {
  a.do()
  b.do()
})
define(function(require, exports, module) {
  var a = require('./a')
  a.doSomething()
  var b = require('./b')
  b.doSomething()
})