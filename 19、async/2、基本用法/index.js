/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 10:16:24
 * @LastEditTime: 2019-09-17 10:17:50
 * @LastEditors: Please set LastEditors
 */

// async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
// 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});