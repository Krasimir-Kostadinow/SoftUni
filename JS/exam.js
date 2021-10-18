function numCar(carNumber) {
   
    let numCar = '';
    for (let el of carNumber) {
        let num = el.charCodeAt();
        if (num > 47 && num < 58) {
            numCar += el;
        }
    }
    numCar = Number(numCar);
    return numCar;
}
numCar('CA2866HI');
console.log(numCar('CA2866HI'));