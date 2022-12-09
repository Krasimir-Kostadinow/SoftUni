import { infoBoxEl } from '../helper.js';
import { checkForLogged, infoAndErrorBox, } from '../helper.js';
export default function (context) {
    checkForLogged(context);
    let isJoined = false;
    let nameTeam = false;
    fetch('https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team.json')
        .then((res) => res.json())
        .then((data) => {
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


            if (isJoined) {
                infoBoxEl.textContent = `You are already a member of team ${nameTeam}. To become a member of this team you must leave team ${nameTeam}.`;
                infoAndErrorBox();

            } else {
                fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`)
                    .then((res) => res.json())
                    .then((data) => {
                        let userInfo = localStorage.getItem('userInfo');
                        const { email, uid } = JSON.parse(userInfo);
                        let newMembers;
                        if (data.members === false) {
                            newMembers = [];
                        } else {
                            newMembers = data.members;
                        }

                        newMembers.push({ email: email, uid: uid });

                        fetch(`https://team-manager-c0884-default-rtdb.europe-west1.firebasedatabase.app/team/${context.params.id}/.json`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ members: newMembers })
                        })
                            .then((res) => {
                                infoBoxEl.textContent = `You succeed joined in team ${data.teamName}.`;
                                infoAndErrorBox();
                            })

                    });
            }

        });


    context.redirect('#/home');

}