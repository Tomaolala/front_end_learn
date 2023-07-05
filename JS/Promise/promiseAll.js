/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve,reject)=>{
        let res=new Array(functions.length),length=functions.length;
        for(const i in functions){
            functions[i]().then((ress)=>{
                length--;
                res[i]=ress;
                if(length==0){
                    resolve(res)
                }
            }).catch((err)=>{
                reject(err)
            })
        }
    })
};

let a =new Promise((res,rej)=>{
    res("a")
})
let b =new Promise((res,rej)=>{
    setTimeout(()=>{
        res("B")
    },100)
})

let res =   promiseAll([()=>a,()=>b]).then(res=>console.log(res))
console.log(res);