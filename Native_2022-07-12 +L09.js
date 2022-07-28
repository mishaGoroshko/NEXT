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

//---------------------recursive

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
