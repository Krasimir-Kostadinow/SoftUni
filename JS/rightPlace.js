function rightPlace(str, char, result) {
 let name = str.replace('_' , char);
 let output = (name === result) ? 'Matched' : 'Not Matched'; 
console.log(output);

}
rightPlace('Str_ng', 'I', 'Strong');