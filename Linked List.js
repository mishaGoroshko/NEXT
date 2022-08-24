// Linked List

[].push(42);  // O(n)
[1, 2, 3, 4, 5].unshift(42)  // O(n)


class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {                              // add new element to list end
        // const node = {data, next: null}
        const node = new Node(data)

        if (!this.head) {
            this.head = node
        }

        if (this.tail) {
            this.tail.next = node
        }

        this.tail = node
    }

    prepend(data) {
        // const node = {data, next: this.head}
        const node = new Node(data, this.head)

        if (!this.tail) {
            this.tail = node
        }

        this.head = node
    }

    insertAfter(findData, newData) {
        const found = this.find(findData)

        if (!found) return

        found.next = new Node(newData, found.next)
    }


    find(data) {
        let current = this.head

        if (!current) return

        while (current) {
            if (current.data === data) return current
            current = current.next
        }
    }

    remove(data) {
        if (!this.head) return

        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }

        if (this.tail.data === data) {
            this.tail = current
        }
    }

    toArray() {
        const outPut = []
        let current = this.head

        while (current) {
            outPut.push(current)
            current = current.next
        }
        return outPut
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.prepend(-1)
list.append(4)
list.append(5)
list.insertAfter(2, 2.1)
list.remove(2.1)


console.log(list)
console.log(list.toArray())
console.log('----------------------FIND #2-----------------------------------------')
console.log(list.find(2))
console.log('----------------------FIND #4-----------------------------------------')
console.log(list.find(4))
