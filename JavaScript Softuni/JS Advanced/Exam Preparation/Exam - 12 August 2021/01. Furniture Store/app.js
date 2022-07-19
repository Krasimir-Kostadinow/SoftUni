window.addEventListener('load', solve);

function solve() {

    let $inputModel = document.getElementById('model');
    let $inputYear = document.getElementById('year');
    let $inputDescription = document.getElementById('description');
    let $inputPrice = document.getElementById('price');
    let $addButton = document.getElementById('add');
    let $furnitureList = document.getElementById('furniture-list');
    let $totalPrice = document.getElementsByClassName('total-price')[0];

    $addButton.addEventListener('click', function (event) {
        event.preventDefault();
        if ($inputModel.value !== '' && $inputYear.value > 0 && $inputDescription.value !== '' && $inputPrice.value > 0) {

            let $trInfo = document.createElement('tr');
            $trInfo.setAttribute('class', 'info');
            console.log('Ok');
        }
    })

}
