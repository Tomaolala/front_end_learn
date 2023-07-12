const orFn = () => {
    console.log(this);
}

let obj = {}
orFn.call(obj)
/**
 * 这里其实不难理解
 */

function myCall(myThis,fn) {
    myThis.fn=fn
    myThis.fn()
}

myCall(obj,orFn)


// splice
const arr =[1,2,3,5]
console.log(arr.splice(0,1));
