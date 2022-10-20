import { myFireBaseRequest } from './firebase-request.js';

(function () {
    
    const formEl = document.querySelector('#form');
    const { firstName, lastName, facultyNumber, grade, submit } = formEl.elements;
    const tableEl = document.querySelector('#results');
    const tbodyEl = tableEl.querySelector('tbody');
    
    function loadListStudents() {
    
    
        myFireBaseRequest('/students.json', 'GET')
            .then((students) => {
                if (students !== null) {
                    let listStudents = [];
                    Object.values(students).forEach((student => {
                        const { firstName, lastName, facultyNumber, grade } = student;
                        let studentHtml = `  
                <tr>
                   <td>${firstName}</td>
                   <td>${lastName}</td>
                   <td>${facultyNumber}</td>
                   <td>${grade}</td>
                </tr>`;
                        listStudents.push(studentHtml);
                    }));
                    tbodyEl.innerHTML = listStudents.join('');
                }
    
            })
    
    }
    loadListStudents();
    
    function addStudent(event) {
        event.preventDefault();
        if (firstName.value !== '' && lastName.value !== '' && facultyNumber.value !== '' && grade.value !== '') {
            let student = `  
            <tr>
               <td>${firstName.value}</td>
               <td>${lastName.value}</td>
               <td>${facultyNumber.value}</td>
               <td>${grade}</td>
            </tr>`;
    
            let body = {
                firstName: firstName.value,
                lastName: lastName.value,
                facultyNumber: facultyNumber.value,
                grade: grade.value
            };
    
            myFireBaseRequest('/students.json', 'POST', body).then((resp) => {
                loadListStudents();
            });
            firstName.value = '';
            lastName.value = '';
            facultyNumber.value = '';
            grade.value = '';
        }
    }
    
    submit.addEventListener('click', addStudent);

})();


