function worldTour(input) {
    let stops = input.shift();
    let i = 0;
    while (input[i] !== 'Travel') {
        let [command, firstEl, secondEl] = input[i].split(':');
        function validIndex(index, str) {
            index = Number(index);
            let isValid = false;
            if (index >= 0 && index < str.length) {
                isValid = true;
            }
            return isValid;
        }
        if (command === 'Add Stop' && validIndex(firstEl, stops)) {
            let newStops = '';
            let firstSlice = stops.substring(0, Number(firstEl));
            newStops += firstSlice;
            newStops += secondEl;
            let secondSlice = stops.substring(firstEl, stops.length);
            newStops += secondSlice;
            stops = newStops;
   
        } else if (command === 'Remove Stop' && validIndex(firstEl, stops) && validIndex(secondEl, stops)) {
            let slice = stops.substring(Number(firstEl), Number(secondEl) + 1);
            stops = stops.replace(slice, '');
       
        } else if (command === 'Switch') {
            if (stops.includes(firstEl)) {
                let splitted = stops.split(firstEl);
                stops = splitted.join(secondEl);
            }
    ;
        }
        console.log(stops);
        i++;
    }
console.log(`Ready for world tour! Planned stops: ${stops}`);

}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);