function systemsRegister(array) {

    class Register {
        constructor(systemName, componentName, subcomponentName) {
            this.systemName = systemName;
            this.componentName = componentName;
            this.subcomponentName = subcomponentName;
        }
    }
    let register = [];
    let system = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' | ');
        let name = element[0];
        let component = element[1];
        let subcomponent = element[2];
        if (i > 0 && name !== system[0].systemName) {
            for (let el of register) {
                if (el[0].systemName === name) {
                    let object = new Register(name, component, subcomponent);
                    el.push(object);
                    system = [];
                    break;
                }
            }
            register.push(system);
        } else {
            let object = new Register(name, component, subcomponent);
            system.push(object);
        }

     

    }
    register.sort((a, b) => a.systemName.localeCompare(b.systemName));
    register.sort((a, b) => { return a.systemName === b.systemName });



}
systemsRegister([
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