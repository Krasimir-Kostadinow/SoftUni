function createComputerHierarchy() {

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expecterLife) {
            this.manufacturer = manufacturer;
            this.expecterLife = expecterLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Canont instantiate directly.');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            if (typeof battery !== 'object') {
                throw new TypeError('This is not class Battery');
            } else {
                this._battery = battery;
            }

        }

        set battery(battery) {
            this._battery = battery;
        }
        get battery() {
            return this._battery;
        }

    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            if (typeof keyboard !== 'object') {
                throw new TypeError('This is not object')
            }else {
                this._keyboard = keyboard;
            }

            if (typeof monitor !== 'object') {
                throw new TypeError('This is not object')
            }else {
                this._monitor = monitor;
            }
     
        }


        set keyboard(keyboard) {
            this._keyboard = keyboard;
        }
        get keyboard() {
            return this._keyboard;
        }


        set monitor(monitor) {
            this._monitor = monitor;
        }
        get monitor() {
            return this._monitor;
        }


    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


let classes = createComputerHierarchy();
// let Computer = classes.Computer;
// let property = new Computer('windows', 33, 55, 66);
// console.log(property);
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(JSON.stringify(laptop));





// Battery {manufacturer: 'Energy', expectedLife: 3}

// Laptop  {manufacturer: 'Hewlett Packard', processorSpeed: 2.4, ram: 4, hardDiskSpace: 0.5, weight: 3.12, color: 'Silver', _battery: Battery {manufacturer: 'Energy', expectedLife: 3 }}


