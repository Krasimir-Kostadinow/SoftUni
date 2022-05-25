(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    
    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            const el = this[i];
            result.push(el);
        }
        return result;
    }
    
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            const el = this[i];
            result.push(el);
        }
        return result;
    }
    
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            const el = this[i];
            sum += el;
        }
        return sum;
    }
    
    Array.prototype.average = function () {
        return this.sum() / this.length;
    } 
})();

let myArray = [1, 2, 3, 4, 5];

console.log(myArray.skip(3));