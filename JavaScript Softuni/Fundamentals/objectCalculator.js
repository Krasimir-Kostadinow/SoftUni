function calculator() {
    let output = {};
    let object = {};
    object.init = function (firstSelector, secondSelector, resultSelector) {
        output[firstSelector] = 0;
        output[secondSelector] = 0;
        output[resultSelector] = 0;
        return output;
    }
    // object.add = function (firstNum, secondNum, resultNum) {
    //    for (const key in output) {
    //  output[key] = 
    //    }
    //     return output;
    // }


    return object;
}
const calculate = calculator (); 
console.log(calculate.init('#num1', '#num2', '#result'));  
