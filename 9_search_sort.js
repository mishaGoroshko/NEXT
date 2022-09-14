function search(array, target) {

    // return array.indexOf(target)

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === target) return i
    // }
    // return -1


    // -----------------------------O(log(n))-----should find index
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
console.log(search([1, 3, 6, 13, 17], 4)) // -> -1

//---------------------bubble sort-------O(n2)-----------------------

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // let temp = arr[j]
                // arr[j] = arr[j + 1]
                // arr[j + 1] = temp
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([4, 1, 3, 8, 5, 7, 2, 6]))

//---------------------quick sort------O(n * log(n))---unstable----------------------

function quickSort(arr) {
    if (arr.length < 2) return arr
    else {
        // let rotate = arr[Math.floor(Math.random() * arr.length)] //random point
        const mid = arr[Math.floor(arr.length / 2)]
        const left = arr.filter(el => el < mid)
        const right = arr.filter(el => el > mid)

        return [...quickSort(left), mid, ...quickSort(right)]
    }
}

console.log(quickSort([4, 1, 3, 8, 5, 7, 2, 6]))


//---------------------merge sort------O(n * log(n))---Stable-----------------------

function merging(left, right) {
    let res = []

    while (left.length && right.length) {
        if (left[0] < right[0]) res.push(left.shift())
        else res.push(right.shift())
    }

    while (left.length) res.push(left.shift())

    while (right.length) res.push(right.shift())

    return res
}

function mergeSort(arr) {
    if (arr.length < 2) return arr

    const mid = Math.floor(arr.length / 2)

    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)

    return merging(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([4, 1, 3, 8, 5, 7, 2, 6]))


//---------------------insertion sort------O(?)--------------------------

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        const temp = arr[i]

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

console.log(insertionSort([4, 1, 3, 8, 5, 7, 2, 6]))



