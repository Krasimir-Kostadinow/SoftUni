function rectangle(width, height, color) {
let firstLetterColor = color[0].toUpperCase();
let newColor = color.split('');
newColor[0] = firstLetterColor;

    let object = {};
    object.width = width;
    object.height = height;
    object.color = newColor.join('');
    object.calcArea = function() {
        return this.width * this.height; 
    }
    return object;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
