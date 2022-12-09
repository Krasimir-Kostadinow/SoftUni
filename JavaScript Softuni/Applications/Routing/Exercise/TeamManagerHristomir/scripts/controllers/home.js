import { timerForLogout } from '../app.js';
import { checkForLogged } from '../helper.js'; 
import { startSession } from '../app.js';
export default function (context) {

    checkForLogged(context);
    this.loadPartials({
        'header': './templates/common/header.hbs',
        'footer': './templates/common/footer.hbs'
    }).then(function () {
        this.partial('./templates/home/home.hbs');
    });

    timerForLogout(context);

}