let assert = require('chai').assert;
const cinema = require('./cinema');

describe("Testes", function () {
    describe("Test showMovies", function () {

        it('show movies', function () {
            let result = cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']);
            assert.equal(result, 'King Kong, The Tomorrow War, Joker');
        });

        it('show movies', function () {
            let result = cinema.showMovies(['King Kong']);
            assert.equal(result, 'King Kong');
        });

        it('show movies', function () {
            let result = cinema.showMovies([15, 55, true, 'stop']);
            assert.equal(result, '15, 55, true, stop');
        });

        it("no movies", function () {
            let result = cinema.showMovies([]);
            assert.equal(result, 'There are currently no movies to show.');
        });

    });

    describe('Test ticketPrice', function () {

        it("valid input", function () {
            let result = cinema.ticketPrice('Premiere');
            assert.equal(result, 12);
        });

        it("valid input", function () {
            let result = cinema.ticketPrice('Normal');
            assert.equal(result, 7.5);
        });

        it("valid input", function () {
            let result = cinema.ticketPrice('Discount');
            assert.equal(result, 5.5);
        });

        it("invalid input", function () {
            let result;
            try {
                result = cinema.ticketPrice('Norm');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid projection type.');
        });

    });


    describe('Test swapSeatsInHall', function () {

        it('invalid input number is not integer', function () {
            let result = cinema.swapSeatsInHall(5.5, 15);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not positive', function () {
            let result = cinema.swapSeatsInHall(-5, 15);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not number', function () {
            let result = cinema.swapSeatsInHall('5', 15);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not number', function () {
            let result = cinema.swapSeatsInHall(15);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not number', function () {
            let result = cinema.swapSeatsInHall(15, 21);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not number', function () {
            let result = cinema.swapSeatsInHall([15], [20]);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not number', function () {
            let result = cinema.swapSeatsInHall(true, false);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not number', function () {
            let result = cinema.swapSeatsInHall(0, 2);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number is not number', function () {
            let result = cinema.swapSeatsInHall(8, 0);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input number > 20', function () {
            let result = cinema.swapSeatsInHall(21, 15);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('invalid input firstNumber = secondNumber', function () {
            let result = cinema.swapSeatsInHall(15, 15);
            assert.equal(result, 'Unsuccessful change of seats in the hall.');
        });

        it('valid input', function () {
            let result = cinema.swapSeatsInHall(10, 15);
            assert.equal(result, 'Successful change of seats in the hall.');
        });

        it('valid input', function () {
            let result = cinema.swapSeatsInHall(10, 20);
            assert.equal(result, 'Successful change of seats in the hall.');
        });

        it('valid input', function () {
            let result = cinema.swapSeatsInHall(20, 15);
            assert.equal(result, 'Successful change of seats in the hall.');
        });

    });

});







