import { infoBoxEl } from '../helper.js';
import { checkForLogged, infoAndErrorBox } from '../helper.js';

export function edit(context) {
    checkForLogged(context);
    fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}.json`)
        .then((res) => res.json())
        .then((data) => {
            context.objectId = context.params.id;
            context.name = data.teamName;
            context.comment = data.comment;
            this.loadPartials({
                'header': './templates/common/header.hbs',
                'footer': './templates/common/footer.hbs',
                'editForm': './templates/edit/editForm.hbs'
            }).then(function () {
                this.partial('./templates/edit/editPage.hbs');
            });

        });

};

export function editTeam(context) {
    fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            teamName: context.params.name,
            comment: context.params.comment
        })
    })
        .then((res) => {
            infoBoxEl.textContent = `You edit team ${context.params.name}.`;
            infoAndErrorBox();
        });
    this.redirect('#/home');
}