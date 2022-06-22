window.addEventListener('load', solve);

function solve() {
    let $typeProduct = document.getElementById('type-product');
    let $discription = document.getElementById('description');
    let $clientName = document.getElementById('client-name');
    let $clientPhone = document.getElementById('client-phone');
    let $buttonSubmit = document.getElementsByTagName('button')[0];
    let $received = document.getElementById('received-orders');

    function start(event) {
        event.target.disabled = true;
        let $div = event.target.parentElement;
        $div.getElementsByTagName('button')[1].disabled = false;
    }

    function finish(event) {

    }

    $buttonSubmit.addEventListener('click', function (event) {
        event.preventDefault();

        let $div = document.createElement('div');
        $div.setAttribute('class', 'container');

        let $h2 = document.createElement('h2');
        $h2.textContent = `Product type for repair: ${$typeProduct.value}`;
        $div.appendChild($h2);

        let $h3 = document.createElement('h3');
        $h3.textContent = `Client information: ${$clientName.value}, ${$clientPhone.value}`;
        $div.appendChild($h3);

        let $h4 = document.createElement('h4');
        $h4.textContent = `Discription of the problem: ${$discription.value}`;
        $div.appendChild($h4);

        let $buttonStart = document.createElement('button');
        $buttonStart.setAttribute('class', 'start-btn');
        $buttonStart.textContent = 'Start repair';
        $buttonStart.addEventListener('click', start);
        $div.appendChild($buttonStart);

        let $buttonFinish = document.createElement('button');
        $buttonFinish.setAttribute('class', 'finish-btn');
        $buttonFinish.textContent = 'Finish repair';
        $buttonFinish.disabled = true;
        $buttonFinish.addEventListener('click', finish);
        $div.appendChild($buttonFinish);

        $received.appendChild($div);

    });
}