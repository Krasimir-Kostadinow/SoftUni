import { checkForLogged } from '../helper.js';
import { infoBoxEl, errorBoxEl } from '../helper.js';
import { infoAndErrorBox } from '../helper.js';
export function create(context) {
    checkForLogged(context);
    this.loadPartials({
        'header': './templates/common/header.hbs',
        'footer': './templates/common/footer.hbs',
        'createForm': './templates/create/createForm.hbs'
    }).then(function () {
        this.partial('./templates/create/createPage.hbs');
    });

}

export function createTeam(context) {
    checkForLogged(context);
    let userInfo = localStorage.getItem('userInfo');
    const { email, uid } = JSON.parse(userInfo);
    const { name, comment } = context.params;
    if (!userInfo || !name) {
        return;
    }


    let isJoined = false;
    let nameTeam = false;
    fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json')
        .then((res) => res.json())
        .then((data) => {
            if (data !== null) {
                let dataArr = Object.entries(data);
                for (const [objectId, team] of dataArr) {
                    let membersOfTeam = team.members;
                    if (membersOfTeam !== false) {
                        for (const member of membersOfTeam) {
                            let { email, uid } = member;
                            if (email === context.email && uid === context.uid) {
                                isJoined = true;
                                nameTeam = team.teamName;
                            }
                        }
                    }

                }
            }

            if (isJoined) {
                infoBoxEl.textContent = `You are already a member of a team ${nameTeam}. To create a team you have to leave the team you are a member of.`;
                infoAndErrorBox();

            } else {
                fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ teamName: name, comment: comment, uid: uid, email: email, members: [{ email: email, uid: uid }] })
                }).then((res) => {
                    infoBoxEl.textContent = `You are create team it name ${name}.`
                    infoAndErrorBox();
                }).catch((error) => {
                    errorBoxEl.textContent = error.message;
                    infoAndErrorBox();
                });
            }



        });

    context.redirect('#/home');

}