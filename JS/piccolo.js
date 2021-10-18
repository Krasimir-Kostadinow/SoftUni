function piccolo(input) {
    // function numCar(carNumber) {
   
    //     let numCar = '';
    //     for (let el of carNumber) {
    //         let num = el.charCodeAt();
    //         if (num > 47 && num < 58) {
    //             numCar += el;
    //         }
    //     }
    //     numCar = Number(numCar);
    //     return numCar;
    // }

    let parking = new Map();
    input.forEach(el => {
        let [direction, numberCar] = el.split(', ');
        parking.set(numberCar, direction);
    });
    let arr = Array.from(parking);
    let parkingIn = [];
    arr.forEach(el => {
        if (el[1] === 'IN') {
            parkingIn.push(el[0]);
        }
    });

    // parkingIn.sort((a, b) => {
    //     let numA = numCar(a);
    //     let numB = numCar(b);
    //     return Number(numA) - Number(numB);
    // })
    parkingIn.sort();
 if (parkingIn.length === 0) {
     console.log('Parking Lot is Empty');
 } else {
     parkingIn.forEach(el => {
         console.log(el);
     });
 }

}
piccolo(
    ['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, X2822UU']

);