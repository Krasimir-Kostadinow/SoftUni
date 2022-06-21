function solve() {
    let $inputFirstName = document.getElementById('fname');
    let $inputLastName = document.getElementById('lname');
    let $inputEmail = document.getElementById('email');
    let $inputBirth = document.getElementById('birth');
    let $inputPosition = document.getElementById('position');
    let $inputSalary = document.getElementById('salary');
    let $buttonAddWorkrer = document.getElementById('add-worker');
    const tbody = document.getElementById("tbody");
    const addSalary = document.getElementById("sum");



    $buttonAddWorkrer.addEventListener('click', function (event) {
        event.preventDefault();
        if ($inputFirstName.value !== '' && $inputLastName.value !== '' && $inputEmail.value !== '' && $inputBirth.value !== '' && $inputPosition.value !== '' && $inputSalary.value !== '') {
            let $tr = document.createElement('tr');
            let $tdName = document.createElement('td');
            $tdName.textContent = $inputFirstName.value;
            $tr.appendChild($tdName);

            let $tdLastName = document.createElement('td');
            $tdLastName.textContent = $inputLastName.value;
            $tr.appendChild($tdLastName);

            let $tdEmail = document.createElement('td');
            $tdEmail.textContent = $inputEmail.value;
            $tr.appendChild($tdEmail);

            let $tdBirth = document.createElement('td');
            $tdBirth.textContent = $inputBirth.value;
            $tr.appendChild($tdBirth);

            let $tdPosition = document.createElement('td');
            $tdPosition.textContent = $inputPosition.value;
            $tr.appendChild($tdPosition);

            let $tdSalary = document.createElement('td');
            $tdSalary.textContent = $inputSalary.value;
            $tr.appendChild($tdSalary);

            let $tdButton = document.createElement('td');

            let $buttonFired = document.createElement('button');
            $buttonFired.setAttribute('class', 'fired');
            $buttonFired.textContent = 'Fired';
            $buttonFired.addEventListener('click', (ev) => firedWorker(ev, $tdSalary.textContent));
            $tdButton.appendChild($buttonFired);
            let $buttonEdit = document.createElement('button');
            $buttonEdit.setAttribute('class', 'edit');
            $buttonEdit.textContent = 'Edit';
            $buttonEdit.addEventListener('click', (ev) => editWorker(ev, $tdName.textContent, $tdLastName.textContent, $tdEmail.textContent, $tdBirth.textContent, $tdPosition.textContent, $tdSalary.textContent));
            $tdButton.appendChild($buttonEdit);
            $tr.appendChild($tdButton);

            let $tbody = document.getElementById('tbody');
            $tbody.appendChild($tr);

            const currentSalary = Number(addSalary.textContent);
            addSalary.textContent = (Number($inputSalary.value) + currentSalary).toFixed(2);


            $inputBirth.value = '';
            $inputEmail.value = '';
            $inputFirstName.value = '';
            $inputLastName.value = '';
            $inputPosition.value = '';
            $inputSalary.value = '';

        }
    });

    function firedWorker(ev, salary) {

        ev.preventDefault();
        ev.target.parentNode.parentNode.remove();
        reduceSalary(salary);
    }

    function editWorker(ev, _fname, _lname, _email, _birth, _position, _salary) {

        ev.preventDefault();
        ev.target.parentNode.parentNode.remove();

        $inputFirstName.value = _fname;
        $inputLastName.value = _lname;
        $inputEmail.value = _email;
        $inputBirth.value = _birth;
        $inputPosition.value = _position;
        $inputSalary.value = _salary;

        reduceSalary(_salary);

    }

    function reduceSalary(salary) {
        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent = Math.abs((Number(salary) - currentSalary)).toFixed(2);
    }


}
solve()