// const pr1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('HELLO 111111')
//         }, 2000)
//     }
// )
// const pr2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('HELLO ERROR')
//         }, 2000)
//     }
// )
//
// pr2.then((res) => {
//     console.log(res)
// }).catch((e) => console.log(e))

// Promise.all([pr1, pr2]).then((res) => console.log(...res))
// Promise.race([pr1, pr2]).then((res) => console.log(...res))
// Promise.allSettled([pr1, pr2]).then((res) => console.log(...res))

//----------------------this-------------------------------------------
// const person = {
//     name: 'Miha',
//     age: 33,
//     countAge(){
//         console.log(`${this.name} is ${42 + this.age} years old`)
//     }
// }
//
// const children = {
//     name: 'Bob',
//     age: 3,
// }
//
// person.countAge.bind(children)()

//---------------------function constructor--------------------------
// function Test(name, age) {
//     this.name = name
//     this.age = age
// }
//
// const t1 = new Test('Miha', 33)
//
// console.log(t1.age);
// console.log(t1.name);

//----------------------
// const a = 10
// const someFunc = (b) => {
//     console.log(a + b)
// }
// someFunc(23)

//----------------------
// const pr = new Promise((resolve, reject) => {
//     resolve('fulfilled')
//     // reject('reject')
// })
//
// pr
//     .then((res) => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })
//     .finally(() => {
//         console.log('finally')
//     })
//
// Promise.all([pr1, pr2]).then(r => {})
// Promise.allSettled([pr1, pr2]).then(r => {})
// Promise.reject('1').then(r => {})
// Promise.resolve('1').then(r => {})
// Promise.race([pr1, pr2]).then(r => {})
// Promise.any([pr1, pr2]).then(r => {})

//--------------------------------------------

// const person = {
//     name: 'Miha',
//     age: 33,
//     counterAge(){
//         console.log(this.age + 42)
//         return this.age + 42
//     },
//     loger(){
//         console.log(this.counterAge())
//     }
// }
//
// const man = {
//     name: 'bob',
//     age: 42,
// }
//
//
// person.counterAge.bind(man)()
//
// //----
// console.log(this)
//
// //----
// function someFun(){
//     console.log(`HELLO ${this}`)
// }
//
// someFun()

//-----------------------------------------

// const pr = new Promise((resolve, reject) => {
// })
//
//
// function CustomPromise(cb) {
//
//     function resolve(value) {
//         //this.status = fulfilled
//         //this.result = value
//
//     }
//
//     function reject(error) {
//         //this.status = rejected
//         //this.result = error
//     }
//
//     cb(resolve, reject)
// }
//
// const cp111 = new CustomPromise((res, rej) => {})

//---------------

// const person = {
//     name: 'Alex',
//     age: 38,
//     getSum(){
//         console.log(this.age + 4)
//     }
// }
//
// const bob = {
//     name: 'Bob',
//     age: 10,
// }

// person.getSum.bind(bob)()


//-----------------------
// function counter(){
//     console.log(this.age + 100)
// }
// counter()
//
// const counterArrow = () => {
//     console.log(this.age + 200)
// }
//
// bob.counter = counter
// bob.counter()
//
// bob.counterArrow = counterArrow
// bob.counterArrow()

//------------------------

// function Test(name, age) {
//     this.name = name
//     this.age = age
//     this.sayHello = function () {
//         console.log(`HELLO ${this.name}`)
//     }
// }
//
// const test1 = new Test('Miha', 33)
// console.log(test1.age);
// test1.sayHello()

//-----------------------
// let obj = {}
// function A() { return obj }
// function B() { return obj }
//
// let a = new A;
// let b = new B;
//
// console.log(a == b)

//--------------------------
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('add a:', '')
//         this.b = +prompt('add b:', '')
//     },
//         this.sum = () => {
//             return this.a + this.b
//         },
//         this.mul = () => {
//             return this.a * this.b
//         }
// }
// let calculator = new Calculator()
// calculator.read();
//
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
