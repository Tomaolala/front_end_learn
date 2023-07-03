const arr = [1, 2, 3, 4, 8, 8, 9]

Array.prototype.myReduce = function (cb, initVal) {
    let ans = initVal
    this.forEach(item => {
        ans = cb(ans, item)
    })
    return ans
}

let result =arr.myReduce((pre,cur)=>{
    return pre+cur
},0)

console.log(result);
