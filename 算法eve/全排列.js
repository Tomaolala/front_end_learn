// 回溯算法

function permute(nums) {
  let res = []; 
  let used =[ ]
  let path = [];
  bt(n,used)
  function bt(n, used) {
    //结束条件
    if(path.length===nums.length){
        res.push(Array.from(path))
        return
    }
    // used 存储
    for (let i = 0; i < nums.lenth; i++) {
      if (used[i]) return;
      path.push(n[i]);
      used[i] = true;
      bt(n, used);
      used[i] = false;
      path.pop();
    }
  }
}
