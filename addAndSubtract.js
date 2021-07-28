function addAndSubtract(a, b, c) {

    function sum() {
        let sum = a + b;
        return sum;
    }

    function subtract() {
     let subtract = sum() - c;
     return subtract;

    }
console.log(subtract());
}
addAndSubtract(42, 58, 100);


