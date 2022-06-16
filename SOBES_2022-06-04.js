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
const a = 10
const someFunc = (b) => {
    console.log(a + b)
}
someFunc(23)
