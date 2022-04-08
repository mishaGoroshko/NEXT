function flatten(array) {
    // return array.flat(Infinity)

    let res = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            const recArr = flatten(array[i])
            for (let j = 0; j < recArr.length; j++) {
                res.push(recArr[j])
            }
        } else {
            res.push(array[i])
        }
    }
    return res
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]
