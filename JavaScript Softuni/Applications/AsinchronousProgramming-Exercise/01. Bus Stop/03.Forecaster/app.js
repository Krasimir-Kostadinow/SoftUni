(() => {

    const $elements = {
        location: document.querySelector('#location'),
        buttonSubmit: document.querySelector('#submit')
    };

$elements.buttonSubmit.addEventListener('click', function () {
    console.log($elements.location.value);
});


})();



