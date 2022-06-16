let assert = require('chai').assert;
let rentCar = require('./rentCar');

describe("Tests …", function () {

    describe("Test ", function () {
        it("Exist model", function () {
            let result = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi');
            assert.equal(result, 'There is 1 car of model Audi in the catalog!');
        });
        it("Not Exist model", function () {
            let result;
            try {
               result = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Opel');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'There are no such models in the catalog!');
        });
        it("Invalid parameter model", function () {
            let result;
            try {
               result = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 12);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
        it("Invalid parameter shop", function () {
            let result;
            try {
               result = rentCar.searchCar("Volkswagen", "BMW", "Audi", 'Audi');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
    });

    describe("Test calculatePriceOfCar", function () {
        it("Exist model", function () {
            let result = rentCar.calculatePriceOfCar('Toyota', 3);
            assert.equal(result, 'You choose Toyota and it will cost $120!');
        });
        it("Not Exist model", function () {
            let result;
            try {
               result = rentCar.calculatePriceOfCar('Opel', 3) ;
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'No such model in the catalog!');
        });
        it("Invalid parameter model", function () {
            let result;
            try {
               result = rentCar.calculatePriceOfCar(["Volkswagen", "BMW", "Audi"], 12);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
        it("Invalid parameter days", function () {
            let result;
            try {
               result = rentCar.calculatePriceOfCar("Audi", 'Opel');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
    });

    describe("Test checkBudget", function () {
        it("Budget enough", function () {
            let result = rentCar.checkBudget(40, 3, 800);
            assert.equal(result, 'You rent a car!');
        });
        it("Budget enough", function () {
            let result = rentCar.checkBudget(40, 3, 120);
            assert.equal(result, 'You rent a car!');
        });
        it("Budget not enough", function () {
            let result = rentCar.checkBudget(40, 3, 80);
            assert.equal(result, 'You need a bigger budget!');
        });
        it("Parameter cost invalid", function () {
            let result;
            try {
               result = rentCar.checkBudget('Opel', 3, 20) ;
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
        it("Parameter days invalid", function () {
            let result;
            try {
               result = rentCar.checkBudget(30, 'day', 20) ;
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
        it("Parameter budget invalid", function () {
            let result;
            try {
               result = rentCar.checkBudget(30, 3, 'Budget');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
 
    });
});
