import { cats } from './catSeeder.js';
(async function () {

    Handlebars.registerPartial('cat', await fetch('./template-cat.hbs').then(res => res.text()));
    let template = Handlebars.compile(await fetch('./template-cats.hbs').then(res => res.text()));
    let resultHtml = template({ cats });

    document.getElementById('allCats').innerHTML = resultHtml;

    let btnInfo = Array.from(document.getElementsByClassName('showBtn'));
    btnInfo.forEach(btn => {
        btn.addEventListener('click', (event) => {
            let parent = event.target.parentElement;
            let info = parent.getElementsByClassName('status')[0];
            let displayInfo = info.style.display;
            if (displayInfo === 'none') {
                event.target.textContent = 'Hide status code';
                info.style.display = 'block';
            } else {
                event.target.textContent = 'Show status code';
                info.style.display = 'none';
            }
        });
    });

})();