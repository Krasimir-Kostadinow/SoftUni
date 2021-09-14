function dictinary(input) {

    let newArrObj = {};
    let objectArr = input.map(el => JSON.parse(el));
    let sortKey = objectArr.map(el => Object.keys(el)).sort().join(',').split(',');

    for (let i = 0; i < objectArr.length; i++) {
        let obj = objectArr[i];
        let key = Object.keys(obj);
        let strKey = key[0];
        let index = sortKey.indexOf(strKey);
   
        sortKey.splice(index, 1, obj);
     
    }

    for (let obj of sortKey) {
        for (let key in obj) {
            newArrObj[key] = obj[key];
        }
    }

for (let key in newArrObj) {
  console.log(`Term: ${key} => Definition: ${newArrObj[key]}`);
}


}
dictinary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]    
);