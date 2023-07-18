
function myInstanceof(L = null, R) {
    // 对于左侧参数如果是非对象直接返回false
    if (Object(L) !== L) return false
    // 对于右侧参数可以认为只能为函数且不能没有Prototype属性
    if (typeof R !== 'function' || !R.prototype) throw new TypeError('Right-hand side of 'instanceof' is not an object')
    // 声明一个变量获取对象的__proto__
    let link = L.__proto__
    // 做循环（当link最终指向null，如果指向null的情况下都找不到那就返回false）
    while (link !== null) {
        // 如果找到说明R.prototype在L的原型链上，即返回true
        if(link === R.prototype) return true
        // 逐级向下
        link =Object.getPrototypeOf (link)
    }
    return false
}


console.log(myInstanceof(()=>{},Object));

function dog(){
    pig.call(this)
    this.gae ="dog"

}
function pig (){
    this.name ="pig"
    this.sayHi=function(){
        console.log("ji");
    }
}
dog.prototype = new pig(); 
// 重写SubType.prototype的constructor属性，指向自己的构造函数SubType
dog.prototype.constructor = dog; 
let newPig = new pig()
// 构造函数的原型
// console.log(pig.prototype);
// console.log(newPig.__proto__.__proto__);
// console.log(Object.constructor.prototype);
// console.log(Function.prototype);
// console.log({}.__proto__);
let dog1 = new dog()
console.log(dog1.sayHi());

