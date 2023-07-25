// let path = [2]
// path.push(1)
// let res =[]
// res.push(path)
// console.log(res);
function flat(arr){
	if(Object.prototype.toString.call(arr) != "[object Array]"){return false};
	
	let res = arr.reduce((prev,cur)=>{
	    return prev.concat(Array.isArray(cur) ? flat(cur) : cur)
	},[])
	return res;
};
var arr = [1,2,[3,4,5,[6,7,8],9],10,[11,12]];
flat(arr);
console.log(flat(arr));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
