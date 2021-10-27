function minerTask(array) {

    let resource = {};
    for (let i = 0; i < array.length-1; i++) {
let material = array[i];
let value = Number(array[i + 1]);
        if (i % 2 === 0) {
            let isExists = resource.hasOwnProperty(material);
            if (isExists) {
                let oldValue = resource[material];
                resource[material] = oldValue + Number(value); 
            } else {
                resource[material] = Number(value);
            }
           
        } 
    }
for (const key in resource) {
 console.log(`${key} -> ${resource[key]}`);
}

}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);