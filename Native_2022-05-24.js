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


const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success-1')
        reject('ERROR-1')
    }, 100)
})
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

Promise.resolve(1).then(console.log)
Promise.reject(2).catch(console.log)
