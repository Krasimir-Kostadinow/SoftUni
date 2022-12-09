import { checkForLogged, checkAuthorAndMember } from '../helper.js';

export default function (context) {
    checkForLogged(context);
    fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json')
        .then((res) => res.json())
        .then((data) => {
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