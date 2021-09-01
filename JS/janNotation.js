function janNotation(input) {
    let array = input.slice(0);
    let isString = false;

    for (let i = 0; i < array.length; i++) {
        if (array.length === 1) {
            break;
        }
        let currentEl = array[i];
        let typeEl = (typeof currentEl);
        isString = false;
        if (typeEl === "string") {

            isString = true;
            let result = 0; 
            if (array.length < 3) {
                break;
            }
            let operator = array.splice(i, 1);
            let operands = array.splice(i - 2, 2);

            switch (operator[0]) {
                case '+':
                    result = Math.round(operands[0]) + Math.round(operands[1]);
                    break;
                case '-':
                    result = Math.round(operands[0]) - Math.round(operands[1]);
                    break;
                case '*':
                    result = Math.round(operands[0]) * Math.round(operands[1]);
                    break;
                case '/':
                    result = Math.round(operands[0]) / Math.round(operands[1]);
                    break;
            }

            array.splice(i - 2, 0, result);
            i = 0;
        }
        
      
    }
let max = Number.MAX_SAFE_INTEGER;
let min = Number.MIN_SAFE_INTEGER;

    if (array.length > 1 && isString === false) {
        console.log('Error: too many operands!');
    } else if (array.length > 1 && isString === true) {
        console.log('Error: not enough operands!');
    } else {
        if (array[0] > max) {
         array[0] = max;
        } else if (array[0] < min) {
            array[0] = min;
        }
        console.log(array.join(' '));
    }


}
janNotation(
    [ 
        1,
        '+',
        101,
        '*',
        18,
        '+',
        3,
        '/']
       
   );