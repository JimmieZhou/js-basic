/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 17:42:09
 * @LastEditTime: 2019-09-06 17:43:49
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  a: 1
}
// or
exports.a = 1


// 对于 CommonJS 和 ES6 中的模块化的两者区别是：

// 1)前者支持动态导入，也就是 require(${path}/xx.js)，后者目前不支持，但是已有提案

// 2)前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。
// 而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响

// 3)前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。
// 但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化

// 4)后者会编译成 require/exports 来执行的