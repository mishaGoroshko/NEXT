// class Component {
//
//     onClick() {
//     }             // в instance будет методом в prototype
//
//
//     onClick = () => {
//     }      // в instance будет методом в самом {}
// }
//
// const group = {
//     name: 'first',
//     users: ['Bob', 'Jon'],
//
//     showUsersWithGroup() {
//         group.users.forEach(function (user) {
//             console.log(`Group: ${this.name}, User: ${user}`)
//         }, this)            //второй параметр forEach ----> thisArg
//         // group.users.forEach((user) => {
//         //     console.log(`Group: ${this.name}, User: ${user}`)
//         // })
//
//     }
// }
//
// group.showUsersWithGroup()


// false

//---------------------call stack

// const pow = (x, n) => {
//     if (n === 1) return x
//     return x * pow(x, n -1)
//
// }
//
// console.log(pow(2, 3));

//---------------------
// let count = 0
//
// const a = () => {
//     console.log(++count)
//     a()
// }
// a()

[111, 2, 3, 4].reduce((x, y) => console.log(x, y));

console.log(Symbol(1) === Symbol(1))   // false
console.log(Symbol(1))           // Symbol(1)
console.log(Symbol(false))       // Symbol(false)
console.log(Symbol(() => {}))    //Symbol(() => {}))


console.log('-----------------------------padStart----------------------');

console.log('abcdef'.padStart(7))
console.log('abcdef'.padStart(6))
