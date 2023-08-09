/**
 * 分发饼干
 */

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const m = g.length,
  n = s.length;
  let count = 0;
  for (let i = 0, j = 0; i < m && j < n; i++, j++) {
    while (j < n && g[i] > s[j]) {
      j++;
    }
    if (j < n) {
      count++;
    }
  }
  return count;
};


/**
 * 最大子序和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

function maxSubArray () {
  let dp  =[ ]
}