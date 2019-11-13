/*
 * @Descripttion: 整合防抖和节流函数
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-13 11:37:19
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-13 11:41:55
 */
function debunce_finish(fn, delay) {
    var timmer = null
    var last = 0
    return function () {
        var ctx = this
        var args = arguments
        var now = +(new Date())
        if (now - last >= delay) {
            last = now
            fn.apply(ctx, args)
        } else {
            clearTimeout(timmer)
            timmer = setTimeout(function () {
                last = now
                fn.apply(ctx, args)
            }, delay);
        }
    }
}
const better_scroll = debunce_finish(() => console.log('触发了滚动事件'), 1000)

window.addEventListener('scroll', better_scroll)