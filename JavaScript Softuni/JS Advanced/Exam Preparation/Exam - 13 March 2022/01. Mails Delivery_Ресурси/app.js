function solve() {

    let $recipientName = document.getElementById('recipientName');
    let $title = document.getElementById('title');
    let $message = document.getElementById('message');
    let $buttonAdd = document.getElementById('add');
    let $buttonReset = document.getElementById('reset');

    function deleteMails(event) {
        let $parentLi = event.target.parentElement.parentElement;
        let $li = document.createElement('li');
        let $secondSpan = document.createElement('span');
        $secondSpan.textContent = $parentLi.children[1].textContent;
        let $firstSpan = document.createElement('span');
        $firstSpan.textContent = $parentLi.children[0].textContent;
        $li.appendChild($firstSpan);
        $li.appendChild($secondSpan);

        let $deleteList = document.getElementsByClassName('delete-list')[0];
        $deleteList.appendChild($li);

        $parentLi.remove();
    }
    function deletE(event) {
        let $parentLi = event.target.parentElement.parentElement;
        let $li = document.createElement('li');
        let $secondSpan = document.createElement('span');
        $secondSpan.textContent = $parentLi.children[0].textContent;

        let $firstSpan = document.createElement('span');
        let firstvalueH4 = $parentLi.children[1].textContent;
        let firstTextH4 = firstvalueH4.split('Recipient Name:');
        $firstSpan.textContent = `To: ${firstTextH4[1]}`;
        $li.appendChild($firstSpan);
        $li.appendChild($secondSpan);

        let $deleteList = document.getElementsByClassName('delete-list')[0];
        $deleteList.appendChild($li);

        $parentLi.remove();
    }

    function send(event) {
        let $parentLi = event.target.parentElement.parentElement;
        let $li = document.createElement('li');
        let $secondSpan = document.createElement('span');
        $secondSpan.textContent = $parentLi.children[0].textContent;

        let $firstSpan = document.createElement('span');
        let firstvalueH4 = $parentLi.children[1].textContent;
        let firstTextH4 = firstvalueH4.split('Recipient Name:');
        $firstSpan.textContent = `To: ${firstTextH4[1]}`;
        $li.appendChild($firstSpan);
        $li.appendChild($secondSpan);
        let $div = document.createElement('div');
        $div.setAttribute('class', 'btn');
        let $buttonDeleteMails = document.createElement('button');
        $buttonDeleteMails.setAttribute('type', 'submit');
        $buttonDeleteMails.setAttribute('class', 'delete');
        $buttonDeleteMails.textContent = 'Delete';
        $buttonDeleteMails.addEventListener('click', deleteMails);
        $div.appendChild($buttonDeleteMails);
        $li.appendChild($div);
        let $sentList = document.getElementsByClassName('sent-list')[0];
        $sentList.appendChild($li);

        $parentLi.remove();

    }

    $buttonAdd.addEventListener('click', function (event) {
        event.preventDefault();
        if ($recipientName.value !== '' && $title.value !== '' && $message.value !== '') {
            let $list = document.getElementById('list');

            let $li = document.createElement('li');
            let $firstH4 = document.createElement('h4');
            $firstH4.textContent = `Title: ${$title.value}`;
            $li.appendChild($firstH4);
            let $secondH4 = document.createElement('h4');
            $secondH4.textContent = `Recipient Name: ${$recipientName.value}`;
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
            $buttonSend.addEventListener('click', send);
            $div.appendChild($buttonSend);

            let $buttonDelete = document.createElement('button');
            $buttonDelete.setAttribute('type', 'submit');
            $buttonDelete.setAttribute('id', 'delete');
            $buttonDelete.textContent = 'Delete';
            $buttonDelete.addEventListener('click', deletE);
            $div.appendChild($buttonDelete);
            $li.appendChild($div);

            $list.appendChild($li);

            $title.value = '';
            $recipientName.value = '';
            $message.value = '';
        }
    });


    $buttonReset.addEventListener('click', function (event) {
        event.preventDefault();
        $title.value = '';
        $recipientName.value = '';
        $message.value = '';
    })
}
solve()