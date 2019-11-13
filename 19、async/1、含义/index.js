/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-16 15:53:18
 * @LastEditTime: 2019-09-17 10:15:51
 * @LastEditors: Please set LastEditors
 */

// async 函数是什么？一句话，它就是 Generator 函数的语法糖。

const fs = require('fs');
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};
const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

// 上面代码的函数gen可以写成async函数，就是下面这样。
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
// 一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。

// async函数对generator的改进主要体现在四个方面：
// （1）内置执行器。
// Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，
// 与普通函数一模一样，只要一行。
// （2）更好的语义。
// async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
// （3）返回值是 Promise。
// async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。


