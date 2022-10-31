(function () {
    const baseUrl = 'https://restcountries.com/v3.1/all';
    const btnLoad = document.getElementById('btnLoad');



    btnLoad.addEventListener('click', (e) => {
        e.preventDefault();
        Promise.all([fetch('./template.hbs').then(res => res.text()), fetch(baseUrl).then(res => res.json())])
        .then(([templateHbs, towns]) => {
            const root = document.getElementById('root');
            let template = Handlebars.compile(templateHbs);
            towns.sort((a, b) => a.name.common.localeCompare(b.name.common));
            let resultHtml = template({ towns });
            root.innerHTML = resultHtml;
        }
        );

    });

})();