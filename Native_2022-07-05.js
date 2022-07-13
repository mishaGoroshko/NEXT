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

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
//
// const children = new Person('BOB', 21)
// console.log(children.age)
// console.log(children.name)
//
// Person.prototype.count = function () {
//     return this.age + 1
// }
//
// Person.prototype.count2 =  () => {
//     return this.age + 100
// }
//
// console.log(children.count())
// console.log(children.count2())

// Promise

// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('HI GUYS')
//     }, 2000)
// })
//
// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('HI GUYS. Do you like errors')
//     }, 1000)
// })
//
// pr1.then(res => console.log(res))
// pr2.then(res => console.log(res)).catch(err => console.log(`ERROR: ${err}`))
//
// Promise.resolve('WWW').then(res => console.log(res))
// Promise.reject('ERRRRRROR').catch(res => console.log(res))
//
// // Promise.all([pr1,pr2]).then(res => console.log(...res))
// Promise.allSettled([pr1,pr2]).then(res => console.log(...res))
// Promise.any([pr1,pr2]).then(res => console.log(res))
// Promise.race([pr1,pr2]).then(res => console.log(res)).catch(err => console.log(`ERROR: ${err}`))

//---------------------

// let x = 3;
// function fn() {
//     x = 10;
//     return;
//     function x() {}
// }
//
// fn();
// console.log(x);

//--------------------

// function b(x, y, a) {
//     arguments[2] = 10;
//     console.log(a)
// }
// b(1, 2, 3);

//--------------------

console.log(false == undefined);
console.log(false == null);
console.log(null == 0);
console.log(NaN == false)
console.log(null === undefined);

console.log( undefined > 0 ); // false
console.log( undefined < 0 ); // false
console.log( undefined == 0 ); // false
console.log( null > 0 );  // false

console.log( null == 0 ); // false

console.log('-----------------------------------------------------')
console.log('' == false);   // '' --> 0 <-- false
console.log(0 == false);
console.log(null == undefined);    //special rule
//  < > <= >=
console.log(null >= 0);   //  null --> 0     undefined --> NaN

console.log('//Забавное следствие---------------------------------')
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!


