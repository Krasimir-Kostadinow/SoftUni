
function hierarchy() {

    function convert(type, value) {
        if (type === 'mm') {
            return value * 10;
        } else if (type === 'm') {
            return value / 100;
        } else if (type === 'cm') {
            return value;
        } else {
            throw Error('Not is right type.')
        }
    }

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }


        get area() {
            throw Error('Not Implemented!');
        }
        changeUnits(newUnit) {
            this.units = newUnit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;

        }

        get area() {
            return Math.PI * convert(this.units, this.radius) * convert(this.units, this.radius);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${convert(this.units, this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;

        }

        get area() {
            return convert(this.units, this.width) * convert(this.units, this.height);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${convert(this.units, this.width)}, height: ${convert(this.units, this.height)}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5


// c.changeUnits('mm');
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200 
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

// r.changeUnits('cm');
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 
console.log(hierarchy());
