function solve(input) {
    let priceTour = Number(input.shift());
    let numPuzzle = Number(input.shift());
    let numDolls = Number(input.shift());
    let numTeddyBears = Number(input.shift());
    let numMinion = Number(input.shift());
    let numTruck = Number(input.shift());

    let sum = numDolls * 3 + numPuzzle * 2.6 + numTeddyBears * 4.10 + numMinion * 8.20 + numTruck * 2;
    let numToys = numTruck + numTeddyBears + numPuzzle + numMinion + numDolls;
    if (numToys >= 50) {
        sum = sum * 0.75;
    }
    sum = sum * 0.90;
    let residue = Math.abs(sum - priceTour);

    if (sum >= priceTour) {
        console.log(`Yes! ${residue.toFixed(2)} lv left.`);
    } else {

        console.log(`Not enough money! ${residue.toFixed(2)} lv needed.`);
    }
}
solve([
    '320', '8', '2',
    '5',   '5', '1',
    ''
  ]);