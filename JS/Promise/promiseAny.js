function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        promises = Array.isArray(promises) ? promises : []
        let len = promises.length
        // 用于收集所有 reject 
        let errs = []
        // 如果传入的是一个空数组，那么就直接返回 AggregateError
        if (len === 0) return reject(new AggregateError('All promises were rejected'))
        promises.forEach((promise) => {
            try {
                promise.then(value => {
                    resolve(value)
                }, err => {
                    len--
                    errs.push(err)
                    if (len === 0) {
                        reject(new AggregateError(errs))
                    }
                })
            } catch (e) {
                console.log(e);

            }
        })
    })

}


let a = new Promise((res, rej) => {
    rej("a")
})
let c = new Promise((res, rej) => {
    res("c")
    
})
let b = new Promise((res, rej) => {
    setTimeout(() => {
        rej("B")
    }, 100)
})

promiseAny([a, b, c]).then(res => {
    console.log(res)
})