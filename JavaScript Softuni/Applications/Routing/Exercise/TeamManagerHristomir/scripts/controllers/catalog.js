import { checkForLogged, checkAuthorAndMember } from '../helper.js';
import { dataRequest } from '../data.js';
export default function (context) {
    checkForLogged(context);
    dataRequest('GET').then((data) => {
        if (data === null) {
            this.loadPartials({
                'header': './templates/common/header.hbs',
                'footer': './templates/common/footer.hbs',
                'team': './templates/catalog/team.hbs',
            }).then(function () {
                this.partial('./templates/catalog/teamCatalog.hbs');
            });
        } else {

            Object.entries(data).forEach(([objectId, team]) => {
                team.objectId = objectId;
                checkAuthorAndMember(context, team);
            });
            context.teams = Object.values(data);
            this.loadPartials({
                'header': './templates/common/header.hbs',
                'footer': './templates/common/footer.hbs',
                'team': './templates/catalog/team.hbs',
            }).then(function () {
                this.partial('./templates/catalog/teamCatalog.hbs');
            });
        }

    });

}