import { dataRequest } from '../data.js';
import { infoBoxEl } from '../helper.js';
import { infoAndErrorBox } from '../helper.js';
export default function (context) {
    dataRequest('GET', context.params.id).then((data) => {
        let newMembers = data.members.slice();
        if (data.members.length > 0) {

            let userInfo = localStorage.getItem('userInfo');
            const { email, uid } = JSON.parse(userInfo);
            for (let i = 0; i < newMembers.length; i++) {
                let member = newMembers[i];
                const emailMember = member.email;
                const uidMember = member.uid;
                if (email === emailMember && uid === uidMember) {
                    newMembers.splice(i, 1);

                }
            }
            if (newMembers.length <= 0) {
                newMembers = false;
            }
        } else {
            infoBoxEl.textContent = `Not members in team ${data.teamName}.`;
            infoAndErrorBox();
        }

        dataRequest('PATCH', context.params.id, { members: newMembers }).then((res) => {
            infoBoxEl.textContent = `You are succeed leave team. ${data.teamName}.`;
            infoAndErrorBox();
        })

    });

    context.redirect('#/home');
}