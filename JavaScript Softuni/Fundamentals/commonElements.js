function commonElements (firstArray, secondArray) {
    
    for (let firstElement of firstArray) {
        for (let secondElement of secondArray) {
            if ( firstElement === secondElement) {
                console.log(firstElement);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);