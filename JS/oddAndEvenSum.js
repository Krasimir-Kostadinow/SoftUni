function oddAndEvenSum(num) {

    let odd = 0;
    let even = 0;
    let str = num + '';

    for (let i = 0; i < str.length; i++) {
        const element = Number(str[i]);
        if (element % 2 === 0) {
            even += element;
        } else {
            odd += element;
        }
    }
console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(3495892137259234);