import { timerForLogout } from '../app.js';
import { checkForLogged } from '../helper.js';
import { checkAuthorAndMember } from '../helper.js';
import { dataRequest } from '../data.js';
import { startSession } from '../app.js';
export default function (context) {
    checkForLogged(context);

    dataRequest('GET')
        .then((res) => {
            for (const [objectId, team] of Object.entries(res)) {
                checkAuthorAndMember(context, team);
                if (context.isOnTeam) {
                    context.teamId = objectId;
                    break;
                }
            }
            this.loadPartials({
                'header': './templates/common/header.hbs',
                'footer': './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            });
        });


    timerForLogout(context);

}