function carFactory(car) {
    let engine = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    };


    let residue = Math.abs(car.power - engine.small.power);
    let typeEngine = null;
    for (const key in engine) {
        let newResidue = Math.abs(car.power - engine[key].power);
        if (newResidue <= residue) {
            typeEngine = engine[key];
        }
    }
    car.engine = typeEngine;
    delete car.power;
    car.carriage = {type: car.carriage, color: car.color};
    delete car.color;

    if (car.wheelsize % 2 === 0) {
        car.wheelsize = Math.floor(car.wheelsize - 1);
    }
    car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
    delete car.wheelsize;

return car;

}
console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));