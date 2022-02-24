class Class {
    constructor() {
        this.arr = []
        this.size = 0
    }

    add(element) {
        this.arr.push(element)
        this.size += 1
        return this.arr.sort((a, b) => {
            return a - b
        })
    }

    remove(index) {
        if (this.arr.length > index && index >= 0) {
            this.arr.splice(index, 1)
            this.size--
        } else {
            throw new Error
        }
        return this.arr.sort((a, b) => {
            return a - b
        })
    }

    get(index) {
        if (this.arr.length > index && index >= 0) {
            return this.arr[index]
        } else {
            throw new Error
        }
    }
}


var myList = new Class();
console.log(myList.size())
myList.add(5)
console.log(myList.get(0))
console.log(myList.size())

