import { dataRequest } from '../data.js';
import { checkForLogged, checkAuthorAndMember } from '../helper.js';
export default function (context) {
    checkForLogged(context);
    dataRequest('GET', context.params.id).then((data) => {
        context.members = data.members;
        context.teamName = data.teamName;
        context.comment = data.comment;
        context.objectId = context.params.id;
        checkAuthorAndMember(context, data);
        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'teamMember': './templates/catalog/teamMember.hbs',
            'teamControls': './templates/catalog/teamControls.hbs'
        }).then(function () {
            this.partial('./templates/catalog/details.hbs');
        });
    });

}