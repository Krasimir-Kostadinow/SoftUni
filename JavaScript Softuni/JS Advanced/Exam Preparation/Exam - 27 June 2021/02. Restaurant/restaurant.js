class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }



    loadProducts(products) {
        let output = [];
        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += Number(productQuantity);
                    this.budgetMoney -= Number(productTotalPrice);

                } else {
                    this.stockProducts[productName] = Number(productQuantity);
                    this.budgetMoney -= Number(productTotalPrice);
                }
                output.push(`Successfully loaded ${productQuantity} ${productName}`);
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                output.push(`There was not enough money to load ${productQuantity} ${productName}`);
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }

        }
        return output.join('\n');
    }

    addToMenu(meal, neededProducts, price) {

        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        } else {
            this.menu[meal] = { products: neededProducts, price: price };
        }

        let menuArray = Object.keys(this.menu);

        if (menuArray.length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${menuArray.length} meals in the menu, other ideas?`;
        }

    }

    showTheMenu() {
        let menuArray = Object.keys(this.menu);
        let output = [];
        if (menuArray.length > 0) {
            for (const meal in this.menu) {
                output.push(`${meal} - $ ${this.menu[meal].price}`);
            }
        } else {
            return 'Our menu is not ready yet, please come later...';
        }

        return output.join('\n');
    }


}

let kitchen = new Restaurant(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
