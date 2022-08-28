//-------memo----------
const memo = (fn) => {
    const cache = {}

    return (n) => {
        if (n in cache) {
            return cache[n]
        }
        return cache[n] = fn[n]
    }
}

const fact = memo((n) => {
    console.log('factorial', n)
    return n === 1 ? n : n * fact(n - 1)
})

console.log(fact(3))
console.log(fact(3))