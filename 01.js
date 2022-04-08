function isUnique(string) {
    // for (let i = 0; i < string.length; i++) {
    //     if (string.split(string[i]).length === 2) {
    //         return true
    //     } else return false
    // }

    // for (let i = 0; i <string.length; i++) {
    //     return string.lastIndexOf(string[i]) === i
    // }

    return new Set(string).size === string.length
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false