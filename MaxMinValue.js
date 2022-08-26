const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]

// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))

//----------------------------------------------MAX--------------------
function searchMax(arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(searchMax(numbers))

//----------------------------------------------MIN--------------------
function searchMin(arr) {
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

console.log(searchMin(numbers))

//----------------------------------------------factorial--------------
function fact(n) {
    return n === 1 ? n : n * fact(n - 1)
}

console.log(fact(5)) //120

//----------------------------------------------n value fibonacci --------------

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(4))

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

