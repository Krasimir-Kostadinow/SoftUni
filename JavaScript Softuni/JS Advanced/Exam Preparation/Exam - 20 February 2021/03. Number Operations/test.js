let assert = require('chai').assert;
const numberOperations = require('./numberOperations');

describe("Testes", function () {

    describe("Test powNumber", function () {

        it('input number', function () {
            let result = numberOperations.powNumber(5);
            assert.equal(result, 25);
        });

        it('input string', function () {
            let result = numberOperations.powNumber('2');
            assert.equal(result, 4);
        });

    });

    describe('Test numberChecker', function () {

        it('input number < 100', function () {
            let result = numberOperations.numberChecker(99.99);
            assert.equal(result, 'The number is lower than 100!');
        });

        it('input number > 100', function () {
            let result = numberOperations.numberChecker(100.001);
            assert.equal(result, 'The number is greater or equal to 100!');
        });


        it('input number = 100', function () {
            let result = numberOperations.numberChecker(100);
            assert.equal(result, 'The number is greater or equal to 100!');
        });


        it("input NaN", function () {
            let result;
            try {
                result = numberOperations.numberChecker('krasi');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'The input is not a number!');
        });

    });


    describe('Test sumArrays', function () {

        it('output typeof is object', function () {
            let result = numberOperations.sumArrays([3, 5, 33, 12], [33, 4, 1]);
            assert.equal(typeof result, 'object');
        });

        it('first array > second array', function () {
            let result = numberOperations.sumArrays([3, 5, 33, 12], [33, 4, 1]);
            result = result.join(', ')
            assert.equal(result, '36, 9, 34, 12');
        });

        it('first array < second array', function () {
            let result = numberOperations.sumArrays([3, 5, 33], [33, 4.2, 1, 12.1]);
            result = result.join(', ');
            assert.equal(result, '36, 9.2, 34, 12.1');
        });

        it('first parameter not array', function () {
            let result = numberOperations.sumArrays(5, [33, 4.2, 1, 12.1]);
            result = result.join(', ');
            assert.equal(result, 'NaN, NaN, NaN, NaN');
        });

        it('first array = second array', function () {
            let result = numberOperations.sumArrays([3, 5, 33, 12], [33, 4.2, 1, 12.1]);
            result = result.join(', ');
            assert.equal(result, '36, 9.2, 34, 24.1');
        });

        it('One element of array is string', function () {
            let result = numberOperations.sumArrays([3, 5, '33', 12], [33, 4.2, 1, 12.1]);
            result = result.join(', ');
            assert.equal(result, "36, 9.2, 331, 24.1");
        });

        it('One element of array is array', function () {
            let result = numberOperations.sumArrays([3, 5, [33, 22], 12], [33, 4.2, 1, 12.1]);
            result = result.join(', ');
            assert.equal(result, "36, 9.2, 33,221, 24.1");
        });

    });

});
