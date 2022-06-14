
class Garden {
    constructor(spaceAvailavble) {
        this.spaceAvailavble = spaceAvailavble;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailavble < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName: plantName, spaceRequired: spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailavble -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let isExistsPlant = false;
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                isExistsPlant = true;
                if (plant.ripe === true) {
                    throw new Error(`The ${plantName} is already ripe.`);
                } else {
                    plant.ripe = true;
                    plant.quantity = quantity;
                    if (plant.quantity === 1) {
                        return `${quantity} ${plantName} has successfully ripened.`;
                    } else {
                        return `${quantity} ${plantName}s have successfully ripened.`;
                    }
                }
            }
        }

        if (!isExistsPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }



    }

    harvestPlant(plantName) {
        let isNotExists = false;
        for (let i = 0; i < this.plants.length; i++) {
            let plant = this.plants[i];
            if (plant.plantName === plantName) {
                if (plant.ripe) {
                    this.storage.push({ plantName: plantName, quantity: plant.quantity });
                    this.spaceAvailavble -= plant.spaceRequired;
                    this.plants.splice(i, 1);
                    return `The ${plantName} has been successfully harvested.`;
                } else {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
                }
            } else {
                isNotExists = true;
            }
        }
        if (isNotExists) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }

    generateReport() {

        let output = `The garden has ${spaceAvailable} free space left.`;
        this.plants.sort((a, b) => {
            return a.plantName.localeCompare(b.plantName);
        })
        let plantsInGarden = [];
        this.plants.forEach(plant => {
            plantsInGarden.push(plant.plantName);
        });
        output += `\nPlants in the garden: ${plantsInGarden.join(', ')}`;

        if (this.storage.length === 0) {
            output += '\nPlants in storage: The storage is empty.';
        } else {
            let plantsInStorage = [];
            this.storage.forEach(plant => {
                plantsInGarden.push(`${plant.plantName} (${plant.quantity})`);
            });
            output += `\nPlants in storage: ${plantsInStorage.join(', ')}`;
        }

        return output;
    }


}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));
console.log(myGarden.harvestPlant('olive'));







