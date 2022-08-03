const group = {
    name: 'Group-1',
    users: ['Jon', 'Bob'],
    showUsers() {

        const handle = function (user) {
            console.log(this.name, user)
        }

        //при стрелочной функции отработает все нормально
        // const handle = (user) => {
        //     console.log(this.name, user)
        // }

        // group.users.forEach(handle)
        // не видим как вызывается handle, значит this будет потерян

        group.users.forEach(handle.bind(this)) // решение -- вызвать через bind

        // group.users.forEach(handle, this) // решение -- вторым параметром this
    }
}

group.showUsers()


//----------------------------------------------------------------------------------------
console.log('----------------------------this-------------------------------------------')

const user = {
    sleep() {
        this.isSleeping = true
    }
}

const join = Object.create(user)

join.sleep()

console.log(join.isSleeping)


//----------------------------------------------------------------------------------------
console.log('----------------------------__proto__--------------------------------------')

console.log([].__proto__.__proto__ === null)

console.log((() => { }).__proto__.__proto__ === Object.prototype)

console.log(Object.__proto__ === (() => { }).__proto__)