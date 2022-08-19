function search(array, target) {

    // return array.includes(target) ? array.indexOf(target) : -1

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === target) return i
    // }
    // return -1


    //-----------------------------O(log(n))
    let start = 0
    let end = array.length - 1

    while (true) {
        if (target === array[start]) return start
        if (target === array[end]) return end
        if (end - start <= 1) return -1

        const middle = Math.floor((start + end) / 2)
        if (target > array[middle]) {
            start = middle + 1
        } else if (target < array[middle]) {
            end = middle - 1
        } else return middle
    }
}

console.log(search([1, 3, 6, 13, 17, 19], 13)) // -> 3
console.log(search([1, 3, 6, 13, 17], 3)) // -> -1