/*
 * @Descripttion: 图片懒加载
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-13 10:21:13
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-13 14:12:12
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

function debunce(fn, delay) {
    var timmer = null
    return function () {
        var ctx = this
        var args = arguments
        if (timmer) {
            clearTimeout(timmer)
        }
        timmer = setTimeout(function () {
            fn.apply(ctx, args)
        }, delay);
    }
}

function debunce_finishi(fn, delay) {
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

function lazy_load() {
    var viewHight = window.innerHeight || document.documentElement.clientHeight
    var imgs = document.getElementsByTagName('img')
    var count = 0
    for (var i = count; i < imgs.length; i++) {
        var distance = viewHight - imgs[i].getBoundingClientRect().top
        if (distance > 0 && !imgs[i].src) {
            imgs[i].src = imgs[i].getAttribute('data-src')
            count = i + 1
        }
    }
}

window.addEventListener("scroll", debunce_finishi(lazy_load, 1000), false)