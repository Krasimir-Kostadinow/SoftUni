function solve(day, age) {
    let price = 0;
    let flag = false;
    if (day === 'Weekday') {
        if (age >= 0 && age <= 18) {
            price = 12;
        } else if (age > 18 && age <= 64) {
            price = 18;
        } else if (age > 64 && age <= 122) {
            price = 12;
        } else {
            flag = true;
        }
    } else if (day === 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = 15;
        } else if (age > 18 && age <= 64) {
            price = 20;
        } else if (age > 64 && age <= 122) {
            price = 15;
        } else {
            flag = true;
        }
    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        } else if (age > 18 && age <= 64) {
            price = 12;
        } else if (age > 64 && age <= 122) {
            price = 10;
        } else {
            flag = true;
        }
    }
    if (flag) {
        console.log('Error!');
    } else {
        console.log(`${price}$`);
    }


}
solve('Weekday', 42);

