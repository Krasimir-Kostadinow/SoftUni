function argumentInfo(...arg) {
    let obj = {};
    arg.forEach(el => {
        console.log(`${typeof el}: ${el}`);
        if (obj.hasOwnProperty(typeof el)) {
            obj[typeof el]++;
        } else {
            obj[typeof el] = 1;
        }
    });

    Object.entries(obj).sort((a, b) => {
       return b[1] - a[1];
    }).forEach(el => {
console.log(`${el[0]} = ${el[1]}`);
    });
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });