// 将函数设为对象的属性
// 执行和删除这个函数
// 指定this到函数并传入给定参数执行函数
// 如果不传入参数，默认指向 window

Function.prototype.myCall = function (context = window, ...args) {
  if (typeof context !== "object") context = new Object(context);

  let fnkey = Symbol();

  context[fnkey] = this;

  let result = context[fnkey](...args);

  delete context[fnkey];

  return result;
};

function f(a, b) {
  console.log(a + b);
  console.log(this.name);
}
let obj = {
  name: 1,
};
f.myCall(obj, 1, 2); // 不传obj，this指向window

//bind
Function.prototype.myBind = function (context = window, ...args) {
  // context 是 bind 传入的 this
  // args 是 bind 传入的各个参数
  // this表示调用bind的函数
  let self = this; // fn.bind(obj) self就是fn

  //返回了一个函数，...innerArgs为实际调用时传入的参数
  let fBound = function (...innerArgs) {
    //this instanceof fBound为true表示构造函数的情况。如new func.bind(obj)
    // 当作为构造函数时，this 指向实例，此时 this instanceof fBound 结果为 true，可以让实例获得来自绑定函数的值
    // 当作为普通函数时，this 默认指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(
      // 函数执行
      this instanceof fBound ? this : context,
      args.concat(innerArgs) // 拼接参数
    );
  };

  // 如果绑定的是构造函数，那么需要继承构造函数原型属性和方法：保证原函数的原型对象上的属性不丢失
  // 实现继承的方式: 使用Object.create
  fBound.prototype = Object.create(this.prototype);
  return fBound;
};
