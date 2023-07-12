## Html5 新增哪些标签

1.nav 标签
2.header 标签
3.main 标签
4.aside 标签
5.section 标签
6.article 标签
7.figure 标签
8.footer 标签

# 有哪些语义化标签

h1-h6 ：标题标签 标题一共 6 个级别，一级标题最重要，仅次于 title，是搜索引擎主要解析的内容，一般 1-3 级比较常用，4-6 级使用较少
标题 h1-h6 和段落标签 p 都属于块元素（block element），特点是都独占一行
除了块标签还有行内标签，例如 strong、br、q、em 等,分别表示加粗、换行、引用和斜体
header ：常用于表示网页头部
main ：网页主体，通常只有一个
footer ：网页底部
navy ：网页导航栏
aside ：网页侧边栏

## 哪些方法可以使元素消失

1. overflow
2. opacity
3. visibility
4. display
5. position
6. clip/clip-path
7. z-index

## 浏览器缓存

控制强制缓存的字段分别是 Expires 和 Cache-Control，其中 Cache-Control 优先级比 Expires 高。

cache-control
public：所有内容都将被缓存（客户端和代理服务器都可缓存）

            private：所有内容只有客户端可以缓存，Cache-Control的默认取值


            no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定


            no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存


            max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效
https://juejin.cn/post/6844903593275817998


## 浏览器存储数据的方法

## cookie是怎么存储数据的


## slice ,splice
slice将截取到的元素返回到新数组里面去

splice 改变原数组，添加，返回替换数组内的元素

