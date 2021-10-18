function addressBook(input) {
    //input.sort((a, b) => a.localeCompare(b));
    let arr = input.map(el => el.split(':'));

    let book = new Map();

    for (const el of arr) {
        let [name, address] = el;
        book.set(name, address);
    }

    let sortArr = [];

    book.forEach((value, key, map) => {
        sortArr.push([key, value]);
    });
sortArr.sort((a, b) => a[0].localeCompare(b[0]));

for (const el of sortArr) {
    let [name, address] = el;
    console.log(`${name} -> ${address}`);
}

}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);