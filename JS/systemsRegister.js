function systemRegister(input) {
	class Register {
		constructor(systemName, componentName, subcomponentName) {
			this.systemName = systemName;
			this.componentName = componentName;
			this.subcomonentName = subcomponentName;
		 	}
		}
	let outputArr = [];
 
	let inputArr = input.map(el => el.split(' | '));
 inputArr.sort((a, b) => a[0].localeCompare(b[0]));
 
 
	let systemName = [];
	let componentName = [];
	let subcomponentName = [];
 
 
for(let i = 1;i < inputArr.length;i++) {
 
	let sysName = inputArr[0][0];;
	let component = '';
	let subcomponent = '';
 
	if (inputArr[i][0] === sysName) {
	systemName.push(inputArr[i][0]);
		} else {
			outputArr.push(new Register(systemName, null, null));
			sysName = inputArr[i][0];
			systemName = [];
			systemName.push(inputArr[i][0]);
			}
 
	}
 
	console.log(systemName);
 
	}
systemRegister([
 
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