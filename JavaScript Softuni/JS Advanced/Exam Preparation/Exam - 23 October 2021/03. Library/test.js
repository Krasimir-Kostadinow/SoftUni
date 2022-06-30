let assert = require('chai').assert;
const library = require('./library');

describe("Testes", function () {
    describe("Test clacPriceOfBoock", function () {

        it("valid input", function () {
            let result = library.calcPriceOfBook('Shantaram', 2003);
            assert.equal(result, 'Price of Shantaram is 20.00');
        });

        it("valid input year <= 1980", function () {
            let result = library.calcPriceOfBook('Shantaram', 1980);
            assert.equal(result, 'Price of Shantaram is 10.00');
        });

        it("invalid input year is not number", function () {
            let result;
            try {
                result = library.calcPriceOfBook('Shantaram', '2003');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input');
        });

        it("invalid input year is not integer", function () {
            let result;
            try {
                result = library.calcPriceOfBook('Shantaram', 2.003);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input');
        });

        it("invalid input nameOfBook is not string", function () {
            let result;
            try {
                result = library.calcPriceOfBook(6, 2003);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input');
        });

        it("invalid input nameOfBook is not string", function () {
            let result;
            try {
                result = library.calcPriceOfBook(['Shantaram'], 2003);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input');
        });

    });

    describe('Test findBook', function () {

        it("valid input", function () {
            let result = library.findBook(["Troy", "Life Style", "Torronto"], 'Troy');
            assert.equal(result, 'We found the book you want.');
        });

        it("valid input", function () {
            let result = library.findBook(["Troy", "Life Style", "Torronto"], 'Shantaram');
            assert.equal(result, 'The book you are looking for is not here!');
        });

        it("invalid input arrBooks = 0", function () {
            let result;
            try {
                result = library.findBook([], 'Shantaram');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'No books currently available');
        });

    });


    describe('Test arrangeTheBooks', function () {

        it('invalid input number is not integer', function () {
            let result;
            try {
                result = library.arrangeTheBooks(5.5);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input');
        });

        it('invalid input number is not positive', function () {
            let result;
            try {
                result = library.arrangeTheBooks(-5);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input');
        });

        it('invalid input number is not number', function () {
            let result;
            try {
                result = library.arrangeTheBooks('5');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input');
        });

        it('valid input', function () {
            let result = library.arrangeTheBooks(41);
            assert.equal(result, 'Insufficient space, more shelves need to be purchased.');
        });

        it('valid input', function () {
            let result = library.arrangeTheBooks(5);
            assert.equal(result, 'Great job, the books are arranged.');
        });

        it('valid input', function () {
            let result = library.arrangeTheBooks(40);
            assert.equal(result, 'Great job, the books are arranged.');
        });
    });
});





