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

// console.log(false == undefined);
// console.log(false == null);
// console.log(null == 0);
// console.log(NaN == false)
// console.log(null === undefined);
//
// console.log( undefined > 0 ); // false
// console.log( undefined < 0 ); // false
// console.log( undefined == 0 ); // false
// console.log( null > 0 );  // false
//
// console.log( null == 0 ); // false
//
// console.log('-----------------------------------------------------')
// console.log('' == false);   // '' --> 0 <-- false
// console.log(0 == false);
// console.log(null == undefined);    //special rule
// //  < > <= >=
// console.log(null >= 0);   //  null --> 0     undefined --> NaN
//
// console.log('//Забавное следствие---------------------------------')
// let a = 0;
// console.log( Boolean(a) ); // false
//
// let b = "0";
// console.log( Boolean(b) ); // true
//
// console.log(a == b); // true!

//-----------------------------------------------------------

// let a = 1
//
// const myFunc = (b) => {
//     const inside = () => {
//         console.log(a + b)
//     }
//     return inside()
// }
// myFunc(4)

//----------proto-------------------------------------------------

// const person = {
//     age: 42
// }
//
// Object.prototype.counter = function (num) {
//     return console.log(this.age + num)
//
// }
//
// person.counter(11000)

//------------------

// const moto = {
//     rise(n) {
//         console.log(n)
//     }
// }
//
// const gilera = {}
//
//
// gilera.__proto__ = moto
// // Object.setPrototypeOf(gilera, moto)
//
// gilera.rise(42)

//----------promise-------------------------------------------------

// const pr = new Promise((resolve, reject) => {
//     // resolve('fulfilled')
//     // reject('rejected')
//
//     setTimeout(() => resolve(100500), 1000)
// })
//
// pr.then((res) => console.log(res), (e) => console.warn(e))

//----------this-------------------------------------------------

// const auto ={
//     power: 170,
//     ride(){
//         console.log(`${this.power}hp`)
//     }
// }
//
// const vw = {
//     power: 100
// }
//
// auto.ride.bind(vw)()
//
// class Moto1 {
//     constructor(power) {
//         this.power = power
//     }
//     ride(){
//         console.log(`${this.power}hp`)
//     }
// }
//
//
// function Moto2(){
//     this.power = power
// }
//
// const m1 = new Moto2(125)
// m1.ride()


// 'use strict'
// const someFunc = () => {
//     console.log(this)
// }

// function someFunc (){
//     console.log(this)
// }

// someFunc()

//-----------map-------------------------

// const customMap = (el, i, arr) => {
//
//     let newArr = []
//
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(el + 100)
//     }
//
//     return console.log(newArr)
//
// }
// // customMap([1,2,3,4,5])
//
// Array.prototype.customMap = function (cd) {
//     let newArr = []
//
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(cd(this[i]))
//     }
//     return newArr
//
// }
//
// const exampleArray = [1, 2, 3, 4, 5]
//
// console.log(exampleArray.customMap(el => el.toString()));

//------class constructor--------------------------------------

// class BaseUser0 {
//     static NAME_LENGTH = 25
//
//     constructor(name) {
//         this.name = name
//     }
// }
//
// class User0 extends BaseUser0{}
//
// //------function constructor--------------------------------------
//
// function BaseUser(name) {
//     this.name = name
// }
//
// BaseUser.NAME_LENGTH = 25
//
// BaseUser.prototype.sayHi = function () {
//     console.log('Hello')
// }
//
// function User(){}
// User.prototype.__proto__ = BaseUser.prototype
//
// console.log(User.NAME_LENGTH);          // undefined
// console.log(BaseUser.NAME_LENGTH);      //  25
//
// User.__proto__ = BaseUser
// console.log(User.NAME_LENGTH);          //  25

//------------------map------------------------------------
// function myMap(cb) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         res.push(cb(this[i]))
//     }
//     return res
// };
//
// Array.prototype.myMap = myMap
//
// console.log([1, 2, 3].myMap(el => el + 10000));

//----------------------promisetion---------------------

// const readFile = (path, cb) => {
//     if (path) {
//         cb(null, 'Hello')
//     } else {
//         cb('invalid path', null)
//     }
// }
//
// readFile('', (err, data) => {
//         if (err) {
//         } else {
//         }
//     }
// )
//
// const readFilePr = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
//
// readFilePr.then(res => console.log(res))

//-----------------------------------------
function Test(name) {
    this.name = name
}

function first() {
    console.log(`name: ${this.name}`)
}

this.name = '111111111111'

const second = () => {
    // this.name = '22222222222222'
    console.log(`name: ${this.name}`)
}

const user = {
    name: 'Bob',
    first: first,
    second: second
}

user.first()
user.second()


