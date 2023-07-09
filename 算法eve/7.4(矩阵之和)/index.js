
testar.forEach(item => {
    console.log(item.length);
})
/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
    for (let i in nums) {
        nums[i] = nums[i].sort((a, b) => a - b)
    }
    let num = 0
    for (let i = 0; i < nums[0].length; i++) {
        let sum = 0
        for (let u = 0; u < nums.length; u++) {
            if (sum < nums[u][i]) {
                sum = nums[u][i]
            }
        }
        num += sum
    }
    return num
};
