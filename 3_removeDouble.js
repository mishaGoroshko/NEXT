function removeDupes(str) {

    // return str.split('').filter((el, i, arr) => arr.indexOf(el) === i).join('')


    // return [...new Set(str)].join('')


    // return Array.from(new Set(str)).join('')


    // let res = ''
    // for (let i = 0; i < str.length; i++) {
    //     if(str.indexOf(str[i]) === i) res+=str[i]
    // }
    // return res


    // let obj = {}
    // let res = ''
    // for (let i = 0; i < str.length; i++) {
    //     if (!obj[str[i]]) {
    //         obj[str[i]] = str[i]
    //         res += str[i]
    //     }
    // }
    // return res
    // return Object.values(obj).join('') // you don't have to add the variable "res"
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'