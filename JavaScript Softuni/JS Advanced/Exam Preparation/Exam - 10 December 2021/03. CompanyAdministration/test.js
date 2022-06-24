let assert = require('chai').assert;
const companyAdministration = require('./companyAdministration');

describe("Testes", function () {
    describe("Test hiringEmployee", function () {

        it("full valid parameter", function () {
            let result = companyAdministration.hiringEmployee('Ivan', 'Programmer', 3);
            assert.equal(result, 'Ivan was successfully hired for the position Programmer.');
        });

        it("not approved, invalid parameter years", function () {
            let result = companyAdministration.hiringEmployee('Ivan', 'Programmer', 2);
            assert.equal(result, 'Ivan is not approved for this position.');
        });

        it("invalid parameter position", function () {
            let result;
            try {
                result = companyAdministration.hiringEmployee('Ivan', 'Master', 4);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'We are not looking for workers for this position.');
        });

    });

    describe('Test calculateSalary', function () {

        it("invalid input", function () {
            let result;
            try {
                result = companyAdministration.calculateSalary('Ivan');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid hours', 'input is string');
        });

        it("invalid input", function () {
            let result;
            try {
                result = companyAdministration.calculateSalary(-1.2);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid hours', 'input is number < 0');
        });

        it("valid input", function () {
            let result = companyAdministration.calculateSalary(160);
            assert.equal(result, 2400, 'worktime <= 160 hours');
        });

        it("valid input", function () {
            let result = companyAdministration.calculateSalary(1.2);
            assert.equal(result, 18, 'worktime <= 160 hours');
        });

        it("valid input", function () {
            let result = companyAdministration.calculateSalary(161);
            assert.equal(result, 3415, 'worktime > 160 hours');
        });
    });


    describe('Test firedEmployee', function () {

        it('valid input', function () {
            let result = companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1);
            assert.equal(result, 'Petar, George');
        });

        it('invalid input', function () {
            let result;
            try {
                result = companyAdministration.firedEmployee(12, 1);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input', 'parameter employee is not array');
        });

        it('invalid input', function () {
            let result;
            try {
                result = companyAdministration.firedEmployee("Petar", 1);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input', 'parameter employee is not array');
        });

        it('invalid input', function () {
            let result;
            try {
                result = companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input', 'parameter index < 0');
        });


      it('invalid input', function () {
            let result;
            try {
                result = companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3);
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input', 'parameter/index/ is not widhin an array');
        });

        it('invalid input', function () {
            let result;
            try {
                result = companyAdministration.firedEmployee(["Petar", "Ivan", "George"], '1');
            } catch (error) {
                result = error.message;
            }
            assert.equal(result, 'Invalid input', 'parameter is string');
        });

    });
});



