function solve() {
    let $inputFirstName = document.getElementById('fname');
    let $inputLastName = document.getElementById('lname');
    let $inputEmail = document.getElementById('email');
    let $inputBirth = document.getElementById('birth');
    let $inputPosition = document.getElementById('position');
    let $inputSalary = document.getElementById('salary');
    let $buttonAddWorkrer = document.getElementById('add-worker');

    function fired(event) {
        let $tr = event.target.parentElement.parentElement;
        let inputArr = $tr.children;
        $tr.remove();
        sum();
    }

    function edit(event) {
        let $tr = event.target.parentElement.parentElement;
        let inputArr = $tr.children;
        $inputFirstName.value = inputArr[0].textContent;
        $inputLastName.value = inputArr[1].textContent;
        $inputEmail.value = inputArr[2].textContent;
        $inputBirth.value = inputArr[3].textContent;
        $inputPosition.value = inputArr[4].textContent;
        $inputSalary.value = inputArr[5].textContent;
        $tr.remove();
        sum();

    }

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
            $buttonFired.addEventListener('click', fired);
            $tdButton.appendChild($buttonFired);
            let $buttonEdit = document.createElement('button');
            $buttonEdit.setAttribute('class', 'edit');
            $buttonEdit.textContent = 'Edit';
            $buttonEdit.addEventListener('click', edit);
            $tdButton.appendChild($buttonEdit);
            $tr.appendChild($tdButton);

            let $tbody = document.getElementById('tbody');
            $tbody.appendChild($tr);

            sum();

            $inputBirth.value = '';
            $inputEmail.value = '';
            $inputFirstName.value = '';
            $inputLastName.value = '';
            $inputPosition.value = '';
            $inputSalary.value = '';

        }
    });

    function sum() {
        let $tbody = document.getElementById('tbody');
        let arr = $tbody.children;
        let sum = 0;
        for (const $tr of arr) {
            let arrTd = $tr.children;
            sum += Number(arrTd[5].textContent);
        }
        let $sum = document.getElementById('sum');
        $sum.textContent = sum.toFixed(2);
    }


}
solve()