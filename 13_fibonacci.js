function fibonacci(n) {
    let res = [1, 1]

    if (n <= 2) return res.slice(0, n)

    while (res.length < n) {
        const last = res[res.length - 1]
        const prev = res[res.length - 2]

        res.push(last + prev)
    }

    return res
}

console.log(fibonacci(3)) // -> [1, 1, 2, 3, 5, 8, 13, 21]

//----------------------------------------------n value fibonacci --------------

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log('n value fibonacci',fib(7))

//----------------------------------------------sum fibonacci --------------

function sum(n) {

    function fib(n) {
        if (n === 1) return [0, 1]
        else {
            let pair = fib(n - 1)
            pair.push(pair[pair.length - 1] + pair[pair.length - 2])
            return pair
        }
    }

    return fib(n).reduce((acc, el) => acc + el)
}

console.log(sum(4))