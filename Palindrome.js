function palindrome(str) {
    console.log(str.replace(/ /g, ''));    //remove all spaces
    console.log(str.replace(/\s/g,''));    //remove all spaces symbols

    str = str.split(' ').join('').toLowerCase()

    return str === str.split('').reverse().join('')

}

console.log(palindrome('racecar'))
console.log(palindrome('table'))
console.log(palindrome('А роза упала на лапу Азора'))