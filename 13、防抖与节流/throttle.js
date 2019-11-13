/*
 * @Descripttion: 不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-13 11:24:49
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-13 11:30:02
 */
function throttle(fn, interval) {
    var last = 0
    return function () {
        var ctx = this
        var args = arguments
        var now = +(new Date())
        if (now - last >= interval) {
            last = now
            fn.apply(ctx, args)
        }
    }
}
const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)

window.addEventListener('scroll', better_scroll)