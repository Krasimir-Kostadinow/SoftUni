function solve(year, month, day) {
    let days = new Date(year,month-1, day-1);
 let daY = days.getDate();
 let montH = days.getMonth() + 1;
 let yeaR = days.getFullYear();
console.log(`${yeaR}-${montH}-${daY}`);
}
solve(2016, 10, 1);
