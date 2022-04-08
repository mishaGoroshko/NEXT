const person = {
    name: 'Miha'
}
function info(phone, email){
    console.log(`Имя: ${this.name}, Тел.: ${phone}  Email.: ${email}`);
}
// const bound = info.bind(person)
// bound()
info.bind(person)('123123', 'miagor@gmail.com')
info.bind(person,'123123') ('miagor@gmail.com')
info.bind(person, '123123', 'miagor@gmail.com')()