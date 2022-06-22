let assert = require('chai').assert;
const flowerShop = require('./flowerShop');

describe("Testes", function () {
    describe("Test calcPriceOfFlowers", function () {

        it("invalid input flower", function () {
            let result;
            try {
                result = flowerShop.calcPriceOfFlowers(2, 5, 5);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
        it("invalid input price", function () {
            let result;
            try {
                result = flowerShop.calcPriceOfFlowers('rose', 'rese', 5);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
        it("invalid input quantity", function () {
            let result;
            try {
                result = flowerShop.calcPriceOfFlowers('rose', 5, 'roze');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
        it("valid result", function () {
            let result = flowerShop.calcPriceOfFlowers('rose', 5, 4);
            assert.equal(result, 'You need $20.00 to buy rose!');
        });


    });

    describe('Test chackFlowersAvilable', function () {

        it("Avilable", function () {
            let result = flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]);
            assert.equal(result, 'The Rose are available!');
        });

        it("not Avilable", function () {
            let result = flowerShop.checkFlowersAvailable('Roze', ["Rose", "Lily", "Orchid"]);
            assert.equal(result, 'The Roze are sold! You need to purchase more!');
        });
    });


    describe('Test sellFlowers', function () {

        it("valid result", function () {
            let result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2);
            assert.equal(result, 'Rose / Lily');
        });

        it("invalid input isNotArray", function () {
            let result;
            try {
                result = flowerShop.sellFlowers('Roze', 2);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });

        it("invalid input isNotInteger", function () {
            let result;
            try {
                result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2.12);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });

        it("invalid input space < 0", function () {
            let result;
            try {
                result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -2);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });

        it("invalid input space >= array.length", function () {
            let result;
            try {
                result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input!');
        });
    });
});



