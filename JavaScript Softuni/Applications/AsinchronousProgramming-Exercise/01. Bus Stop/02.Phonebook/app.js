function attachEvents() {
    let $btnLoad = document.querySelector('#btnLoad');
    let $ul = document.querySelector('#phonebook');

    $btnLoad.addEventListener('click', function () {

        fetch(`https://virtual-plating-360306-default-rtdb.europe-west1.firebasedatabase.app/.json`)
            .then(response => response.json())
            .then(data => {
                let array = Object.keys(data)
                $ul.textContent = '';
                for (let i = 1; i < array.length; i++) {
                    let key = array[i];
                    let $li = document.createElement('li');
                    let $btnDelete = document.createElement('button');
                    $btnDelete.textContent = 'Delete';
                    $li.textContent = `${data[key].person} ${data[key].phone}`;
                    $li.appendChild($btnDelete);
                    $ul.appendChild($li);

                }
            });



    });
}

attachEvents();