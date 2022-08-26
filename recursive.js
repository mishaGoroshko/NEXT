console.log('-----------------------------tree1-----------------------------------------');

const tree = {
    value: 2,
    children: [
        {
            value: 10,
            children: null
        },
        {
            value: 4,
            children: [
                {
                    value: 1,
                    children: null
                },
                {
                    value: 3,
                    children: null
                },

            ]
        },
    ]
}

const treeValueSum = (tree) => {
    let sum = tree.value

    if (!tree.children) return sum

    tree.children.forEach(el => sum += treeValueSum(el))


    return sum
}


// solution with loop

// const treeValueSum = (tree) => {
//     let sum = 0
//     let queue = [tree]
//
//     while (queue.length) {
//         let current = queue.pop()
//         sum += current.value
//
//         if (current.children) {
//             current.children.forEach(el => queue.push(el))
//         }
//     }
//
//     return sum
// }

console.log(treeValueSum(tree));

console.log('');
console.log('-----------------------------tree2-----------------------------------------');

const tree2 = {
    id: 1, children: [
        {id: 21, children: null},
        {
            id: 22, children: [
                {id: 31, children: null},
                {id: 32, children: null},
                {id: 33, children: [{id: 41, children: null}]}
            ]
        }
    ]
}

let res = []

function getAllItems(tree) {
    res.push(tree.id)

    if (Array.isArray(tree.children)) {
        tree.children.forEach(el => getAllItems(el))
    }
    return res
}

console.log(getAllItems(tree2))

console.log('');
console.log('-----------------------------factorial-------------------------------------');

function factorial(n) {
    return n === 1 ? n : n * factorial(n - 1)
}

console.log(factorial(5))

console.log('');
console.log('-----------------------------get integer numbers on range----------');

function range(x, y) {
    // let res = []
    // for (let i = x + 1; i < y; i++) {
    //     res.push(i)
    // }
    // return res

    if (y - x === 2) return [x + 1]
    else {
        let list = range(x, y - 1)
        list.push(y - 1)
        return list
    }
}

console.log(range(2, 7))

console.log('');
console.log('-----------------------------exponent of number----------');

function exponent(n, x) {

    return x === 1 ? n : n * exponent(n, x - 1)

}

console.log(exponent(2, 4))

console.log('');
console.log('-----------------------------Fibonacci----------');

function fibonacci(n) {
    if (n === 1) return [0, 1]
    else {
        let pair = fibonacci(n - 1)
        console.log(pair)
        pair.push(pair[pair.length - 1] + pair[pair.length - 2])
        return pair

    }


}

console.log(fibonacci(4))

console.log('');
console.log('-----------------------------binary search----------');

const arr = [1, 2, 3, 4, 7, 8, 10, 15, 20, 21, 25, 29, 30]

function bs(arr, n) {

    if (!arr.length) return false
    const half = Math.floor(arr.length / 2)

    if (n === arr[half]) return true
    if (n > arr[half]) return bs(arr.slice(half + 1), n)
    if (n < arr[half]) return bs(arr.slice(0, half - 1), n)
    return true
}

console.log(bs(arr, 20))
console.log(bs(arr, 31))

console.log('');
console.log('-----------------------------return array\'s length ----------');

function lenR(x) {

    let [head, ...tail] = x

    if (!head) return 0

    return 1 + lenR(tail)

}

console.log(lenR([]))
console.log(lenR([1, 2, 3]))

console.log('');
console.log('-----------------------------repeat "чик-чирик" ----------');


function chirp(n) {
    if (n === 1) return 'chirp'

    return 'chirp-' + chirp(n - 1)
}

console.log(chirp(2))
console.log(chirp(4))

console.log('');
console.log('----------------------sum of all numbers between (a, b) ----------');

function getSum(a, b) {
    if (a === b) return a;
    else if (a < b) return a + getSum(a + 1, b);
    else return a + getSum(a - 1, b);
}

console.log(getSum(1, 1));
console.log(getSum(0, -1));
console.log(getSum(-1, 2));
