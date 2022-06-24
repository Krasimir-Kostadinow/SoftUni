
class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.avilableProducts = [];
        this.totalPrice = 0;
    }


    loadingVegetables(vegetales) {
        let addVegetable = [];
        for (let el of vegetales) {
            let vegetable = el.split(' ');
            let type = vegetable[0];
            let quantity = Number(vegetable[1]);
            let price = Number(vegetable[2]);
            let isExists = false;
            for (let product of this.avilableProducts) {
                if (product.type === type) {
                    isExists = true;
                    product.quantity += quantity;
                    if (product.price < price) {
                        product.price = price;
                    }
                    if (!addVegetable.includes(type)) {
                        addVegetable.push(type);
                    }
                } else {
                    isExists = false;
                }
            }
            if (!isExists) {
                this.avilableProducts.push({ type, quantity, price })
                addVegetable.push(type);
            }
        }

        return `Successfully added ${addVegetable.join(', ')}`;

    }


    buyingVegetables(selectedProducts) {
        this.totalPrice = 0;
        for (let currentProduct of selectedProducts) {
            let el = currentProduct.split(' ');
            let type = el[0];
            let quantity = Number(el[1]);
            let isExists = false;

            for (let product of this.avilableProducts) {

                if (product.type === type) {
                    isExists = true;
                    if (quantity > product.quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${this.totalPrice.toFixed(2)}.`);
                    }
                    let priceProduct = (quantity * product.price)
                    this.totalPrice += priceProduct;
                    product.quantity -= quantity;
                  
                } 
            }

            if (!isExists) {
                throw new Error(`${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(2)}.`);
            }
         
        }

        return `Great choice! You must pay the following amount $${this.totalPrice.toFixed(2)}.`;
    }

}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.buyingVegetables(["Okra 1"]));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

