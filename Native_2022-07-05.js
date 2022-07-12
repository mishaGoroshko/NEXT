// this

// const person = {
//     name: 'MMM',
//     age: 42,
//     getDateBorn(){
//         console.log(2022-this.age)
//     },
//     getAge: () => {
//         console.log(this.age)
//     }
// }
//
// const girl = {
//     name: 'WWW',
//     age: 24,
// }
//
// person.getDateBorn.bind(girl)()
// person.getAge.bind(girl)()

// this function constructor

function Person(name, age) {
    this.name = name
    this.age = age
}

const children = new Person('BOB', 21)
console.log(children.age)
console.log(children.name)

Person.prototype.count = function () {
    return this.age + 1
}

Person.prototype.count2 =  () => {
    return this.age + 100
}

console.log(children.count())
console.log(children.count2())

// Promise

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('HI GUYS')
    }, 2000)
})

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('HI GUYS. Do you like errors')
    }, 1000)
})

pr1.then(res => console.log(res))
pr2.then(res => console.log(res)).catch(err => console.log(`ERROR: ${err}`))

Promise.resolve('WWW').then(res => console.log(res))
Promise.reject('ERRRRRROR').catch(res => console.log(res))

// Promise.all([pr1,pr2]).then(res => console.log(...res))
Promise.allSettled([pr1,pr2]).then(res => console.log(...res))
Promise.any([pr1,pr2]).then(res => console.log(res))
Promise.race([pr1,pr2]).then(res => console.log(res)).catch(err => console.log(`ERROR: ${err}`))

