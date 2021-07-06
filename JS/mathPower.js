function mathPower(number, power) {

    let result = 1;

    for (let i = 0; i < power; i++) {
        
       result *= number;
      
    }
    return result;
} 

let product = mathPower(3, 4);
console.log(product);