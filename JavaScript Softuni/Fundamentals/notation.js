function notation(input) {
    let isFlag = true;
    let array = [];
    for (const el of input) {
        if (typeof (el) === 'number') {
            array.push(el);
        } else {
            if (array.length > 1) {
                switch (el) {
                    case '+':
              
                        array.push(array.splice(array.length - 2, 1)[0] + array.pop());
                        break;
                    case '-':
                        array.push(array.splice(array.length - 2, 1)[0] - array.pop());
                        break;
                    case '*':
                        array.push(array.splice(array.length - 2, 1)[0] * array.pop());
                        break;
                    case '/':
                        array.push(array.splice(array.length - 2, 1)[0] / array.pop());
                        break;
                }
            } else {
                isFlag = false;
                console.log('Error: not enough operands!');
                break;
            }

        }
    }
    if (array.length > 1) {
        console.log('Error: too many operands!');
    } else if (isFlag) {
        console.log(array[0]);
    }

}
notation(
[-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'
]
       
);