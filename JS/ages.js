function vacation(numPeople, type, day) {
    numPeople = Number(numPeople);
    let price = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            if (numPeople >= 30) {
                price *= 0.85;
            }
            break;
        case 'Bussnes':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            if (numPeople >= 100) {
                numPeople /= 10; 
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            if (numPeople >= 10 && numPeople <= 20) {
                price *= 0.95;
            }
            break;
    }
let totalPrice = price * Math.round(numPeople);

console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(102,
    "Bussnes",
    "Saturday");
    
