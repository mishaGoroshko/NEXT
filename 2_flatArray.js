function flatten(array) {
    // return array.flat(Infinity)

    let res = []

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            res = res.concat(flatten(array[i]))
            // let newArr = flatten(array[i])
            // for (let j = 0; j < newArr.length; j++) {
            //     resArr.push(newArr[j])
            // }

        } else {
            res.push(array[i])
        }
    }

    return res
}

console.log(flatten([0, [1], [[2, 3]], [[[4]]]])) // -> [0, 1, 2, 3, 4]