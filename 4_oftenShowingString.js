function highestFrequency(array) {

    // let obj = {}
    // let maxNum = 0
    // let maxStr = ''
    // for (let i = 0; i < array.length; i++) {
    //     if (!obj[array[i]]) obj[array[i]] = 1
    //     else obj[array[i]] += 1
    //
    //     if (obj[array[i]] > maxNum) {
    //         maxNum = obj[array[i]]
    //         maxStr = array[i]
    //     }
    // }
    // return maxStr

    let obj = {}
    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) obj[array[i]] = 1
        else obj[array[i]] += 1
    }
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) // -> ghi