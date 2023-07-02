## babel 是基于插件架构的

## plugin

## preset

preset 为插件的集合

### preset-env
preset-env 转换所有ES6+ 的代码
```js

/* .babelrc */
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "ie >= 8"
    }]
  ]
}
```
targets

# @babel/polyfill

新增的api只能profill

