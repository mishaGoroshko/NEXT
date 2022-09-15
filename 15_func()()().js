// function add(a, b) {
//     if (!a) return add
//     if (b) return a + b
//     return function sum(c) {
//         if (!c) return sum
//         return a + c
//     }
// }
//
// console.log(add(20, 22)); // -> 42
// console.log(add(20)(22)); // -> 42
// console.log(add(20)()(22)); // -> 42
// console.log(add(20)()()()(22)); // -> 42
// console.log(add(20)()()()()()()()()()()()(22)); // -> 42
// console.log(add()(20)(22)); // -> 42
// console.log(add()()()()(20)(22)); // -> 42
// console.log(add()(20)()(22)); // -> 42
// console.log(add()()()()()(20)()()()(22)); // -> 42


//--------------------------(1)(2)(3)()

function sum(a) {
    let acc = a

    return function count(n){
        if (typeof n === 'number') {
            acc += n
            return count
        }
        return acc
    }
}

console.log(sum(1)(2)(3)())

//-------------------------------

// function sum(a, b, c) {
//     return a + b + c
// }
//
// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn.apply(this, args)
//         }
//         return curried.bind(this, ...args)
//         // return function (...args2) {
//         //     return curried.apply(this, [...args, ...args2])
//         // }
//     }
// }

// const curriedSum = curry(sum)
//
// console.log(curriedSum(1, 2, 3))
// console.log(curriedSum(1)(2, 3))
// console.log(curriedSum(1)(2)(3))