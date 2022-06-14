function solve() {

    let $recipiendName = document.getElementById('recipiendName');
    let $title = document.getElementById('title');
    let $message = document.getElementById('message');
    let $buttonAdd = document.getElementById('add');
    let $buttonReset = document.getElementById('reset');

    $buttonAdd.addEventListener('click', function (event) {
        event.preventDefault();

        let $list = document.getElementById('list');

        let $li = document.createElement('li');
        let $firstH4 = document.createElement('h4');
        $firstH4.textContent = $title.value;
        $li.appendChild($firstH4);
        let $secondH4 = document.createElement('h4');
        $secondH4.textContent = $recipiendName.value;
        $li.appendChild($secondH4);
        let $span = document.createElement('span');
        $span.textContent = $message.value;
        $li.appendChild($span);

        let $div = document.createElement('div');
        $div.setAttribute('id', 'list-action');

        let $buttonSend = document.createElement('button');
        $buttonSend.setAttribute('type', 'submit');
        $buttonSend.setAttribute('id', 'send');
        $buttonSend.textContent = 'Send';
        $div.appendChild($buttonSend);

        let $buttonDelete = document.createElement('button');
        $buttonDelete.setAttribute('type', 'submit');
        $buttonDelete.setAttribute('id', 'delete');
        $buttonSend.textContent = 'Delete';
        $div.appendChild($buttonDelete);
        $li.appendChild($div);

        $list.appendChild($li);

        $title.value = '';
        $recipiendName.value = '';
        $message.value = '';

    })
}
solve()