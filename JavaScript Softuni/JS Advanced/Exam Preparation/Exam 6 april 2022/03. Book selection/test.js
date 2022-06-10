let assert = require('chai').assert;
const bookSelection = require('./bookSelection');

describe("Testes", function () {
    describe("Test isGenreSuitable", function () {

        it("not Suitable", function () {
            let result = bookSelection.isGenreSuitable('Thriller', 10);
            assert.equal(result, 'Books with Thriller genre are not suitable for kids at 10 age');
        });
        it("Suitable", function () {
            let result = bookSelection.isGenreSuitable('Fantasy', 10);
            assert.equal(result, 'Those books are suitable');
        });
        it("Suitable", function () {
            let result = bookSelection.isGenreSuitable('Horror', 15);
            assert.equal(result, 'Those books are suitable');
        });
        it("Suitable", function () {
            let result = bookSelection.isGenreSuitable('Horror', 12);
            assert.equal(result, 'Books with Horror genre are not suitable for kids at 12 age');
        });

    });
    describe('Test isItAffordable', function () {

        it("Affordable", function () {
            let result = bookSelection.isItAffordable(55, 120);
            assert.equal(result, 'Book bought. You have 65$ left');
        });
        it("not Affordable", function () {
            let result = bookSelection.isItAffordable(55, 50);
            assert.equal(result, "You don't have enough money");
        });
        it("Affordable", function () {
            let result = bookSelection.isItAffordable(15, 15);
            assert.equal(result, 'Book bought. You have 0$ left');
        });
        it("TypeError Invalid input", function () {
            let result;
            try {
                result = bookSelection.isItAffordable('Horror', 12);
            } catch (err) {
                result = (err.message);
            }
            assert.equal(result, 'Invalid input');
        });
        it("TypeError Invalid input", function () {
            let result;
            try {
                result = bookSelection.isItAffordable(12, true);
            } catch (err) {
                result = (err.message);
            }
            assert.equal(result, 'Invalid input');
        });

    });
    describe('Test suitableTitles', function () {

        it("There is a match", function () {
            let result = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Saw", genre: "Horror" },{ title: "Hacker", genre: "Thriller" }, { title: "The Da Vinci", genre: "Thriller" }, { title: "Witcher", genre: "Fantasy" },], "Thriller");
            assert.deepEqual(result, ['The Da Vinci Code', 'Hacker', 'The Da Vinci']);
        });
        it("Type Error Invalid input", function () {
            let result;
            try {
                result = bookSelection.suitableTitles('[is not array]', "Thriller");
            } catch (err) {
                result = err.message;
            }
            assert.equal(result, "Invalid input");
        });
        it("Type Error Invalid input", function () {
            let result;
            try {
                result = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Saw", genre: "Horror" },{ title: "Hacker", genre: "Thriller" }, { title: "The Da Vinci", genre: "Thriller" }, { title: "Witcher", genre: "Fantasy" },], 77);
            } catch (err) {
                result = err.message;
            }
            assert.equal(result, "Invalid input");
        });

        it("Type Error Invalid input", function () {
            let result;
            try {
                result = bookSelection.suitableTitles(false, 77);
            } catch (err) {
                result = err.message;
            }
            assert.equal(result, "Invalid input");
        });

        it("Type Error Invalid input", function () {
            let result;
            try {
                result = bookSelection.suitableTitles('false', 77);
            } catch (err) {
                result = err.message;
            }
            assert.equal(result, "Invalid input");
        });
 
    });
    
});
