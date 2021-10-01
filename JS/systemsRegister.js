function systemRegister(input) {

	function sortArr(input, check) {
		let array = input.slice(0);
		let newArr = [];
		while (array.length !== 0) {

			let check = array[0][1];
			let counter = 0;

			for (let i = 0; i < array.length; i++) {
				let current = array[i][1];
				if (check === current) {
					counter++;
					array.splice(i, 1);
					i--;
				}
			}
			newArr.push([check, counter]);
		}

		let convert = input.map(el => {
			let check = newArr.map(element => {
				if (el[1] === element[0]) {
					el[1] = element;
				}
			})
			return el;
		});

		convert.sort((a, b) => b[1][1] - a[1][1]);

		let output = convert.map(el => {
			el[1] = el[1][0];
			return el;
		});

		return output;

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
			systemName.push(inputArr[i]);
			outputArr.push(systemName);
			sysName = current;
			systemName = [];
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

	
	// outputArr.sort((a, b) => a[0][0].localeCompare(b[0][0]));
	outputArr.sort((a, b) => b.length - a.length);
	let sortArray = sortArr(arr, arr[0][1]);

	for (let j = 0; j < outputArr.length; j++) {
		let arr = outputArr[j];

		let sortArray = sortArr(arr, arr[0][1]);

		let systemName = sortArray[0][0];
		console.log(systemName);
		let checkComponent = '';
		for (let i = 0; i < sortArray.length; i++) {

			let system = sortArray[i];
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