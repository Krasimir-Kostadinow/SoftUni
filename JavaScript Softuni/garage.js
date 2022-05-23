function garage(input) {
    let garage = {};
    for (let el of input) {
        let car = el.split(' - ');
        let numGarage = car[0];
        let infoCar = car[1];
        if (garage.hasOwnProperty(numGarage)) {
            garage[numGarage].push(infoCar);
        } else {
            garage[numGarage] = [infoCar];
        }
    }

for (let numGarage in garage) {
   console.log(`Garage № ${numGarage}`);
   for (let el of garage[numGarage]) {
       let infoCar = el.split(', ');
       let outputInfo = [];
       infoCar.forEach(el => {
           let car = el.split(': ');
           let key = car[0];
           let indicator = car[1];
outputInfo.push(`${key} - ${indicator}`)
       });
       console.log(`--- ${outputInfo.join(', ')}`);


   }
}

}
garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol'
]);