    /**************************const******************************************/

    const obj = {
        name: "zyh"
    }
    // console.log(obj.name); //zyh
    obj.name = "ziyuhang"
    // console.log(obj.name);//ziyuhang


    /**************************reduceUse******************************************/

    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const sum = arr1.reduce((pre, cur) => {
        // pre 是传入的初始值，cur是现在的遍历值‘

        return pre += cur

        //return 返回的是作为上一次的结果返回
    }, 0)


    console.log(sum);


    /**************************扁平化数组******************************************/
    const flat = (arr, initVal, dep) => {
        const startVal = initVal || [];
        return arr.reduce((prevRes, item) => {
            // 如果里层还是数组，递归调用自身


            if (Array.isArray(item)) {

                if (dep === 0) {
                    prevRes.push(item)
                    return prevRes
                } else {
                    dep--
                    return flat(item, prevRes, dep);
                    
                }

            } else {
                return prevRes.concat(item);
            }
        }, startVal)
    }

    const arr = [1, 2, [3],[[[[[[[6]]]]]]]];
    const flatArr = flat(arr, [], Infinity);

    console.log(flatArr); // [1, 2, 3, 4, 5, 6, 7, 8]

    /**************************缓存函数******************************************/
    const fibonacci = (x) => {
        if (x === 1 || x === 2) {
            return 1;
        }

        return fibonacci(x - 1) + fibonacci(x - 2);
    }

    // 第一个参数是需要缓存的函数，第二个参数是用来生成缓存key的方法，如果不传就用第一个参数做key
    const memo = function (fn, hasher) {
        const memoFun = function () {
            const cache = memoFun.cache;
            const args = [].slice.apply(arguments);
            const hashKey = hasher ? hasher.apply(this, arguments) : args[0];
            if (!cache[hashKey]) {
                cache[hashKey] = fn.apply(this, arguments);
            }

            return cache[hashKey];
        }

        memoFun.cache = {};
        return memoFun;
    }