function pop(num) {
    
    function poop(array) {
        let endElement = array[array.length - 1];
    
        array.length = array.length - 1;
    return endElement;
    }
    let result = 
    poop(num);
console.log(result);
console.log(num);
}
pop([1, 2, 3, 4, 5]);