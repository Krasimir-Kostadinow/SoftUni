function travelTime(input) {

    input.sort((a, b) => a[0].localeCompare(b[0]));

    let order = {};
    for (let el of input) {
        let destination = el.split(' > ');
        let country = destination[0];
        // country = country[0].toUpperCase() + country.slice(1);
        let town = destination[1];
        town = town[0].toUpperCase() + town.slice(1);
        let cost = Number(destination[2]);
        if (order.hasOwnProperty(country)) {
            if (order[country].hasOwnProperty(town) && cost < order[country][town]) {
                order[country][town] = cost;
            } else if (!order[country].hasOwnProperty(town)) {
                order[country][town] = cost;
            }
        } else {
            let objTown = {};
            objTown[town] = cost;
            order[country] = objTown;
        }
    }
    for (let country in order) {
        let output = [];
        output.push(`${country} ->`);
        let arr = Object.entries(order[country]);
        arr.sort((a, b) => {
            return a[1] - b[1];
        })
        order[country] = arr;

        // order[country].forEach(el => {
        //     let element = el.join(' -> ');
        //     output.push(element);
        //    });
        //    console.log(output.join(' '));
    }
    let arr = Object.entries(order);
    arr.sort((a, b) => {     
   return a[1][a[1].length - 1][1] - b[1][b[1].length - 1][1];
    });
    arr.sort((a, b) => a[0].localeCompare(b[0]));
for (let [country, array] of arr) {
    let output = '';
    output += `${country} -> `;
    for (let i = 0; i < array.length; i++) {
        let [town, cost] = array[i];
        output += `${town} -> ${cost} `;
    }
    console.log(output);
}


}
travelTime([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
  ]
);