/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-12 13:57:55
 * @LastEditTime: 2019-10-31 15:43:16
 * @LastEditors: jimmiezhou
 */

//  转为boolean
// 除了 0、-0、""、undefined、null、false、NaN以外的，都转为true

// 对象转基本类型
// 如果转成 string，先调用 toString 再调用 valueOf，否则先 valueOf 再 toString
let a = {
  valueOf() {
    return 10
  },
  toString(){
    return 100
  }
}
'' + a // "10"
// 当然你也可以重写 Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
  [Symbol.toPrimitive]() {
    return 2;
  }
}
1 + a // => 3
'1' + a // => '12'

