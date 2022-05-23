function calorieObject(input) {
    let object = {};
    let array = input.slice();
    let i = 0;
 while (array.length !== 0) {
        let name = array.shift();
        let calorie = Number(array.shift());
        object[name] = calorie;
        i++;
    }
return object;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])); 