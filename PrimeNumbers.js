function isPrime(n) {

    if (n === 1) return false
    for (let i = 2; i < 9; i++) {
        if (n !== i && !(n % i)) return false
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))

//-----------------------------type [] of prime numbers

function primeNumbers(n) {
    // let res = []
    // for (let i = 3; i < 100; i++) {
    //     if (isPrime(i)) res.push(i)
    // }
    // return res

    let res = [3,5,7]

    if(n < 3) return []
    else if( n < 5) return res[0]
    else if( n < 7) return res.slice(0,2)

    for (let i = 11; i < n; i++) {
        if (i % 2 && i % 3 && i % 5 && i % 7) res.push(i)
    }
    return res
}

console.log(primeNumbers(12))
