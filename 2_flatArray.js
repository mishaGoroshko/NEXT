function flatten(array) {
    // return array.flat(Infinity)

    let resArr = []

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            let newArr = flatten(array[i])
            for (let j = 0; j < newArr.length; j++) {
                resArr.push(newArr[j])
            }

        } else {
            resArr.push(array[i])
        }
    }

    return resArr
}

console.log(flatten([0, [1], [[2, 3]], [[[4]]]])) // -> [0, 1, 2, 3, 4]