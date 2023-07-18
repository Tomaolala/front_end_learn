function transFormUrl(url) {
  const ans = {};
  let arr = url.split("?")[1]?.split("&");
  for (const key of arr) {
    let res = key.split("=");
    console.log(res);
    ans[res[0]] = res[1];
  }
  return ans;
}
const url =
  "https://cn.bing.com/search?q=%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E5%85%88%E6%89%A7%E8%A1%8Cjs%E6%96%87%E4%BB%B6&qs=n&form=QBRE&sp=-1&lq=0&pq=%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E5%85%88%E6%89%A7%E8%A1%8Cjs%E6%96%87%E4%BB%B6&sc=0-11&sk=&cvid=F3C1EA9644604BEFBF0A49A3E9E89B78&ghsh=0&ghacc=0&ghpl=";
console.log(transFormUrl(url));
