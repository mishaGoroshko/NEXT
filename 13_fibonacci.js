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