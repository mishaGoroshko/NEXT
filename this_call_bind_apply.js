function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Miha',
    age: 32,
    sayHello: hello,
    // sayHelloWindow: hello.bind(window)
    // sayHelloWindow: hello.bind(this)  //в данном случае this === window
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`phone is ${phone}`);
        console.groupEnd();
    }
}

const Alina = {
    name: 'Alinka',
    age: 27
}

person.logInfo.bind(Alina)()  //bind НЕ ВЫЗЫВАЕТ ФУНКЦИЮ, а возвращает НОВУЮ, поэтому добавляем ()

// const fnAlinaInfoLog = person.logInfo.bind(Alina)  
// fnAlinaInfoLog('manager','+37525123123')

person.logInfo.bind(Alina, 'manager', '+37525123123')()
person.logInfo.call(Alina, 'manager', '+37525123123')     // call ВЫЗЫВАЕТ ФУНКЦИЮ, () не нужны  
person.logInfo.apply(Alina, ['manager', '+37525123123'])    //call отличается от apply только способом передачи переменых

///================================
const array = [1, 2, 3, 4, 5]

// function multBy(arr,n){
//     return arr.map(function(i){
//         return i * n
//     })
// }
// console.log(multBy(array, 4))



Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })

}

console.log(array.multBy(2))