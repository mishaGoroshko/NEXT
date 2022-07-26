class Component {

    onClick() {
    }             // в instance будет методом в prototype


    onClick = () => {
    }      // в instance будет методом в самом {}
}

const group = {
    name: 'first',
    users: ['Bob', 'Jon'],

    showUsersWithGroup() {
        group.users.forEach(function (user) {
            console.log(`Group: ${this.name}, User: ${user}`)
        }, this)            //второй параметр forEach ----> thisArg
        // group.users.forEach((user) => {
        //     console.log(`Group: ${this.name}, User: ${user}`)
        // })

    }
}

group.showUsersWithGroup()


// false