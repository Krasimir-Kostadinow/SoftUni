function oddOccurrences(input) {
    let lowerCase = input.toLowerCase().split(' ');

    let map = new Map();

    lowerCase.forEach(el => {
        if (map.has(el)) {
            let value = map.get(el);
            map.set(el, value + 1);
        } else {
            map.set(el, 1);
        }
    });
 
let array = Array.from(map);
let output = [];
for (const [word, count] of array) {
    
    if (count % 2 !== 0) {
      output.push(word);  
    }
}
    console.log(output.join(' '));
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
