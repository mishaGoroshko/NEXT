function isBalanced(string) {

    const start = '([{'
    const end = ')]}'

    let queue = []

    const map = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i]

        if (start.includes(char)) {
            queue.push(char)
        } else if (end.includes(char)) {
            const last = queue.pop()
            if (map[char] !== last) return false
        }
    }
    return !queue.length

// for case with only ((((((((())))))))))))

    // let n = 0;
    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] === '(') n++;
    //     if (string[i] === ')') n--;
    //     if (n < 0) return false;
    // }
    // return n === 0;
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false
