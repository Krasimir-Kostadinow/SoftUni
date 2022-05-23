function cityTaxes(name, population, treasury) {
    let city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    city.taxRate = 10;
    city.collectTaxes = function () {
        this.treasury = Math.floor(this.treasury + (this.population * this.taxRate));
    }
    city.applyGrowth = function (percentage) {
        this.population = Math.floor(((this.population * percentage) / 100) + this.population);
    }
    city.applyRecession = function (percentage) {
        this.treasury = Math.floor((this.treasury - (this.treasury * percentage) / 100));
    }
return city;
}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
city.applyRecession(5);
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


