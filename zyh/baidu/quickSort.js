const arr = [1, 3, 235, 52, 545, 342, 32, 535, 45, 2]


function quirckSort(arr, begin, end) {
    if (begin >=end) return 
        let i = begin,
            j = end
        let empty = arr[begin]
        while (i < j) {
            while (arr[j] > empty && i < j) {
                j--
            }
            arr[i] = arr[j]
            while (arr[i] <=empty && i < j) {
                i++
            }
            arr[j] = arr[i]
        }
        arr[i] = empty

        quirckSort(arr, begin, i - 1)
        quirckSort(arr, i + 1, end)



}
quirckSort(arr, 0, arr.length - 1)
console.log(arr);