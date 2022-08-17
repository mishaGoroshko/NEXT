function isUnique(string) {

    // for (let i = 0; i < string.length; i++) {
    //     return string.lastIndexOf(string[i]) === i
    // }

    // for (let i = 0; i < string.length; i++) {
    //     console.log(i)
    //     return string.split(string[i]).length === 2
    // }

    return new Set(string).size === string.length



}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false