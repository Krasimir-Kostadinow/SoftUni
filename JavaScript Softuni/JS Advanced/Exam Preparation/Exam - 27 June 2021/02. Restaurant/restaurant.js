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

    makeTheOrder(meal) {

        let isExists = false;


        if (this.menu.hasOwnProperty(meal)) {
            let needProducts = this.menu[meal].products;
            for (let el of needProducts) {
                let [productName, productQuantity] = el.split(' ');
                productQuantity = Number(productQuantity);
                if (this.stockProducts.hasOwnProperty(productName) && this.stockProducts[productName] >= productQuantity) {
                    isExists = true;
                } else {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }

            }

        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        if (isExists) {
            let needProducts = this.menu[meal].products;
            for (let el of needProducts) {
                let [productName, productQuantity] = el.split(' ');
                productQuantity = Number(productQuantity);
                this.stockProducts[productName] -= productQuantity;
            }
            this.budgetMoney += Number(this.menu[meal].price);
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }

    }

}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));



