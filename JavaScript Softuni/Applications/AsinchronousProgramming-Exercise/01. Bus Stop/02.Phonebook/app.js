function attachEvents() {
    let $btnLoad = document.querySelector('#btnLoad');
    let $ul = document.querySelector('#phonebook');
    let $btnCreate = document.querySelector('#btnCreate');
    let $inputPerson = document.querySelector('#person');
    let $inputPhone = document.querySelector('#phone');

    loadListPhone();

    $btnLoad.addEventListener('click', loadListPhone);

    $btnCreate.addEventListener('click', function () {

        let newPerson = {
            person: $inputPerson.value,
            phone: $inputPhone.value
        }

        fetch(`https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/phonebook.json`)
            .then(response => response.json())
            .then(data => {
                for (let key in data) {
                    if (data[key] === null) {
                        delete data[key];
                    }
                }
                let array = Object.keys(data)
                fetch(`https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/phonebook/${Number(array[array.length - 1]) + 1}.json`, {
                    method: 'PATCH',
                    body: JSON.stringify(newPerson)
                });
            });

        loadListPhone();

        $inputPerson.value = '';
        $inputPhone.value = '';

    });

    function deletePhone(event) {
        let $button = event.target;
        let $currentLi = $button.parentElement;
        let id = $currentLi.getAttribute('id');

        fetch(`https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/phonebook/${id}.json`, {
            method: 'DELETE'
        });

        $currentLi.remove();

    }

    function loadListPhone() {
        fetch(`https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/phonebook.json`)
            .then(response => response.json())
            .then(data => {
                for (let key in data) {
                    if (data[key] === null) {
                        delete data[key];
                    }
                }
                let array = Object.keys(data)
                $ul.textContent = '';
                for (let i = 0; i < array.length; i++) {
                    let key = array[i];
                    let $li = document.createElement('li');
                    $li.setAttribute('id', `${key}`);
                    let $btnDelete = document.createElement('button');
                    $btnDelete.addEventListener('click', deletePhone);
                    $btnDelete.textContent = 'Delete';
                    $li.textContent = `${data[key].person} ${data[key].phone}`;
                    $li.appendChild($btnDelete);
                    $ul.appendChild($li);
                }
            });
    }
   

}

attachEvents();