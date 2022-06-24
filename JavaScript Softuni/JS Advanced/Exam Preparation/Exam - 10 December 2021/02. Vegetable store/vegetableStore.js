
class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.avilableProducts = [];
        this.totalPrice = 0.00;
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
        this.totalPrice = 0.00;
        for (let currentProduct of selectedProducts) {
            let el = currentProduct.split(' ');
            let type = el[0];
            let quantity = Number(el[1]);
            let isExists = false;

            for (let i = 0; i < this.avilableProducts.length; i++) {
                let product = this.avilableProducts[i];
                if (product.type === type) {
                    isExists = true;
                    if (quantity > product.quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${this.totalPrice.toFixed(2)}.`);
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

    rottingVegetable(type, quantity) {
        let isExists = false;
     
        for (let product of this.avilableProducts) {
            if (product.type === type) {
                isExists = true;
                if (product.quantity <= quantity) {
                    product.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`
                } else {
                    product.quantity -= quantity;
                    return `Some quantity of the ${type} has been removed.`
                }

            }


        }
        if (!isExists) {
            throw new Error(`${type} is not available in the store.`);
        }

    }

    revision() {
        let output = 'Available vegetables:';
        let copy = this.avilableProducts.slice();
        copy.sort((a, b) => a.price - b.price);
        copy.forEach(product => {
            output += `\n${product.type}-${product.quantity}-$${product.price}`;
        });
        output += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return output;
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());




