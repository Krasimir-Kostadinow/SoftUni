function arrayRotation (arrey, n) {
    for (let index = 0; index < n; index++) {
        const el = arrey[0]; 
        arrey.push(el);  
       arrey.shift();
    }
console.log(arrey.join(' '));
}
arrayRotation([2, 4, 15, 31], 5);