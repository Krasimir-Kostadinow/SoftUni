function adAstra(input) {
    let output = [];
    let totalCalories = 0;
    let pattern = /([#|])([A-Za-z ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,4}|[1][0]{4})\1/gm;
    let food = pattern.exec(input[0]);
    while (food !== null) {
        let arr = [];
        let typeFood = food[2];
        let date = food[3];
        let calories = Number(food[4]);
        totalCalories += calories;
        arr.push(typeFood, date, calories);
        food = pattern.exec(input);
        output.push(arr);
    }
    let days = Math.trunc(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for (const arr of output) {
        let [type, date, calories] = arr;
        console.log(`Item: ${type}, Best before: ${date}, Nutrition: ${calories}`);
    }

}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);