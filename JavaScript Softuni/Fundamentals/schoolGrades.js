function schoolGrades(input) {
    let book = new Map();

    for (const el of input) {
        let arr = el.split(' ');
        let name = arr.shift();
        let grade = arr;
        let isExist = book.has(name);
        if (isExist) {
            let oldGrade = book.get(name);
            grade.forEach(el => {
                oldGrade.push(el);
            });
            book.set(name, oldGrade.map(el => Number(el)));
        } else {
            book.set(name, grade.map(el => Number(el)));
        }

    }
    let sorted = Array.from(book);
    sorted.sort((a, b) => {
      let sumA = a[1].reduce((acc, el) => {
            acc += el;
            return acc;
        }, 0);
        let averageA = sumA / a[1].length;

        let sumB = b[1].reduce((acc, el) => {
            acc += el;
            return acc;
        }, 0);
        let averageB = sumB / b[1].length;
        return averageA - averageB;
    });

    for (let [name, arr] of sorted) {
        console.log(`${name}: ${arr.join(', ')}`);  
    }

}
schoolGrades(
    ['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
    
    
);
    