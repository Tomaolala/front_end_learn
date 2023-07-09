/**
 * 
 * diff 同层比较 深度优先   
 * 
 * pacth
 * 
 * patchVnode
 * 
 * updateChildren
 * 
 * 
 */



/**
 * 只会同级比较 ，不会跨级比较
 */

function sameVnode(a, b) {
    return (
        a.key === b.key &&
        a.asyncFactory === b.asyncFactory && (
            (
                a.tag === b.tag &&
                a.isComment === b.isComment &&
                isDef(a.data) === isDef(b.data) &&
                sameInputType(a, b)
            ) || (
                isTrue(a.isAsyncPlaceholder) &&
                isUndef(b.asyncFactory.error)
            )
        )
    )
}

function sameInputType(a, b) {
    if (a.tag !== 'input') return true
    let i
    const typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type
    const typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}


// UpdateChildren 函数进行比较
/**
 * UpdateChildren函数接受两个参数 newVnode 和 oldVnode   
 */
/**
 *
 *
 * @param {*} newCh
 * @param {*} oldCh
 */
function patch(newCh, oldCh) {
    // 四个指针 分别指向 新的头部和尾部 ，旧的头部和尾部
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        // 从头指针开始比较 如果相同则不变往下继续遍历
        if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {

            // 头指针
            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
            oldEndVnode = oldCh[--oldEndIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
            // 如果头尾比较都没得就只能交叉比较了

            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
            // 将oldStartVnode节点移动到对应位置，即oldEndVnode节点的后面
            nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))

            oldStartVnode = oldCh[++oldStartIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
            // 将oldEndVnode节点移动到对应位置，即oldStartVnode节点的前面
            nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)

            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        }
        // 如果以上都不行就只能暴力比较

        // 思路就是对这newVnode逐一比较



        // 接下来就是key
        /**
         * key的思路就很简单了 
         * 如果我们传入了key 我们就可以用类似于映射的方式去对应新旧节点了
         * 
         * 
         * 这里对不能用索引作为key进行分析
         */

    }

}


/**
 * 为什么不能用索引作为key
 */

const oldVnode = [
    {
        key: 1,
        content: '我是第一个div'
    },
    {
        key: 2,
        content: '我是第二个div'
    },
    {
        key: 3,
        content: '我是第三个div'
    }
]

const newVnode = [
    {
        key: 1,
        content: '我是第一个div'
    },
    {
        key: 3,
        content: '我是第三个div'
    }
]

const update = (o, n) => {
    const map = {}

    o.forEach(item => {
        map[item.key] = item
    })

    // 开始比较
    n = n.map(item => {
        if (map[item.key]) {


            // 大概的思路是这样  有key就直接复用了没做比较
            /** 
             * 其实也不难理解
             * 当key值相同时 我们就认为是同一个元素了 否则直接去对比就可以
            */
            return map[item.key]
        } else return item

    })
    return n
}

console.log(update(oldVnode, newVnode));