// const str1 = String('id')
// const str2 = String('id')
//
// console.log(str1 === str2)

// const id = Symbol('id')
// const id2 = Symbol('id')
//
// console.log(id === id2)
// console.log('---------------------------------------------------------')
//
// const user = {}
//
// user[id] = 1
// user.id = 2
//
// console.log(user)
//
// for (const userKey in user) {
//     console.log(userKey)
// }
//
// console.log(Object.keys(user));
//
//
// const global = Symbol.for('global')
// const global11111 = Symbol.for('global')
//
// console.log(global === global11111)
//
// console.log('---------------------------------------------------------')
// console.log(Symbol.keyFor(global))   //global
// console.log(Symbol.keyFor(id))       //undefined

const user = Object.create(Object.prototype,
    {
        name: {
            value: 'Bob',
            enumerable: true,
            writable: true,
            configurable: false
        },
        age: {
            value: 42,
            enumerable: false,
            writable: false,
            configurable: false
        },

    })

user.name = 'John'

delete user.age

console.log(user)
console.log(Object.keys(user))


console.log(Object.getPrototypeOf(user))
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))
// console.log(Object.getOwnPropertyDescriptors(user))

'use strict'
Object.preventExtensions(user) // you can't extend object, add any key
user.key = 'key'
console.log(Object.getOwnPropertyDescriptors(user))


const user3 = {}
Object.defineProperty(user3, 'name', {
    value: 'Bob333333333333',
    enumerable: true,
    writable: true,
    configurable: false
})

Object.defineProperty(user3, 'age', {
    value: 42,
    enumerable: false,
    writable: false,
    configurable: false
})

console.log(user3)


const user4 = {}
Object.defineProperties(user4, {
    name: {
        value: 'Bob444444444',
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        value: 42,
        enumerable: false,
        writable: false,
        configurable: false
    },

})

console.log(user4)


//----------------------------iterators-----------------------------
console.log('----------------------------iterators-----------------------------')

const arr = [111, 222, 333, 444]

const iter = arr[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())


const range = {
    from: 0,
    to: 5
}

console.log('--------------------custom iterator for object----------------------')

range[Symbol.iterator] = function () {

    // let from = this.from
    // let to = this.to

    return {
        from: this.from,
        to: this.to,
        next() {
            if (this.from <= this.to) return {done: false, value: from++}
            else return {done: true, value: undefined}
        }
    }
}

for (const rangeElement of range) {
    console.log(rangeElement)
}