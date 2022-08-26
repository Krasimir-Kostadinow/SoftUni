function fuelMoney (distance ,passengers, price) {

    let distanceFuel = (distance / 100) * 7;
    let paassengersFuel = passengers * 0.100;
    let totalFuel = distanceFuel + paassengersFuel;

    let money = totalFuel * price;

console.log(`Needed money for that trip is ${money}lv.`);
}
fuelMoney(260, 9, 2.49);