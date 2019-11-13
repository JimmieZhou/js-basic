/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 17:35:14
 * @LastEditTime: 2019-10-31 15:32:30
 * @LastEditors: jimmiezhou
 */

// 当加法运算时候，其中一方是字符串类型，就会把另一个转为字符串类型
// 对于其他运算，只要一方是数字，那么另一方就会转为数字。
// 数组与数组相加得到的是一个字符串
var a = 1 + "1"; // '11'
var b = 1 * "3"; // 3
var c = "2" * "3"; // 6
var d = "3" * "b"; // NaN
var e = "b" * "c"; // NaN
var f = "a" * "a"; // NaN
4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN
// 数组相加
[1,2] + [4,5] === '1,24,5'
[] + [] === ''
[1,4] + [] === '1,4'
"1,2"+"2,3" === "1,22,3"
4 + [1,2,3] // "41,2,3"

// 对于加好需要格外注意
+ '1' // 1
+ '' // 0
+ 'a' // NaN
'a' + + 'b' // 'aNaN'

true + true // 2
