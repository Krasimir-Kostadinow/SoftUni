function pirates(input) {
    let map = {};
    function target(input) {
        while (input[0] !== 'Sail') {
            let [name, population, gold] = input.shift().split('||');
            if (map.hasOwnProperty(name)) {
                map[name][0] += Number(population);
                map[name][1] += Number(gold);
            } else {
                map[name] = [Number(population), Number(gold)];
            }
        }
        input.shift();
    }
    target(input);
    let i = 0;
    while (input[i] !== 'End') {
        let current = input[i].split('=>');
        let command = current[0];
        if (command === 'Plunder') {
            let city = current[1];
            let people = Number(current[2]);
            let gold = Number(current[3]);
            map[city][0] -= people;
            map[city][1] -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (map[city][0] <= 0 ||map[city][1] <= 0) {
                delete map[city];
                console.log(`${city} has been wiped off the map!`);
            } 
             
            
        } else if (command === 'Prosper') {
            let town = current[1];
            let gold = Number(current[2]);
            if (gold <= 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                map[town][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${map[town][1]} gold.`);
            }
        }
        i++;
    }
let output = Object.entries(map);
output.sort((a, b) => a[0].localeCompare(b[0]));
output.sort((a, b) => {
return b[1][1] - a[1][1];
});
if (output.length > 0) {
    console.log(`Ahoy, Captain! There are ${output.length} wealthy settlements to go to:`);
for (const el of output) {
    console.log(`${el[0]} -> Population: ${el[1][0]} citizens, Gold: ${el[1][1]} kg`);
}
} else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
}



}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]      

);