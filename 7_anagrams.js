function allAnagrams(array) {


    const sortArr = array.map(el => el.split('').sort().join(''))

    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[0] !== sortArr[i]) return false
    }

    return true

}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false


let str = 'bdac'

