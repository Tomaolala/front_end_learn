var name = "v"

let fna = ()=>{
    console.log(this)
}
let obj = {
    name: 'o',
    fn:fna
}


obj.fn()