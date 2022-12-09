import { checkForLogged } from '../helper.js';

export default function (context) {
    checkForLogged(context);
    this.loadPartials({
        'header': './templates/common/header.hbs',
        'footer': './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/about/about.hbs');
    });
}