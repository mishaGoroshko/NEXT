function getIndexesOfArray(arr, n) {

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === n) return [i,j]
    //     }
    // }

    let map = {}

    for (let i = 0; i < arr.length; i++) {
        let rest = n - arr[i]
        if (map[arr[i -1]] === arr[i]) return [i -1, i]
        map[arr[i]] = rest
    }
    return []
}

console.log(getIndexesOfArray([4, 9, 7, 3, 5], 8))