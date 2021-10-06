function sysRegister(input) {

    let array = input.map(el => el.split(' | '));
    array.sort((a, b) => a[0].localeCompare(b[0]));
    let checkName = array[0][0];
    let checkComponent = '';
    let counter = 0;
    for (let i = 0; i < array.length; i++) {

        let element = array[i];
        let systemName = element[0];
        let component = element[1];
        if (systemName === checkName) {
            if (checkComponent !== component) {
                counter++;
                checkComponent = component;
            }
        } else {
            // for (let j = 0; j < i; j++) {
            //     const element = array[j];
            // //    array[j][0] = [checkName, counter]; ???????????????
            // }
            checkName = systemName;
            counter = 0;
        }

    }
   
    console.log(array);
}
sysRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
);