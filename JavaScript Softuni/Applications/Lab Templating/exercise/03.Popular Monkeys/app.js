import { monkeys } from './monkeys.js';

(async function () {
    const sectionEl = document.getElementsByTagName('section')[0];
    Handlebars.registerPartial('monkey', await fetch('./template-monkey.hbs').then(res => res.text()));
    let template = Handlebars.compile(await fetch('./template-monkeys.hbs').then(res => res.text()));
    let resultHtml = template({ monkeys });
    sectionEl.innerHTML += resultHtml;

    let divMonkeyEl = Array.from(document.getElementsByClassName('monkey'));
    divMonkeyEl.forEach(el => {
        const btn = el.getElementsByTagName('button')[0];
        btn.addEventListener('click', function (event) {
            let p = el.getElementsByTagName('p')[0];
            if (p.style.display === 'none') {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }

        });
    })





})();