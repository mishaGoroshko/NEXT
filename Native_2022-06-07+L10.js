// const pr = new Promise((resolve, reject) => {
//     console.log('0000000')
//     setTimeout(() => {
//         resolve(111111111)
//         reject('NEW ERROR')
//         // throw new Error('ERRORRRRRRRRRRRRRRRRR')
//     }, 2000)
// })
//
// pr
//     .then(res => {
//         console.log(res)
//         throw new Error('ERRORRRRRRRRRRRRRRRRR')
//         return '????????'
//
//     })
//     .catch(err => console.log('err', err))
//     .then(() => console.log(22222222))
//     .then(res => console.log(res))
//     .finally(() => {})

//--------------------------------this
//
// const auto = {
//     mark: 'audi',
//     minSpeed: 10,
//     maxSpeed: 240,
//     increase(step){
//         return this.minSpeed + step
//     }
// }
//
// const auto2 = {
//     mark: 'bmw',
//     minSpeed: 10,
//     maxSpeed: 240,
// }
//
// console.log(auto.increase(100));
// console.log(auto.increase.call(auto2, 100000));
// console.log(auto.increase.apply(auto2, [100000]));

//function constructor

// function Test(name, age) {
//     this.name = name
//     this.age = age
//     this.counter = function(){
//         return ++this.age
//     }
// }
//
// const test1 = new Test('new', 42)
//
// console.log(test1.age);
// console.log(test1.counter());

//Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

// const obj = {}
// function A() { return obj}
// function B() {return obj}
//
// let a = new A;
// let b = new B;
//
// console.log( a == b ); // true

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

// function Calculator() {
//     //let this = {}
//     this.a = 0
//     this.b = 0
//     this.read = function () {
//         this.a = +prompt('type A', this.a)
//         this.b = +aprompt('type B', this.b)
//     }
//     this.sum = function () {
//         return this.a + this.b
//     }
//     this.mul = function () {
//         return this.a * this.b
//     }
//     //return this
//
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());


//-------------promise

// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('1111')
//         reject('some error 1111')
//     }, 1000)
// })
//
// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('2222')
//         // reject('some error')
//     }, 2000)
// })

// pr1
//     .then(res => console.log(res), err => console.log(err))
//     .catch(err => console.log(err))
//     .finally(() =>  console.log('common code'))

// Promise.all([pr1, pr2]).then(res => console.log(res))
// Promise.allSettled([pr1, pr2]).then(res => console.log(res))
// Promise.race([pr1, pr2])
//     .finally(()=> console.log('RACE'))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//
// Promise.any([pr1, pr2]).then(res => console.log(res))
//
// Promise.resolve('success').then(res => console.log(res))
// Promise.reject('rejected').catch(err => console.log(err))

//----------prototype
//
// class Test {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//
//     count() {
//         return this.age + 42
//     }
// }
//
// Test.prototype.count2 = function (){return this.age + 100500}
//
// const test1 = new Test('Miha', 33)
//
// console.log(test1.count());
// console.log(test1.count2());

//---

let a = 10

console.log(a.__proto__ === Number.prototype);
console.log(a.__proto__.__proto__ === Object.prototype);
console.log(a.constructor === Number);