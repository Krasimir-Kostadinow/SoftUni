function employees(array) {
    class Employees {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (let nameEmployee of array) {
        let personalNumber = nameEmployee.length;
        let currentObject = new Employees(nameEmployee, personalNumber);
        console.log(`Name: ${currentObject.name} -- Personal Number: ${currentObject.personalNumber}`);
    }
    
}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    
    );