

String.prototype.ensureStart = function (str) {
    let startStr = '';
    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        if (el === ' ') {
            break;
        }
        startStr += el;
    }

    if (startStr !== str) {
        return `${str}${this}`;
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
    if (endStr !== str) {
        return `${this}${str}`;
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
    if (this.length < n) {
        return `${this}`;
    } else if (this.length >= n) {
        let arr = this.split(' ');
        arr.pop();
        arr.push('...');
        arr = arr.join('');
        while (arr.length > n) {
            arr = arr.split(' ');
            arr.pop();
            arr.push('...');
            arr = arr.join('');
        }
        return arr;
    } else if (!this.includes(' ')) {
        let str = '';
        for (let i = 0; i < this.length - 3; i++) {
            const el = this[i];
            str += el;
        }
        return `${str}...`;
    }
}
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');

