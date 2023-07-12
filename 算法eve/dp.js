/**
 * 最大子序列交替和
 */

function maxAlternatingSum(nums){
    let [f,g] =[0,0]
    for(const num of nums){
        [f,g] =[Math.max(g-num,f),Math.max(f+num,g)]
    }
    return g
}


/**
 * 
 * 实际上就是找到前面和后面的最大值与最小值
 * 类似于股票...
 * test
 */

let nums = [4,2,5,3]

console.log(maxAlternatingSum(nums));