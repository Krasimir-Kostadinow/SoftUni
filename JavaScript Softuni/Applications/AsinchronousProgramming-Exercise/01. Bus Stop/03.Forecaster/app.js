(() => {
const baseURL = '?';
    const $elements = {
        location: document.querySelector('#location'),
        buttonSubmit: document.querySelector('#submit')
    };

$elements.buttonSubmit.addEventListener('click', function () {

    fetch(baseURL)

    console.log($elements.location.value);

});


})();



