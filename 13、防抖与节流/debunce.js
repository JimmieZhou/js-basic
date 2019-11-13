/*
 * @Descripttion: 防抖的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认最后一次。
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-13 11:18:03
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-13 11:32:33
 */
function debunce(fn, delay) {
    var timmer = null
    return function () {
        var ctx = this
        var args = arguments
        if (timmer) clearTimeout(timmer)
        timmer = setTimeout(function () {
            fn.apply(ctx, args)
        }, delay);
    }
}
const better_scroll = debunce(() => console.log('触发了滚动事件'), 1000)

window.addEventListener('scroll', better_scroll)