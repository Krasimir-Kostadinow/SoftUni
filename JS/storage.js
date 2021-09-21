
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(object) {
        this.storage.push(object);
        this.capacity -= object.quantity;
        this.totalCost += object.quantity * object.price;
    }

    getProducts() {
      
        for (let i = 0; i < this.storage.length;i++) {
            
        let result = JSON.stringify(this.storage[i]);
        console.log(result);
        }
        
    }
 

}
let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
