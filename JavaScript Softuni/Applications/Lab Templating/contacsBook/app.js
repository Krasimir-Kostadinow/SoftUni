(function () {
    Promise.all([
        fetch('./contact-card.hbs').then(res => res.text()),
        fetch('./contacts.hbs').then(res => res.text()),
        fetch('https://vocalday.backendless.app/api/data/contacts').then(res => res.json())])
        .then(([contactTamplateStr, contactsTamplateStr, dataContacts]) => {

            dataContacts.sort((a, b) => Number(a.id) - Number(b.id));

            Handlebars.registerPartial('contact', contactTamplateStr);
            let template = Handlebars.compile(contactsTamplateStr);

            let htmlEl = template({ dataContacts });
            document.querySelector('#contacts').innerHTML = htmlEl;

        });

    document.querySelector('#contacts').addEventListener('click', function (event) {
        let btn = event.target.getAttribute('class');

        if (btn === 'detailsBtn') {

            let detailsEl = event.target.parentElement;
            let details = detailsEl.querySelector('.details');

            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }

        }
    })

})();




