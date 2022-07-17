// const a = {}
// const b = {}
// const c = {
//     toString() {
//         return 'some error'
//     }
// }
//
// a[b] = 'b'
// b[c] = 'b'
// console.log(a)              // { '[object Object]': 'b' }
// console.log(b)              // { 'some error': 'b' }

//-----------------------------------------------------------

//'use strict'

// ;(() => {
//     let a = b = 42       // if no strict --- b  ---  Window.b === 42
// })()
//
// console.log(a)
// console.log(b)

//----------------------

// 'use strict'

// const a = {
//     name: 'a',
//     logName(){
//         console.log(this)
//         console.log(this.name)
//     }
// }
//
// setTimeout(a.logName, 100)

//////////////////////

// console.log([1,2,3] + true)
// console.log({} + {})
// console.log('2' * 3 + true)