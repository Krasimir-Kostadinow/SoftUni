function repeadString(str, n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += str;
    }

return result;

}
let string = repeadString('abc', 3);

console.log(string);