function groupBy(arr, fn) {

    let res = {}

    for (let i = 0; i < arr.length; i++) {
        let key = typeof fn === 'function' ? fn(arr[i]) : arr[i].length
        if (!res[key]) res[key] = []
        res[key].push(arr[i])
    }

    return res
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], 'length')); // -> { '3': ['one', 'two'], '5':
// ['three'] }