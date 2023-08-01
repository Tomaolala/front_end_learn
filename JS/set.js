let set = new Set();
let o = {
    name:'foo',
}
let p =  o
set.add(p)
set.add(o)
console.log(set);