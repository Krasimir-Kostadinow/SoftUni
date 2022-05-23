function solution(input) {
    let stock = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    return function (input) {

        let recipe = {
            apple: { carbohydrate: 1, flavour: 2 },
            lemonade: { carbohydrate: 10, flavour: 20 },
            burger: { carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        };



        let [command, elementOrRecipe, quantity] = input.split(' ');
        quantity = Number(quantity);

        if (command === 'restock') {
            if (stock.hasOwnProperty(elementOrRecipe)) {
                stock[elementOrRecipe] += quantity;
            } else {
                stock[elementOrRecipe] = quantity;
            }
            return 'Success';
        } else if (command === 'prepare') {
            let isReturn = true;
            let element;
            let isCheck = true;
            for (const key in recipe[elementOrRecipe]) {

                if (stock[key] < recipe[elementOrRecipe][key] * quantity) {
                    isCheck = false;
                    element = key;
                    break;
                }

            }
            if (isCheck) {
                for (let key in recipe[elementOrRecipe]) {


                    if (stock[key] >= recipe[elementOrRecipe][key] * quantity) {
                        stock[key] -= recipe[elementOrRecipe][key] * quantity;

                    } else {
                        stock[key] = 0;
                        isReturn = false;
                        return `Error: not enough ${key} in stock`;
                        element = key;
                    }


                }

            } else {
                return `Error: not enough ${element} in stock`;
            }
            if (isReturn) {
                return 'Success'
            } else {
                return `Error: not enough ${element} in stock`;
            }
        


    } else if (command === 'report') {
        let report = [];
        for (let key in stock) {
            let el = `${key}=${stock[key]}`;
            report.push(el);
        }
        return report.join(' ');
    }
}



}
let manager = solution();
console.log(manager("restock flavour 50 "));
console.log(manager("prepare lemonade 4 "));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));




