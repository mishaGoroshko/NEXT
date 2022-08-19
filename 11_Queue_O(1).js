// class Queue {
//
//     #storage = {}
//     #first = 0
//     #last = 0
//
//     constructor() {
//     }
//
//     enqueue(item) {
//         this.#storage[this.#last] = item
//         this.#last++
//
//         // todo: добавить элемент в конец очереди
//     }
//
//     dequeue() {
//         if (this.size === 0) return
//
//         delete this.#storage[this.#first]
//         this.#first++
//
//         // todo: удалить первый элемент из очереди
//     }
//
//     get size() {
//         return this.#last - this.#first
//         // todo: возвращает размер списка
//         // нельзя использовать геттер
//     }
// }
//
// const queue1 = new Queue()
//
// queue1.enqueue(1)
// queue1.enqueue(2)
// queue1.enqueue(3)
// queue1.dequeue(3)
//
// console.log(queue1.size)


class LinkedList {
    #length = 0
    #head = null
    #tail = null

    addToTail(value) {
        const node = {
            value,
            next: null
        }

        if (this.#length === 0) {
            this.#head = node
            this.#tail = node
        } else {
            this.#tail = node
        }

        this.#length++
    }

    removeFromHead() {
        if (this.#length === 0) return

        this.#head = this.#head.next
        this.#length--
    }

    size() {
        return this.#length
    }
}

class Queue extends LinkedList {

    #storage = {}
    #first = 0
    #last = 0

    constructor() {
        super()
        this.enqueue = this.addToTail
        this.dequeue = this.removeFromHead
    }

    get size() {
        return super.size()
        // todo: возвращает размер списка
        // нельзя использовать геттер
    }
}

const queue1 = new Queue()

queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.dequeue()

console.log(queue1.size)

