function rageQuit(input) {
    let pattern = /([\D]+)([0-9]{1,2})/g;
    let str = pattern.exec(input);
    let arrLetter = [];
    let result = '';
    while (str !== null) {
        if (Number(str[2] <= 20) && str[1].length <= 20 && Number(str[2]) !== 0) {
            for (const el of str[1]) {
                let letter = el.toUpperCase();
                if (!arrLetter.includes(letter)) {
                    arrLetter.push(letter);
                }
            }
            let upperCase = str[1].toUpperCase();
            for (let i = 0; i < Number(str[2]); i++) {
                result += upperCase;     
            }
        }
      
        str = pattern.exec(input);
    }
    let sorted = [...new Set(result)];
   
    console.log(`Unique symbols used: ${arrLetter.length}`);
    console.log(result);
}
rageQuit(['aSd2&5s@1']);
//($!$`e/{D'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15'

// function solve(input) {
//     let series = input[0].split(/[0-9]+/).filter((x) => x != '');
//     let repeaters = input[0].split(/[^0-9]+/).filter((x) => x != '');
//     let result = '';
//     for (let i = 0; i < series.length; i++) {
//         result += series[i].toUpperCase().repeat(repeaters[i]);
//     }
//     console.log(`Unique symbols used: ${[...new Set(result)].length}`);
//     console.log(result);
// }
// solve(['aSd2&5s@1']);