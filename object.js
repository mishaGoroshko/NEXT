const person = Object.create(           // передаем дав параметра: {},{}
    {
        calculateAge() {
            console.log('Age', new Date().getFullYear() - this.birthYear);
        }
    },
    {
        name: {
            value: 'Miha',
            enumerable: true,       //propertyDescriptor: чтобы было видно в цикле for, изначальное значение false
            writable: true,          // propertyDescriptor: который говорит, что нельзя изменять объект, изначальное значение false
            configurable: true         //propertyDescriptor: говорит, что мы можем удалять коакй-либо ключ в объекте

        },
        birthYear: {
            value: 1989,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red'
                console.log('Set age', value);
            }
        }
    })

//  Простой способ
// const person = {
//     name: 'Miha',
//     birthYear: 1989
// }

// person.name = 'Alinka'
// person.birthYear = 1994

// for (let key in person) {
//     console.log('key', key, person[key]);        //цикл не видит ключей, в отличии от простого способа
// }

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key', key, person[key]);
    }
}
