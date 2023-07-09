// 闭包 防抖
const debounce = (fn, t) => {
    let timer
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, t);
    }
}

const cl = () => {
    console.log("kk");
}

const transform = debounce(cl, 1000)
// transform()

// 模拟点击
setInterval(transform,500)