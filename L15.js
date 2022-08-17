// class Test {
//     testDefault = '123' // will be in everyone instance
//
//     static TEST_LENGTH = 42
//
//     constructor(name) {
//         this.name = name
//     }
//
//     hi() {
//         console.log(this.name)
//     }
//
//     hi2 = () => {
//         console.log(this.name)
//     }
//
//     static hiStatic(){
//         console.log(this)
//     }
// }
//
// class ExtraTest extends Test {
//     constructor(name, age) {
//         super(name);
//         this.age = age
//     }
//
//     hi() {
//         super.hi()
//         console.log(this.age)
//     }
// }
//
// const test1 = new Test('Jon')
//
// Test.hiStatic()


//-------------------------

function CustomPromise(cb){

    function resolve(res){
        this.status = fulfilled
        this.result = res

    }
    function reject(error){
        this.status = rejected
        this.result = error
    }

    cb(resolve, reject)

}