function rounding(num, n) {

    let round = Number(num.toFixed(n));
    if (round === num) {
        console.log(num);
    } else {
        console.log(round);
    }
    rounding (3.1415926535897932384626433832795, 2);

