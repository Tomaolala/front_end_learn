// 


/**
 * 代码题, 给定一个数组, 去掉该数组中正好出现 2 次的元素, 要求直接在原数组上修改, 不能使用splice
 * @param {*} arr 
 */
function removeDuplicates(arr) {
    const counter = {};

    // 计算每个元素的出现次数
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        counter[num] = (counter[num] || 0) + 1;
    }

    // 从原数组中删除正好出现两次的元素
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (counter[num] !== 2) {
            arr[index] = num;
            index++;
        }
    }

    arr.length = index; // 调整数组长度，去除多余的元素
}

// 示例用法
const arr = [1, 2, 3, 3, 3, 4, 5, 5, 6];
removeDuplicates(arr);
console.log(arr); // 输出 [1, 4, 6]


function Person(name) {
    this.name = name;
    return {
        a: 1,
        b: 2
    };
}

const obj = new Person('xx');
console.log(obj);
// 请问 obj 是什么
// 以及, 请问 obj 返回的对象是否指向 Person.prototype