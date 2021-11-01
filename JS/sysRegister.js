function sysRegister(input) {
    let register = {};
    for (let el of input) {
        let [system, component, subcomponet] = el.split(' | ');
        if (register.hasOwnProperty(system)) {
            let isExistComponent = false;
            let indexComponent = -1;
            for (let i = 0; i < register[system].length; i++) {
                let el = register[system][i];
                isExistComponent = el.includes(component);
                indexComponent = i;
                if (isExistComponent) {
                    break;
                }
            }
            if (isExistComponent) {
                register[system][indexComponent][1].push(subcomponet);
            }else {
                register[system].push([component, [subcomponet]]);
            }

        } else {
            register[system] = [[component, [subcomponet]]];
        }
    }

    console.log(register);
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