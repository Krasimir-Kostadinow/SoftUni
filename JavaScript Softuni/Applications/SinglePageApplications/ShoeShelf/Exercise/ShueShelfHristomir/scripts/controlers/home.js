import { checkForLogged } from '../helper.js';
export function home(context) {
    checkForLogged(context);
    this.loadPartials({
        'header': './templates/partials/header.hbs',
        'footer': './templates/partials/footer.hbs'
    }).then(function () {
        this.partial('./templates/home.hbs');
    })
};
