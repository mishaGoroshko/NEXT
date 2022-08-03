// single responsibility principle

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.isModified = false
    }

    update(text) {
        this.text = text
        this.isModified = true
    }

    // toHTML() {
    //     return `
    //     <div>News
    //         <h1>${this.title}</h1>
    //         <h3>${this.text}</h3>
    //     </div>`
    // }
    //
    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         isModified: this.isModified
    //     }, null, 2)
    // }
}

class Converter {
    constructor(news) {
        this.news = news
    }

    toHTML() {
        return `
        <div>News
            <h1>${this.news.title}</h1>
            <h3>${this.news.text}</h3>
        </div>`
    }

    toJSON() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            isModified: this.news.isModified
        }, null, 2)
    }
}

const news = new Converter(new News('Big news', "lorem lorem"))

console.log(news.toHTML())
console.log(news.toJSON())

console.log('-----------------------------open close principle---------------------')


class Square {
    constructor(side) {
        this.side = side
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius
        console.log(this)
    }
}

console.log('-----------------------------Liskov substitution---------------------')


