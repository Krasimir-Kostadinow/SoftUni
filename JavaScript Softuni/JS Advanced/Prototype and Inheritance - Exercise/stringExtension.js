
(function solve(params) {

    String.prototype.ensureStart = function (str) {
        let startStr = '';
        for (let i = 0; i < this.length; i++) {
            const el = this[i];
            if (el === ' ') {
                break;
            }
            startStr += el;
        }

        if (startStr !== str.trim()) {
            return `${str.trim()} ${this}`;
        } else {
            return `${this}`;
        }
    }

    String.prototype.ensureEnd = function (str) {
        let endArr = [];
        for (let i = this.length - 1; i > 0; i--) {
            const el = this[i];
            if (el === ' ') {
                break;
            }
            endArr.unshift(el);
        }

        let endStr = endArr.join('');
        if (endStr !== str.trim()) {
            return `${this} ${str.trim()}`;
        } else {
            return `${this}`;
        }
    }

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            let str = '';
            for (let i = 0; i < n; i++) {
                const el = this[i];
                str += '.';
            }
            return `${str}`;
        } else if (n >= this.length) {
            return `${this}`;
        } else if (this.length > n) {
           

            let lastSpace = this.substring(0, n - 2).lastIndexOf(' ');
            if (lastSpace !== -1) {
                return `${this.substring(0, lastSpace)}...`;
            } else {
                return `${this.substring(0, n - 3)}...`;
            }
        }

    }

    String.format = function (string, ...params) {
        let output = [];
        let arrOutput = string.split(' ');
        for (let i = 0; i < arrOutput.length; i++) {
            let el = arrOutput[i];

            if (el.includes('{')) {
                let index = el.split('');
                index.shift();
                index.pop();
                index = Number(index[0]);
                if (params[index] === undefined) {
                    output.push(el);
                } else {
                    output.push(params[index]);
                }

            } else {
                output.push(el);
            }

        }

        return output.join(' ');

    }

})();


// let str = 'quick brown fox jumps over the lazy dog';
// str = str.ensureStart('the ');
// console.log(str);
// str = str.ensureStart('the ');
// console.log(str);

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log();
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
//     console.log(str);
// str = String.format('jumps {0} {1}',
//     'dog');
//     console.log(str);
// judge 66/100

