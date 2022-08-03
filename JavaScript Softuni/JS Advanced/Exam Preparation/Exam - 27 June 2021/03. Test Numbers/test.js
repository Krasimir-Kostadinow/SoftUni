let assert = require('chai').assert;
const testNumbers = require('./testNumbers');

describe("Testes", function () {
    describe("Test sumNumber", function () {

        it('valid input', function () {
            let result = testNumbers.sumNumbers(5, -7);
            assert.equal(result, '-2.00');
        });

        it('type !== Number', function () {
            let result = testNumbers.sumNumbers('5', -7);
            assert.equal(result, undefined);
        });

        
        it('type !== Number', function () {
            let result = testNumbers.sumNumbers(5, '-7');
            assert.equal(result, undefined);
        });

        it('type !== Number', function () {
            let result = testNumbers.sumNumbers(5, {});
            assert.equal(result, undefined);
        });

        it('type !== Number', function () {
            let result = testNumbers.sumNumbers([], '4');
            assert.equal(result, undefined);
        });

        it('type is Number', function () {
            let result = testNumbers.sumNumbers(5, 12);
            assert.equal(result, '17.00');
        });

        it('type is Number', function () {
            let result = testNumbers.sumNumbers(5.5, -7);
            assert.equal(result, '-1.50');
        });

    });

    describe('Test numberChecker', function () {

        it('valid input', function () {
            let result = testNumbers.numberChecker(5);
            assert.equal(result, 'The number is odd!');
        });

        it('valid input', function () {
            let result = testNumbers.numberChecker('6');
            assert.equal(result, 'The number is even!');
        });

        it('valid input', function () {
            let result = testNumbers.numberChecker(-6);
            assert.equal(result, 'The number is even!');
        });
        
        it('valid input', function () {
            let result = testNumbers.numberChecker('6.4');
            assert.equal(result, 'The number is odd!');
        });
        
        it("invalid input", function () {
            let result;
            try {
                result = testNumbers.numberChecker('krasi');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'The input is not a number!');
        });

        it("invalid input", function () {
            let result;
            try {
                result = testNumbers.numberChecker({});
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'The input is not a number!');
        });

        it("invalid input", function () {
            let result;
            try {
                result = testNumbers.numberChecker(['krasi', 83]);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'The input is not a number!');
        });


    });


    describe('Test averageSumArray', function () {
        
        it('valid input', function () {
            let result = testNumbers.averageSumArray([5, -5, 5, 6, 12, 5.12, 0]);
            assert.equal(result, 4.017142857142857);
        });


    });

});
