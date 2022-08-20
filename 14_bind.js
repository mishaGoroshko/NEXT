Function.prototype.customBind = function (context, ...args) {
    return (...props) => {
        return this.call(context, ...args.concat(props))
    }

}

function log(...props) {
    console.log(this.name, this.age, ...props)
}

const person = {name: 'Miha', age: 33}

log.customBind(person, 111, 222)()
log.customBind(person)(111, 222)