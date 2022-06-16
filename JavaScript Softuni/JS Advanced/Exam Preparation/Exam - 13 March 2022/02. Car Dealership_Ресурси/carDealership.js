

class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model !== '' && horsepower >= 0 && price >= 0 && mileage >= 0) {
            this.availableCars.push({ model: model, horsepower: horsepower, price: price, mileage: mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        } else {
            throw new Error('Invalid input!');
        }

    }

    sellCar(model, desiredMileage) {
        let isExists = false;
        let soldPrice = 0;
        for (let i = 0; i < this.availableCars.length; i++) {
            //If there is another model???
            let car = this.availableCars[i];
            if (car.model === model) {
                isExists = true;
                if (car.mileage <= desiredMileage) {
                    soldPrice = car.price;
                } else if (car.mileage > desiredMileage && car.mileage - desiredMileage <= 40000) {
                    soldPrice = car.price * 0.95;
                } else if (car.mileage > desiredMileage && car.mileage - desiredMileage > 40000) {
                    soldPrice = car.price * 0.90;
                }
                this.soldCars.push({ model: car.model, horsepower: car.horsepower, soldPrice: soldPrice });
                this.availableCars.splice(i, 1);
                break;
            }
        }

        if (!isExists) {
            throw new Error(`${model} was not found!`);
        }
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length > 0) {
            let output = '-Available cars:';
            for (const car of this.availableCars) {
                output += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
            }
            return output;
        } else {
            return 'There are no available cars';
        }
    }

    salesReport(criteria) {
        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => {
                return b.horsepower - a.horsepower;
            });
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => {
                return a.model.localeCompare(b.model);
            });
        } else {
            throw new Error('Invalid criteria!');
        }

        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`;

        for (const car of this.soldCars) {
            output += `\n---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`;
        }
        return output;
    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

