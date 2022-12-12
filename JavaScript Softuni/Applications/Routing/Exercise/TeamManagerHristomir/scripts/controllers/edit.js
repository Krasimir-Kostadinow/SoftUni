import { dataRequest } from '../data.js';
import { infoBoxEl } from '../helper.js';
import { checkForLogged, infoAndErrorBox } from '../helper.js';

export function edit(context) {
    checkForLogged(context);
    dataRequest('GET', context.params.id).then((data) => {
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
    dataRequest('PATCH', context.params.id, {
        teamName: context.params.name,
        comment: context.params.comment
    }).then((res) => {
        infoBoxEl.textContent = `You edit team ${context.params.name}.`;
        infoAndErrorBox();
    });
    this.redirect('#/home');
}