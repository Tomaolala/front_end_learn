/**
 * 翻转链表
 * 
 */

function reverseList(head) {
    let prev = null
    let cur = head
    while (cur) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next

    }
    return prev
}
/**
 * 两两交换链表的元素
 */

function swapPairs(head) {

    if (head === null || head.next === null) {
        return head;
    }
    let temp = head.next;
    head.next = swapPairs(temp.next);
    temp.next = head;
    return temp;
}


/**
 *  删除倒数第n个链表元素
 */
var removeNthFromEnd = function (head, n) {
    let slow = head,
        fast = head;
    // 先让 fast 往后移 n 位
    while (n--) {
        fast = fast.next;
    }

    // 如果 n 和 链表中总结点个数相同，即要删除的是链表头结点时，fast 经过上一步已经到外面了
    if (!fast) {
        return head.next;
    }

    // 然后 快慢指针 一起往后遍历，当 fast 是链表最后一个结点时，此时 slow 下一个就是要删除的结点
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;

    return head;
};


/**
 * 链表相交
 */
var getIntersectionNode = function(headA, headB) {
    const visited = new Set();
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};