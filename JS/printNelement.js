function printNelement(array) {
let print = [];
for (let i = 0; i < array.length-1;i += Number(array[array.length-1])) {
    let element = array[i];
   print.push(element);
  
    
}
console.log(print.join(' '));
}
printNelement(['1', '2', '3', '4', '5', '6']);