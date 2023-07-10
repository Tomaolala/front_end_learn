/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        let res = new Array(functions.length), length = functions.length;
        functions.forEach(item => {
            try {
                item().then(r => {
                    res.push(r)
                })
            } catch (e) {
                console.log(e);
            }
        })
    })
};

let a = new Promise((res, rej) => {
    res("a")
})
let b = new Promise((res, rej) => {
    setTimeout(() => {
        res("B")
    }, 100)
})

let res = promiseAll([() => a, () => b]).then(res => console.log(res))
console.log(res);