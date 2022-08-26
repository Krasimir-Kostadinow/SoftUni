function amazingNumbers(num) {
    let str = num + '';
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let currentNum = Number(str[i]);
        sum += currentNum;
    }
    sum += '';
let result = sum.includes(9);
        
    
    console.log(result  
        ?
        ` ${num} Amazing? True`
        : `${num} Amazing? False`);
}
amazingNumbers(1233);