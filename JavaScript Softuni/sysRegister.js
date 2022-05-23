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
            } else {
                register[system].push([component, [subcomponet]]);
            }

        } else {
            register[system] = [[component, [subcomponet]]];
        }
    }
    for (const system in register) {
        let el = register[system];
        el.sort((a, b) => {
            return b[1].length - a[1].length;
        });
    }

    let sorted = Object.entries(register);
    sorted.sort((a, b) => {
        return a[0].localeCompare(b[0])
    });
    sorted.sort((a, b) => {
        return b[1].length - a[1].length;
    });

    for (const el of sorted) {
        console.log(el[0]);
        for (const component of el[1]) {
            console.log(`|||${component[0]}`);
            component[1].forEach(subcomponet => {
                console.log(`||||||${subcomponet}`);
            });
        }

    }

}
sysRegister([
    'Shift | Section-A | A-2',
    'Shift | Section-A | A-3',
    'Shift | Section-A | A-23',
    'Shift | Section-B | B-1',
    'Shift | Section-B | B-64',
    'Shift | Section-B | B-56',
    'Shit | Anex | Indie',
    'Shit | Bider | Indie'
    ]
    
);