window.addEventListener('load', solve);

function solve() {

    let $inputModel = document.getElementById('model');
    let $inputYear = document.getElementById('year');
    let $inputDescription = document.getElementById('description');
    let $inputPrice = document.getElementById('price');
    let $addButton = document.getElementById('add');
    let $furnitureList = document.getElementById('furniture-list');
    let $totalPrice = document.getElementsByClassName('total-price')[0];

    function info(event) {

        if (event.target.textContent === 'More Info') {
            event.target.textContent = 'Less Info';
            let $trInfo = event.target.parentElement.parentElement;
            let $trHide = $trInfo.nextElementSibling;
            $trHide.style.display = 'contents';
        } else if (event.target.textContent === 'Less Info') {
            event.target.textContent = 'More Info';
            let $trInfo = event.target.parentElement.parentElement;
            let $trHide = $trInfo.nextElementSibling;
            $trHide.style.display = 'none';
        }

    }

    function buy(event) {
        let $trInfo = event.target.parentElement.parentElement;
        let tdInfo = $trInfo.children;
        let price = tdInfo[1].textContent;
        $totalPrice.textContent = (Number($totalPrice.textContent) + Number(price)).toFixed(2);

        let $trHide = $trInfo.nextElementSibling;
        $trHide.remove();
        $trInfo.remove();

    }

    $addButton.addEventListener('click', function (event) {
        event.preventDefault();
        if ($inputModel.value !== '' && $inputYear.value > 0 && $inputDescription.value !== '' && $inputPrice.value > 0) {

            let $trInfo = document.createElement('tr');
            $trInfo.setAttribute('class', 'info');

            let $firstTd = document.createElement('td');
            $firstTd.textContent = $inputModel.value;
            $trInfo.appendChild($firstTd);

            let $secondTd = document.createElement('td');
            $secondTd.textContent = Number($inputPrice.value).toFixed(2);
            $trInfo.appendChild($secondTd);

            let $threeTd = document.createElement('td');
            let $buttonInfo = document.createElement('button');
            $buttonInfo.textContent = 'More Info';
            $buttonInfo.setAttribute('class', 'moreBtn');
            $buttonInfo.addEventListener('click', info);
            $threeTd.appendChild($buttonInfo);
            let $buttonBuy = document.createElement('button');
            $buttonBuy.textContent = 'Buy it';
            $buttonBuy.setAttribute('class', 'buyBtn');
            $buttonBuy.addEventListener('click', buy);
            $threeTd.appendChild($buttonBuy);

            $trInfo.appendChild($threeTd);
            $furnitureList.appendChild($trInfo);

            let $trHide = document.createElement('tr');
            $trHide.setAttribute('class', 'hide');

            let $firstTdHide = document.createElement('td');
            $firstTdHide.textContent = `Year: ${$inputYear.value}`;
            $trHide.appendChild($firstTdHide);

            let $secondTdHide = document.createElement('td');
            $secondTdHide.setAttribute('colspan', '3');
            $secondTdHide.textContent = `Description: ${$inputDescription.value}`;
            $trHide.appendChild($secondTdHide);
            $furnitureList.appendChild($trHide);


            $inputDescription.value = '';
            $inputModel.value = '';
            $inputPrice.value = '';
            $inputYear.value = '';
        }
    })

}
