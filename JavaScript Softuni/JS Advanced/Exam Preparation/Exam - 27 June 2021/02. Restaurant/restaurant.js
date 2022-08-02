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



}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
