class HooksFactory {
    constructor(args){
        this.argsName = args
        this.tasks =[]
    }
    tap(task){
        this.tasks.push(task)
    }
    creatCall(){
        let code = ''
        const params = this.argsName.join(',')
        for(let i=0;i<this.tasks.length;i++){
            code += `var cb${i} = this.tasks[${i}]
            cb${i}(${params})
            `
        }
        return new Function (params,code)
    }
    call(...args){
        const finalCall = this.creatCall()
        console.log(finalCall);
        return finalCall.apply(this,args)
    }
}
const callFn = new HooksFactory(["x", "y", "z"]);

const a = (x, y, z) => {
  console.log("task a:", x, y, z);
};

const b = (x, y, z) => {
  console.log("task b:", x, y, z);
};

const c = (x, y, z) => {
  console.log("task c:", x, y, z);
};

callFn.tap(a);
callFn.tap(b);
callFn.tap(c);

callFn.call(4, 5, 6);
