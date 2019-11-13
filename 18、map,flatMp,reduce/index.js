const arr = [1, 2, 3, 4, 5]
const arr2 = [1, [2], 3, 4, 5]
// map 返回一个新数组
const map = arr.map((curValue, index, arr) => {
  return curValue * 2
})

// flatMap
const flatMap = arr2.flatMap((curValue, index, arr) => {
  return curValue
}) // [1,2,3,4,5]

// 彻底降维度
const flattenDeep = (arr) => Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], []) : [arr]
flattenDeep([1, [[2], [3, [4]], 5]]) // [1, 2, 3, 4, 5]

// reduce
[1, 2, 3, 4, 5].reduce((total, curValue, curIndex, arr) => {
  return total + curValue
}, 10) // 25