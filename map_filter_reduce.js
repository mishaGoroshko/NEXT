// console.log('1' + true)
//
// console.log([1,2,3] + true)
//
// console.log('2' * 3 + true)

// console.log(null == undefined)
//
// console.log(null === null)
//
// console.log({} + {})


// -----------------------------this

// const a = {
//     name: "Jon",
//     hi() {
//         console.log(this.name)
//     },
//     hi2: () => {
//         console.log(this.name)
//     },
//
// }
//
// const b = {
//     name: "Bob"
// }
//
// a.hi.bind(b)()
// a.hi2.call(b)
//
// const hi = a.hi
// hi()


// function Test(name, age){
//     this.name = name
//     this.age = age
//     this.hi =  () => {
//         console.log(this.age + this.name)
//     }
// }
//
// const test = new Test('Alex', 42)
// test.hi()


// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success-1')
//         reject('ERROR-1')
//     }, 100)
// })
// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('ERROR-2')
//         resolve('success-2')
//     }, 20)
// })

// pr
//     .then(res => console.log(res))
//     .catch(e => console.log(e))

// Promise.all([pr1, pr2]).then(res => console.log(...res))
// Promise.allSettled([pr1, pr2]).then(res => console.log(...res))
// Promise.race([pr1, pr2])
//     .then(res => console.log(res))
//     .catch(e => console.log(e))

// Promise.any([pr1, pr2])
//     .then(res => console.log(res))

// Promise.resolve(1).then(console.log)
// Promise.reject(2).catch(console.log)

//-----------

// const y = 5
//
// function counter(x) {
//     return () => {
//         console.log(x + y)
//     }
// }
//
// counter(2)()

//------------

// const a = {
//     name: 'Jon',
//     hi(){
//         console.log(this.name)
//     }
// }
//
// const b = {
//     name: 'Bob'
// }
//
// // b.__proto__ = a
//
// Object.setPrototypeOf(b,a)
//
//
// b.hi()

//-----------------------------------map

// function customMap(cb){
//     let res = []
//
//     for (let i = 0; i < this.length; i++) {
//         res.push(cb(this[i]))
//     }
//     return res
// }
//
// Array.prototype.customMap = customMap
//
// console.log([1,2,3].customMap((el) => { return el + 100}))


//---------------------------------filter

// function customFilter(cb){
//     let res = []
//
//     for (let i = 0; i < this.length; i++) {
//        if (cb(this[i])) res.push(this[i])
//     }
//     return res
// }
//
// Array.prototype.customFilter = customFilter
//
// console.log([1,2,3,4,5].customFilter((el) => { return el > 2}))


//----------------------------------reduce

// const res = [1, 2, 3].reduce((acc, el) => acc + el, 0)
//
// console.log(res)

// function customReduce(cb, initState) {
//
//     let acc = initState || 0
//
//     for (let i = 0; i < this.length; i++) {
//         acc = cb(acc, this[i])
//     }
//
//     return acc
// }
//
// Array.prototype.customReduce = customReduce
//
// console.log([1, 2, 3].customReduce((acc, el) => acc + el, 4));

//----------------------------------Promise.all

function promiseAll(promises) {
    const res = []

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.activeElement; i++) {
            promises[i].then(response => {
                res.push(response)

                if (promises.length === res.length) resolve(res)
            })
        }
    })
}

//----------

// function Counter() {
//     let count = 0
//
//     this.up = function () {
//         return count = count + 1
//     }
//     this.down = function () {
//         return count = count - 1
//     }
// }
//
// const counter = new Counter()
//
// console.log(counter.up())
// console.log(counter.up())
// console.log(counter.down())

// function BaseUser(name){
//     this.name = name
// this.sayHi = function(){
//     console.log(`Hi ${this.name}`)
// }                                        // bad: will be in everyone instance
// }

// BaseUser.NAME_LENGHT = 23
//
// BaseUser.prototype.sayHi = function(){
//     console.log(`Hi ${this.name}`)
// }
//
// function User(){}
//
// User.prototype.__proto__ = BaseUser.prototype
//
// console.log(BaseUser.NAME_LENGHT)
//
// const user1 = new User('11111')
//
// user1.sayHi()

//-----

// const readFilePromise = (path, cb) => {
//     return new Promise((resolve, reject) => {
//         readFile('/path', () => {
//
//         })
//     })
// }

//--------------

// console.log([1, 2, 3, 4].reduce((acc, el) => {
//     acc.push(el.toString())
//     return acc
// }, []));

// console.log([1, 2, 3, 4].reduce((acc, el) => [...acc, el.toString()], []));

//---------------------proto---------------------

function User(name) {
    this.name = name
}

const alex = new User('Alex')

User.prototype = {}

const hanna = new alex.constructor('Hanna')

const max = new hanna.constructor('Max')


console.log(alex.name)
console.log(hanna.name)
console.log(max.name)

console.log(Array.prototype.__proto__ === Object.prototype)

