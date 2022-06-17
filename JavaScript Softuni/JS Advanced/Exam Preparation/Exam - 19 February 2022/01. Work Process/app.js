function solve() {
    let $inputFirstName = document.getElementById('fname');
    let $inputLastName = document.getElementById('lname');
    let $inputEmail = document.getElementById('email');
    let $inputBirth = document.getElementById('birth');
    let $inputPosition = document.getElementById('position');
    let $inputSalary = document.getElementById('salary');
    let $buttonAddWorkrer = document.getElementById('add-worker');

    $buttonAddWorkrer.addEventListener('click', function (event) {
        event.preventDefault();
        if ($inputFirstName !== '' && $inputLastName !== '' && $inputEmail !== '' && $inputBrith !== '' && $inputPosition !== '' && $inputSalary !== '') {

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
//buttons ??
            let $tbody = document.getElementById('tbody');
            $tbody.appendChild($tr);


        }
    });

}
solve()