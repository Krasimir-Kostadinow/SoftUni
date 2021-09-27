function systemRegister(input) {

	function surtArr(array) {
		let newArr = [];
		let check = array[0][1];
		let counter = 0;




		for (let i = 0; i < array.length; i++) {
			let current = array[i][1];
			if (check = current) {
				counter++;
				array.splice(i, 1);
				i--;
			} 

		
		}
	

newArr.push([check, counter]);
	}




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

	let sysName = inputArr[0][0];
	let component = inputArr[0][1];
	let subcomponent = inputArr[0][2];
	for (let i = 0; i < inputArr.length; i++) {
		let current = inputArr[i][0];
		let currentComponent = inputArr[i][1];
		let currentSubcomponent = inputArr[i][2];

		if (inputArr.length - 1 === i) {
			outputArr.push(systemName);
			sysName = current;
			systemName = [];
			systemName.push(inputArr[i]);
			break;
		}

		if (current === sysName) {
			systemName.push(inputArr[i]);

		} else {
			outputArr.push(systemName);
			sysName = current;
			systemName = [];
			systemName.push(inputArr[i]);
		}


	}

	outputArr.sort((a, b) => b.length - a.length);

	for (let j = 0; j < outputArr.length; j++) {
		let arr = outputArr[j];

		// arr.sort((a, b) => a[1].localeCompare(b[1]));
		// arr.sort((a, b) => b.length - a.length);
		// arr.sort((a, b) => a[2].localeCompare(b[2]));
		let sortArr = surtArr(arr);

		let systemName = arr[0][0];
		console.log(systemName);
		let checkComponent = '';
		for (let i = 0; i < arr.length; i++) {

			let system = arr[i];
			let component = system[1];
			let subcomponent = system[2];

			if (checkComponent !== component) {
				console.log(`|||${component}`);
				checkComponent = component;
			}
			if (checkComponent === component) {
				console.log(`||||||${subcomponent}`);
			}

		}
	}


	console.log(outputArr);

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