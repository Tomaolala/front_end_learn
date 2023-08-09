// 实例.__ptoto__ === 构造函数.prototype
function _instanceof(instance, classOrFunc) {
  // 由于instance要检测的是某对象，需要有一个前置判断条件
  //基本数据类型直接返回false
  if (typeof instance !== "object" || instance == null) return false;

  let proto = Object.getPrototypeOf(instance); // 等价于 instance.__ptoto__
  while (proto) {
    // 当proto == null时，说明已经找到了Object的基类null 退出循环
    // 实例的原型等于当前构造函数的原型
    if (proto == classOrFunc.prototype) return true;
    // 沿着原型链__ptoto__一层一层向上查
    proto = Object.getPrototypeof(proto); // 等价于 proto.__ptoto__
  }

  return false;
}

console.log("test", _instanceof(null, Array)); // false
console.log("test", _instanceof([], Array)); // true
console.log("test", _instanceof("", Array)); // false
console.log("test", _instanceof({}, Object)); // true

//new
function myNew(constructor, ...args) {
  // 1. 基于原型链 创建一个新对象，继承构造函数constructor的原型对象（Person.prototype）上的属性
  let newObj = Object.create(constructor.prototype);
  // 添加属性到新对象上 并获取obj函数的结果
  // 调用构造函数，将this调换为新对象，通过强行赋值的方式为新对象添加属性
  // 2. 将newObj作为this，执行 constructor ，传入参数
  let res = constructor.apply(newObj, args); // 改变this指向新创建的对象

  // 3. 如果函数的执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象地址
  return typeof res === "object" ? res : newObj;
}

// 用法
function Person(name, age) {
  this.name = name;
  this.age = age;

  // 如果构造函数内部，return 一个引用类型的对象，则整个构造函数失效，而是返回这个引用类型的对象，而不是返回this
  // 在实例中就没法获取Person原型上的getName方法
}
Person.prototype.say = function () {
  console.log(this.age);
};
let p1 = myNew(Person, "poety", 18);
console.log(p1.name);
console.log(p1);
p1.say();
