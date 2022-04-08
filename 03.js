function removeDupes(str) {

    // const res = []
    // const obj = {}
    //
    // for (let i = 0; i < str.length; i++) {
    //     const char = str[i]
    //     if (!obj[char]) {
    //         obj[char] = true
    //         res.push(char)
    //     }
    // }
    // return res.join('')

    return Array.from(new Set(str)).join('')
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'